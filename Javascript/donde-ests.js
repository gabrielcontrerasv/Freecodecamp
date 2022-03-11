function whatIsInAName(collection, source) {
  var Keys = Object.keys(source);
  return collection.filter((element)=> {
    return Keys.every((key)=>{
      return element.hasOwnProperty(key) &&
       element[key] === source[key];
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });