// const engineerExp: number = 3;
// const engineerProjects: number = 12;
// const isProfit = engineerProjects / engineerExp >= 4;
// const fixSalary = 500000;
// let premium = 0;

// if (isProfit) {
//   if (fixSalary > 400000) {
//     premium = 10;
//   } else if (fixSalary > 300000) {
//     premium = 15;
//   } else {
//     premium = 20;
//   }
// }
// const salary = fixSalary + (fixSalary / 100) * premium;
// console.log(`зарплата сотрудника: ${salary}`);

// function myName() {
//   console.log("мое имя рус");
// }

// myName();

// const nameUser = "Сэм";

// function myName(name: string) {
//   console.log(`моё имя ${name}`);
// }
// myName(nameUser);

// function myName(name: string, age: number) {
//   console.log(`моё имя ${name}`);
//   console.log(`мой возраст ${age}`);
// }
// myName("Руслан", 25);

// function getSalary(fixSalary: number, experience: number, projects: number) {
//   const isProfit = projects / experience >= 4;
//   let premium = 0;

//   if (isProfit) {
//     if (fixSalary > 400000) {
//       premium = 10;
//     } else if (fixSalary > 300000) {
//       premium = 15;
//     } else {
//       premium = 20;
//     }
//   }
//   const salary = fixSalary + (fixSalary / 100) * premium;

//   return salary;
// }

// console.log(`Зврплата 1 сотрудника: ${getSalary(250000, 3, 12)}`);
// console.log(`Зврплата 2 сотрудника: ${getSalary(350000, 5, 25)}`);

// function getProfit(experience: number, projects: number) {
//   const profit = projects / experience;
//   if (profit >= 4) {
//     return "эффективен";
//   } else if (profit >= 3) {
//     return "должен улучшить результаты";
//   } else {
//     return "требуется пройти переквалификацию";
//   }
// }
// console.log(`1 сотрудник:${getProfit(4, 16)}`);
// console.log(`1 сотрудник:${getProfit(5, 18)}`);
// console.log(`1 сотрудник:${getProfit(3, 7)}`);

// -
// type TStatus = "CREATED" | "SENT" | "RECEIVED" | "COMPLETED";
// let currentStatus: TStatus = "CREATED";
// const getStatusClaim = (status: TStatus) => {
//   switch (status) {
//     case "CREATED": {
//       console.log("заявка создана и отправлена руководителю");
//       currentStatus = "SENT";
//       break;
//     }
//     case "SENT": {
//       console.log("руководитель отправил заявку");
//       currentStatus = "RECEIVED";
//       break;
//     }
//     case "RECEIVED": {
//       console.log("сотрудник подтверждает заявку");
//       currentStatus = "COMPLETED";
//       break;
//     }
//     case "COMPLETED": {
//       console.log("бухгалтер подтверждает завершение");
//       break;
//     }
//   }
// };

// getStatusClaim(currentStatus);
// getStatusClaim(currentStatus);
// getStatusClaim(currentStatus);
// getStatusClaim(currentStatus);

// enum Departaments {
//   tech = "Технический",
//   design = "Дизайн",
//   support = "Поддержка",
// }
// console.log(`Отдел:${Departaments.tech}`);
// console.log(`Отдел:${Departaments.design}`);
// console.log(`Отдел:${Departaments.support}`);
//
// const hGT = (price: number) => {
//   if (price > 10000) {
//     return "премиум";
//   } else if (price > 6000) {
//     return "продвинутый";
//   }
//   return "стандарт";
// };

// const getInfoTarif = (
//   position: number,
//   onGetTarifTitle: (price: number) => string
// ) => {
//   const sum = position * 1000;
//   console.log("цена тарифа: " + sum);
//   console.log(`Тариф: ${onGetTarifTitle(sum)}`);
// };
// getInfoTarif(4, hGT);
//
// type TCompany = {
//   incomeOfYEar: string;
//   employees: number;
//   laidoEmployees: number;
//   newEmployees: number;
// };

// const company: TCompany = {
//   incomeOfYEar: "3.2M",
//   employees: 416,
//   laidoEmployees: 60,
//   newEmployees: 45,
// };
// console.log(company);

// company.employees = 400;
// company.laidoEmployees = 44;
// company.newEmployees = 64;

// console.log(company);
//
//

