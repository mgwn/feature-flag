export class FeatureManager {
    constructor(schema={}) {
        this._schema = schema
        this._middlewares = []
    }

    use(middleware) {
        this.middlewares.append(middleware)
    }

    set schema(schema={}) {
        this._schema = schema
    }
    
    isFeatureEnabled(feature, options) {
        let enabled;
        for(let middleware of this.middlewares) {
            const _enabled = middleware.isFeatureEnabled(feature, this._schema[feature], options)
            if (middleware.preventNext(_enabled)) {
               enabled = _enabled
               break
            }
            enabled = _enabled !== undefined ? _enabled : enabled
        }
        return enabled
    }

    enableFeature(features, options) {
        this.setFeatureStatus(features, true, options)
    }
    
    cleanFeature(features, options) {
        this.setFeatureStatus(features, undefined, options)
    }

    disableFeature(features, options) {
        this.setFeatureStatus(features, false, options)
    }

    setFeatureStatus(features, enabled, options) {
        for (let feature of new Set(features)) {
            for (let middleware of this.middlewares) {
                middleware.setFeatureStatus(feature, this._schema[feature], enabled, options)
            }
        }
    }

}

export default new FeatureManager()