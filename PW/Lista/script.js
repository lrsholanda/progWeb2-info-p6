var disciplinasPendentes = ["Introdução a programação", "Administração de Sistemas Operacionais", "Fundamentos de Programação I", "Fundamentos de Programação II", "Programação Orientada a Objetos"];
var disciplinasConcluidas = [];

disciplinasPendentes.splice(0,1, "Adicionado Banco de Dados");
disciplinasPendentes.pop();
disciplinasPendentes.splice(5,6, "Adicionado Programação Orientada a objeto");

console.log(disciplinasPendentes); 