import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { setToken } from '../../services/authAPI';
import {
  requestAvatarUpdate,
  requestRefreshUser,
  requestUserInfoUpdate,
} from '../../services/userAPI';
import { requestUpdateWaterRate } from '../../services/userAPI';

export const userAvatarThunk = createAsyncThunk(
  'users/avatar',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestAvatarUpdate(data);
      toast.success('Avatar updated successfully');
      return response;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Avatar can`t be updated');
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Avatar can`t be updated'
      );
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  'users',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestUserInfoUpdate(data);
      toast.success('User info updated successfully');
      return response;
    } catch (error) {
      toast.error(error.response?.data?.message || 'User info didn`t update');
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'User info didn`t update'
      );
    }
  }
);

export const updateWaterRateThunk = createAsyncThunk(
  'users/water-rate',
  async (newWaterRate, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestUpdateWaterRate(newWaterRate);
      toast.success('Water rate updated successfully');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Water rate didn`t update'
      );
    }
  }
);
export const refreshUserThunk = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState();
    const storageToken = token.auth.token;

    if (storageToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      setToken(storageToken);
      const response = await requestRefreshUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          'Something went wrong with user refresh'
      );
    }
  }
);
