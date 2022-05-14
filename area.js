const sides = document.querySelectorAll(".sides-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function productOfLengths(base, height) {
    const product = base * height;
    return product;
}

function calculateArea() {
    if(sides[0].value > 0 && sides[1].value > 0) {   
    const product = productOfLengths(Number(sides[0].value), Number(sides[1].value));
    const area = product/2;
    outputEl.innerText = "Area of a Triangle is " + area;
    } else {
        outputEl.innerText = "Enter valid Numbers";
    }
}

areaBtn.addEventListener("click", calculateArea)