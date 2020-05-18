import './signUp.css';

import React, { useState } from 'react';


import axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';




const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
    

  },
  
}));

function SignUp() {
  const [textName, setTextName] = useState('');
  const [textLastName, setTextLastName] = useState('');
  const [textAge, setTextAge] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [textPass, setTextPass] = useState('');
  const [textPass2, setTextPass2] = useState('');
  const [textCheck1, setTextCheck1] = useState('');
  const [textCheck2, setTextCheck2] = useState('');
  


  const clasess = useStyles();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(textName, textLastName,textAge,textEmail,textPass,textPass2,textCheck1,textCheck2);

    await axios.post('http://localhost:8080/user', {
      name: textName,
      lastName: textLastName,
      Age: textAge,
      Email: textEmail,
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
  const onChangeEmail = (event) => {
    setTextEmail(event.target.value);
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
        Bienvenido

            <h1 className="textoencabezado"> Ingreso de datos para registro</h1>
          </Typography>
      <form onSubmit={onSubmit}>
      <Typography > 
            <h2  className="Subsec">Datos Personales</h2>
          </Typography>
        <TextField
          type="text"
          className={clasess.root}
          id="Nombre"
          label="Nombre"
          variant="outlined"
          required
          onChange={onChangeName}
        />
        <br />
        <TextField
          type="text"
          className={clasess.root}
          id="Apellido"
          label="Apellido"
          variant="outlined"
          required
          onChange={onChangeLastName}
        />
        <br />
        <TextField
          type="number"
          className={clasess.root}
          id="Edad"
          label="Edad"
          variant="outlined"
          onChange={onChangeAge}
        />
        <br />
        <TextField
          type="email"
          className={clasess.root}
          id="Email"
          label="Email"
          variant="outlined"
          required
          onChange={onChangeEmail}
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
        <Typography className="Subsec"> 
            <h2  className="Subsec">Ocupación</h2>
          </Typography>
       

        <Checkbox
         name="check1" onChange={onChangeCheck1} value="Estudiante"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <label>Estudiante</label>
      
      <Checkbox
         name="check1" onChange={onChangeCheck1} value="Administrativo"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <label>Administrativo</label>
      
      <Checkbox
         name="check1" onChange={onChangeCheck1} value="Docente"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <label>Docente</label>
        

        <Typography > 
            <h2  className="Subsec">Género</h2>
          </Typography>

        
        <Checkbox
         name="check2" onChange={onChangeCheck2} value="Masculino"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <label>Masculino</label>
        

      <Checkbox
         name="check2" onChange={onChangeCheck2} value="Femenino"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <label>Femenino</label>
        
        <br />

        <Button type="submit" variant="contained" color="primary">
          Registrar
        </Button>
      
      </form>
    </}

export default SignUp;
