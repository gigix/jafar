describe("FHIR JSON validator", function () {
    describe("validation", function () {
        it("invalidates malformed patient resource", function () {
            var errors = validatePatient({identifier: '12345'});
            expect(errors.length).toBeGreaterThan(0);
        });

        it("invalidates document with invalid resourceType", function() {
            withValidPatient(function(patient) {
                patient.resourceType = "";
                var errors = validatePatient({identifier: '12345'});
                expect(errors.length).toBeGreaterThan(0);
            });
        });

        it("validates well-formed patient resource", function (done) {
            withValidPatient(function (patient) {
                var errors = validatePatient(patient);
                expect(errors).toEqual([]);
                done();
            });
        });

        it("validates json string as well", function (done) {
            withValidPatient(function (patient) {
                var errors = validatePatient(JSON.stringify(patient));
                expect(errors).toEqual([]);
                done();
            });
        });

        it("invalidates patient resource without identifier", function (done) {
            withValidPatient(function (patient) {
                patient.identifier = [];
                var errors = validatePatient(patient);
                expect(errors.length).toBeGreaterThan(0);
                done();
            });
        });

        it("invalidates patient resource with malformed date", function (done) {
            withValidPatient(function (patient) {
                patient.identifier[0].period.start = "bad-date-string";
                var errors = validatePatient(patient);
                expect(errors.length).toBeGreaterThan(0);
                done();
            });
        });
    });
});

function validatePatient(document) {
    var validator = require(__dirname + '/../js/fhir-validator');
    return validator.validate(document, 'Patient');
}

function withValidPatient(callback) {
    var fs = require('fs');
    fs.readFile(__dirname + '/fixture/patient/patient-example.json', 'utf-8', function (err, data) {
        var patient = JSON.parse(data);
        callback(patient);
    });
}