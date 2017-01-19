function inputChecker(inputValue) {
  if(inputValue === 0)
  {
    alert("There are no roman numerals for 0");
    location.reload();
  }
  if(inputValue > 3999)
  {
    alert("Only enter a number from 1-3999");
    location.reload();
  }
}

function generator(input, inputLength) {
  var outputArray = [];
  var numeralArray = ['m', 'c', 'x', 'i'];
  for (var i = inputLength; i > 0; i--) {
      var digit = parseInt(input[i - 1]);
    for (var j = digit; j > 0; j--) {
      outputArray.push(numeralArray[inputLength - i]);
    }
  }

  return outputArray;
}


$(function(){
  $("#blank").submit(function(event){

    event.preventDefault();

    var input = $("#input").val();
    var inputValue = parseInt($("#input").val());
    var inputLength = input.length;

    inputChecker(inputValue);

    var outputArray = generator(input, inputLength);
    $("#output").text(outputArray.join(""));
  })
});
