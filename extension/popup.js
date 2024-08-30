
const form = document.getElementById('form');
const spinner = document.getElementById('spinner');
const resultDiv = document.getElementById('prediction-result');


function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const url = tabs[0].url;
  document.getElementById('text').value = url;
});

form.addEventListener('submit', async (event) => {

  event.preventDefault();

  spinner.style.display = 'block';
  resultDiv.innerText = '';

  const input = document.getElementById('text').value.trim();

  setTimeout(async () => {
    try {
      if (input === '') {
        spinner.style.display = 'none';
        resultDiv.innerText = 'No URL provided';
        resultDiv.style.color = 'yellow';
        return;
      }

      if (!isValidUrl(input)) {
        spinner.style.display = 'none';
        resultDiv.innerText = 'Invalid URL';
        resultDiv.style.color = 'orange';
        return;
      }

      const response = await fetch('https://safesurf-flask.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input }),
      });

      spinner.style.display = 'none';

      if (response.ok) {
        const prediction = (await response.json()).prediction;
        console.log(prediction);
        if (prediction == 0) {
          resultDiv.innerText = 'This site is safe to use.';
          resultDiv.style.color = 'lightgreen';
        } else {
          resultDiv.innerText = 'Your privacy/security might be at risk.';
          resultDiv.style.color = 'red';
        }
      } else {
        resultDiv.innerText = 'Internal server error';
        resultDiv.style.color = 'yellow';
        console.error('Request failed:', response.status);
      }
    } catch (error) {
      spinner.style.display = 'none';
      resultDiv.innerText = 'Internal server error';
      resultDiv.style.color = 'yellow';
      console.error('Request failed:', error);
    }
  }, 3000);
});
