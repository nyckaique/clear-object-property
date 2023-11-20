function clean(obj) {
  for (element in obj) {
    if (obj[element] === null) {
      delete obj[element];
    }
  }
  console.log(obj);
}
//função que deleta propriedades com valor null dentro de um objeto
clean({ name: "Nycollas", surname: "Kaique", age: 25, city: null });
