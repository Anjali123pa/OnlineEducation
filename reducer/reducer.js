import * as actionCreators from "../action/action";

const initialState = {
    returnedMessage: "",
    studentObj: "",
    registrationSuccess: "",
    studentList: [],
    questionList: [],
  questionObj: {
    questionId: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
  }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionCreators.REQUEST_REGISTRATION:
        let message = action.payload;
  
        return {
          registrationStatus: message,
        };

        case actionCreators.CLEAR_STATE:
      return {
        returnedMessage: "",
        studentObj: "",
        studentList : []
      }

      case actionCreators.GET_ALL_QUESTIONS:
        let listOfQuestions = action.payload;
  
        return {
          returnedMessage: "Course Details!",
  
          questionList: listOfQuestions,
        };
  
      case actionCreators.DELETE_QUESTION:
        let listAfterDeletion = action.payload;
  
        return {
          returnedMessage: "Question Deleted",
  
          questionList: listAfterDeletion,
        };
  
      case actionCreators.ADD_QUESTION:
        let listAfterAdditionQuestion = action.data.questions;
  
        return {
          returnedMessage: "Question Added",
          questionList: listAfterAdditionQuestion,
        };
  
      case actionCreators.UPDATE_QUESTION:
        let listAfterUpdationQuestion = action.data.questions;
  
        return {
          returnedMessage: "Question Updated",
          questionList: listAfterUpdationQuestion,
        };
  
      case actionCreators.GET_QUESTION_BY_ID:
        let listOfQuestionById = action.payload;
  
        return {
          questionObj: listOfQuestionById,
        };
  

        default:
      return state;
  }
};
export default reducer;