import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/action";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = state;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  //   console.log(user);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log("first", e.target);
    console.log("ini nama", name);
    console.log("ini value", value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("please input all input Field");
    } else {
      dispatch(updateUser(state, id));
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
      <h1>Edit User</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          type="text"
          onChange={handleInputChange}
          value={name || ""}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="text"
          name="email"
          onChange={handleInputChange}
          value={email || ""}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="text"
          name="password"
          onChange={handleInputChange}
          value={password || ""}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="success"
          type="submit"
          onClick={(e) => navigate("/")}
        >
          Update button
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
