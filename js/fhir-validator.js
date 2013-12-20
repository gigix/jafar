exports.validate = function (jsonDocument, resourceName) {
    if (typeof(jsonDocument) == 'string') {
        jsonDocument = JSON.parse(jsonDocument);
    }

    var fhirSchema = require(__dirname + "/fhir-schema.js");
    var resourceSchema = fhirSchema[resourceName];

    var JaySchema = require('jayschema');
    return new JaySchema().validate(jsonDocument, resourceSchema);
};