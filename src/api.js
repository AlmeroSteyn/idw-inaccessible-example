export const getQuestions = () => {
  return Promise.resolve([
    { qid: 'questions-1', qtext: 'I got value for money' },
    { qid: 'questions-2', qtext: 'The synergy worked' },
    { qid: 'questions-3', qtext: 'Heydon dressed well' }
  ]);
};
