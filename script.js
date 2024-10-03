
function words() {
    let soz = prompt("So'z kiriting")
    let son = +prompt("Son kiriting")
    
    if (son > 0){
        const result = Array(son).fill(soz).join("-");
        console.log(result);
    }
} 
words()


// function undov() {
//     const soz = prompt("Undovli hi kiriting:");
//     const son = +prompt("Son kiriting:");

//     if (son > 0 && soz.length > 0) {
//         const result = son.splice("").reverse().join(" ");
//         console.log(result);
//     }
// }
// undov();
