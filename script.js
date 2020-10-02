
// Timeblock
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
$(".time").text(rightNow);




// Text
var userInput = "";
$("#textInput").text(userInput);

textInput.value = localStorage.getItem('key');
textInput.oninput = () => {
  localStorage.setItem('key', textInput.value)
};


// button

 
  $(".btn").on("click", function (){
  userInput = $("#textInput").val()
  localStorage.setItem("key" , userInput)

})













































