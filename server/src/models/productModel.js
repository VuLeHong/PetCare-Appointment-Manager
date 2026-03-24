// import pool from "../config/db.js";

// export const createProduct = async (data) => {
//   const { name, category, brand, price, unit, description, image_url } = data;

//   const result = await pool.query(
//     `INSERT INTO products
//     (name, category, brand, price, unit, description, image_url)
//     VALUES ($1,$2,$3,$4,$5,$6,$7)
//     RETURNING *`,
//     [name, category, brand, price, unit, description, image_url],
//   );

//   return result.rows[0];
// };

// export const getAllProducts = async () => {
//   const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
//   return result.rows;
// };

// export const getProductById = async (id) => {
//   const result = await pool.query("SELECT * FROM products WHERE id=$1", [id]);
//   return result.rows[0];
// };

// export const getByCategory = async (category) => {
//   const result = await pool.query(
//     "SELECT * FROM products WHERE category=$1 ORDER BY id DESC",
//     [category],
//   );
//   return result.rows;
// };

// export const updateProduct = async (id, data) => {
//   const { name, category, brand, price, unit, description, image_url } = data;

//   const result = await pool.query(
//     `UPDATE products SET
//       name=$1,
//       category=$2,
//       brand=$3,
//       price=$4,
//       unit=$5,
//       description=$6,
//       image_url=$7
//     WHERE id=$8
//     RETURNING *`,
//     [name, category, brand, price, unit, description, image_url, id],
//   );

//   return result.rows[0];
// };

// export const deleteProduct = async (id) => {
//   await pool.query("DELETE FROM products WHERE id=$1", [id]);
// };

import pool from "../config/db.js";

export const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
  return result.rows;
};

export const getProductById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id=$1", [id]);
  return result.rows[0];
};

export const createProduct = async (data) => {
  const { name, category, brand, price, unit, description, image_url } = data;

  const result = await pool.query(
    `INSERT INTO products
    (name, category, brand, price, unit, description, image_url)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *`,
    [name, category, brand, price, unit, description, image_url],
  );

  return result.rows[0];
};

export const updateProduct = async (id, data) => {
  const { name, category, brand, price, unit, description, image_url } = data;

  const result = await pool.query(
    `UPDATE products SET
      name=$1,
      category=$2,
      brand=$3,
      price=$4,
      unit=$5,
      description=$6,
      image_url=$7
    WHERE id=$8
    RETURNING *`,
    [name, category, brand, price, unit, description, image_url, id],
  );

  return result.rows[0];
};

export const deleteProduct = async (id) => {
  await pool.query("DELETE FROM products WHERE id=$1", [id]);
};
