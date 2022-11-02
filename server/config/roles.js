const AccessControl = require("accesscontrol");

const allRights = {
  "create:any": ["*"],
  "read:any": ["*", "!password", "!_id"],
  "update:any": ["*"],
  "delete:any": ["*"],
};

let grantsObject = {
  admin: {
    // test: allRights,
    profile: allRights,
  },
  user: {
    profile: {
      "read:own": ["*", "!password", "!_id"],
      "update:own": ["*"],
    },
  },
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
