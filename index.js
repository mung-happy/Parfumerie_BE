import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./src/config/config_db.js";
import routesUser from "./src/routes/userRoutes.js";
import routesCategory from "./src/routes/categoryRoutes.js";
import routesUpload from "./src/routes/upLoad.js";
import brandRoutes from "./src/routes/brandRoutes.js";
import routesProducts from "./src/routes/productRoutes.js";
const app = express();

dotenv.config();

const { API_SERVER, PORT } = process.env;
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(express.json());
app.use("/products", routesProducts);
app.use("/auth", routesUser);
app.use("/categories", routesCategory);
app.use("/brands", brandRoutes);
app.use("/upload", routesUpload);
connect(API_SERVER);

// test case pc
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});