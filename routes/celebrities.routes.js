const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then((allCelebrities) => {
    res.render("celebrities/celebrities", { celebrities: allCelebrities });
  });
});

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((createdCelebrities) => {
      console.log("Celeb Created", createdCelebrities.name);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.render("/celebrities/new-celebrity");
    });
});


module.exports = router;
