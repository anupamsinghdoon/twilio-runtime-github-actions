exports.handler = function(context, event, callback) {
    const result = {
        message : "Function modified by visual studio."
    }

    callback(null, result);
  };
