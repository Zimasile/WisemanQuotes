const adviceId = document.querySelector("[data-advice='id']");
const adviceText = document.querySelector("[data-advice='text']");
const adviceBtn = document.querySelector("[data-advice='btn']");
const url = 'https://api.adviceslip.com/advice';

async function fetchAdvice() {
  try {
    const adviceResponse = await fetch(url);
    const adviceJson = await adviceResponse.json();
    
    adviceText.innerText = `"${adviceJson.slip.advice}"`;
    adviceId.innerText = `Advice # ${adviceJson.slip.id}` 
  }
  catch {
    adviceText.innerText = `Error 404`;
    adviceId.innerText = `Advice # ID`
  }
  
}

fetchAdvice()

adviceBtn.addEventListener('click', fetchAdvice);