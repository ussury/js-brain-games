import gameLogic from "./gameLogic.js";

export default (name) => {
  console.log('What is the result of the expression?');
  const getRandomExpression = () => {
    const firstNum = Math.floor(Math.random() * 49);
    const secondNum = Math.floor(Math.random() * 10);
    const symbols = ['*', '-', '+'];
    const symbol = symbols[Math.floor(Math.random()*symbols.length)];
    const getExpression = (symbol) => {
      if (symbol === '*') {
        return firstNum * secondNum;
      }
      if (symbol === '+') {
        return firstNum + secondNum;
      }
      if (symbol === '-') {
        return firstNum - secondNum;
      }
    };
    const resultExpression = String(getExpression(symbol));
    const strExpression = `${String(firstNum)} ${symbol} ${String(secondNum)}`;
    return [resultExpression, strExpression];
  };

  return gameLogic(name, getRandomExpression);
};
