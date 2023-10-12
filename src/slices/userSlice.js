import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://dummyjson.com/auth/login";

const data = {
  // expiresInMins: 60, // optional
};

const initialState = {
  user: {},
  status: "",
  isLoggedIn: false,
};

const axiosConfig = {
  headers: { "Content-Type": "application/json" },
};

export const fetchUser = createAsyncThunk(
  "/",
  async ({ username, password }) => {
    try {
      const res = await axios.post(
        url,
        JSON.stringify({ username, password }),
        axiosConfig
      );
      return res.data;
    } catch (err) {
      alert("Username or Password is incorrect");
      return initialState.status(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "Success";
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "Rejected";
      });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
