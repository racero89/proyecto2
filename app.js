const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const connectionString =
  "mongodb+srv://Monica:XI9LeO2eZ0udtRmh@cluster0.iuurxco.mongodb.net/Tienda";

app.use(express.json());

try {
  mongoose.connect(connectionString);
} catch (error) {
  console.log("fallo al conectar");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Conexión errónea", err));
dbConnection.once("open", () => console.log("Mongo está conectado!!"));

app.listen(PORT, () => {
  console.log(`Servidor escuchando puerto ${PORT}`);
});
