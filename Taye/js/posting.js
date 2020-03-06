$().ready(function () {
    $("input.yoo").click(function () {
         fname= $("input[name='job'").val();
        lname = $("input[name='bug'").val();
        password = $("input[name='password'").val();
        email = $("input[name='loc'").val();
        due = $("input[name='date'").val();
        localStorage.setItem("user", JSON.stringify(user));
            window.location = "login.html"
        // // var user = { fname, lname, email, password };
        // // if (fname == "" || lname == "" || password=="" || email=="") {
        // //     alert("Please enter the correct username or password.");
        // // } else {
            
        // }
    })
})