// import * as appointmentModel from "../models/appointmentModel.js";

// export const create = async (req, res) => {
//   try {
//     const appointment = await appointmentModel.createAppointment(req.body);
//     res.status(201).json(appointment);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getAll = async (req, res) => {
//   try {
//     const data = await appointmentModel.getAllAppointments();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getById = async (req, res) => {
//   try {
//     const data = await appointmentModel.getAppointmentById(req.params.id);

//     if (!data) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getByStatus = async (req, res) => {
//   try {
//     const data = await appointmentModel.getByStatus(req.params.status);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const data = await appointmentModel.updateAppointment(
//       req.params.id,
//       req.body,
//     );

//     if (!data) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const data = await appointmentModel.updateStatus(req.params.id, status);

//     if (!data) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const remove = async (req, res) => {
//   try {
//     await appointmentModel.deleteAppointment(req.params.id);
//     res.json({ message: "Deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

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
