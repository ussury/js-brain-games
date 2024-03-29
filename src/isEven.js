import { gameLogic, getRandomInt } from './gameLogic.js';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const getRandomExpression = () => {
    const result = getRandomInt(99);
    const num = result === 0 ? 1 : result;
    const isEven = (arg) => arg % 2 === 0;
    const answer = isEven(num) ? 'yes' : 'no';
    return [answer, num];
  };
  return gameLogic(name, getRandomExpression);
};
