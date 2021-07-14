import axios from "axios";

export const CLEAR_STATE = "CLEAR_STATE";
export const REQUEST_REGISTRATION = "REQUEST_REGISTRATION";

export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const GET_QUESTION_BY_ID = "GET_QUESTION_BY_ID";
export const DELETE_QUESTION = "DELETE_QUESTION";

const BASE_URL = "http://localhost:8080/api/educationsystem/";


export const requestRegistration = (student) => {
    return (dispatch) => {
      axios
        .post(
          "http://localhost:8080/api/educationsystem/student/add-student",
          student
        )
        .then((response) => {
          dispatch(studentRegistration(response.data));
        });
    };
  };
  
  const studentRegistration = (data) => {
    return {
      type: REQUEST_REGISTRATION,
      payload: data,
    };
  };

  export const clearState = () => {
    return (dispatch) => {
      dispatch(clearStateAction());
    };
  };
  
  const clearStateAction = (data) => {
    return {
      type: CLEAR_STATE,
  
      data,
    };
  };

  // Question

const getAllQuestionAction = (data) => {
  return {
    type: GET_ALL_QUESTIONS,

    payload: data,
  };
};

export const getAllQuestions = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/educationsystem/question/getAll")

      .then((response) => {
        dispatch(getAllQuestionAction(response.data));
      });
  };
};

const addQuesAction = (data) => {
  return {
    type: ADD_QUESTION,
    data,
  };
};

export const addQuestion = (question) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/api/educationsystem/question/add", question)
      .then((res) => {
        dispatch(addQuesAction(res.data));
      });
  };
};

const deleteQuestionAction = (data) => {
  return {
    type: DELETE_QUESTION,

    payload: data,
  };
};

export const deleteQuestion = (questionId) => {
  return (dispatch) => {
    axios
      .delete(
        "http://localhost:8080/api/educationsystem/question/delete/" +
          questionId
      )

      .then((response) => {
        dispatch(deleteQuestionAction(response.data));
      });
  };
};

const updateQuesAction = (data) => {
  return {
    type: UPDATE_QUESTION,
    data,
  };
};

export const updateQuestion = (updatedQuesDetails) => {
  return (dispatch) => {
    axios
      .put(
        "http://localhost:8080/api/educationsystem/question/update",
        updatedQuesDetails
      )
      .then((res) => {
        dispatch(updateQuesAction(res.data));
      });
  };
};

const getQuesByIdAction = (data) => {
  return {
    type: GET_QUESTION_BY_ID,
    payload: data,
  };
};

//search by names function
export const getQuestionById = (questionId) => {
  return (dispatch) => {
    let URL =
      `http://localhost:8080/api/educationsystem/question/getQuestion/` +
      questionId;
    axios.get(URL).then((response) => {
      dispatch(getQuesByIdAction(response.data));
    });
  };
};    