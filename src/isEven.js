import gameLogic from "./gameLogic.js";

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const getRandomExpression = () => {
    const result = Math.floor(Math.random() * 99);
    const num = result === 0 ? 1 : result;
    const isEven = (num) => num % 2 === 0;
    const answer = isEven(num) ? 'yes' : 'no';
    return [answer, num];
  };
  return gameLogic(name, getRandomExpression);
};

