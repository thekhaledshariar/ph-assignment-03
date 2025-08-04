/** Problem 04 - (Delete / Store) */
var fileName = "slipdf.txt";

if (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}