import * as appointmentRequestModel from "../models/appointmentModel.js";

export const create = async (req, res) => {
  try {
    const request = await appointmentRequestModel.createAppointmentRequest(
      req.body,
    );
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const requests = await appointmentRequestModel.getAllAppointmentRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const request = await appointmentRequestModel.updateAppointmentRequest(
      req.params.id,
      req.body,
    );

    if (!request) {
      return res.status(404).json({ message: "Appointment request not found" });
    }

    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await appointmentRequestModel.deleteAppointmentRequest(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
