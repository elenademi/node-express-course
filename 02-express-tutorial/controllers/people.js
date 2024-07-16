const express = require("express");
const { people } = require("../data");
const getPeople = (req, res) => {
  console.log("People data:", people);
  res.json({ people });
};
const addPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
  res.status(201).json({ success: true, person: name });
  people.push({ id: people.length + 1, name: req.body.name });
  res.status(201).json({ success: true, name: req.body.name });
};
const findPerson=(req, res)=>{
    const id = Number(req.params.id); 
    const person = people.find((person) => person.id === id);

    if (person) {
        res.status(200).json(person);
    } else {
        res.status(404).json({ error: "Person not found" });
    }
}
const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `Person with id ${id} does not exist.` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  }
  const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `Person with id ${req.params.id} does not exist.` })
    }
    const newArray = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    console.log('Filtered Array:', newArray);
    return res.status(200).json({ success: true, data: newArray } )
    
  }
module.exports={getPeople, addPerson, findPerson, updatePerson, deletePerson}