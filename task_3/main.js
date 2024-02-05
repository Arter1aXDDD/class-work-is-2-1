let college = [
    {
        name: "Harry",
        age: 18,
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 5500,
        isStudent: true,
    },
    {
        name: "Ron",
        age: 19,
        group: "ССА-3-2",
        studID: 323232,
        typeLearning: "Заочная",
        task: ["Изо", "ОБЖ", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true,
    },
    {
        name: "Tom",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-3-2",
        kafedra: "Инф.технологии",
        perdmet: ["МДК-02-1", "МДК-02-2", "МДК-09-01", "МДК-09-2"],
        isStudent: false,
    },
    {
        name: "Bob",
        age: 32,
        isKurator: true,
        kuratorGroup: "ИС-2-1",
        kafedra: "Инф.технологии",
        perdmet: ["МДК-02-1", "МДК-02-2", "МДК-09-01", "МДК-09-2"],
        isStudent: false,
    },
];

let count = 2
let humanAge = college[count]["age"]
let humanName = college[count]["name"]
let humanCash = college[count]["cash"]
let thisPupil = college[count]["isStudent"]
let thisSuperwiser = college[count]["isKurator"]
let thisSuperwiserGroup = college[count]["Group"]

if ( thisPupil === true ) {
    console.log(`Вы выбрали студента ${humanName}`);
    if ( humanAge >= 18 ) {
        console.log(`Студент ${humanName} совершеннолетний. Ему ${humanAge}`);
    } else {
        console.log(`Студент ${humanName} не совершеннолетний. Ему ${humanAge}`);
    }
    if (humanCash >= 4500 ) {
        console.log(`Студент ${humanName} получает повышенную стипендию. (${humanAge} руб.)`);
    } else if ( humanCash <= 4400 || peopleCash >= 1) {
        console.log(`Студент ${humanName} получает обычную стипендию. (${humanAge} руб.)`);
    } else if  ( humanCash == 0 ) {
        console.log(`Студент ${humanName} не получает стипендию.`);
    }
} else if ( thisPupil === false ) {
    console.log(`Вы выбрали студента ${humanName}`)
    if ( thisSuperwiser === true) {
        console.log(`Преподаватель ${humanName} куратор группы ${thisSuperwiserGroup}`)
    }
    console.log("Преподаватель")
}