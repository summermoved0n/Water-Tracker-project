import { axiosInstance } from '../constants';

export const requestToday = async () => {
  const { data } = await axiosInstance.get('water-notes/today');
  return data;
};

export const requestMonth = async (date) => {
  const { data } = await axiosInstance.get(`water-notes/month?date=${date}`);
  return data;
};

export const requestAddWater = async (waterData) => {
  const { data } = await axiosInstance.post('water-notes', waterData);
  return data;
};

export const requestDeleteWater = async (waterId) => {
  const { data } = await axiosInstance.delete(
    `water-notes/delete-dose-water/${waterId}`
  );
  return data;
};

export const requestUpdateWater = async (waterId, waterData) => {
  const { data } = await axiosInstance.patch(
    `water-notes/update-dose-water/${waterId}`,
    waterData
  );
  return data;
};
