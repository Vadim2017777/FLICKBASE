const express = require("express");
const router = express.Router();

// routes
const authRoute = require("./auth.route");
const userRoute = require("./user.routes");

const routesIndex = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
