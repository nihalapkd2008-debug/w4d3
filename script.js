const result = document.getElementById("result");

function login (success = true){
return new Promise (function(resolve,reject) {
  result.innerHTML = "Logging In ...plz wait 3 sec";
  setTimeout(function() {
    if (success) {
      resolve ("Login Succesfull");

    } else {
      reject ("Login Failed! Invalid username or password.")
    }
  },3000);
});
}