function binaryAgent(str){
  str = str.replace( /\s/g,'')
  let caracter, salida = '';
  for(let i=0; i < str.length; i += 8 ){
    caracter = parseInt(str.substr( i, 8 ), 2 ).toString( 16 );
    salida += '%' + ( ( caracter.length % 2 == 0 ) ?    caracter : '0' + caracter );
           }
return decodeURIComponent(salida);
    }

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");