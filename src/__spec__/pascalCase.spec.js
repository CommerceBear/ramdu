import assert from 'assert';
import pascalCase from '../pascalCase';

describe('pascalCase', () => {
  it('works', () => {
    assert.equal(pascalCase('My name is Earl'), 'MyNameIsEarl');
    assert.equal(pascalCase('my-name-is-earl'), 'MyNameIsEarl');
  });
});
