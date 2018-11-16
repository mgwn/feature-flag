
import BaseHandler from './baseHandler'

const getLocalStorage = (name) => {
    const stored = window.localStorage.getItem(name)
    return stored && stored !== 'false'
}

const saveLocalStorage = (name, value) => {
    if (value === undefined) {
        window.localStorage.removeItem(name)
    } else {
        window.localStorage.setItem(name, value)
    }
}


export class LocalStorageHandler extends BaseHandler{

    setFeatureStatus(feature, _, enabled, _) {
        saveLocalStorage(feature, enabled)
    }

    isFeatureEnabled(feature, _, _) {
        return getLocalStorage(feature)
    }
}

export default new LocalStorageHandler()