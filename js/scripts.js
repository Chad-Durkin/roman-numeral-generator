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
  var numeralArray = ['I', 'X', 'C', 'M'];
  var fiveArray = ['V', 'L', 'D'];
  for (var i = inputLength; i > 0; i--) {
      var digit = parseInt(input[i - 1]);

    for (var j = digit; j > 0; j--) {
      if (j === 5) {
        outputArray.unshift(fiveArray[inputLength - i]);
        j -= 5;
      } else if (j === 4) {
        outputArray.unshift(numeralArray[inputLength - i] + fiveArray[inputLength - i]);
        j -= 4;
      } else if (j === 9) {
        outputArray.unshift(numeralArray[inputLength - i] + numeralArray[inputLength - i + 1]);
        j -= 9;
      } else {
      outputArray.unshift(numeralArray[inputLength - i]);
     }
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
    $(".result").slideDown();
    $("#output").text(outputArray.join(""));
  })
});
