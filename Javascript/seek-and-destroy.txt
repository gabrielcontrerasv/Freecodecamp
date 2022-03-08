function destroyer(arr, ...valores) {
  return arr.filter(elem => !valores.includes(elem));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);