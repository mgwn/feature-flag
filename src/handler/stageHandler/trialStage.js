export const stageName = 'trial'

export default (_, schema, {stage, group}) => {
    const stages = new Set(stage)
    if (!stages.has(stageName)) {
        return
    }
    const groups = new Set(group)
    if (schema.group == undefined) {
        // no group means all
        return true
    }
    const schemaGroups = new Set(schema.group)
    for (const schemaGroup of schemaGroups) {
        if (groups.has(schemaGroup)) {
            return true
        }
    }
    // schema require groups not activated
    return false
}