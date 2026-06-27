const result = document.getElementById("result");


// Function that simulates login

function login(success = true) {

    return new Promise(function(resolve, reject) {

        result.innerHTML = "Logging in... Please wait 3 seconds.";

        setTimeout(function() {

            if (success) {

                resolve(" Login Successful!");

            } else {

                reject(" Login Failed! Invalid username or password.");

            }

        }, 3000);

    });

}