const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  password: "",
  host: "127.0.0.1",
  database: "lastlogin",
});

db.connect((err) => {
  if (err) {
    console.log("Hubo un error al conectar la base de datos", err);
  } else {
    console.log("Conectado a la base de datos");
  }
});

app.get("/", (request, response) => {
  response.send("Hola mundo");
});

app.post("/registrar", (request, response) => {
  const { nombre, apellido, correo, usuario, contraseña } = request.body;

  db.query(
    "INSERT INTO usuarios(nombre,apellidos,correo,usuario,contraseña) VALUES(?,?,?,?,?)",
    [nombre, apellido, correo, usuario, contraseña],
    (err, result) => {
      if (err) {
        console.log("No se pudo registrar el usuario");
      } else {
        response.send("Usuario registrado");
      }
    }
  );
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto: ${PORT}`);
});
