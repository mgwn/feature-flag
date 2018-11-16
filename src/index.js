import featureManager from './featureManager'
import handlers from './handler'

featureManager.use(handlers.cachedHandler)
featureManager.use(handlers.urlParamHandler)
featureManager.use(handlers.localStorageHandler)
featureManager.use(handlers.stageHandler)

export default featureManager

export { FeatureManager} from './featureManager'
export { URLParamhandler, LocalStorageHandler, CachedHandler, StageHandler } from './handler'
