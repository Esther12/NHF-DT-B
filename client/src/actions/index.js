import * as TYPE from "./types";
import axios from "axios";

export const createWorship = ({
  song_of_prasis,
  congerPrayer,
  Stitle,
  Spassage,
  preacher
}) => {
  return dispatch => {
    return axios
      .post(`/api/create_worship`, {
        song_of_prasis,
        congerPrayer,
        Stitle,
        Spassage,
        preacher
      })
      .then(res => {
        console.log(res);
        dispatch(createWorshipSuccess(res.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createWorshipSuccess = data => {
  return {
    type: TYPE.ADD_WORS,
    payload: {
      song_of_prasis: data.song_of_prasis,
      congerPrayer: data.congerPrayer,
      Stitle: data.Stitle,
      Spassage: data.Spassage,
      preacher: data.preacher
    }
  };
};

export const readWorship = posts => {
  return dispatch => {
    return axios
      .get("/api/display_worship")
      .then(res => {
        console.log(res);
        dispatch(readWorshipSuccess(res.data));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const readWorshipSuccess = posts => {
  return {
    type: TYPE.READ_WORS,
    posts
  };
};
