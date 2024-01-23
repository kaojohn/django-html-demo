const userNameE1 = document.querySelector("#username");
const heightE1 = document.querySelector("#userheight");
const weightE1 = document.querySelector("#userwe");
const bmiE1 = document.querySelector(".seebmi");
const commentE1 = document.querySelector(".comment");


function goBmi() {
    let height = heightE1.value;
    let weight = weightE1.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空!!");
        return
    }

    let bmi = getBmi(height, weight);
    bmiE1.innerText = bmi;

    let comment;
    if (bmi <= 18.5) {
        comment = "體重過輕";
    } else if (bmi < 24) {
        comment = "健康體位♪";
    } else {
        comment = "體位異常( ﾟДﾟ)";
    }
    commentE1.innerText = comment;

}

function getBmi(height, weight) {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    if (isNaN(bmi)) {
        return "數值錯誤!";
    }
    return bmi;
}