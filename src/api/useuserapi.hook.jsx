import { handleNotify, TOASTER_POSITION, TOASTER_TYPE } from "../components/common/notification/toaster_notify.component";
import { END_POINT } from "../config";
import { API_RESPONSE_STATUS, ResponseModel, useApi } from "./useapi.hook";

const useUserApi = (initialUrl) => {
  const { handleAxiosPostAsync,handleAxiosPutAsync,handleAxiosGetAsync } = useApi();
  let responseModel = new ResponseModel();

  const signUp = async (data) => {
    // const data={}
    try {
      responseModel = await handleAxiosPostAsync(
        data,
        `${END_POINT.USER}/signup`
      );
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
      else if(responseModel.status === API_RESPONSE_STATUS.FAIL ||responseModel.status === API_RESPONSE_STATUS.UNAUTHORIZED){
        handleNotify(responseModel.errormessage,TOASTER_TYPE.ERROR,TOASTER_POSITION.TOP_RIGHT)
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const signIn = async (data) => {
    const values={
      email:data.emailId,
      password:data.password
    }
    try {
      responseModel = await handleAxiosPostAsync(
        values,
        `${END_POINT.USER}/signin`
      );
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
     else if(responseModel.status === API_RESPONSE_STATUS.FAIL ||responseModel.status === API_RESPONSE_STATUS.UNAUTHORIZED){
      handleNotify(responseModel.errormessage,TOASTER_TYPE.ERROR,TOASTER_POSITION.TOP_RIGHT)
    }
    } catch (err) {
      throw new Error(err);
    }
    
  };
  const updateProfile = async (data,userId) => {
    try {
      responseModel = await handleAxiosPutAsync(
        data,
        `${END_POINT.USER}/update`
      );
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }else if(responseModel.status === API_RESPONSE_STATUS.FAIL ||responseModel.status === API_RESPONSE_STATUS.UNAUTHORIZED){
        handleNotify(responseModel.errormessage,TOASTER_TYPE.ERROR,TOASTER_POSITION.TOP_RIGHT)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err);
    }
  }

  const getUserDetail=async(userId)=>{
    try {
      responseModel = await handleAxiosGetAsync(
        `${END_POINT.USER}/${userId}`
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
  }


  return { signIn, signUp,getUserDetail, updateProfile};
};

export default useUserApi;
