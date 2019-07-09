        // User Login Assignment

        // Add Event Listener
        document.getElementById('login').addEventListener('click', login)



        // Test Input Variable
        function login() {
            // Password and Username Correct
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            if (username == 'Curry uE' && password == 'password') {
                document.getElementById('welcome').style.color = 'white';
                document.getElementById('welcome').innerHTML = ' <em>Sign in Successful<em>';
                document.getElementById('username').style.backgroundColor = 'green';
                document.getElementById('password').style.backgroundColor = 'green';

                // Password Wrong    
            } else if (username == 'Curry uE' && password != 'password') {
                document.getElementById('welcome').style.color = 'white';
                document.getElementById('welcome').innerHTML = ' <em>Sign in Unsuccessful.<em> Check Password and try again';
                document.getElementById('username').style.backgroundColor = 'green';
                document.getElementById('password').style.backgroundColor = 'red';

                // Username Wrong
            } else if (username != 'Curry uE' && password == 'password') {
                document.getElementById('welcome').style.color = 'white';
                document.getElementById('welcome').innerHTML = ' <em>Sign in Unsuccessful.<em> Check Username and try again';
                document.getElementById('username').style.backgroundColor = 'red';
                document.getElementById('password').style.backgroundColor = 'green';
            }
            // Both Wrong
            else {
                document.getElementById('welcome').style.color = 'white';
                document.getElementById('welcome').innerHTML = ' <em>Sign in Unsuccessful<em> Check Username and Password and try again';
                document.getElementById('username').style.backgroundColor = 'red';
                document.getElementById('password').style.backgroundColor = 'red';
            }


        }