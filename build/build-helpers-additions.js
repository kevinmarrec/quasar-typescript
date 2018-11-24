const fs = require('fs')
const _ = require('lodash')
// const Handlebars = require('handlebars')
// const mkdirp = require('mkdirp')
// const outputDir = './'
const jq = require('node-jq')
// Load Quasar
const Quasar = require('quasar-framework/dist/umd/quasar.mat.umd.js')
const options = {
    input: 'string'
}
// const cmp = Quasar.components.QBtn

let missing = []
let mapTroubled = {
    inject: [],
    provide: [],
    mixins: [],
    directives: [],
    modelToggle: []
}
Object.keys(Quasar.components).map((cmpName)=>{
    let QCmp = Quasar.components[cmpName]
    let isTrouble = false
    let filter = Object.keys(QCmp)

    if ( !_.isUndefined(QCmp.name)) {
        console.log('Adding Name')
    }
    if ( !_.isUndefined(QCmp.inject)) {
        mapTroubled.inject.push(QCmp.name)
        isTrouble = true
        console.log(`Adding Inject for ${QCmp.name}`, QCmp.inject)
    }
    if ( !_.isUndefined(QCmp.provide)) {
        mapTroubled.provide.push(QCmp.name)
        isTrouble = true
        console.log('Adding provide')
    }

    if ( !_.isUndefined(QCmp.mixins)) {
        mapTroubled.mixins.push(QCmp.name)
        isTrouble = true
        console.log('Adding Mixins')
    }
    if ( !_.isUndefined(QCmp.directives)) {
        mapTroubled.directives.push(QCmp.name)
        isTrouble = true
        console.log('Adding Directives')
    }

    if ( !_.isUndefined(QCmp.modelToggle)) {
        mapTroubled.modelToggle.push(QCmp.name)
        isTrouble = true
        console.log('Adding modelToggle - QCollapsible Onle')
    }

    if ( !_.isUndefined(QCmp.props)) {
        console.log('Adding Props')
    }
    if ( !_.isUndefined(QCmp.data)) {
        console.log('Adding Data')
    }
    if ( !_.isUndefined(QCmp.computed)) {
        console.log('Adding Computed')
    }
    if ( !_.isUndefined(QCmp.watch)) {
        console.log('Adding Watch')
    }
    if ( !_.isUndefined(QCmp.methods)) {
        console.log('Adding Methods')
    }
    if ( !_.isUndefined(QCmp.beforeDestroy)) {
        console.log('Adding beforeDestroy')
    }
    if ( !_.isUndefined(QCmp.render)) {
        console.log('Skipping Render')
    }
    if ( !_.isUndefined(QCmp.created)) {
        console.log('Adding Created')
    }
    if ( !_.isUndefined(QCmp.beforeMount)) {
        isTrouble = true
        console.log('Adding beforeMount')
    }
    if ( !_.isUndefined(QCmp.mounted)) {
        isTrouble = true
        console.log('Adding Mounted')
    }
    if ( !_.isUndefined(QCmp.beforeCreate)) {
        isTrouble = true
        console.log('Adding beforeCreate')
    }

    if ( !_.isUndefined(QCmp.beforeDestroy)) {
        isTrouble = true
        console.log('Adding beforeDestroy')
    }


    let filtered = filter.filter((key, indx, arr)=>{
        let first = [
            'mounted',
            'inject',
            'provide',
            'beforeCreate',
            'beforeMount',
            'beforeDestroy',
            'name',
            'mixins',
            'props',
            'directives',
            'watch',
            'computed',
            'data',
            'methods',
            'beforeDestroy',
            'render',
            'mounted',
            'created',
            '_Ctor'
        ].filter((known)=>{return known === key})
        return first.length === 0
    })
    console.log('filter', filtered)
    if(filtered.length !== 0) missing.push(filtered)
})

console.log('Total Recal:', missing, mapTroubled)

