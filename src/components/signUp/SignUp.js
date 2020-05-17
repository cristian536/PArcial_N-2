import './signUp.css';

import React, { useState } from 'react';


import axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

/*import Checkbox from '@material-ui/core/Checkbox';*/


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',

  },
  
}));

function SignUp() {
  const [textName, setTextName] = useState('');
  const [textLastName, setTextLastName] = useState('');
  const [textAge, setTextAge] = useState('');
  const [textPass, setTextPass] = useState('');
  const [textPass2, setTextPass2] = useState('');
  const [textCheck1, setTextCheck1] = useState('');
  const [textCheck2, setTextCheck2] = useState('');
  


  const clasess = useStyles();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(textName, textLastName,textAge,textPass,textPass2,textCheck1,textCheck2);

    await axios.post('http://localhost:8080/user', {
      name: textName,
      lastName: textLastName,
      Age: textAge,
      Pass: textPass,
      Ocupation: textCheck1,
      Gener: textCheck2, 

    });
  };

  const onChangeName = (event) => {
    setTextName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setTextLastName(event.target.value);
  };
  const onChangeAge = (event) => {
    setTextAge(event.target.value);
  };
  const onChangePass = (event) => {
    setTextPass(event.target.value);
  };
  const onChangePass2 = (event) => {
    setTextPass2(event.target.value);
  };
  const onChangeCheck1 = (event) => {
    setTextCheck1(event.target.value);
  };
  const onChangeCheck2 = (event) => {
    setTextCheck2(event.target.value);
  };
 
 


  return (
    <div className="mainDiv">
      <Typography className="encabezado">
            Sign Up
            <h1 className="textoencabezado"> Ingreso de datos para registro</h1>
          </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          type="text"
          className={clasess.root}
          id="Nombre"
          label="Nombre"
          variant="outlined"
          onChange={onChangeName}
        />
        <br />
        <TextField
          type="text"
          className={clasess.root}
          id="Apellido"
          label="Apellido"
          variant="outlined"
          onChange={onChangeLastName}
        />
        <br />
        <TextField
          type="number"
          className={clasess.root}
          id="Edad"
          label="Edad"
          variant="outlined"
          required
          onChange={onChangeAge}
        />
        <br />
        <TextField
          type="password"
          className={clasess.root}
          id="Contraseña"
          label="Contraseña"
          minlength="8"
          secureTextEntry={true}
          variant="outlined"
          required
          onChange={onChangePass}
        />
         <br />
        <TextField
          type="password"
          className={clasess.root}
          id="Contraseña"
          label="Repetir Contraseña"
          minlength="8"
          secureTextEntry={true}
          variant="outlined"
          required
          onChange={onChangePass2}
        />
        <br />
<<<<<<< HEAD

=======
        <Typography className="Subsec"> 
            <h2  className="Subsec">Ocupación</h2>
          </Typography>

        <input type="checkbox" name="check1" onChange={onChangeCheck1} value="Estudiante" />
        <label>Estudiante</label>
        <input type="checkbox" name="check2"onChange={onChangeCheck1} value="Admistrativo" />
        <label>Admistrativo</label>
        <input type="checkbox"  name="check3" onChange={onChangeCheck1} value="Profesor"/>
        <label>Profesor</label>
        <br />

        <Typography > 
            <h2  className="Subsec">Genero</h2>
          </Typography>

        <input type="checkbox" name="check1" onChange={onChangeCheck2} value="Masculino" />
        <label>Masculino</label>
        <input type="checkbox" name="check2"onChange={onChangeCheck2} value="Femenino" />
        <label>Femenino</label>
        
        <br />
>>>>>>> d4beb4b8d61324815ffdc05bf69ca18df1d81502
        <Button type="submit" variant="contained" color="primary">
          Registrar
        </Button>
      
      </form>
    </}

export default SignUp;
