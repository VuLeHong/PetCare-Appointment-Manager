// import pool from "../config/db.js";

// export const createPet = async (data) => {
//   const {
//     customer_id,
//     name,
//     species,
//     color,
//     age,
//     weight,
//     gender,
//     notes,
//     image_url,
//   } = data;

//   const result = await pool.query(
//     `INSERT INTO pets
//     (customer_id, name, species, color, age, weight, gender, notes, image_url)
//     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
//     RETURNING *`,
//     [customer_id, name, species, color, age, weight, gender, notes, image_url],
//   );

//   return result.rows[0];
// };

// export const getAllPets = async () => {
//   const result = await pool.query("SELECT * FROM pets ORDER BY id DESC");
//   return result.rows;
// };

// export const getPetById = async (id) => {
//   const result = await pool.query("SELECT * FROM pets WHERE id = $1", [id]);
//   return result.rows[0];
// };

// export const updatePet = async (id, data) => {
//   const {
//     customer_id,
//     name,
//     species,
//     color,
//     age,
//     weight,
//     gender,
//     notes,
//     image_url,
//   } = data;

//   const result = await pool.query(
//     `UPDATE pets SET
//       customer_id=$1,
//       name=$2,
//       species=$3,
//       color=$4,
//       age=$5,
//       weight=$6,
//       gender=$7,
//       notes=$8,
//       image_url=$9
//     WHERE id=$10
//     RETURNING *`,
//     [
//       customer_id,
//       name,
//       species,
//       color,
//       age,
//       weight,
//       gender,
//       notes,
//       image_url,
//       id,
//     ],
//   );

//   return result.rows[0];
// };

// export const deletePet = async (id) => {
//   await pool.query("DELETE FROM pets WHERE id=$1", [id]);
// };

import pool from "../config/db.js";

export const createPet = async (customerId, data) => {
  const { name, species, color, age, weight, gender, notes, image_url } = data;

  const result = await pool.query(
    `INSERT INTO pets
    (customer_id, name, species, color, age, weight, gender, notes, image_url)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *`,
    [customerId, name, species, color, age, weight, gender, notes, image_url],
  );

  return result.rows[0];
};

export const getPetsByCustomerId = async (customerId) => {
  const result = await pool.query(
    "SELECT * FROM pets WHERE customer_id = $1 ORDER BY id DESC",
    [customerId],
  );
  return result.rows;
};

export const getPetById = async (id) => {
  const result = await pool.query("SELECT * FROM pets WHERE id = $1", [id]);
  return result.rows[0];
};

export const updatePet = async (id, data) => {
  const { name, species, color, age, weight, gender, notes, image_url } = data;

  const result = await pool.query(
    `UPDATE pets SET
      name=$1,
      species=$2,
      color=$3,
      age=$4,
      weight=$5,
      gender=$6,
      notes=$7,
      image_url=$8
    WHERE id=$9
    RETURNING *`,
    [name, species, color, age, weight, gender, notes, image_url, id],
  );

  return result.rows[0];
};

export const deletePet = async (id) => {
  await pool.query("DELETE FROM pets WHERE id=$1", [id]);
};
