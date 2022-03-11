function sumAll(arr) {
  const [elemento, elemento2] = [...arr].sort((a, b) => a - b);
  return elemento !== elemento2
    ? elemento + sumAll([elemento + 1, elemento2])
    : elemento;
}

sumAll([1, 4]);