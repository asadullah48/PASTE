// Part 1 : Basic Array
//Define a type alias named product to represent a product with the following
//properties:
//name (string): The name of the product.
//price (number):The price of the product.
//inventory (object): An object containing inventory details including:
//stock (number): The number of products available.
//colorOptions (string[]): An array listing available colors.
//2.Create an array named products containing at least three product objects.
//Each. product object should include a name,price and inventory details.
//3.Implement a function named changeColor that takes a product object and a new 
//color as input. This function should update the color property of the product and 
//adjust the price based on the new color (implement your own logic, e.g. , increase by
//10% for red, decrease by 5% for blue).
//4.Display each product's name,price,stock, and available colors. Iterate through the 
//products array and print each product's details.


type Product={
    name:string,
    price:number,
    inventory:{
       stock:number,
       coloroption:string[],
    }
}
  let products:Product[]=[{
       name:"laptop",
       price:12000,
       inventory:{
            stock:3000,
            coloroption:["black","silver"],
       }
  },
 
  {
      name:"smartwatch",
       price:3000,
       inventory:{
            stock:5000,
            coloroption:["white","black",],
  }
},
   {
      name:"headphone",
       price:1200,
       inventory:{
            stock:1000,
            coloroption:["white","black",],
  }
},
  ]
  function changeColor(products:Product,newcolor:string){
        products.inventory.coloroption.push(newcolor);
        if(newcolor === "blue"){
        products.price += products.price*0.15;
        }
     else if (newcolor === "red"){
        products.price -= products.price*0.05;
     }
 
  else if(newcolor === "purple"){
       products.price += products.price*0.95;  
  }

  else if(newcolor === "silver"){
       products.price -= products.price*0.10;
 }
  else{console.log(`sorry ! this ${newcolor} is not available`)}

 }
 function displayproductdetails (product:Product[]){
       product.forEach(products => {
        console.log(`Name: ${products.name}`)
        console.log(`Price: ${products.price}`) 
        console.log(`Stock: ${products.inventory.stock}`) 
        console.log(`Available color :${products.inventory.coloroption}`)
  } )
 }
  changeColor(products[0],"blue")
  changeColor(products[1],"red")
  changeColor(products[2],"purple")
  displayproductdetails(products);
 //Part 2.
//Challenge:
//You are tasked with creating a student grading system.Implement functions and logic to
//manage student grades effectively.
//1.Define a typescript type alias named student to represent a student with the 
//following properties:
//.name(string):The name of the student.
//.grades(number[]):An array of grades for different subjects.
//2.Create an array named students containing at least three student objects.
// Each student object should include a name and an array of grades.
//3.Implement a function named calculateAverageGrade that takes a 
//student's grades as input and returns the average grade for the student.
//4.Display each student's name and average grade.
//Iterate through the students array,calculate the average grade 
//for each student using the calculateAverageGrade
//function,and print their name and average grade.
type Student={
     name:string,
     grades:number[];
}
let students:Student[]=[
 {
   name:"Sana",
   grades:[60,75,80,55,88]
  },
  {
   name : "Adeel",
   grades : [40,60,55,45,50]

},
{
   name : "Aandil",
   grades : [70,50,65,55,60]

}
]
function calculateAverageGrade(grades:number[]){
   let average = 0;
   for(let grade of grades){
        average += grade;
   }
   return average / grades.length;
}

for(let i = 0; i < students.length; i++){
   let avg = calculateAverageGrade(students[i].grades);
   console.log(`Student name ${students[i].name} student average ${avg}`);
}

//Part 3. Array with types and indexing  - E mployee salaries
//Challange:You are managing employee salaries for a company.
//Implement logic to calculate salaries and handle bonouses.
//1.Define a type alias named Employee with the following properties:
//.name (string): The name of the employee.
//.hoursWorked (number): The number of hours the employee work.
//.hourlyRate (number): The hourly rate of the employee .
//.salary (number): The base salary of the employee.
//.Define an array named employees containing employee objects. 
//Each employee object should include a name , hoursWorked, 
//hourlyRate and salary.
//3.Implement a function named calculateSalary that calculates 
//the salary for each employee based on the hours worked and hourly rate.
//4.If an employee has worked 20 hours or more, apply a 10% bonous to their salary.
type Employee={
     name:string,
     hoursWorked:number,
     hourlyRate:number,
    salary:number,
}

let Employee:Employee[]=[{
     name:"sara",
     hoursWorked:22,
     hourlyRate:30,
     salary:0,

    },
{
  name:"ali",
  hoursWorked:23,
 hourlyRate:60,
  salary:0,
},

{
  name:"akram",
  hoursWorked:18,
  hourlyRate:80,
  salary:0,
},
]
function calculateSalary(employee:Employee[]){
    employee.forEach(employee=> {
     employee.salary=employee.hoursWorked*employee.hourlyRate
     if(employee.hoursWorked >= 20){
       employee.salary *= 1.20
       console.log("bonousgiven");
     }
    });
}
calculateSalary(Employee);
console.log(Employee)
Employee.forEach(Employee =>(console.log(`Employee:${Employee.name},Salary:${Employee.salary}`)));