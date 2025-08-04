/** Problem -01 ( Divide the Asset ) */
var area = 800;

var totalBrothers = 2;
var eachShare = area / totalBrothers;
console.log(eachShare);



/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;

if (money > 25000) {
    console.log("Laptop");
}

else if (money >= 10000) {
    console.log("Cycle");
}

else {
    console.log("Chocolate");
}



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;

for (var day = 1; day <= lastDay; day++) {
    if (day % 3 === 0) {
        console.log(day + " - medicine");

    } else {
        console.log(day + " - rest");
    }
}



/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";

if (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
  console.log("Store");
}

else {
  console.log("Delete");
}



/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };

console.log(student.name + student.roll + "." + student.department + "@ph.ac.bd");



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

for (var i = 0; i < experience; i++) {
    startingSalary = startingSalary + (startingSalary * 0.05);
}
console.log(startingSalary.toFixed(2));