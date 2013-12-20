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
        status: {'$ref': 'Code'},
        class: {'$ref': 'Code'},
        type: {
            type: 'array',
            items: {'$ref': 'CodeableConcept'}
        },
        subject: {'$ref': 'ResourceRef'},
        period: {'$ref': 'Period'},
        length: {'$ref': 'Range'},
        reason: {'$ref': 'CodeableConcept'},
        indication: {'$ref': 'ResourceRef'},
        priority: {'$ref': 'CodeableConcept'},
        serviceProvider: {'$ref': 'ResourceRef'},
        partOf: {'$ref': 'ResourceRef'},

        // TODO: Location, Hospitalization, Participant, Accomodation

        required: ['resourceType', 'status', 'class']
    }
};