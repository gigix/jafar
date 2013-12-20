var fs = require('fs');

describe("FHIR JSON validator acceptance", function () {
    var validator = require(__dirname + '/../js/fhir-validator');

    describe("Patient", function () {
        var patientFixtureDir = __dirname + '/fixture/patient';
        var allFixtureFileNames = fs.readdirSync(patientFixtureDir);
        allFixtureFileNames.forEach(function (fixtureFilename) {
            it("validates patient document in file [ " + fixtureFilename + " ]", function () {
                var patientAsJson = fs.readFileSync(patientFixtureDir + '/' + fixtureFilename);
                var errors = validator.validate(JSON.parse(patientAsJson));
                expect(errors).toEqual([]);
            });
        });
    });
});