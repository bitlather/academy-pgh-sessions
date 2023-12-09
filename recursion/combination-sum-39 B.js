const partB = (whichTest) => {

  const recurse = (input, target) => {
    const result = [];
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
  }

  clear();
  log(`STEP B: Solve the simplest case (no loops or recursion)`);
  log(`--------------------------------------------------------------------------------\n`);
  log(`Summary of all tests:`)
  for (let i = 0; i < testCases.length; i++) summarizeIt(i);

  log(``);
  log(`Explained test:`)
  const testCase = testCases[whichTest];
  explainIt(testCase);
};
