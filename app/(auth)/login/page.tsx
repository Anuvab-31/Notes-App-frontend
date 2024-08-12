"use client";

import React, { useState } from "react";
import { Box, Button, Card, CircularProgress, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useRouter } from "next/navigation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { isValidEmail, notEmpty } from "@/core/utils/validators";
import AxiosInstance, { AuthenticationService } from "@/apis/rest.app";



const Page = () => {

  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({ email: "", password: "" });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const validate = () => {
    const newErrors: any = {};
    if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address!";
    }
    if (!notEmpty(password)) {
      newErrors.password = "Password is required!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleLogin = async () => {
    if (validate()) {
      await AxiosInstance.post(AuthenticationService, {
        email: email,
        password: password
      })
        .then((res: any) => {
          localStorage.setItem("token", res.data.accessToken);
          router.push("/");
          enqueueSnackbar("Login successful", { variant: "success" });
        })
        .catch((error: any) => enqueueSnackbar(error.response.data.message, { variant: "error" }))
    }
  };

  const handleEnter = (event: any) => {
    if (event.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <Box sx={{
      height: "100vh",
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Card elevation={0} variant="outlined" sx={{
        // height: "400px",
        width: "400px",
        padding: 2,
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
      }}>

        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>Login</Typography>
        <Box mt={5} />

        <TextField
          label={'Email'}
          autoFocus
          color="secondary"
          error={email === '' && !!errors.email}
          fullWidth
          helperText={email === '' && errors.email}
          placeholder='i.e. john@mail.com'
          onChange={(event: any) => setEmail(event.target.value)}
          // onKeyDown={handleEnter}
          type={'email'}
          value={email}
          autoComplete={'off'}
          variant="outlined"
          size='small'
        />

        <Box mt={4} />

        <TextField
          label={'Password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          color="secondary"
          error={password === '' && !!errors.password}
          fullWidth
          helperText={password === '' && errors.password}
          placeholder='enter your account password'
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={handleEnter}
          type={showPassword ? 'text' : 'password'}
          value={password}
          variant="outlined"
          autoComplete={'off'}
          size='small'
        />

        <Box mt={4} />

        <Button color="primary" disabled={loading} variant={'contained'} fullWidth onClick={handleLogin}>
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>

        <Box display="flex" justifyContent="center" mt={3}>
          <Typography variant={'body2'}>Not registered yet?</Typography>
          <Box mr={0.5} />
          <Typography color={'#E71C34'} sx={{ cursor: 'pointer', fontWeight: 500 }} variant={'body2'} fontWeight={800}
            onClick={async () => await router.push('/sign-up')}> Create a new account</Typography>
        </Box>

      </Card>

    </Box>
  )
}

export default Page
