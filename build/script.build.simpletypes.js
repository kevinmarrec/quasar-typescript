// TODO: ESLINT and Code Standards for Quasar
const fs = require('fs')
const Handlebars = require('handlebars')
const decode = require('ent/decode')

const outputDir = 'src/@types/quasar/'
// Load Quasar
const Quasar = require('quasar-framework/dist/umd/quasar.mat.umd.js')

/**
 * Details
 */
class QSimpleTypes {
    /**
     * TS Types for Quasar!
     */
    constructor() {
        /**
         * Allowed top level keys (Quasar.*) for generating QTypes
         * @type {string[]}
         */
        this.allowedKeys = ['components']

        /**
         * Dictionary of templates mapped to top level keys (Quasar.*). If the key is
         * in the list of allowedKeys but does not have a template, it will not generate
         * Type definitions for that key. Please make sure you have at least one templates
         * AND you specifiy the key in allowedKeys.
         * @type {object}
         */
        this.template = fs.readFileSync('./build/templates/index.d.ts.hbs', 'utf8').toString()
        /**
         * Placeholder for Type Definitions during recusion of Quasar Keys
         * @type {object}
         */
        this.cache = {
          components: []
        }
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
      this.compile(this.cache, this.template)
    }

    /**
     * Compile and write definiton
     * @param qKey
     * @param qClassName
     * @param data
     * @param source
     */
    compile(data, templateSource) {
        const template = Handlebars.compile(templateSource, {strict: true});
        this.writeDefinitionFile('index', template(data))
    }

    /**
     * Write Definition File
     * @param qKey Folder
     * @param qClassName Filename
     * @param data Data to write
     */
    writeDefinitionFile(file, data) {
        fs.writeFileSync(`${outputDir}/${file}.d.ts`, decode(data))
    }

    /**
     * Generate Quasar Types
     *   Filter the top level umd export by allowedKeys, setup directories
     *   and generate each type of type definition configured
     */
    build() {
      this.cache.components = Object.keys(Quasar.components)
      this.compileCache()
    }
}

new QSimpleTypes().build()
