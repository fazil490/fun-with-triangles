const angleInputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#ouput");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
        const sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
        if(sumOfAngles === 180) {
            output.innerText = "Yay! The angles form a triangle.";
        } else {
            output.innerText = "Oh oh! The angles don't form a triangle.";
        }
}

isTriangleBtn.addEventListener("click", isTriangle)