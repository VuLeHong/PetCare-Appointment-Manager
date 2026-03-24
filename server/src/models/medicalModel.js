// // import pool from "../config/db.js";

// // export const createMedicalRecord = async (data) => {
// //   const { pet_id, visit_date, weight, symptoms, notes } = data;

// //   const result = await pool.query(
// //     `INSERT INTO medical_records
// //     (pet_id, visit_date, weight, symptoms, notes)
// //     VALUES ($1,$2,$3,$4,$5)
// //     RETURNING *`,
// //     [pet_id, visit_date, weight, symptoms, notes],
// //   );

// //   return result.rows[0];
// // };

// // export const getAllMedicalRecords = async () => {
// //   const result = await pool.query(
// //     "SELECT * FROM medical_records ORDER BY id DESC",
// //   );
// //   return result.rows;
// // };

// // export const getMedicalRecordById = async (id) => {
// //   const result = await pool.query("SELECT * FROM medical_records WHERE id=$1", [
// //     id,
// //   ]);
// //   return result.rows[0];
// // };

// // export const getByPetId = async (pet_id) => {
// //   const result = await pool.query(
// //     "SELECT * FROM medical_records WHERE pet_id=$1 ORDER BY visit_date DESC",
// //     [pet_id],
// //   );
// //   return result.rows;
// // };

// // export const updateMedicalRecord = async (id, data) => {
// //   const { pet_id, visit_date, weight, symptoms, notes } = data;

// //   const result = await pool.query(
// //     `UPDATE medical_records SET
// //       pet_id=$1,
// //       visit_date=$2,
// //       weight=$3,
// //       symptoms=$4,
// //       notes=$5
// //     WHERE id=$6
// //     RETURNING *`,
// //     [pet_id, visit_date, weight, symptoms, notes, id],
// //   );

// //   return result.rows[0];
// // };

// // export const deleteMedicalRecord = async (id) => {
// //   await pool.query("DELETE FROM medical_records WHERE id=$1", [id]);
// // };

// import pool from "../config/db.js";

// export const getByPetId = async (pet_id) => {
//   const result = await pool.query(
//     "SELECT * FROM medical_records WHERE pet_id=$1 ORDER BY visit_date DESC",
//     [pet_id],
//   );
//   return result.rows;
// };

// export const createMedical = async (pet_id, data) => {
//   const { visit_date, weight, symptoms, notes } = data;

//   const result = await pool.query(
//     `INSERT INTO medical_records
//     (pet_id, visit_date, weight, symptoms, notes)
//     VALUES ($1,$2,$3,$4,$5)
//     RETURNING *`,
//     [pet_id, visit_date, weight, symptoms, notes],
//   );

//   return result.rows[0];
// };

// export const updateMedical = async (id, data) => {
//   const { visit_date, weight, symptoms, notes } = data;

//   const result = await pool.query(
//     `UPDATE medical_records SET
//       visit_date=$1,
//       weight=$2,
//       symptoms=$3,
//       notes=$4
//     WHERE id=$5
//     RETURNING *`,
//     [visit_date, weight, symptoms, notes, id],
//   );

//   return result.rows[0];
// };

// export const deleteMedical = async (id) => {
//   await pool.query("DELETE FROM medical_records WHERE id=$1", [id]);
// };

import pool from "../config/db.js";

export const createMedicalRecord = async (petId, data) => {
  const { visit_date, weight, symptoms, notes } = data;

  const result = await pool.query(
    `INSERT INTO medical_records
    (pet_id, visit_date, weight, symptoms, notes)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *`,
    [petId, visit_date, weight, symptoms, notes],
  );

  return result.rows[0];
};

export const getMedicalRecordsByPetId = async (petId) => {
  const result = await pool.query(
    "SELECT * FROM medical_records WHERE pet_id = $1 ORDER BY id DESC",
    [petId],
  );
  return result.rows;
};

export const updateMedicalRecord = async (id, data) => {
  const { visit_date, weight, symptoms, notes } = data;

  const result = await pool.query(
    `UPDATE medical_records SET
      visit_date=$1,
      weight=$2,
      symptoms=$3,
      notes=$4
    WHERE id=$5
    RETURNING *`,
    [visit_date, weight, symptoms, notes, id],
  );

  return result.rows[0];
};

export const deleteMedicalRecord = async (id) => {
  await pool.query("DELETE FROM medical_records WHERE id=$1", [id]);
};
