const express = require("express");
const router = express.Router();

/**
 * Models
 */
const Vegetable = require("../models/vegetables");

// Index
router.get("/", (req, res) => {
  // Get all of the vegetables from the DB
  Vegetable.find({}, (error, allVegetables) => {
    // Send that data to a template
    res.render("vegetables/Index", {
      vegetables: allVegetables,
    });
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log("/vegetables/:id");

  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Vegetable.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, updatedVegetable) => {
      if (err) {
        return res.send({ error: err });
      }
      console.log("updatedVegetable", updatedVegetable);
      res.redirect(`/vegetables/${req.params.id}`);
    }
  );
});

// Edit
router.get("/:id/edit", (req, res) => {
  Vegetable.findById(req.params.id, (err, foundVegetable) => {
    if (!err) {
      res.render("vegetables/Edit", {
        vegetable: foundVegetable,
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
  Vegetable.create(req.body, (error, createdVegetable) => {
    res.redirect("/vegetables"); // sends to /vegetables get route
  });
});

// Delete
router.delete("/:id", (req, res) => {
  Vegetable.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/vegetables");
  });
});

//put this above your Show route
// New
router.get("/new", (req, res) => {
  res.render("vegetables/New");
});

// Show - Route
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Vegetable.findById(id, (error, foundVegetable) => {
    res.render("vegetables/Show", {
      vegetable: foundVegetable,
    });
  });
});

module.exports = router;
