
export { default as betaStageHandler } from './betaStage'
export { stageName as BETA_STAGE } from './betaStage'
export { default as releaseStageHandler } from './releaseSatge'
export { stageName as RELEASE_STAGE } from './releaseSatge'
export { default as trialStageHandler } from './trialStage'
export { stageName as TRIAL_STAGE } from './trialsatge'
export { default as Handler } from './handler'

const handler = new Handler()
handler.stage(RELEASE_STAGE, releaseStageHandler)
handler.stage(BETA_STAGE, betaStageHandler)
handler.stage(TRIAL_STAGE, trialStageHandler)
export default handler