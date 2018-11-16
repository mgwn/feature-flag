export default class BaseHandler {
    constructor() {

    }

    preventNext(enabled) {
        return enabled !== undefined
    }

    setFeatureStatus(feature, schema, enabled, options) {
        // do nothing
    }

    isFeatureEnabled(feature, schema, options) {
        
    }
}