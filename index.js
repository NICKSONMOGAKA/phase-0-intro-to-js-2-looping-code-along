// Function to generate thank you messages
function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a number to zero, logging each number
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = {
    writeCards, // <-- Corrected typo: removed extra characters
    countDown,
  };
  
