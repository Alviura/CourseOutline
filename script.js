document.getElementById('options').addEventListener('change', function() {
    var selectedOption = this.value;
    var listDisplay = document.getElementById('listDisplay');
    var itemsToShow = [];
  
    // Define items based on selected option
    if (selectedOption === 'calculus') {
      itemsToShow = ['Limits continuity & Differentiation', 'Rolle\'s & Mean Value Theroem', 'Sequence and Series: Convergence test, integral test, root test, ratio test', 'Power series: Taylor\'s & Maclaurin\'s theorem', 'Partial differentiation', 'Double integrals', 'Polar & Cartessian coordinates'];
    } else if (selectedOption === 'os') {
      itemsToShow = ['Introduction', 'Components of an OS', 'Functions of OS', 'Objectives of OS'];
    } else if (selectedOption === 'vectors') {
      itemsToShow = ['Introduction', 'Unit Vector', 'Components of a Unit Vector', 'Dot and Cross Products'];
    } else {
      // If none matches
      itemsToShow = ['No items available for this option'];
    }
  
    // Display items in the listDisplay div
    listDisplay.innerHTML = '<ul>' + itemsToShow.map(item => '<li>' + item + '</li>').join('') + '</ul>';
  });
  