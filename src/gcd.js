import { gameLogic, getRandomInt } from './gameLogic.js';

const gcd = (num1, num2) => {
  if (num2 > num1) {
    return gcd(num2, num1);
  }
  if (!num2) {
    return String(num1);
  }
  return gcd(num2, num1 % num2);
};

export default (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomExpression = () => {
    const firstNum = getRandomInt(49);
    const secondNum = getRandomInt(49);
    const strExpression = `${String(firstNum)} ${String(secondNum)}`;
    const resultExpression = gcd(firstNum, secondNum);
    return [resultExpression, strExpression];
  };

  return gameLogic(name, getRandomExpression);
};
