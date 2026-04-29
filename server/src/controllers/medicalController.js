import * as medicalRecordModel from "../models/medicalModel.js";

export const create = async (req, res) => {
  try {
    const record = await medicalRecordModel.createMedicalRecord(
      req.params.id,
      req.body,
    );
    console.log("create medical")
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const records = await medicalRecordModel.getAllMedicalRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllByPet = async (req, res) => {
  try {
    const records = await medicalRecordModel.getMedicalRecordsByPetId(
      req.params.id,
    );
    console.log("get all medical")
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const record = await medicalRecordModel.updateMedicalRecord(
      req.params.id,
      req.body,
    );

    if (!record) {
      return res.status(404).json({ message: "Medical record not found" });
    }
    console.log("update medical")
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await medicalRecordModel.deleteMedicalRecord(req.params.id);
    console.log("delete medical")
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
