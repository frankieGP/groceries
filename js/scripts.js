$(document).ready(function(){
  $("#groceryList").submit(function(event) {





var inputs = ["item1", "item2", "item3", "item4", "item5"]


      var displayedInputs = inputs.map(function(input) {
        return $("input" + input).val();
      });
      var sortInputs = displayedInputs.sort();
var displayedInputs = sortInputs.map(function(sortInput) {
  return sortInput.toUpperCase();
});

      //var upperInputs = sortInputs.toString().toUpperCase();//one  by one

//var reveal = ["0", "1", "2", "3", "4",]

//upperInputs

      //$("input#" + input).val();
    //});

// var shownList = [];



event.preventDefault();

$("#revealList").append("<li>"+upperInputs+"</li>");
$("#revealList").append("<li>"+upperInputs[3]+"</li>");
$("#revealList").append("<li>"+upperInputs[5]+"</li>");
$("#revealList").append("<li>"+upperInputs[7]+"</li>");
$("#revealList").append("<li>"+upperInputs[10]+"</li>");
    //$("#revealList").fadeIn();
  });
});
