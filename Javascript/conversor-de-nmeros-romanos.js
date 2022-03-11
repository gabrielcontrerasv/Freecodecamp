function convertToRoman(numero) {
    if (typeof numero === 'number' || Number.isInteger(numero)) {    
    const Romanos = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
    '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
    '','I','II','III','IV','V','VI','VII','VIII','IX'];
    let digitos = JSON.stringify(numero).split('');
    let romano = ''; let contador = 3;
    while (contador--) {
        romano = (Romanos[+digitos.pop() + (contador * 10)] || '') + romano
    }
    return Array(+digitos.join('') + 1).join('M') + romano;
}
  else{
    return 'No es un elemento tipo Numero'
  }
}
convertToRoman(3);