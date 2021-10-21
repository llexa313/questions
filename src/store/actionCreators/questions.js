export const ALL_QUESTIONS_CHANGED = 'ALL_QUESTIONS_CHANGED';

export default function allQuestionsChanged(questions) {
  return {
    type: ALL_QUESTIONS_CHANGED,
    questions
  }
}
