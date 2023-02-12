/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function logStudent (student){
  if(student.marks > 50)
  {
    console.log(student)
  }
};

function PrintStudentswithMap() {
  arr.map(logStudent);
  /*arr.map(function (student) {
  if( student.marks > 50 ) 
  {
    console.log(student)
  }
 });*/
  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  arr.forEach(logStudent);
  //Write your code here , just console.log
}

function addData() {
  var studentObj = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(studentObj);
  console.log(arr);
   //Write your code here, just console.log
}

function removeFailedStudent() {
  //var failedStudent=[];
  //for(var i = 0; i< arr.length; i++)
  //{
  //  if(arr[i].marks < 50){
  //    arr.splice(i,1);
  //  }
  //}
  //for(var i=0; i<failedStudent.length; i++){
  //arr.splice(i,1);
  //}
  arr.forEach( function(item,index){
    if(item.marks < 50)
    {
      arr.splice(index,1);
    }
  })
  console.log(arr);
  //Write your code here, just console.log
}

function concatenateArray() {
  let arr1 = [
    { id: 5, name: "aniket", age: "19", marks: 88 },
    { id: 6, name: "sam", age: "17", marks: 75 },
    { id: 7, name: "rash", age: "25", marks: 45 },
  ];
  var finalArr = [];
  arr.forEach(function(item){finalArr.push(item)});
  arr1.forEach(function(item) {
  finalArr.push(item);
});
console.log(finalArr);
  //Write your code here, just console.log
}
