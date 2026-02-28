import { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT } from "../config";
import { API_RESPONSE_STATUS, ResponseModel, useApi } from "./useapi.hook";

const useCarApi = (initialUrl) => {
  const { handleAxiosPostAsync, handleAxiosGetAsync } = useApi();
  let responseModel = new ResponseModel();
  // const carUrl=
  const fetchCarData = async (id) => {
    try {
      responseModel = await handleAxiosGetAsync(`${END_POINT.CAR}/${id}`);
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const searchCar = async (data) => {
    try {
      responseModel = await handleAxiosPostAsync(
        data,
        `${END_POINT.CAR}/search`
      );
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const getAllCars = async (id) => {
    try {
      responseModel = await handleAxiosGetAsync(`${END_POINT.CAR}/cars`);
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
    } catch (err) {
      throw new Error(err);
    }
  };

   const checkCarAvaibility=async(data)=>{
    try {
      responseModel = await handleAxiosPostAsync(data,`${END_POINT.CAR}/checkCarAvailability`);
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return { fetchCarData, searchCar,getAllCars,checkCarAvaibility };
};

export default useCarApi;
