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

export const getAllMedicalRecords = async () => {
  const result = await pool.query(
    `SELECT 
        mr.id,
        mr.visit_date,
        mr.weight,
        mr.symptoms,
        mr.notes,

        p.id AS pet_id,
        p.name AS pet_name,
        p.image_url AS pet_image,

        c.id AS customer_id,
        c.name AS customer_name,
        c.phone AS customer_phone

     FROM medical_records mr
     JOIN pets p ON mr.pet_id = p.id
     JOIN customers c ON p.customer_id = c.id

     ORDER BY mr.id DESC`,
  );

  return result.rows;
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
