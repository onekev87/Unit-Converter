let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn-el")
let lengthOutput = document.getElementById("length-output")
let volumeOutput = document.getElementById("volume-output")
let massOutput = document.getElementById("mass-output")

btnEl.addEventListener("click", function(){
    let input = document.getElementById("input-el").value;
    document.getElementById("length-output").value = input / 3.281
    lengthOutput.textContent = `${inputEl.value} meters = ${parseFloat(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${parseFloat(inputEl.value / 3.281).toFixed(3)} meters`
})

btnEl.addEventListener("click", function(){
    let input = document.getElementById("input-el").value;
    document.getElementById("volume-output").value = input / 0.264
    volumeOutput.textContent = `${inputEl.value} gallons = ${parseFloat(inputEl.value * 0.264).toFixed(3)} liters | ${inputEl.value} liters = ${parseFloat(inputEl.value / 0.264).toFixed(3)} gallons`
})

btnEl.addEventListener("click", function(){
    let input = document.getElementById("input-el").value;
    document.getElementById("mass-output").value = input / 2.204
    massOutput.textContent = `${inputEl.value} kilos = ${parseFloat(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${parseFloat(inputEl.value / 2.204).toFixed(3)} kilos`
})




/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

parseFloat().toFixed()
*/