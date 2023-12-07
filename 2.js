const jsonString = `
{
  "name":"Anton",
  "age":36,
  "skills":["Javascript","HTML","CSS"],
  "salary":80000
}`;

const data = JSON.parse(jsonString);
const jsObject = {
  name: data.name,
  age: Number(data.age),
  skills: data.skills,
  salary: data.salary
};

console.log(jsObject);

const stringResult = JSON.stringify(jsObject);
console.log(stringResult);