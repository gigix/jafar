var fs = require('fs');

describe("FHIR JSON validator acceptance", function () {
    var validator = require(__dirname + '/../js/fhir-validator');

    var resourceNames = ['Patient', 'Encounter'];
    resourceNames.forEach(function (resourceName) {
        validateAllFixtures(resourceName);
    });

    function validateAllFixtures(resourceName) {
        describe(resourceName, function () {
            var fixtureDir = __dirname + '/fixture/' + resourceName;
            var allFixtureFileNames = fs.readdirSync(fixtureDir);
            allFixtureFileNames.forEach(function (fixtureFilename) {
                it("validates " + resourceName + " document in file [ " + fixtureFilename + " ]", function () {
                    var resourceAsJson = fs.readFileSync(fixtureDir + '/' + fixtureFilename);
                    var errors = validator.validate(JSON.parse(resourceAsJson), resourceName);
                    expect(errors).toEqual([]);
                });
            });
        });
    }
});