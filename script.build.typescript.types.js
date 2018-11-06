const fs = require('fs')
const Handlebars = require('handlebars')
const mkdirp = require('mkdirp')
const outputDir = './'

// Load Quasar
const Quasar = require('quasar-framework/dist/umd/quasar.mat.umd.js')


/**
 * Details
 */
class QTypes {
    /**
     * TS Types for Quasar!
     */
    constructor() {
        /**
         * Allowed top level keys (Quasar.*) for generating QTypes
         * @type {string[]}
         */
        this.allowedKeys = ['components', 'plugins', 'utils']

        /**
         * Dictionary of templates mapped to top level keys (Quasar.*). If the key is
         * in the list of allowedKeys but does not have a template, it will not generate
         * Type definitions for that key. Please make sure you have at least one templates
         * AND you specifiy the key in allowedKeys.
         * @type {object}
         */
        this.templates = {
            components: {
                type: fs.readFileSync('./build/templates/components.d.ts.hbs', 'utf8').toString(),
                test: fs.readFileSync('./build/templates/components.d.test.ts.hbs', 'utf8').toString()
            }
        }

        /**
         * Placeholder for Type Definitions during recusion of Quasar Keys
         * @type {object}
         */
        this.cache = {}
    }

    /**
     * Check for Allowed Keys
     * @param qKey
     * @returns {boolean}
     */
    isAllowed(qKey) {
        return this.allowedKeys.indexOf(qKey) >= 0
    }

    /**
     * Check if key is private
     * @param qKey
     * @returns {boolean}
     */
    isPrivate(qKey) {
        return qKey.match('_') !== null
    }

    /**
     * Check if key is plugin
     * @param qKey
     * @returns {boolean}
     */
    isPlugin(qKey) {
        return qKey === 'plugin'
    }

    /**
     * Check if key component
     * @param qKey
     * @returns {boolean}
     */
    isComponent(qKey) {
        return qKey === 'components'
    }

    /**
     * Compile the current cache to disk
     */
    compileCache() {
        Object.keys(this.cache).forEach(qKey => {
            Object.keys(this.cache[qKey]).forEach(qClassName => {
                this.compile(qKey, qClassName, this.cache[qKey][qClassName], this.templates[qKey].type)
                this.compile(`test/${qKey}`,
                    `${qClassName}.test`,
                    this.cache[qKey][qClassName],
                    this.templates[qKey].test)
            })
        })
    }

    /**
     * Compile and write definiton
     * @param qKey
     * @param qClassName
     * @param data
     * @param source
     */
    compile(qKey, qClassName, data, source) {
        const template = Handlebars.compile(source, {strict: true});
        this.writeDefinitionFile(qKey, qClassName, template(data))
    }

    /**
     * Write Definition File
     * @param qKey Folder
     * @param qClassName Filename
     * @param data Data to write
     */
    writeDefinitionFile(qKey, qClassName, data) {
        fs.writeFileSync(`${outputDir}${qKey}/${qClassName}.d.ts`, data)
    }

    /**
     * Needs work!
     * TODO: Better mapping of fields
     * @param qKey
     * @param qClassName
     * @param qClassKey
     * @returns {*}
     */
    massageVueToTypeDefinition(qKey, qClassName, qClassKey) {
        let QCmp = Quasar[qKey][qClassName]
        let attribVal = QCmp[qClassKey]

        if (qClassKey === 'name') {
            return attribVal
        }
        if (typeof attribVal == "object") {
            return JSON.parse(JSON.stringify(attribVal))
        }
        if (typeof attribVal === 'string') {
            return 'string;'
        }

        if (typeof attribVal === 'function') {
            return '(val: any) => void;'
        }

        return 'any;'
    }

    /**
     * Maps
     * @param qClassName
     * @param qKey
     */
    buildQTypeClassesCache(qKey, qClassName) {
        if (typeof this.cache[qKey][qClassName] === 'undefined'){
            this.cache[qKey][qClassName] = { name: qClassName, fixtures: { height: 2, opened: true }  }
        }


        Object.keys(Quasar[qKey][qClassName])
            .filter(qClassKey => {
                return !this.isPrivate(qClassKey)
            })
            .forEach(qClassKey => {
                this.cache[qKey][qClassName][qClassKey] = this.massageVueToTypeDefinition(qKey, qClassName, qClassKey)
            })


    }

    /**
     * Setup Directories for *.d.ts files
     * @param qKey
     */
    buildQKeyDir(qKey) {
        mkdirp.sync(`${outputDir}${qKey}`)
        mkdirp.sync(`${outputDir}test/${qKey}`)
    }

    /**
     * Filter by allowedTypes
     * @param qKey
     * @returns {boolean}
     */
    checkQKey(qKey) {
        return this.isAllowed(qKey) && typeof this.templates[qKey] !== 'undefined'
    }

    /**
     * Generate Quasar Types
     *   Filter the top level umd export by allowedKeys, setup directories
     *   and generate each type of type definition configured
     */
    build() {
        // Filter top level keys
        Object.keys(Quasar)
            .filter(qKey => {
                // Setup target directories and cache
                if (this.checkQKey(qKey)) this.buildQKeyDir(qKey)
                if (typeof this.cache[qKey] === 'undefined') this.cache[qKey] = {}
                // Check for configuration errors
                return this.checkQKey(qKey)
            })
            .forEach((qKey) => {
                // Generate Types Cache for each of the found Classes
                Object.keys(Quasar[qKey]).map(qClassName => this.buildQTypeClassesCache(qKey, qClassName))
            })

        this.compileCache()
    }
}

new QTypes().build()
