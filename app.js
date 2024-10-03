//            .... QUESTION 1 ....
// let studentNames = [];
// studentNames.push("Alice");
// studentNames.push("Bob");

//            .... QUESTION 2 ....
// let studentNames = new Array();
// studentNames.push("Alice");
// studentNames.push("Bob");
// studentNames[0] = "Alice";
// studentNames[1] = "Bob";

//            .... QUESTION 3 ....
// let studentNames = ["Alice", "Bob", "Charlie"];
// console.log(studentNames[0]); 
// console.log(studentNames[1]); 

//            .... QUESTION 4 ....
// let numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray[0]); 
// console.log(numbersArray[2]); 

//            .... QUESTION 5 ....
// let booleanArray = [true, false, true, false];
// console.log(booleanArray[0]); 
// console.log(booleanArray[1]); 

//            .... QUESTION 6 ....
// let mixedArray = [42, "Hello", true, null, { name: "Alice" }, [1, 2, 3]];
// console.log(mixedArray[1]); 
// console.log(mixedArray[4].name); 
// console.log(mixedArray[5][2]); 

//            .... QUESTION 7 ....
// let qualifications = ["SSC", "HSC", "BCS", "BCOM", "MS", "M.PHIL", "PHD"];
// let list = document.getElementById("qualificationList");
// qualifications.forEach(function(qualification, index) {
//     let listItem = document.createElement("li");
//     listItem.textContent = (index + 1) + ") " + qualification;
//     list.appendChild(listItem);
// });

//            .... QUESTION 8 ....
// let studentNames = ["John", "Michael", "Sarah"];
//         let studentScores = [230, 320, 480];
//         let totalMarks = 500;
//         let resultDisplay = document.getElementById("studentResults");

//         for (let i = 0; i < studentNames.length; i++) {
//             let score = studentScores[i];
//             let percentage = (score / totalMarks) * 100;
//             resultDisplay.innerHTML += `Score of ${studentNames[i]} is ${score}. Percentage: ${percentage}%<br>`;
//         }

//            .... QUESTION 9 ....
// let studentScores = [320, 230, 480, 120];
//         document.getElementById("studentScores").innerHTML = "Scores of students: " + studentScores.join(", ");
//         studentScores.sort(function(a, b) {
//             return a - b;
//         });
//         document.getElementById("sortedScores").innerHTML = "Ordered scores of students: " + studentScores.join(", ");

//            .... QUESTION 10 ....
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
//         document.getElementById("citiesList").innerHTML = "Cities List: " + cities.join(", ");
//         let selectedCities = cities.slice(2, 5);
//         document.getElementById("selectedCitiesList").innerHTML = "Selected Cities List: " + selectedCities.join(", ");

//            .... QUESTION 11 ....
// var arr = ["THIS", "is", "my", "cat"];
//         var singleString = arr.join(" "); 
//         document.getElementById("result").innerHTML = "Joined String: " + singleString;

//            .... QUESTION 12 ....
// let fifoArray = [];
// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");
// fifoArray.push("Value 4");
// let result = "Values in FIFO order: <br>";
// while (fifoArray.length > 0) {
//     result += fifoArray.shift() + "<br>";
// }
// document.getElementById("result").innerHTML = result;