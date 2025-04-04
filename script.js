const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
// ^ DEEPCOPY
for (let i = 0; i < teachers.length; i++) {
  const currentTeachers = teachers[i];
  reversedTeachers.unshift(currentTeachers);
}

console.table(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const currentTeachers = teachers[i];
  if (currentTeachers.length >= 5) {
    longNames.push(currentTeachers);
  }
}

console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

const edIndex = teachers.indexOf("Ed");
teachers.splice(edIndex, 1);
console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers

const isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  const currentTeachers = teachers[i];
  if (currentTeachers === "Fabio") isFabioPresent = true;
}

console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;
