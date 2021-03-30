//$("#currentDay").text(DateTime.local());
$("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    })
  );
  
  function timeChange() {
    let currentTime = luxon.DateTime.local().toLocaleString({
      hour: "2-digit",
      hour12: false,
    });
    //console.log(currentTime);
    let formattedHour = parseInt(currentTime[0] + currentTime[1]);

    $('.time-block').each(function () {
        //console.log(this);
        let currentHour = paresInt($(this).attr('id'));

        if (formattedHour === currentHour) {
            $(this).addClass('present');
            }   else if (formattedHour < currentHour) {
            $(this).addClass('future');
            }   else formattedHour > currentHour;
            {
            $(this).addClass('past');
            }
        }
    );
    
    //console.log(currentTime);
    }
    
    var saveBtn = $('.saveBtn');

    saveBtn.on('click', function (){
        let hour = $(this).siblings('.hour').text();
        let input = $(this).siblings('#input').val();
        //console.log(input);
        //console.log(hour);

        localStorage.setItem(hour, input);
    });

    function Storing(){
        $('.hour').each(function(){
            let time = $(this).text();
            let text = localStorage.getItem(time);
        if (text !== null) {
            $(this).siblings('textarea').val(text);
        }    
        });
    }
    timeChange();
    Storing();
