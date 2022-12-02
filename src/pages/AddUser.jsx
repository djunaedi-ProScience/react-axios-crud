import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = state;
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log("ini nama", name);
    console.log("ini value", value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("please input all input Field");
    } else {
      dispatch(addUser(state));
      //   navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate("/")}
      >
        Go back
      </Button>
      <h1>Add User</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          type="text"
          onChange={handleInputChange}
          value={name}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="text"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="text"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="success"
          type="submit"
          onClick={(e) => navigate("/addUser")}
        >
          Add button
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
