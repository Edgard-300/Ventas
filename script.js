document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const name = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
  
    // Validate the fields
    if (!name || !cardNumber || !expiryDate || !cvv) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!validateCardNumber(cardNumber)) {
      alert('Invalid card number.');
      return;
    }
  
    if (!validateExpiryDate(expiryDate)) {
      alert('Invalid expiry date.');
      return;
    }
  
    if (!validateCVV(cvv)) {
      alert('Invalid CVV.');
      return;
    }
  
    // If everything is valid, process the payment
    alert('Su tarjeta ha sido procesada con éxito.');
  
    // Wait for 3 seconds and then redirect to index
    setTimeout(function() {
        window.location.href = 'index.html';  // Replace 'index.html' with your homepage or target URL
    }, 2000); // 3 seconds delay
  });
  
// Luhn algorithm for card number validation
function validateCardNumber(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
  
    // Traverse the digits in reverse
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
}
  
// Expiry date validation (MM/YY format)
function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(expiryDate);
}
  
// CVV validation (3 digits)
function validateCVV(cvv) {
    return cvv.length === 3 && !isNaN(cvv);
}
