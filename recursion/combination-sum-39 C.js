const partC = (whichTest) => {

  // NOTE:
  // The indent variable is just for writing a clean explanation of what's happening
  // to the screen. You don't need it to actually solve the problem.

  const recurse = (input, target, indent="   > ") => {
                                                            logToStream(`${indent}recurse(${JSON.stringify(input)}, target=${target})`);
    if (target === 0) {
                                                            logToStream(`${indent}  FOUND A SOLUTION                          <<< SOLUTION!`);
      return [];
    }
    if (target < 0) return [];

    const result = [];

    input.forEach(value => {
                                                            logToStream(`${indent}  consider input ${value} (${target}-${value}=${target - value})`);
      recurse(input, target - value, indent + "  | ");
    });
    
    return result;
  };






















  /////////////////////////////////////////////////////////////////////////////////
  // EVERYTHING BELOW THIS LINE CAN BE IGNORED
  /////////////////////////////////////////////////////////////////////////////////

  const testIt = (testCase) => {
    clearStream();

    const actual = recurse(testCase.input, testCase.target);
    const wasSuccessful = JSON.stringify(actual) == JSON.stringify(testCase.expected);

    return {wasSuccessful: wasSuccessful, actual: actual};
  };

  const summarizeIt = (testIndex) => {
    const testCase = testCases[testIndex];
    const result = testIt(testCase);
    const passFail = result.wasSuccessful
        ? '.. pass ..'
        : '!! FAIL !!';

    log(`${passFail}   (Test ${testIndex+1})   candidates = ${JSON.stringify(testCase.input)}, target=${testCase.target}`);
  }

  const explainIt = (testCase) => {
    const result = testIt(testCase);

    const input = testCase.input;
    const target = testCase.target;
    const expected = testCase.expected;

    log(result.wasSuccessful
        ? '.. pass ........................................................................'
        : '!! FAIL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    log(``);
    log(`   Input: candidates = ${JSON.stringify(input)}, target=${target}`);
    log(`          Expected output : ${JSON.stringify(expected)}`);
    log(`          Actual output   : ${JSON.stringify(result.actual)}`);
    log(``);
    log(`   Execution:`);
    log(stream);
    log(``);
    log(``);
    log(``);
  }


  clear();
  log(`STEP C: Iterate over all possible values.`);
  log(`--------------------------------------------------------------------------------\n`);
  log(`Our goal is to iterate through every possible combination.`);
  log(`We have to be careful to not loop forever.`);
  log(``);
  log(`We should also consider a simple case:`);
  log(`  candidates = [1], target=2`);
  log(``);
  log(`We know that 1+1=2.`);
  log(`But, as we iterate, we need to eventually terminate the recursion.`);
  log(`So, another way to think about it is: 2-1=1`);
  log(`So, our new target becomes 1.`);
  log(`In the next recursive iteration, we can do 1-1=0.`);
  log(``);
  log(`So, when our target is 0, we know we've found an answer.`);
  log(``);
  log(``);
  log(`But what if we had this case?`);
  log(`  candidates = [2], target=3`);
  log(``);
  log(`We can apply the same logic: 3-2=1`);
  log(`On the next iteration: 1-2=-1`);
  log(``);
  log(`Since 2+2=4, not 3, that's not a solution.`);
  log(`So, we know that when target is less than 0, we don't have a solution.`);
  log(``);
  log(`--------------------------------------------------------------------------------\n`);
  log(`Summary of all tests:`)
  for (let i = 0; i < testCases.length; i++) summarizeIt(i);

  log(``);
  log(`Explained test:`)
  const testCase = testCases[whichTest];
  explainIt(testCase);
};
