import readlineSync from 'readline-sync';

export const gameLogic = (name, f) => {
  let count = 3;
  while (count > 0) {
    const randomExpression = f();
    const num = randomExpression[1];
    const answer = randomExpression[0];
    const quest = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (answer === quest) {
      console.log('Correct!');
      count -= 1;
    } else {
      console.log(`"${quest}" is wrong answer ;(. Correct answer was "${answer}".`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export const getRandomInt = (num) => Math.floor(Math.random() * num);
