//remplazar la pimera letra teniendo en cuenta las mayusculas
function translatePigLatin(str) {
  let re = /^[^aeiou]+/i;
  let mayus = str.match(re);
  return mayus !== null
    ? str.replace(re, "").concat(mayus).concat("ay"): str.concat("way");
}

translatePigLatin("Consonant");