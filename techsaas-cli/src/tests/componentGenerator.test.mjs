import { describe, it } from 'mocha';
import { expect } from 'chai';
import generateComponent from '../generators/componentGenerator.mjs';

describe('Component Generator', () => {
  it('should generate a component', () => {
    const result = generateComponent('TestComponent');
    expect(result).to.include('TestComponent');
  });
});
