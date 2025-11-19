import { add, greet } from './good';

describe('Example Tests', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('greet', () => {
    it('should return a greeting message', () => {
      expect(greet('World')).toBe('Hello, World!');
      expect(greet('Jest')).toBe('Hello, Jest!');
    });
  });
});
