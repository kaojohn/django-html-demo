const userNameE1 = document.querySelector("#username");
const heightE1 = document.querySelector("#userheight");
const weightE1 = document.querySelector("#userwe");


function goBmi() {
    let height = heightE1.value;
    let weight = weightE1.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空!!");
        return
    }

    let bmi = getBmi(height, weight);
    console.log(bmi);

}

function getBmi(height, weight) {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    if (isNaN(bmi)) {
        return "數值錯誤!";
    }
    return bmi;
}