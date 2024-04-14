document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', function() {
        calculateTax();
    });

    // Modal close button functionality
    var modalCloseBtn = document.getElementById('closeBtn'); // Select close button by ID
    modalCloseBtn.addEventListener('click', function() {
        closeModal();
    });
});

function calculateTax() {
    var grossIncome = parseFloat(document.getElementById("gross-income").value);
    var extraIncome = parseFloat(document.getElementById("extra-income").value);
    var deductions = parseFloat(document.getElementById("deductions").value);
    var age = document.getElementById("age").value;

    var errorIcons = document.querySelectorAll('.icon');
    errorIcons.forEach(function(icon) {
        icon.style.backgroundColor = "#e3e0e0";
    });
    var errorIcons = document.querySelectorAll('.icon2');
    errorIcons.forEach(function(icon) {
        icon.style.backgroundColor = "#e3e0e0";
    });
    var errorIcons = document.querySelectorAll('.icon3');
    errorIcons.forEach(function(icon) {
        icon.style.backgroundColor = "#e3e0e0";
    });  
    
    
    // Validate inputs
    if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
        if(isNaN(grossIncome)){
            var errorIcons = document.querySelectorAll('.icon');
            errorIcons.forEach(function(icon) {
                icon.style.backgroundColor = "#f39090";
            });
        }
        if(isNaN(extraIncome)){
            var errorIcons = document.querySelectorAll('.icon2');
            errorIcons.forEach(function(icon) {
                icon.style.backgroundColor = "#f39090";
            });
        }
        if(isNaN(deductions)){
            var errorIcons = document.querySelectorAll('.icon3');
            errorIcons.forEach(function(icon) {
                icon.style.backgroundColor = "#f39090";
            });
        }

        alert("Please enter valid numbers.");
        
        return;
    }

    if (age === "") {
        alert("Please select an age group.");
        return;
    }

    var totalIncome = grossIncome + extraIncome - deductions;
    var taxAmount = 0;

    if (totalIncome <= 800000) {
        // No tax
        taxAmount = 0;
    } else {
        // Calculate tax based on age group
        if (age === "<40") {
            taxAmount = 0.3 * (totalIncome - 800000);
        } else if (age === "≥40 &lt;60") {
            taxAmount = 0.4 * (totalIncome - 800000);
        } else if (age === "≥60") {
            taxAmount = 0.1 * (totalIncome - 800000);
        }
    }

    // Show result in modal
    var modalResult = document.getElementById("modal-result");
    modalResult.innerHTML = taxAmount.toFixed(2);

    // Show modal
    var modal = document.getElementById("result-modal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("result-modal");
    modal.style.display = "none";
}
