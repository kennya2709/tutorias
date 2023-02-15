const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "socio_eco",
});

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.post("/alumno/agregar", (req, res) => {
  console.log("aqui");
  const {
    nombre,
    edad,
    direccion,
    carrera,
    modalidad,
    eleccion,
    trabajas,
    horas,
    ingreso_mensua,
    egreso_mensua,
    casa,
    cuartos,
    personas,
    internet,
    computadora,
    refri,
    agua,
    drenado,
    electricidad,
    beca,
    ambiente,
    responsabilidades,
    discapacidad,
    secundaria,
    final_secu,
    prepa,
    especialidad,
    final_prepa,
    habitos,
    estudias,
    enfermedad,
    medicamento,
    tristeza,
    pesimismo,
    irritabilidad,
    retirada,
    indesicion,
    imagen_corporal,
    enlentecimiento,
    insomnio,
    peso,
    calor,
    temblor_piernas,
    temblor_manos,
    mareo,
  } = req.body;

  const sql = "INSERT INTO form VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      nombre,
      edad,
      direccion,
      carrera,
      modalidad,
      eleccion,
      trabajas,
      horas,
      ingreso_mensua,
      egreso_mensua,
      casa,
      cuartos,
      personas,
      internet,
      computadora,
      refri,
      agua,
      drenado,
      electricidad,
      beca,
      ambiente,
      responsabilidades,
      discapacidad,
      secundaria,
      final_secu,
      prepa,
      especialidad,
      final_prepa,
      habitos,
      estudias,
      enfermedad,
      medicamento,
      tristeza,
      pesimismo,
      irritabilidad,
      retirada,
      indesicion,
      imagen_corporal,
      enlentecimiento,
      insomnio,
      peso,
      calor,
      temblor_piernas,
      temblor_manos,
      mareo,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.get("/alumnos", (req, res) => {
  const sql = "select * from form";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});




app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});
