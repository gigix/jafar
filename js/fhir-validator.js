exports.validate = function (jsonDocument) {
    if (typeof(jsonDocument) == 'string') {
        jsonDocument = JSON.parse(jsonDocument);
    }

    var JaySchema = require('jayschema');
    var jaySchema = new JaySchema();

    var fhirSchema = require(__dirname + "/fhir-schema.js");
    var patientSchema = fhirSchema.patient;

    return jaySchema.validate(jsonDocument, patientSchema);
};