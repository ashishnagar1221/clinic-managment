import { INCREMENT_REQUEST, INCREMENT_SUCCESS } from "../constants";

export const incrementRequest = () => ({
    type: INCREMENT_REQUEST,
  });

  
  export const incrementSuccess = () => ({
    type: INCREMENT_SUCCESS,
  });