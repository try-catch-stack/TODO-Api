'use strict';


/**
 * Login using username and password of the user.
 *
 * body Login  (optional)
 * returns String
 **/
exports.apiAuthLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get profile of the user using the TOKEN.
 *
 * token String 
 * returns String
 **/
exports.apiAuthProfileGET = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register a new user.
 *
 * body Signup  (optional)
 * no response value expected for this operation
 **/
exports.apiAuthSignupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new TODO for the user.
 *
 * body TODO  (optional)
 * token String 
 * returns String
 **/
exports.apiTodoCreatePOST = function(body,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all TODOs of the user with given TOKEN.
 *
 * token String 
 * returns String
 **/
exports.apiTodoGET = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Auto generated using Swagger Inspector
 *
 * body Add_OR_Remove_Collaborator  (optional)
 * id String 
 * token String 
 * returns String
 **/
exports.apiTodoIdAdd_collaboratorsPOST = function(body,id,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a TODO using its id.
 *
 * id String 
 * token String 
 * returns String
 **/
exports.apiTodoIdDELETE = function(id,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a particular TODO using its id.
 *
 * id String 
 * token String  (optional)
 * returns String
 **/
exports.apiTodoIdGET = function(id,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a TODO (PATCH)
 *
 * body Update_TODO  (optional)
 * id String 
 * token String 
 * returns String
 **/
exports.apiTodoIdPATCH = function(body,id,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a TODO (PUT)
 *
 * body Update_TODO  (optional)
 * id String 
 * token String 
 * returns String
 **/
exports.apiTodoIdPUT = function(body,id,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Auto generated using Swagger Inspector
 *
 * body Add_OR_Remove_Collaborator  (optional)
 * id String 
 * token String 
 * returns String
 **/
exports.apiTodoIdRemove_collaboratorsPOST = function(body,id,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

