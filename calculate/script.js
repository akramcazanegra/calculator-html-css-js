

(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function() {
        try {
            // Sanitize the input to allow only valid characters
            let sanitizedInput = screen.value.replace(/[^-()\d/*+.]/g, '');
            console.log("Sanitized input:", sanitizedInput); // Log sanitized input for debugging

            if (sanitizedInput === '') {
                screen.value = "Please enter";
                return;
            }

            // Evaluate the sanitized input
            let result = Function('"use strict"; return (' + sanitizedInput + ')')();
            console.log("Calculation result:", result); // Log the result for debugging

            screen.value = result;
        } catch (e) {
            console.error("Error during calculation:", e); // Log error details for debugging
            screen.value = "Error";
        }
    });

    clear.addEventListener('click', function() {
        screen.value = "";
    });
})();

