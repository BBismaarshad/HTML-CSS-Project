// Q3 — Student Grade (Switch)

// Ek variable grade = "B" set karo.

// Switch statement use kar ke print karo:

// A → Excellent

// B → Good

// C → Average

// D → Poor

// F → Fail

// Kisi aur letter par → Invalid Grade

//  Use: switch + break
let grade = B ;
switch (grade){
    case "A" :
        console.log("Excellent")
        break;
    case "B"   :
        console.log("Good")
        break;
    case "C" :
        console.log("Average")
        break;
    case "D" :
        console.log("Poor") 
        break;
    case "F" :
        console.log("Fail") 
        break;
    default:
        console.log("Invalid Grade");       
}