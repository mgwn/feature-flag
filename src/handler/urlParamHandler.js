
import BaseHandler from './baseHandler'

const getQueryParam = (name) => {
    const reg = new RegExp("(^|&)"+ name +"(=([^&]*))?(&|$)");
    const r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    return r && r[3] !== 'false'
}

export class URLParamhandler extends BaseHandler{
    isFeatureEnabled(feature, _, _) {
        return getQueryParam(feature)
    }
}

export default new URLParamhandler()