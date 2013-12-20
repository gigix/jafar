function resourceSchema(resourceName, resourceDefinition) {
    var commonTypes = require(__dirname + '/common-types');
    var schema = {
        definitions: commonTypes,
        '$ref': resourceName
    };
    schema.definitions[resourceName] = resourceDefinition;
    return schema;
}

function definitionsPath() {
    return __dirname + '/definitions';
}

function resourceNames() {
    var fs = require('fs');
    var definitionFileNames = fs.readdirSync(definitionsPath());

    var lingo = require('lingo');
    return definitionFileNames.map(function (filename) {
        return lingo.camelcase(filename.split('.')[0], true);
    });
}

resourceNames().forEach(function (resourceName) {
    var resourceDefinition = require(definitionsPath() + '/' + resourceName).definition;
    exports[resourceName] = resourceSchema(resourceName, resourceDefinition);
});
