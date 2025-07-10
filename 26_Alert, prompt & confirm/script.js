//alert in js is used to display a message on the screen
alert("Hello your script works!")

//prompt in js is used to display a message on the screen and get input from the user
let a = prompt("Enter a number here","112")
a = Number.parseInt(a)
alert("You entered a of type" + (typeof a))

//documet.write is used to display a message on the screen which comes from the server
// document.write(a)

//confirm is used to ask or to take the permission from the user if they want to procced or not
let write = confirm("Do you want to print the number?")
if(write){
    document.write(a)
}else{
    document.write("Please allow me to write")
}