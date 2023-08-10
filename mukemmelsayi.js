document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");
  
    checkButton.addEventListener("click", function() {
      const number = parseInt(numberInput.value);
      if (isNaN(number)) {
        result.textContent = "Geçerli bir sayı giriniz.";
        return;
      }
  
      let sum = 0;
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }
  
      if (sum === number && sum !== 0) {
        result.textContent = `${number} bir mükemmel sayıdır.`;
      } else {
        result.textContent = `${number} bir mükemmel sayı değildir.`;
      }
    });
  });
  