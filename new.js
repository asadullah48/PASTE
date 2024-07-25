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
let products = [{
        name: "laptop",
        price: 12000,
        inventory: {
            stock: 3000,
            coloroption: ["black", "silver"],
        }
    },
    {
        name: "smartwatch",
        price: 3000,
        inventory: {
            stock: 5000,
            coloroption: ["white", "black",],
        }
    },
    {
        name: "headphone",
        price: 1200,
        inventory: {
            stock: 1000,
            coloroption: ["white", "black",],
        }
    },
];
function changeColor(products, newcolor) {
    products.inventory.coloroption.push(newcolor);
    if (newcolor === "blue") {
        products.price += products.price * 0.15;
    }
    else if (newcolor === "red") {
        products.price -= products.price * 0.05;
    }
    else if (newcolor === "purple") {
        products.price += products.price * 0.95;
    }
    else if (newcolor === "silver") {
        products.price -= products.price * 0.10;
    }
    else {
        console.log(`sorry ! this ${newcolor} is not available`);
    }
}
function displayproductdetails(product) {
    product.forEach(products => {
        console.log(`Name: ${products.name}`);
        console.log(`Price: ${products.price}`);
        console.log(`Stock: ${products.inventory.stock}`);
        console.log(`Available color :${products.inventory.coloroption}`);
    });
}
changeColor(products[0], "blue");
changeColor(products[1], "red");
changeColor(products[2], "purple");
displayproductdetails(products);
let students = [
    {
        name: "Sana",
        grades: [60, 75, 80, 55, 88]
    },
    {
        name: "Adeel",
        grades: [40, 60, 55, 45, 50]
    },
    {
        name: "Aandil",
        grades: [70, 50, 65, 55, 60]
    }
];
function calculateAverageGrade(grades) {
    let average = 0;
    for (let grade of grades) {
        average += grade;
    }
    return average / grades.length;
}
for (let i = 0; i < students.length; i++) {
    let avg = calculateAverageGrade(students[i].grades);
    console.log(`Student name ${students[i].name} student average ${avg}`);
}
let Employee = [{
        name: "sara",
        hoursWorked: 22,
        hourlyRate: 30,
        salary: 0,
    },
    {
        name: "ali",
        hoursWorked: 23,
        hourlyRate: 60,
        salary: 0,
    },
    {
        name: "akram",
        hoursWorked: 18,
        hourlyRate: 80,
        salary: 0,
    },
];
function calculateSalary(employee) {
    employee.forEach(employee => {
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.20;
            console.log("bonousgiven");
        }
    });
}
calculateSalary(Employee);
console.log(Employee);
Employee.forEach(Employee => (console.log(`Employee:${Employee.name},Salary:${Employee.salary}`)));
export {};
