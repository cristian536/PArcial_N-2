import './signUp.css';

import React, { useState } from 'react';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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


  const clasess = useStyles();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(textName, textLastName,textAge,textPass,textPass2);

    await axios.post('http://localhost:8080/user', {
      name: textName,
      lastName: textLastName,
      Age: textAge,
      Pass: textPass,
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

  return (
    <div className="mainDiv">
      <Typography component="h1" variant="h5" className="textoentrada">
            Sign Up
            <h1> Ingreso de datos para registro</h1>
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

        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      
      </form>
    </div>
  );
}

export default SignUp;
