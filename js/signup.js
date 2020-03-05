console.log("nothing")
$().ready(function () {
    $("input.yoo").click(function () {
        fname = $("input[name='fname'").val();
        lname = $("input[name='lname'").val();
        password = $("input[name='password'").val();
        email = $("input[name='email'").val();
        var user = { fname, lname, email, password };
        if (fname == "" || lname == "" || password=="" || email=="") {
            alert("Please enter the correct username or password.");
        } else {
            localStorage.setItem("user", JSON.stringify(user));
            window.location = "login.html"
        }
    })
})