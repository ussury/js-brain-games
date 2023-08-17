import { gameLogic, getRandomInt } from './gameLogic.js';

export default (name) => {
  console.log('What is the result of the expression?');
  const getRandomExpression = () => {
    const firstNum = getRandomInt(49);
    const secondNum = getRandomInt(10);
    const symbols = ['*', '-', '+'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const getExpression = (arg) => {
      const result = [];
      if (arg === '*') {
        result.push(firstNum * secondNum);
      }
      if (arg === '+') {
        result.push(firstNum + secondNum);
      }
      if (arg === '-') {
        result.push(firstNum - secondNum);
      }
      return result[0];
    };
    const resultExpression = String(getExpression(symbol));
    const strExpression = `${String(firstNum)} ${symbol} ${String(secondNum)}`;
    return [resultExpression, strExpression];
  };

  return gameLogic(name, getRandomExpression);
};
