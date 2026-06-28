import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestLogIn,
  requestLogOut,
  requestSignUp,
  setToken,
} from '../../services/authAPI';
import { toast } from 'react-toastify';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await requestSignUp(formData);
      toast.success('Successfully signed up');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || 'Failed to sign up. Try again'
      );
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogIn(formData);
      toast.success('Successfully logged in');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || 'Failed to log in. Try again'
      );
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      await requestLogOut();
      toast.success('Successfully loggged out');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data?.message || 'Failed to log out. Try again'
      );
    }
  }
);
