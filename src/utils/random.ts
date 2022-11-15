export function numBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function coinFlip() {
  return numBetween(1, 1000) % 2 === 0 ? "heads" : "tails";
}
