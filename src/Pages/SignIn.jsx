import React, { useContext, useState } from 'react'
import AuthLayout from '../Components/Layouts/AuthLayout'
import FormSignIn from '../Components/Fragments/FormSignIn'
import { loginService } from '../services/authService'
import { AuthContext } from '../context/authContext'
import AppSnackbar from '../Components/Elements/AppSnackbar'

function SignIn() {
  const {login} = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
			login(refreshToken); 
    } catch (err) {
      setSnackbar({ open: true, message: err.msg, severity: "error" });
    }
  };

  return (
    <>
      <AuthLayout>
          <FormSignIn onSubmit={handleLogin} />
          	<AppSnackbar
              open={snackbar.open}
              message={snackbar.message}
              severity={snackbar.severity}
              onClose={handleCloseSnackbar}
            />
      </AuthLayout>
    </>
  )
}

export default SignIn