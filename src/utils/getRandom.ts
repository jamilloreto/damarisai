import prompts from "@/assets/prompts.json";

export function getRandom(): number[] {
  const numbers: number[] = [];
  while (numbers.length < 4) {
    const i = Math.floor(Math.random() * prompts.length);
    if (!numbers.includes(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}
