const partH = (whichTest) => {

  // NOTE:
  // The indent variable is just for writing a clean explanation of what's happening
  // to the screen. You don't need it to actually solve the problem.
//logToStream();

  const recurse = (input, target, path=[], offset=0, indent="   > ") => {
                                                            logToStream(`${indent}recurse(${JSON.stringify(input)}, target=${target}, path=${JSON.stringify(path)}, offset=${offset})`);
    if (target === 0) {
                                                            logToStream(`${indent}  FOUND A SOLUTION                               <<< SOLUTION! ${toSolution(path)}`);
      // Because our forEach loop pushes and pops to path, and array variables are
      // passed by REFERENCE (instead of value, like a number), we have to return
      // a COPY of the path!
      return [[...path]];
    }
    if (target < 0) return [];

    const results = [];

    for (let i = offset; i < input.length; i++) {
      const value = input[i];
                                                            logToStream(`${indent}  consider input ${value} (${target}-${value}=${target - value})`);
      path.push(value);
      results.push(...recurse(input, target - value, path, offset=i, indent=indent + "  | "));
      path.pop();
    }
    
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
  log(`STEP H: Return the sums as a UNIQUE 2d array in an ideal way.`);
  log(`--------------------------------------------------------------------------------\n`);
  log(`We've got a faster solution that's still correct because we're 'pruning'`);
  log(`branches that will only give us duplicate values!`);
  log(``);
  log(`Notice how much less text is below, especially for Test 6. Compare to Step G.`);
  log(`That's because we're executing less code, or 'pruning'.`);
  log(``);
  log(`--------------------------------------------------------------------------------\n`);
  log(`Summary of all tests:`)
  for (let i = 0; i < testCases.length; i++) summarizeIt(i);

  log(``);
  log(`Explained test:`)
  const testCase = testCases[whichTest];
  explainIt(testCase);
};
