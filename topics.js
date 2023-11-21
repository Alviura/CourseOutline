document.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.getElementById('unit');
  const infoDisplay = document.getElementById('infoDisplay');

  // Add an event listener to listen for changes in the select element
  selectElement.addEventListener('change', function() {
    // Get the selected value
    const selectedValue = selectElement.value;

    // Display information based on the selected option
    if (selectedValue === 'option1') {
    infoDisplay.textContent = 'Information about Option 1.';
    } else if (selectedValue === 'option2') {
    infoDisplay.textContent = 'Information about Option 2.';
    } else if (selectedValue === 'option3') {
    infoDisplay.textContent = 'Information about Option 3.';
    } else {
    infoDisplay.textContent = ''; // Clear the info display if no option selected
  }
});
});



