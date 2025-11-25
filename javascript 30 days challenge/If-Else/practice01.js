// Q1 — Age Checker

// User se age input lo.

// Agar age < 13 → print Child

// Agar age 13–19 → print Teenager

// Agar age 20–59 → print Adult

// Agar age 60+ → print Senior Citizen

// 👉 Use: if–else if–else

let age = 25;

if (age > 13){
    console.log("Child");
}else if (age >= 13 && age <= 19){
    console.log("Teenager")
}else if (age >= 20 && age <= 59 ){
    console.log("Adult")
}else if (age >= 60 ){
    console.log("Senior Citizen");

}else{
    console.log("Invalid Age");
}


