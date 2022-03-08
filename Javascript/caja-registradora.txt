let unidad = {
  'PENNY': 1,
  'NICKEL': 5,
  'DIME': 10,
  'QUARTER': 25,
  'ONE': 100,
  'FIVE': 500,
  'TEN': 1000,
  'TWENTY': 2000,
  'ONE HUNDRED': 10000
}

function checkCashRegister(price, cash, cid) {
  let obj = {status:'OPEN',change:[]}
  let cambios = cash * 100 - price * 100
  let total = 0;
  let ordenados = cid.filter(cid => cid[1] !== null).reverse();
  let revision = cambios;
  
    ordenados.map(cid => {
    let actual = cid[0];
    let sumaActual = cid[1] * 100;
    total += sumaActual;
    let cantidad = 0;
    while (cambios >= unidad[actual] && sumaActual > 0) {
      cantidad += unidad[actual]; 
      cambios -= unidad[actual];
      sumaActual -= unidad[actual];
    }
    if (cantidad !== 0) {
      obj.change.push([actual, cantidad / 100]);
    }
  });

  if (cambios > 0) {
    obj.status = 'INSUFFICIENT_FUNDS';
    obj.change = [];
  } else if (cambios === 0 && revision === total) {
    obj.status = 'CLOSED';
    obj.change = cid;
  } else {
    obj.status = 'OPEN';
  }
  return obj
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);