import * as petModel from "../models/petModel.js";

export const create = async (req, res) => {
  try {
    const petData = {
      ...req.body,
      image_url: req.file ? req.file.location : null,
    };

    const pet = await petModel.createPet(req.params.id, petData);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllByCustomer = async (req, res) => {
  try {
    const pets = await petModel.getPetsByCustomerId(req.params.id);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const pet = await petModel.getPetById(req.params.id);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const petData = {
      ...req.body,
      ...(req.file && { image_url: req.file.location }),
    };

    const pet = await petModel.updatePet(req.params.id, petData);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await petModel.deletePet(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
