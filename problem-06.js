/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

for (var i = 0; i < experience; i++) {
    startingSalary = startingSalary + (startingSalary * 0.05);
}
console.log(startingSalary.toFixed(2));