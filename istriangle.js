const angleInputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#ouput");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    if(angleInputs[0].value > 0 && angleInputs[1].value > 0 && angleInputs[2].value > 0) {
 
        const sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
        if(sumOfAngles === 180) {
            output.innerText = "Yay! These angles form a triangle.";
        } else {
            output.innerText = "Oh oh! These angles don't form a triangle.";
        }

    } else {
        output.innerText = "Please enter valid angles";
    }

}

isTriangleBtn.addEventListener("click", isTriangle)