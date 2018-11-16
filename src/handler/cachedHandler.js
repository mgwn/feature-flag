
import BaseHandler from './baseHandler'

export class CachedHandler extends BaseHandler{

    constructor() {
        this._cached = {}
    }

    setFeatureStatus(feature, _, enabled, _) {
        this._cached[feature] = enabled
    }

    isFeatureEnabled(feature, _, _) {
        return this._cached[feature]
    }
}

export default new CachedHandler()