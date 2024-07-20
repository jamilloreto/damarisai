export function getRandom(): number[] {
  const numbers: number[] = [];
  while (numbers.length < 4) {
    const i = Math.floor(Math.random() * 20);
    if (!numbers.includes(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}
