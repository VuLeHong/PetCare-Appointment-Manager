import pool from "../config/db.js";

export const createAppointmentRequest = async (data) => {
  const { owner_name, phone, pet_type, symptoms } = data;

  const result = await pool.query(
    `INSERT INTO appointment_requests
    (owner_name, phone, pet_type, symptoms)
    VALUES ($1,$2,$3,$4)
    RETURNING *`,
    [owner_name, phone, pet_type, symptoms],
  );

  return result.rows[0];
};

export const getAllAppointmentRequests = async () => {
  const result = await pool.query(
    "SELECT * FROM appointment_requests ORDER BY id DESC",
  );
  return result.rows;
};

export const updateAppointmentRequestStatus = async (id, status) => {
  const result = await pool.query(
    `UPDATE appointment_requests
     SET status = $1
     WHERE id = $2
     RETURNING *`,
    [status, id],
  );

  return result.rows[0];
};

export const deleteAppointmentRequest = async (id) => {
  await pool.query("DELETE FROM appointment_requests WHERE id=$1", [id]);
};
