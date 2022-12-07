import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorGlobal, successGlobal } from "../reducers/notifications";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const request = await axios.post(`/api/auth/register`, {
        email: email,
        password: password,
      });

      dispatch(
        successGlobal("Welcome !!.Check your emails to validate account")
      );
      return { data: request.data.user, auth: true };
    } catch (error) {
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);

export const signInUser = createAsyncThunk(
  "users/signInUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const request = await axios.post(`/api/auth/signin`, {
        email: email,
        password: password,
      });
      dispatch(successGlobal("Welcome !!"));
      return { data: request.data.user, auth: true };
    } catch (error) {
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);