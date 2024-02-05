let college = [
    { name: "Tom", age: 17, group: "ИС-2-2" },
    { name: "Bob", age: 13, group: "ИС-2-1" },
    { name: "Stan", age: 26, group: "ИС-2-2" },
    { name: "Harry", age: 20, group: "ИС-4-1" },
];

let count = 2
let studentAge = college[count]["age"]
let studentName = college[count]["name"]
if ( studentAge >= 18 ) {
    console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge} лет`);
} else if ( studentAge < 18) {
    console.log(`Студент ${studentName} не совершеннолетний. Ему ${studentAge} лет`); 
}