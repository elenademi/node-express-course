const express = require("express");
let {people } = require("../data")
const { addPerson, getPeople, findPerson, updatePerson, deletePerson } = require("../controllers/people.js");
const router = express.Router();
router.get("/", getPeople);
router.post("/", addPerson);
router.get("/:id", findPerson);
router.put("/:id", updatePerson)
router.delete("/:id", deletePerson)

module.exports = router;
