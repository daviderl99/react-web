import { TextField, Button } from "@mui/material";
import './Login.css';

export default function Login() {
  return (
    <form className="form">
      <TextField
        id="email"
        label="Email"
      />
      <TextField
        id="password"
        label="Password"
        type="password"
      />
      <Button type="button" variant="contained" color="primary" className="form__btn">
        Login
      </Button>
    </form>
  );
}