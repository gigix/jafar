exports.definition = {
    id: 'Encounter',
        type: 'object',
    properties: {
    resourceType: {
        type: 'string',
            pattern: 'Encounter'
    },
    identifier: {
        type: 'array',
            minItems: 1,
            items: {'$ref': 'Identifier'}
    },
    required: ['resourceType']
}
};