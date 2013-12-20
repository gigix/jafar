exports.definition = {
    id: 'Patient',
    type: 'object',
    properties: {
        resourceType: {
            type: 'string',
            pattern: 'Patient'
        },
        identifier: {
            type: 'array',
            minItems: 1,
            items: {'$ref': 'Identifier'}
        },
        name: {
            type: 'array',
            items: {'$ref': 'HumanName'}
        },
        telecom: {
            type: 'array',
            items: {'$ref': 'Contact'}
        },
        gender: {'$ref': 'AdministrativeGender'},
        birthDate: {'$ref': 'DateTime'},
        deceased: {
            oneOf: [
                {type: 'boolean'},
                {'$ref': 'DateTime'}
            ]
        },
        address: {
            type: 'array',
            items: {'$ref': 'Address'}
        },
        maritalStatus: {'$ref': 'MaritalStatus'},
        multipleBirth: {
            oneOf: [
                {type: 'boolean'},
                {type: 'integer'}
            ]
        },
        photo: {
            type: 'array',
            items: {'$ref': 'Attachment'}
        },
        communication: {
            type: 'array',
            items: {'$ref': 'Language'}
        },
        careProvider: {'$ref': 'ResourceRef'},
        managingOrganization: {'$ref': 'ResourceRef'},
        active: {type: 'boolean'},
        // TODO: Animal
        // TODO: Link
        contact: {
            type: 'array',
            items: {'$ref': 'ContactPerson'}
        },
        required: ['resourceType']
    }
};