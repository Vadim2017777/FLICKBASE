const express = require("express");
const router = express.Router();

// routes
const authRoute = require("./auth.routes");
const userRoute = require("./user.routes");
const articlesRoute = require("./articles.routes");

const routesIndex = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/articles",
    route: articlesRoute,
  },
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
