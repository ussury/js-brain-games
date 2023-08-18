import { getRandomInt, gameLogic } from './gameLogic.js';

const getProgression = () => {
  const start = getRandomInt(5);
  const step = getRandomInt(4);
  const randomSymbol = getRandomInt(9);

  const iter = (acc, count, el) => {
    if (count === 0) return acc;
    return iter([...acc, el], count - 1, el + step);
  };
  const progression = iter([], 10, start);
  const resultExpression = String(progression[randomSymbol]);
  progression[randomSymbol] = '..';
  const strExpression = progression.join(' ');

  return [resultExpression, strExpression];
};

export default (name) => {
  console.log('What number is missing in the progression?');
  return gameLogic(name, getProgression);
};
