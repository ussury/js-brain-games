import { gameLogic, getRandomInt } from './gameLogic.js';

const calculatePrimeNum = (num) => {
  for (let i = 2; i < Math.floor(num / 2) + 1; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getRandomExpression = () => {
    const num = getRandomInt(99);
    const answer = calculatePrimeNum(num);
    return [answer, num];
  };

  return gameLogic(name, getRandomExpression);
};
