exports.validate = function (jsonDocument, resourceName) {
    if (typeof(jsonDocument) == 'string') {
        jsonDocument = JSON.parse(jsonDocument);
    }

    var JaySchema = require('jayschema');
    var jaySchema = new JaySchema();

    var fhirSchema = require(__dirname + "/fhir-schema.js");
    var resourceSchema = fhirSchema[resourceName];

    return jaySchema.validate(jsonDocument, resourceSchema);
};