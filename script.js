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
// ------------------------------
// Promise Chain
// ------------------------------

document.getElementById("promiseBtn").addEventListener("click", function () {

    result.innerHTML = "";

    // Random success or failure

    let isSuccess = Math.random() > 0.5;

    login(isSuccess)

        .then(function(message) {

            result.innerHTML = message;

            console.log(message);

        })

        .catch(function(error) {

            result.innerHTML = error;

            console.log(error);

        });

});

// ------------------------------
// Async / Await
// ------------------------------

document.getElementById("asyncBtn").addEventListener("click", async function () {

    result.innerHTML = "";

    let isSuccess = Math.random() > 0.5;

    try {

        let message = await login(isSuccess);

        result.innerHTML = message;

        console.log(message);

    }

    catch(error) {

        result.innerHTML = error;

        console.log(error);

    }

});