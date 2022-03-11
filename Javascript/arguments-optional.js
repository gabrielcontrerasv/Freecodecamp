function addTogether() {
  const [uno, dos] = arguments;
  if (typeof(uno) !== "number")
    return undefined;
  	if (dos === undefined)
    return (dos) => addTogether(uno, dos);
  	if (typeof(dos) !== "number")
    return undefined;
  return uno + dos;
}
addTogether(2,3);