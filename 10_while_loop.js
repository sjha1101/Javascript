/*while loop
syntax of while loop
while(condition){
    //code
}
    it will execute if the condition is true 
    */
let n = prompt("Enter a number:")
n = Number.parseInt(n)
let i = 0;
while(i<n){
    console.log(i)
     i++;
}

/*do while
syntax:
do{
    //code
}while(conditon)
one time it will excute than the condition will be checked
*/ 
let j = 0;
do{
     console.log(j)
     j++;
    }
while(i<n)