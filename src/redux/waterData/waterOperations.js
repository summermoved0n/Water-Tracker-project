import { createAsyncThunk } from '@reduxjs/toolkit';

import { setToken } from '../../services/authAPI';
import {
  requestAddWater,
  requestDeleteWater,
  requestMonth,
  requestToday,
  requestUpdateWater,
} from '../../services/waterDataAPI';
import { toast } from 'react-toastify';

export const todayThunk = createAsyncThunk(
  'water-notes/today',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setToken(token);
      const response = await requestToday();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data?.message || 'Error');
    }
  }
);

export const monthThunk = createAsyncThunk(
  'water-notes/month',
  async (date, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const response = await requestMonth(date);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data?.message || 'Error');
    }
  }
);

export const addWaterThunk = createAsyncThunk(
  'water-notes',
  async (waterData, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const response = await requestAddWater(waterData);
      toast.success(response.data?.message || 'Water note added successfully');
      return response;
    } catch (error) {
      toast.error(error.response.data?.message || 'Error');
      return thunkAPI.rejectWithValue(error.response.data?.message || 'Error');
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'water-notes/delete-dose-water',
  async (waterId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);
      const response = await requestDeleteWater(waterId);
      toast.success(
        response.data?.message || 'Water note deleted successfully'
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data?.message || 'Error');
    }
  }
);

export const updateWaterThunk = createAsyncThunk(
  'water-notes/update-dose-water',
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setToken(token);

      const { id, newData } = data;
      const response = await requestUpdateWater(id, newData);
      toast.success(
        response.data?.message || 'Water note updated successfully'
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data?.message || 'Error');
    }
  }
);
