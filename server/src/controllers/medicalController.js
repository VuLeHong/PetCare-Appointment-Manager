// import * as medicalModel from "../models/medicalModel.js";

// export const create = async (req, res) => {
//   try {
//     const record = await medicalModel.createMedicalRecord(req.body);
//     res.status(201).json(record);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getAll = async (req, res) => {
//   try {
//     const records = await medicalModel.getAllMedicalRecords();
//     res.json(records);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getById = async (req, res) => {
//   try {
//     const record = await medicalModel.getMedicalRecordById(req.params.id);

//     if (!record) {
//       return res.status(404).json({ message: "Record not found" });
//     }

//     res.json(record);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getByPet = async (req, res) => {
//   try {
//     const records = await medicalModel.getByPetId(req.params.pet_id);
//     res.json(records);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const record = await medicalModel.updateMedicalRecord(
//       req.params.id,
//       req.body,
//     );

//     if (!record) {
//       return res.status(404).json({ message: "Record not found" });
//     }

//     res.json(record);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const remove = async (req, res) => {
//   try {
//     await medicalModel.deleteMedicalRecord(req.params.id);
//     res.json({ message: "Deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

import * as medicalRecordModel from "../models/medicalModel.js";

export const create = async (req, res) => {
  try {
    const record = await medicalRecordModel.createMedicalRecord(
      req.params.id,
      req.body,
    );
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllByPet = async (req, res) => {
  try {
    const records = await medicalRecordModel.getMedicalRecordsByPetId(
      req.params.id,
    );
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

    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await medicalRecordModel.deleteMedicalRecord(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
