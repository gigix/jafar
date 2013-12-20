var fs = require('fs');

describe("FHIR JSON validator", function () {
    var validator = require(__dirname + '/../js/fhir-validator');

    describe("Patient", function () {
        it("invalidates malformed patient resource", function () {
            var errors = validator.validate({identifier: '12345'});
            expect(errors.length).toBeGreaterThan(0);
        });

        it("validates well-formed patient resource", function (done) {
            withValidPatient(function (patient) {
                var errors = validator.validate(patient);
                expect(errors).toEqual([]);
                done();
            });
        });

        it("validates json string as well", function (done) {
            withValidPatient(function (patient) {
                var errors = validator.validate(JSON.stringify(patient));
                expect(errors).toEqual([]);
                done();
            });
        });

        it("invalidates patient resource without identifier", function (done) {
            withValidPatient(function (patient) {
                patient.identifier = [];
                var errors = validator.validate(patient);
                expect(errors.length).toBeGreaterThan(0);
                done();
            });
        });

        it("invalidates patient resource with malformed date", function (done) {
            withValidPatient(function (patient) {
                patient.identifier[0].period.start = "bad-date-string";
                var errors = validator.validate(patient);
                expect(errors.length).toBeGreaterThan(0);
                done();
            });
        });
    });
});

function withValidPatient(callback) {
    fs.readFile(__dirname + '/fixture/patient/patient-example.json', 'utf-8', function (err, data) {
        var patient = JSON.parse(data);
        callback(patient);
    });
}