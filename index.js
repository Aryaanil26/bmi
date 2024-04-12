const height=178
const weight=100

function getHeightinmeters(heightIncm){
const result = heightinmeter/100
return result
}
function getBMI(hightinM,weight){
    const bmi = weight/(heightinM + heightinM)
return bmi
}
function displayReport(bmi) {
    if(bmi < 18.5 ){
        console.log("Underweight")
    }
    if(bmi <  25 ){
        console.log("Healty weight ")
    }
    if(bmi < 30 ){
        console.log("Overweight")
    }
    else {
        console.log("obese")
    }
}
