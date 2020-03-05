$().ready(function () {
    $(".mylogin [type='button'").click(function () {
        username = $("input[name='username'").val();
        password = $("input[name='pass'").val();
        var user = { username, password };
        if (username == "" || password == "") {
            alert("Please enter the correct username or password.");
        } else {
            localStorage.setItem("user", JSON.stringify(user));
            window.location = "index.html"
        }
    })
})