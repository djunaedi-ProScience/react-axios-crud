import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const getUser = (users) => ({
  type: types.GET_SINGLE_USER,
  payload: users,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
  // payload: users,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`https://menthy.herokuapp.com/user`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`https://6353512ae822bad5278ac951.mockapi.io/users/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (users) => {
  return function (dispatch) {
    // console.log(users);
    axios
      .post(`https://6353512ae822bad5278ac951.mockapi.io/users`, users)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`https://6353512ae822bad5278ac951.mockapi.io/users/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUser(resp.data));
        // dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    console.log(user);
    axios
      .put(`https://6353512ae822bad5278ac951.mockapi.io/users/${id}`, user)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userUpdated());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};
