const DEFAULT_RESPONSE = '--';

function fizzBuzz(number) {
  if (number % 15 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return DEFAULT_RESPONSE;
  }
}

for (let i = 1; i <= 30; i++) {
  console.log(fizzBuzz(i));
}


/*
const DEFAULT_RESPONSE = ''

function fizzBuzz(num) {
	if (typeof num !== 'number') return DEFAULT_RESPONSE
  if (num < 1) return DEFAULT_RESPONSE
  
  const isAMultipleOfThree = num % 3 === 0
  const isAMultipleOfFive = num % 5 === 0
  const isAMultipleOfThreeAndFive = isAMultipleOfThree && isAMultipleOfFive

	if (isAMultipleOfThreeAndFive) {
		return "FizzBuzz"
	}

  if (isAMultipleOfThree) {
		return "Fizz"
	}

  if (isAMultipleOfFive) {
	  return "Buzz"
  }

	return ""
}

for (let idx = 0; idx < 100; idx++) {
	const result = fizzBuzz(idx)
	console.log({ idx, result })
}
*/