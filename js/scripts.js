//Buisness logic


$(document).ready(function(){ //Waits until the page is loaded to run JS

  $("form#survey").submit(function(event){ //Runs when th esubmit button is pressed
    event.preventDefault();
    var budget = $("#budget").val();
    var national = $("input:radio[name=national]:checked").val();
    var idealVaca = $("#idealVaca").val();
    var family = $("input:radio[name=family]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    if(budget == 0){
      alert("Please select a price range for you trip.")
    }else if(budget == 1){
      window.location.href = "http://www.gocampingamerica.com";
    }else if(budget >= 2 && family == "yes" && national == "yes" && activity != "skiing"){
      alert("disney");
    }else if(budget >= 2 && family == "no" && national == "no"){
      alert("mexico");
    }else if(budget >= 2 && activity == "swiming" || activity == "hiking" || activity == "relaxing"){
      alert("wilmington");
    }else if(budget >= 3 && national == "yes" && activity != "skiing"){
      alert("Mackinaw");
    }else if(budget >= 4 && activity == "skiing"){
      alert("apls");
    }else if(budget >= 4 && national == "no" && activity != "skiing"){
      alert("paris");
    }else{
      alert("you are impossible");
    }
  });
});
