import pool from "../config/db.js";

export const createCustomer = async (name, phone) => {
  const result = await pool.query(
    "INSERT INTO customers (name, phone) VALUES ($1,$2) RETURNING *",
    [name, phone],
  );
  return result.rows[0];
};

export const getAllCustomers = async () => {
  const result = await pool.query("SELECT * FROM customers");
  return result.rows;
};

export const getCustomerById = async (id) => {
  const result = await pool.query("SELECT * FROM customers WHERE id=$1", [id]);
  return result.rows[0];
};

export const updateCustomer = async (id, name, phone) => {
  const result = await pool.query(
    "UPDATE customers SET name=$1, phone=$2 WHERE id=$3 RETURNING *",
    [name, phone, id],
  );
  return result.rows[0];
};

export const deleteCustomer = async (id) => {
  await pool.query("DELETE FROM customers WHERE id=$1", [id]);
};
