const partG = (whichTest) => {

  // NOTE:
  // The indent variable is just for writing a clean explanation of what's happening
  // to the screen. You don't need it to actually solve the problem.

  const recurse = (input, target, path=[], unique = {}, indent="   > ") => {
                                                            logToStream(`${indent}recurse(${JSON.stringify(input)}, target=${target}, path=${JSON.stringify(path)})`);
    if (target === 0) {

      const copyOfPath = [...path].sort();
      const key = copyOfPath.join(',');
      if (key in unique) {
                                                            logToStream(`${indent}  FOUND A DUPLICATE OF A SOLUTION                <<< (DUPLICATE SOLUTION IGNORED: ${toSolution(path)})`);
        return [];
      }
      unique[key] = true;
                                                            logToStream(`${indent}  FOUND A SOLUTION                               <<< SOLUTION! ${toSolution(path)}`);
      // Because our forEach loop pushes and pops to path, and array variables are
      // passed by REFERENCE (instead of value, like a number), we have to return
      // a COPY of the path!
      
      return [copyOfPath];
    }
    if (target < 0) return [];

    const results = [];

    input.forEach(value => {
                                                            logToStream(`${indent}  consider input ${value} (${target}-${value}=${target - value})`);
      path.push(value);
      results.push(...recurse(input, target - value, path, unique, indent + "  | "));
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
  log(`STEP G: Removing duplicates (a so-so way).`);
  log(`--------------------------------------------------------------------------------\n`);
  log(`We've removed the duplicates! Look at the javascript file to understand how.`);
  log(``);
  log(`BUT, this is kind of a slow, messy solution (though it does come in handy from`);
  log(`time to time). We can do better. Want to give it a try? Or did you already`);
  log(`figure it out?`);
  log(``);
  log(`--------------------------------------------------------------------------------\n`);
  log(`Summary of all tests:`)
  for (let i = 0; i < testCases.length; i++) summarizeIt(i);

  log(``);
  log(`Explained test:`)
  const testCase = testCases[whichTest];
  explainIt(testCase);
};
