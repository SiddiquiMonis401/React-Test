import {
  CorrectAnswer,
  WrongAnswer,
  QuestionChange,
  ChangeEnd
} from './ActionTypes'

export const AppReducer = (state, action) => {
  switch (action.type) {
    case QuestionChange:
      return { ...state, questionsAsked: (state.questionsAsked += 1) }
    case CorrectAnswer:
      const correctAnswer = (state.correctAnswer += 1)
      const currentProgress = state.correctAnswer / (state.questionsAsked + 1)
      const minIfC = state.correctAnswer / state.questions.length;
      return {
        ...state,
        correctAnswer: correctAnswer,
        currentProgress: currentProgress,
        minScore: minIfC
      }
    case WrongAnswer:
      const currentProgressW = state.correctAnswer / (state.questionsAsked + 1)
      const remainingIfW = state.questions.length - (state.questionsAsked + 1)
      const maxScoreIfW =((state.correctAnswer + remainingIfW) / state.questions.length)
      return {
        ...state,
        currentProgress: currentProgressW,
        maxScore: maxScoreIfW,
      }
    case ChangeEnd:
      return { ...state, ended: true }
    default:
      return state
  }
}
