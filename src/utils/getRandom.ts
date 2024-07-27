export function getRandom(length: number): number[] {
  const numbers: number[] = [];
  while (numbers.length < 6) {
    const i = Math.floor(Math.random() * length);
    if (!numbers.includes(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}
