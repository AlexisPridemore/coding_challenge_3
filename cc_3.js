// Task 1 Product Price Management Scenario: Online Store You are managing a product pricing system.

let prices = ["20", "40", "60", "80", "100"];    //Declare an array prices 

prices.push(30);     //Add a new price to the array

prices.shift();      //Remove the first price from the array

console.log("Updated Price List:", prices);   

// Task 2 Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities.

let orders = ["5", "10", "15", "20", "25"];    //Declare an array orders

orders.splice(2, 1, "20");   //Increase third order quantity by 5

let totalOrders = orders.reduce((total, quantity) => total +quantity, 0);   // Calculate total of all orders

console.log("Updated Orders Array:", orders); 
console.log("Total Orders Count:", totalOrders);    

// Task 3  Employee Performance Tracking Scenario: HR System You are tracking employee performance data

let employee = {
    name: "Micheal Jordan",
    role: "Manager",
    PerformanceScore: 95,
    isActive: true
};             // Declare an object employee with properties

employee.PerformanceScore = 90;     //Update performanceScore property
employee.promotionEligible = true;    //Add a new property promotionEligible

console.log("Employee Record", employee);

// Task 4 Customer Feedback Records Scenario: Feedback Management You are collecting customer feedback data

let feedback = [       //Declare an array feedback
    {customerName: "Beyonce", feedbackText: "Great service, will come back again!", rating: 5 }, 
    {customerName: "Angela", feedbackText: "Good product, customer service was slow", rating: 3},
    {customerName: "Karen", feedbackText: "Never will come back here, bad quality products", rating: 1},
];
feedback.push({customerName: "David", feedbackText: "Excellent quality, will buy more!", rating:5});  //Add new feedback to the array

console.log("Customer Feedback List", feedback)

// Task 5 Inventory Management System Scenario: Stock Analysis You are developing a system to track inventory details

let inventory = {    //Declare an object inventory
    itemName:"Donut",
    stockCount: 80,
    price: 5,
};

function calculateTotalValue(stockCount, price) {
    return stockCount * price;
};      // Calculate Total Value

console.log("Inventory", inventory);
console.log("Total Inventory Value", calculateTotalValue);