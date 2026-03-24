import * as customerModel from "../models/customerModel.js";

export const create = async (req, res) => {
  const { name, phone } = req.body;
  const data = await customerModel.createCustomer(name, phone);
  res.json(data);
};

export const getAll = async (req, res) => {
  const data = await customerModel.getAllCustomers();
  res.json(data);
};

export const getById = async (req, res) => {
  const data = await customerModel.getCustomerById(req.params.id);
  res.json(data);
};

export const update = async (req, res) => {
  const { name, phone } = req.body;
  const data = await customerModel.updateCustomer(req.params.id, name, phone);
  res.json(data);
};

export const remove = async (req, res) => {
  await customerModel.deleteCustomer(req.params.id);
  res.json({ message: "Deleted" });
};
