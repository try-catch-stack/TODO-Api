'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiAuthLoginPOST = function apiAuthLoginPOST (req, res, next, body) {
  Default.apiAuthLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAuthProfileGET = function apiAuthProfileGET (req, res, next, token) {
  Default.apiAuthProfileGET(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAuthSignupPOST = function apiAuthSignupPOST (req, res, next, body) {
  Default.apiAuthSignupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoCreatePOST = function apiTodoCreatePOST (req, res, next, body, token) {
  Default.apiTodoCreatePOST(body, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoGET = function apiTodoGET (req, res, next, token) {
  Default.apiTodoGET(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoIdAdd_collaboratorsPOST = function apiTodoIdAdd_collaboratorsPOST (req, res, next, body, id, token) {
  Default.apiTodoIdAdd_collaboratorsPOST(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoIdDELETE = function apiTodoIdDELETE (req, res, next, id, token) {
  Default.apiTodoIdDELETE(id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoIdGET = function apiTodoIdGET (req, res, next, id, token) {
  Default.apiTodoIdGET(id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoIdPATCH = function apiTodoIdPATCH (req, res, next, body, id, token) {
  Default.apiTodoIdPATCH(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoIdPUT = function apiTodoIdPUT (req, res, next, body, id, token) {
  Default.apiTodoIdPUT(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTodoIdRemove_collaboratorsPOST = function apiTodoIdRemove_collaboratorsPOST (req, res, next, body, id, token) {
  Default.apiTodoIdRemove_collaboratorsPOST(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
