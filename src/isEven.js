import readlineSync from 'readline-sync';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const getRandomInt = () => {
    const result = Math.floor(Math.random() * 99);
    return result === 0 ? 1 : result;
  };
  const isEven = (num) => num % 2 === 0;

  let count = 3;
  while (count > 0) {
    const num = getRandomInt();
    const quest = readlineSync.question(`Question: ${num}\nYour answer: `);
    const answer = () => isEven(num) ? 'yes' : 'no';
    if (answer() === quest) {
      console.log('Correct!')
      count -= 1;
    } else {
      console.log(`"${quest}" is wrong answer ;(. Correct answer was "${answer()}".`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};
