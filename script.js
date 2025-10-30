function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

// pegar a tag img
  const img = document.querySelector("#profile img")

// function = palavra reservada para declarar uma função
// toggleMode = nome da função
// () = parênteses que indicam que é uma função
// { } = chaves que delimitam o corpo da função
// const = palavra reservada para declarar uma constante
// document.documentElement = seleciona o elemento raiz do documento (geralmente a tag <html>)
// .classList.toggle("light") = alterna a classe "light" no elemento selecionado
