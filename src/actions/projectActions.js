import axios from "axios";
import { GET_ERRORS } from "./types";

export const createProject = (project, history) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (err) {
    // dispatch a specific type of event/action: type: GET_ERRORS
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};