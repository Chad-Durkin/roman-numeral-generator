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
  for(var index = inputLength - 1; index >= 0; index--)
  {
    //For single numbers
    if(inputLength === 1)
    {
    if(index === 0)
    {
      for (var test = input[index]; test > 0; test--)
      {
        console.log("ones");
        outputArray.push("I");
      }
    }
    }
    //For double digit numbers
    if(inputLength === 2)
    {
    if(index === 1)
    {
      for (var test = input[index]; test > 0; test--)
      {
        console.log("ones");
        outputArray.push("I");
      }
    }
    else if (index === 0) {
      for (var test = input[index]; test > 0; test--)
      {
        console.log("tens");
        outputArray.splice(0, 0, "X");
      }
    }
    }
    //For hundreds
    if(inputLength === 3)
    {
    if(index === 2)
    {
      for (var test = input[index]; test > 0; test--)
      {
        console.log("ones");
        outputArray.push("I");
      }
    }
    else if (index === 1) {
      for (var test = input[index]; test > 0; test--)
      {
        console.log("tens");
        outputArray.splice(0, 0, "X");
      }
    }
    else if (index === 0) {
      for (var test = input[index]; test > 0; test--)
      {
        console.log("one hundreds");
        outputArray.splice(0, 0, "C");
      }
    }
    }
    //For thousands
    if(inputLength === 4)
    {
      if(index === 3)
      {
        for (var test = input[index]; test > 0; test--)
        {
          console.log("ones");
          outputArray.push("I");
        }
      }
      else if (index === 2) {
        for (var test = input[index]; test > 0; test--)
        {
          console.log("tens");
          outputArray.splice(0, 0, "X");
        }
      }
      else if (index === 1) {
        for (var test = input[index]; test > 0; test--)
        {
          console.log("one hundreds");
          outputArray.splice(0, 0, "C");
        }
      }
      else if (index === 0) {
        for (var test = input[index]; test > 0; test--)
        {
          console.log("one hundreds");
          outputArray.splice(0, 0, "M");
        }
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
    $("#output").text(outputArray.join(""));
  })
});


var numeralArray = [m, c, x, i]
for (i = inputLength - 1; i > 0; i--) {
  var digit = input[i];
  for (var j = digit; j > 0; digit--) {
    outputArray.push(numberalArray[inputLength - i])
  }
}