// type TDaysInvacation = 7 | 14;
// type TVacationPackage = "in_city" | "country" | "travel";

// type TVacationOrder = {
//   nameEmployeer: string;
//   date: string;
//   isFamily: boolean;
//   daysInVacation: TDaysInvacation;
//   package: TVacationPackage;
// };

// const vacationOrder: TVacationOrder = {
//   nameEmployeer: "Виктор ",
//   date: "14 марта",
//   isFamily: false,
//   daysInVacation: 7,
//   package: "travel",
// };

// enum VacationPackage {
//   in_city = "в городе",
//   country = "по стране",
//   travel = "за границу",
// }

// const getFamilyText = (isFamily: boolean) => {
//   if (isFamily) {
//     return "с семьей";
//   }
//   return "в одиночку";
// };
// console.log(
//   `сотрудник ${vacationOrder.nameEmployeer} ${getFamilyText(
//     vacationOrder.isFamily
//   )} Берет отпуск ${vacationOrder.date} на
//   ${vacationOrder.daysInVacation} дней ${
//     VacationPackage[vacationOrder.package]
//   }`
// );

//\
// type person = {
//   name: string;
//   age: number;
// };

// const people: person[] = [
//   {
//     name: "Игорь",
//     age: 23,
//   },
//   {
//     name: "Анатолий",
//     age: 23,
//   },
//   {
//     name: "Никита",
//     age: 23,
//   },
// ];

// console.log(people[1].age);
// console.log(people[0].name);
// console.log(people[2]);
//
// for (let i = 0; i <= 60; i++) {
//   console.log(i);
// }
//
// const months = ["январь", "февраль", "март", "апрель"];
// for (let index = 0; index < months.length; index++) {
//   console.log(months[index]);
// }
//
// const numbers: number[] = [23, 10, 32, 89, 8, 2, 11, 43, 95, 59];
// const moreTwenty: number[] = [];

// for (let idx = 0; idx < numbers.length; idx++) {
//   if (numbers[idx] > 20) {
//     moreTwenty.push(numbers[idx]);
//   }
// }

// console.log(moreTwenty);
//копирование
// const tikTak: number[] = [1, 2, 3];
// const copyTT: number[] = [...tikTak];
// //
// console.log(copyTT);
// //добавление
// const tikTakS: number[] = [1, 2, 3];
// const extTTS: number[] = [...tikTakS, 4, 5];
// console.log(extTTS);
// //объединение(взял как основной массив tikTak ид написал новый)
// const nextMass: number[] = [4, 5, 6, 7];
// const sumMass: number[] = [...tikTak, ...nextMass];
// console.log(sumMass);
//
//callback в функциях массива,пример с forEach
// const units: number[] = [4, 8, 3, 9, 10];

// const getElement = (element: number) => {
//   console.log(element);
// };

// units.forEach(getElement);
//
//index в callback
// const units: number[] = [4, 8, 3, 9, 10];
// units.forEach((value, index) => {
//   console.log("value", value);
//   console.log("index", index);
// });
//

// //задача с forEach
// const units: number[] = [34, 18, 13, 29, 40];
// const moreTwenty: number[] = [];

// units.forEach((unit) => {
//   if (unit > 20) {
//     moreTwenty.push(unit);
//   }
// });

// console.log(moreTwenty);

//map объяснение
//свойство map обязательно должно возвращать элемениы,т.е.
//внутри callcback мы должны использовать оператор return

// const units: number[] = [34, 18, 13, 29, 40];
// const getElement = (elemet: number) => {
//   return elemet;
// };

// units.map(getElement);
//
//задача создать новый массив с увеличенными значениями в 2 раза
//1 вариант
// let units = [4, 3, 9, 8, 5];
// units = units.map((unit) => {
//   return unit * 2;
// });
// console.log(units);
//2 вариант
// const units = [4, 3, 9, 8, 5];
// const newUnits = units.map((unit) => {
//   return unit * 2;
// });
// console.log(units);
// console.log(newUnits);
//
//еще варианты записи
// const units = [4, 3, 9, 8, 5];
// const newUnits = units.map((unit) => unit * 2);
// console.log(newUnits);
//
// let units = [4, 3, 9, 8, 5];
// units = units.map((unit) => unit * 2);
// console.log(units);
//
//задача создать массив объектов и увеличить их возраст на 5 лет

