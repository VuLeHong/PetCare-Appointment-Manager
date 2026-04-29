import express from "express";
import cors from "cors";

import customerRoutes from "./routes/customerRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import medicalRoutes from "./routes/medicalRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uploadImageRoutes from "./routes/uploadImageRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/customers", customerRoutes);
app.use("/customers/:id/pets", petRoutes);
app.use("/appointment-requests", appointmentRoutes);
app.use("/pets/:id/medical-records", medicalRoutes);
app.use("/products", productRoutes);
app.use("/upload", uploadImageRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
