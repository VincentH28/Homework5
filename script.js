//Date 
$("#currentDay").text(luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  })
  );   
  
function time(){
let fixedHour = parseInt(moment().format("H"));
  
//Determine timeblock color based on am or pm
$(".time-block").each(function(){
let presentHour = parseInt($(this).attr("id"));
  
 if(fixedHour > presentHour){
   $(this).addClass("past");
 } else if (presentHour === fixedHour){
   $(this).addClass("present");
 } else { (presentHour < fixedHour)
   $(this).addClass("future");
 }
 });
 }; 
  
  var saveBtn = $(".saveBtn")
  saveBtn.on("click", function() {

  
  let timeSchedule = $(this).siblings(".hour").text();
  let text = $(this).siblings("#textarea-input").val();
  
  localStorage.setItem(timeSchedule, text);
  });
  
  function storedAgenda (){
  $(".hour").each(function(){
    let presentHour = $(this).text();
    let storedAgenda = localStorage.getItem(presentHour);
  
    if (storedAgenda !== null) {
      $(this).siblings("textarea").val(storedAgenda);
     }
  })
  }

  //Call functions
  time();
  storedAgenda();