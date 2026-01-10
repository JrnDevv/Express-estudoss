import express from "express";
import router from "./Express-estudoss/src/routes/user.routes.js";

const app = express();

// Middleware para ler JSON
app.use(express.json());
app.use("/users", router);


app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});
