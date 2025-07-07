// Задание 1
//  Задание: Создайте тип Astronaut (Космонавт), у которого есть следующие поля:

// isInSpace — булево значение (находится ли в космосе)
// experienceYears — число (сколько лет опыта)
// assistantRobot — объект типа Robot
// missions — массив строк, например: ["Moon Landing", "ISS Maintenance"]
// Тип Robot должен быть объектом с ключом model (например, { model: "XR-12" }).

// Затем создайте типизированные переменные, используя эти типы.

// Цель: Закрепить знание о:

// типах объектов в TypeScript
// вложенных типах
// массивах и булевых значениях


// Robot type
type Robot = {
  model: string; 
};

// Custom Astronaut type
type Astronaut = {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: string[]; // array of mission names
};

// INITIAL SETUP DATA

// Astronaut 1 config
const Astronaut_1: Astronaut = {
  isInSpace: true,
  experienceYears: 12,
  assistantRobot: { model: "XR-12" },
  missions: ["Moon Landing", "ISS Maintenance"],
};


// Astronaut 2 config
const Astronaut_2: Astronaut = {
  isInSpace: false,
  experienceYears: 5,
  assistantRobot: { model: "AE-17" },
  missions: ["Sun Landing", "Discovery Mission"],
};

// Setup print function
function print_Astronaut_Info(astronaut: Astronaut, index: string): void {

  console.log("\n 🧑 Astronaut " + index+":\n"); 
  console.log(` - In Space: ${astronaut.isInSpace}`);
  console.log(` - Experience: ${astronaut.experienceYears} years`);
  console.log(` - with Robot: 🤖 ${astronaut.assistantRobot.model}`);
  console.log(` - Missions: ${astronaut.missions.join(", ")}`);
}





// Run

require('child_process').execSync(process.platform === 'win32' ? 'cls' : 'clear', { stdio: 'inherit' }); // Clear console
console.log("🚀 Homework 01: Astronauts and Robots\n------------------------------------------");

// Print Astronauts info
for (let i = 1; i < 3; i++) {
 print_Astronaut_Info(eval("Astronaut_" + i), i.toString());
console.log("------------------------------------------");

}

