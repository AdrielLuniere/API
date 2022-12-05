const adviceUpdateButton = document.querySelector(".conselho-avancar");
const adviceNumber = document.querySelector(".conselho-id");
const adviceDescription = document.querySelector(".conselho-descricao");

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();