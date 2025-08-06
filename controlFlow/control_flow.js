let userRole = "manager";
let accessLevel;

if(userRole ==="admin"){
    accessLevel = "Full access granted";
}else if (userRole === "manager"){
    accessLevel = "Limited access granted";
}else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);


let userType = "admin";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);


let role = "Non-Subscriber"; // You can change this to test other roles

// Convert role to lowercase for case-insensitive comparison
role = role.toLowerCase();

if (role === "employee") {
  console.log("Access granted: You are eligible for full 'Dietary Services'.");
} else if (role === "enrolled member") {
  console.log("Access granted: You are eligible for 'Dietary Services' and one-on-one interaction with a dietician.");
} else if (role === "subscriber") {
  console.log("Access granted: You have partial access to 'Dietary Services'.");
} else if (role === "non-subscriber") {
  console.log("Access denied: Please enroll or subscribe to avail 'Dietary Services'.");
} else {
  console.log("Invalid role: Please provide a valid role (Employee, Enrolled Member, Subscriber, Non-Subscriber).");
}
