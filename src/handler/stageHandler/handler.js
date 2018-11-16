import BaseHandler from '../baseHandler'
export default class StageHandler extends BaseHandler{
    constructor() {
        this._stageHandler = {}
    }

    stage(stage, handler) {
        this._stageHandler[stage] = handler
    }

    isFeatureEnabled(feature, schema, options) {
        if (!schema || !schema.stage) {
            return
        }
        const stageSet = new Set(schema.stage)
        let enabled;
        for (const stage of stageSet) {
            const _enabled = this._stageHandler[stage](feature, schema, options)
            if (this.preventNext(stageEnabled)) {
                enabled = _enabled
                break
            }
            enabled = _enabled !== undefined ? _enabled : enabled
        }
        return enabled
    }

}
