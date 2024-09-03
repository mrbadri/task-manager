"use strict";
module.exports = {
  getService: (name) => {
    return strapi.plugin("users-permissions").service(name);
  },
};
