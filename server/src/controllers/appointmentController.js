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

export const updateStatus = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const validStatus = ["pending", "approved", "rejected"];
    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const request =
      await appointmentRequestModel.updateAppointmentRequestStatus(id, status);

    if (!request) {
      return res.status(404).json({
        message: "Appointment request not found",
      });
    }

    return res.status(200).json({
      message: "Status updated successfully",
      data: request,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
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
