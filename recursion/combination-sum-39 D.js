const partD = (whichTest) => {

  // NOTE:
  // The indent variable is just for writing a clean explanation of what's happening
  // to the screen. You don't need it to actually solve the problem.

  const recurse = (input, target, path=[], indent="   > ") => {
                                                            logToStream(`${indent}recurse(${JSON.stringify(input)}, target=${target}, path=${JSON.stringify(path)})`);
    if (target === 0) {
                                                            logToStream(`${indent}  FOUND A SOLUTION                               <<< SOLUTION! ${toSolution(path)}`);
      return path;
    }
    if (target < 0) return [];

    const results = [];

    input.forEach(value => {
                                                            logToStream(`${indent}  consider input ${value} (${target}-${value}=${target - value})`);
      path.push(value);
      results.push(...recurse(input, target - value, path, indent + "  | "));
      path.pop();
    });
    
    return results;
  };






















  /////////////////////////////////////////////////////////////////////////////////
  // EVERYTHING BELOW THIS LINE CAN BE IGNORED
  /////////////////////////////////////////////////////////////////////////////////

  const toSolution = (path) => path.join('+') + "=" + path.reduce((sum, value) => sum + value, 0);

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
  log(`STEP D: Return the sums.`);
  log(`--------------------------------------------------------------------------------\n`);
  log(`Now that we have our terminal case and can iterate recursively, it's time to`);
  log(`return the solution.`)
  log(``)
  log(`I'll take it slow and do this in a few steps. Before moving on, can you spot why`)
  log(`our function isn't returning things correctly? Try to fix it on your own.`)
  log(``);
  log(`--------------------------------------------------------------------------------\n`);
  log(`Summary of all tests:`)
  for (let i = 0; i < testCases.length; i++) summarizeIt(i);

  log(``);
  log(`Explained test:`)
  const testCase = testCases[whichTest];
  explainIt(testCase);
};