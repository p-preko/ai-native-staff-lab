export function add(a: number, b: number): number {
  return a + b;
}

export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

export class Calculator {
  private value: number;

  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(n: number): void {
    this.value += n;
  }

  getValue(): number {
    return this.value;
  }
}
