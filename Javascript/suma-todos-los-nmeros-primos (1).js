function sumPrimes(num) {
  let re = /^.?$|^(..+?)\1+$/
  const isPrime = (n) => !re.test('1'.repeat(n));
  let lista = []
  let i = 1
  while(i<=num){
    lista.push(i)  
    i++
  } 
  return lista.filter(ele => isPrime(ele)).reduce((acum,num)=>acum+num)
}

sumPrimes(4);
