let username = "JackOfAllTrades";
let userCheck = /^[a-z]([\d]{2,}|[a-z]+\d*)$/i; // Cambia esta línea
let result = userCheck.test(username);