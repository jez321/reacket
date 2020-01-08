import convertMatchesToRounds from './convertMatchesToRounds';

const matches = require('../data/testData.json');

test('correctly converts test data matches array to array of rounds', () => {
  const rounds = convertMatchesToRounds(matches);
  expect(rounds.length).toEqual(3);
  expect(rounds[0].matches.length).toEqual(4);
  expect(rounds[1].matches.length).toEqual(2);
  expect(rounds[2].matches.length).toEqual(1);
});
