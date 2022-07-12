const isPrime = (number) => {
  let simpleNumber = number;

  if (simpleNumber < 2) return false;
  if (simpleNumber % 2 == 0 && simpleNumber > 2) return false;

  for (let i = 2; i <= simpleNumber; i++) {

    if(simpleNumber % i === 0) {
      return false
    };

    return true;
  };
};

console.log(isPrime(Number(prompt('Введите ваше число: ', 13))));