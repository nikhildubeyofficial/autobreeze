import { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT } from "../config";
import { API_RESPONSE_STATUS, ResponseModel, useApi } from "./useapi.hook";

const useCarRentalApi = (initialUrl) => {
  const { handleAxiosPostAsync, handleAxiosGetAsync } = useApi();
  let responseModel = new ResponseModel();
 

   const checkCarAvaibility=async(data)=>{
    try {
      responseModel = await handleAxiosPostAsync(data,`${END_POINT.RENTAL}/checkCarAvailability`);
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

  const getLiveBookingsCars=async(userId)=>{
    try {
      responseModel = await handleAxiosPostAsync({},`${END_POINT.RENTAL}/liveBookings?userId=${userId}`);
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
  const getHistoryBookingsCars=async(userId)=>{
    try {
      responseModel = await handleAxiosPostAsync({},`${END_POINT.RENTAL}/pastBookings?userId=${userId}`);
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
  return {checkCarAvaibility,getLiveBookingsCars,getHistoryBookingsCars };
};

export default useCarRentalApi;
