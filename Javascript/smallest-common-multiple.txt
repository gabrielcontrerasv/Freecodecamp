function smallestCommons(arr) {
  const [minimo, maximo] = arr.sort((a, b) => a - b);
  const range = Array(maximo - minimo + 1).fill(0).map((_, i) => i + minimo);
  const limite = range.reduce((producto, valoractual) => producto * valoractual);
  for (let multiple = maximo; multiple <= limite ; multiple += maximo) {
    const divisible = range.every((valor) => multiple % valor === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);