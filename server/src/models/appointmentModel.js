// // import pool from "../config/db.js";

// // export const createAppointment = async (data) => {
// //   const { owner_name, phone, pet_type, symptoms, status } = data;

// //   const result = await pool.query(
// //     `INSERT INTO appointment_requests
// //     (owner_name, phone, pet_type, symptoms, status)
// //     VALUES ($1,$2,$3,$4,$5)
// //     RETURNING *`,
// //     [owner_name, phone, pet_type, symptoms, status || "pending"],
// //   );

// //   return result.rows[0];
// // };

// // export const getAllAppointments = async () => {
// //   const result = await pool.query(
// //     "SELECT * FROM appointment_requests ORDER BY id DESC",
// //   );
// //   return result.rows;
// // };

// // export const getAppointmentById = async (id) => {
// //   const result = await pool.query(
// //     "SELECT * FROM appointment_requests WHERE id=$1",
// //     [id],
// //   );
// //   return result.rows[0];
// // };

// // export const getByStatus = async (status) => {
// //   const result = await pool.query(
// //     "SELECT * FROM appointment_requests WHERE status=$1 ORDER BY id DESC",
// //     [status],
// //   );
// //   return result.rows;
// // };

// // export const updateAppointment = async (id, data) => {
// //   const { owner_name, phone, pet_type, symptoms, status } = data;

// //   const result = await pool.query(
// //     `UPDATE appointment_requests SET
// //       owner_name=$1,
// //       phone=$2,
// //       pet_type=$3,
// //       symptoms=$4,
// //       status=$5
// //     WHERE id=$6
// //     RETURNING *`,
// //     [owner_name, phone, pet_type, symptoms, status, id],
// //   );

// //   return result.rows[0];
// // };

// // export const updateStatus = async (id, status) => {
// //   const result = await pool.query(
// //     "UPDATE appointment_requests SET status=$1 WHERE id=$2 RETURNING *",
// //     [status, id],
// //   );
// //   return result.rows[0];
// // };

// // export const deleteAppointment = async (id) => {
// //   await pool.query("DELETE FROM appointment_requests WHERE id=$1", [id]);
// // };

// import pool from "../config/db.js";

// export const createAppointment = async (data) => {
//   const { owner_name, phone, pet_type, symptoms } = data;

//   const result = await pool.query(
//     `INSERT INTO appointment_requests
//     (owner_name, phone, pet_type, symptoms)
//     VALUES ($1,$2,$3,$4)
//     RETURNING *`,
//     [owner_name, phone, pet_type, symptoms],
//   );

//   return result.rows[0];
// };

// export const getAllAppointments = async () => {
//   const result = await pool.query(
//     "SELECT * FROM appointment_requests ORDER BY id DESC",
//   );
//   return result.rows;
// };

// export const updateStatus = async (id, status) => {
//   const result = await pool.query(
//     "UPDATE appointment_requests SET status=$1 WHERE id=$2 RETURNING *",
//     [status, id],
//   );
//   return result.rows[0];
// };

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

export const updateAppointmentRequest = async (id, data) => {
  const { owner_name, phone, pet_type, symptoms, status } = data;

  const result = await pool.query(
    `UPDATE appointment_requests SET
      owner_name=$1,
      phone=$2,
      pet_type=$3,
      symptoms=$4,
      status=$5
    WHERE id=$6
    RETURNING *`,
    [owner_name, phone, pet_type, symptoms, status, id],
  );

  return result.rows[0];
};

export const deleteAppointmentRequest = async (id) => {
  await pool.query("DELETE FROM appointment_requests WHERE id=$1", [id]);
};
