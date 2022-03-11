function sumFibs(num){
    const fibonacci = [1, 1];
    for (let i = 2; i < num; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  return fibonacci.filter(ele => ele<=num && ele%2 ===1).reduce((acum,ele)=>acum+ele);
}

sumFibs(4);