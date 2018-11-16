export const stageName = 'release'

export default (_, _, {stage}) => {
    const stages = new Set(stage)
    if (stages.has(stageName)) {
        return true
    }
}