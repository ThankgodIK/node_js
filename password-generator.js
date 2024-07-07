import generator from "generate-password";

const password = generator.generate({
  length: 10,
  numbers: true,
  uppercase: true,
  symbols: true,
});

console.log(password);
