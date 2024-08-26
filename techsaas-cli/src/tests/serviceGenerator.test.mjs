import { describe, it } from 'mocha';
import { expect } from 'chai';
import generateService from '../generators/serviceGenerator.mjs';

describe('Service Generator', () => {
  it('should generate a service', () => {
    const result = generateService('TestService');
    expect(result).to.include('TestService');
  });
});
