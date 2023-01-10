const express = require("express");
const router = express.Router();

/**
 * Models
 */
const Fruit = require("../models/fruits");

// Index
router.get("/", (req, res) => {
  // Get all of the fruits from the DB
  Fruit.find({}, (error, allFruits) => {
    // Send that data to a template
    res.render("fruits/Index", {
      fruits: allFruits,
    });
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log("/fruits/:id");

  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
    if (err) {
      return res.send({ error: err });
    }
    console.log("updatedFruit", updatedFruit);
    res.redirect(`/fruits/${req.params.id}`);
  });
});

// Edit
router.get("/:id/edit", (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    if (!err) {
      res.render("fruits/Edit", {
        fruit: foundFruit,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Create
router.post("/", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect("/fruits"); // sends to /fruits get route
  });
});

// Delete
router.delete("/:id", (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/fruits");
  });
});

//put this above your Show route
// New
router.get("/new", (req, res) => {
  res.render("fruits/New");
});

// Show - Route
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Fruit.findById(id, (error, foundFruit) => {
    res.render("fruits/Show", {
      fruit: foundFruit,
    });
  });
});

module.exports = router;