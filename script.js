function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    var convertedTemperature;
    var tempo;
    if(fromUnit=== "select" && toUnit === "select"){
        document.getElementById("result").textContent = `please select the units........`;
        return;
    }
    if(fromUnit === "celsius" && toUnit === "fahrenheit"){
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
    }else if(fromUnit === "celsius" && toUnit === "kelvin"){
        convertedTemperature = (temperatureInput + 273.15);
    }else if(fromUnit === "fahrenheit" && toUnit === "celsius"){
        convertedTemperature = (temperatureInput - 32) * 5 / 9;
    }else if(fromUnit === "fahrenheit" && toUnit === "kelvin"){
        tempo = (temperatureInput - 32) * 5 / 9;
        convertedTemperature = (tempo + 273.15);
    }else if(fromUnit === "kelvin" && toUnit === "celsius"){
        convertedTemperature = temperatureInput - 273.15;
    }else if(fromUnit === "kelvin" && toUnit === "fahrenheit"){
        tempo = temperatureInput - 273.15;
        convertedTemperature = (tempo * 9 / 5) + 32;
    }else{
          convertedTemperature = temperatureInput; // Units are the same, no conversion needed
          document.getElementById("result").textContent = `units are same so no need to conversion.........`
        }
    document.getElementById("result").textContent = "Converted Temperature: " + convertedTemperature.toFixed(2);


    
  }
function clearData(){
    document.getElementById("myForm").addEventListener("click", function (event) {
        event.preventDefault();// Prevent form submission

        // Clear the selected value
        document.getElementById("from").selectedIndex = -1;
        document.getElementById("to").selectedIndex = -1;
        location.reload();

        // Additional code for form submission handling
        // ...

  });
}





