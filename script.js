//Date 
$("#currentDay").text(luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  })
  );   
  
function time(){
let fixedHour = luxon.DateTime.local().toLocaleString({
    hour: "2-digit",
    hour12: false,
  });
    
    let formattedHour = parseInt(currentTime[0] + currentTime[1]);
    $(".time-block").each(function(){
        let currentHour = parseInt($(this).attr("id"));
  
        if(formattedHour === currentHour){
            $(this).addClass("present");
        } else if (formattedHour < currentHour) {
            $(this).addClass("future");
        } else formattedHour > currentHour;
            $(this).addClass("future");
 }
 });
 }; 
  
  var saveBtn = $(".saveBtn")
  saveBtn.on("click", function() {

  
  let hour = $(this).siblings(".hour").text();
  let input = $(this).siblings("#input").val();
  
  localStorage.setItem(hour, input);
  });
  
  function Storing (){
  $(".hour").each(function(){
    let time = $(this).text();
    let storedAgenda = localStorage.getItem(time);
  
    if (storedAgenda !== null) {
      $(this).siblings("textarea").val(storedAgenda);
     }
  });
  }

  //Call functions
  time();
  Storing();
