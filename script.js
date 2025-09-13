const texts = [
    "“Jason was the ultimate professional! Responded to our request quickly, every well priced and completed the job in a timely manner…”<br><strong>- Grace Johnson</strong>October 22, 2018",
    "“Jason did a fantastic job with the lighting throughout our home.He was very thorough and completed the job ahead of schedule.I would not hesitate to recommend him.”<br><strong>- Grace Johnson</strong>October 13, 2020",
    "“The service was excellent, and the team was very professional.”<br><strong>- Grace Johnson</strong>October 24, 2019"
];

let index = 0;
const textElement = document.getElementById("rotating-text");
const dots = document.querySelectorAll(".dot");

function showText(newIndex) {
    textElement.classList.add("fade");

    setTimeout(() => {
        index = (newIndex + texts.length) % texts.length;
        textElement.innerHTML = texts[index];
        textElement.classList.remove("fade");

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }, 400);
}

let autoPlay = setInterval(() => {
    showText(index + 1);
}, 3000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showText(i);
    });
});

document.getElementById("prev-btn").addEventListener("click", () => {
    clearInterval(autoPlay);
    showText(index - 1);
});

document.getElementById("next-btn").addEventListener("click", () => {
    clearInterval(autoPlay);
    showText(index + 1);
});
