//Buisness logic


$(document).ready(function(){ //Waits until the page is loaded to run JS

  $("form#survey").submit(function(event){ //Runs when th esubmit button is pressed
    event.preventDefault();
    var budget = $("#budget").val();

    alert(budget);
  });
});