// type Thuman = {
//   name: string;
//   age: number;
// };

// const humans: Thuman[] = [
//   { name: "Виктор", age: 26 },
//   { name: "Максим", age: 29 },
// ];

// const newHuman = humans.map((man) => {
//   return { ...man, age: man.age + 5 };
// });
// console.log(newHuman);
//
//Filter возвращает в callback только те элементы которые будут true из заданного условия в callback
// const units = [13, 33, 45, 97, 12, 21];
// const newUnits = units.filter((unit) => {
//   return unit > 20;
// });
// console.log(newUnits);
//
//sort выполняет сортировку изменяя исходный массив а также возвращает
//отсортированный массив
//сортировка это переставление элементов в определенном порядке по возрастанию или по убыванию.
// const units = [33, 13, 95, 45];
// units.sort();
// console.log(units);
//сортировка массива с объектами
//чтобы отсортировать массив с объектами,необходимо использовать callback
//callback y sort имеет специфические условия,если в filter возвращается return true/false
//то в sort возвращается раность текущего элемента и следующего return curren-next

// const units = [{ age: 35 }, { age: 21 }, { age: 18 }, { age: 25 }];
// units.sort((current, next) => current.age - next.age);
// console.log(units);

//сортируются они так
//return current-next:сортирует по возрастанию
//return next-current:сортирует по убыванию
// const units = [{ age: 35 }, { age: 21 }, { age: 18 }, { age: 25 }];
// units.sort((current, next) => next.age - current.age);
// console.log(units);
//
// type TEmployeers = {
//   name: string;
//   age: number;
//   isActive: boolean;
// };
// type TempoyersSalary = {
//   name: string;
//   age: number;
//   isActive: boolean;
//   allowance: number;
// };

// const employeers: TEmployeers[] = [
//   {
//     name: "Rina",
//     age: 58,
//     isActive: true,
//   },
//   {
//     name: "Kathryn",
//     age: 25,
//     isActive: false,
//   },
//   {
//     name: "Wilfred",
//     age: 17,
//     isActive: true,
//   },
//   {
//     name: "Genna",
//     age: 26,
//     isActive: true,
//   },
//   {
//     name: "Celle",
//     age: 25,
//     isActive: true,
//   },
//   {
//     name: "Torre",
//     age: 24,
//     isActive: false,
//   },
//   {
//     name: "Amerigo",
//     age: 46,
//     isActive: false,
//   },
//   {
//     name: "Shayne",
//     age: 11,
//     isActive: true,
//   },
//   {
//     name: "Darline",
//     age: 32,
//     isActive: false,
//   },
//   {
//     name: "Rourke",
//     age: 64,
//     isActive: false,
//   },
// ];
// const actEmployeers = employeers.filter((person) => person.isActive);

// const employeersSalary: TempoyersSalary[] = actEmployeers.map((person) => {
//   let salary = 200000;
//   if (person.age < 20) {
//     salary = 50000;
//   } else if (person.age < 30) {
//     salary = 100000;
//   } else if (person.age < 40) {
//     salary = 150000;
//   }
//   return { ...person, allowance: salary };
// });

// employeersSalary.sort((current, next) => current.age - next.age);
// console.log(employeersSalary);
////
//Object.entries

// type TPersonSkill = {
//   exp: number;
//   people: number;
//   rating: number;
// };

// type TDepartment = {
//   trading: TPersonSkill;
//   lawyers: TPersonSkill;
// };

// const departament: TDepartment = {
//   trading: {
//     exp: 10,
//     people: 300,
//     rating: 6.6,
//   },
//   lawyers: {
//     exp: 12,
//     people: 359,
//     rating: 7.3,
//   },
// };

// console.log(Object.entries(departament));

// // Object.entries(departament).forEach(([key, value]) => {});

// const entrDepartaments = Object.entries(departament);

// let sumRating = 0;

// entrDepartaments.forEach(([key, departament]) => {
//   sumRating += departament.rating;
// });
// console.log(`средний рейтинг отделов:${sumRating / entrDepartaments.length}`);

//  NULL and UNDEFIEND

//UNDEFIEND = это тип обозначающий отсутствие значения у переменной

// let person: null = null;
// console.log(person);

export const hello = "салам амаллейкум";
