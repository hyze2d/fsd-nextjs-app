const api = require('./gen/api').generate;

const icons = require('./gen/icons').generate;

api();

icons();
