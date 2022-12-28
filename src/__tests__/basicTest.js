import lifeCount from '../index';

test('lifeLine', () => {
  const person = { name: 'Маг', health: 90 };
  const lifeColor = lifeCount(person);
  expect(lifeColor).toBe('healthy');
});

test('lifeLine', () => {
  const person = { name: 'Маг', health: 45 };
  const lifeColor = lifeCount(person);
  expect(lifeColor).toBe('wounded');
});

test('lifeLine', () => {
  const person = { name: 'Маг', health: 12 };
  const lifeColor = lifeCount(person);
  expect(lifeColor).toBe('critical');
});
