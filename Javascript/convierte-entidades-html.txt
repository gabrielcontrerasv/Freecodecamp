function convertHTML(str) {
let obj = {
"&":"&amp;",
"<":"&lt;",	
">":"&gt;",
'"':"&quot;",  
"'": "&apos;"
}  
let re = /([&<>\"'])/g
return str.replace(re, key => obj[key]);
  
}

convertHTML("Dolce & Gabbana");