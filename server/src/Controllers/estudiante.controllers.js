import { pool } from "../db.js";


export const getlogin = async (req, res) => {
    try {
        const {userName, userPassword} = req.body;
        /* const [rows] = await pool.query("SELECT * FROM registro_academico.tb_estudiante where est_id = ?", [
            id,
          ]); */
      
          const [rows] = await pool.query("CALL learninghub.SP_Login(?, ?)", [
            userName, userPassword
          ]);

          if (rows.length <= 0) {
            return res.status(404).json({ message: "Employee not found" });
          }
      
          res.json(rows[0]);
        } catch (error) {
          return res.status(500).json({ message: "Something goes wrong" });
        }

};

export const getEstudiantes = async (req, res) => {
    try {
    
      const [rows] = await pool.query("SELECT * FROM learninghub.vw_perfilestudiante");

      res.json(rows);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
     }

};


export const getEstudiante = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM learninghub.vw_perfilestudiante where id_estudiante  = ?", [id,]);

      if (rows.length <= 0) {
        return res.status(404).json({ message: "Estudiante no existe, por favor validor con el administrador" });
      }
  
      res.json(rows[0]);

    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }

};



export const getMaterias = async (req, res) => {   

    try {
    
        const [rows] = await pool.query("SELECT * FROM learninghub.vw_fichacurso");
  
        res.json(rows);
  
      } catch (error) {
          return res.status(500).json({ message: "Something goes wrong" });
       }


 }

export const getMateria = async (req, res) => {  

    console.log("hola curso");
    try {
        const { curso } = req.params;
        console.log(curso);
        const [rows] = await pool.query("SELECT * FROM learninghub.vw_fichacurso where nombre_de_curso  = ?", [curso,]);
  
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Employee not found" });
        }
    
        res.json(rows[0]);
  
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }


   }

export const getNotasEstudiante = async (req, res) => {
  try {

    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM learninghub.vw_notasestudiante where EstID  = ?", [id,]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Estudiante no existe, por favor validor con el administrador" });
    }
  
    res.json(rows[0]);

  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
 }   

export const getNotasEstudiantes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM learninghub.vw_notasestudiante");

    res.json(rows);


  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
 }

 export const getInsertarEstudiante = async (req, res) => {
  try {
    console.log(req.body);
      const {
      id, 
      name1, 
      name2, 
      lastname1, 
      lastname2, 
      bdate, 
      gender, 
      phone, 
      pmail, 
      imail, 
      password, 
      espanol, 
      matematicas} = req.body;
      /* const [rows] = await pool.query("SELECT * FROM registro_academico.tb_estudiante where est_id = ?", [
          id,
        ]); */
        
        const [rows] = await pool.query("CALL learninghub.SP_InsertarEstudiante (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [id, 
            name1, 
            name2, 
            lastname1, 
            lastname2, 
            bdate, 
            gender, 
            phone, 
            pmail, 
            imail, 
            password, 
            espanol, 
            matematicas]
        );
        
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Estudent not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }

};


