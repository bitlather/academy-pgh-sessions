const partA = () => {

  /////////////////////////////////////////////////////////////////////////////////
  // YOU CAN JUST IGNORE EVERYTHING IN THIS FILE.
  /////////////////////////////////////////////////////////////////////////////////

  const solveIt = (input, target, expected) => {
    log(`Input: candidates = ${JSON.stringify(input)}, target=${target}`);
    log(`       Expected output: ${JSON.stringify(expected)}`);
    log(``);
    log(``);
    log(``);
  };

  const explainIt = (testCase) => {
    const input = testCase.input;
    const target = testCase.target;
    const expected = testCase.expected;

    log(``);
    log(`   Input: candidates = ${JSON.stringify(input)}, target=${target}`);
    log(`          Expected output : ${JSON.stringify(expected)}`);
    log(``);
  }

  clear();
  log(`STEP A: Draft some unit tests.`);
  log(`--------------------------------------------------------------------------------`);
  log(`NOTE: Selecting a test to explain won't change this output.`);
  log(`--------------------------------------------------------------------------------\n`);
  log(``);
  log(`Explained test:`)
  for (let i = 0; i < testCases.length; i++) explainIt(i);
};
