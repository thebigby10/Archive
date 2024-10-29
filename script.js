function validateExpression() {
    // Get selected validation type and input value
    const validationType = document.getElementById("validationType").value;
    const inputValue = document.getElementById("inputValue").value;
    const resultElement = document.getElementById("result");

    // Define regular expressions for each validation type
    let regex;
    switch (validationType) {
      case "email":
        regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        break;

      case "phone":
        regex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
        break;

      case "postcode":
        regex = /^\d{4}$/;
        break;

      case "url":
        regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/[^\s]*)?$/;
        break;

      default:
        resultElement.textContent = "Invalid option selected.";
        return false;
    }

    // Validate input and display result
    const isValid = regex.test(inputValue);
    resultElement.textContent = isValid ? "Valid input!" : "Invalid input.";
    resultElement.style.color = isValid ? "green" : "red";

    // Prevent form submission
    return false;
  }