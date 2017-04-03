var allFields = [
    '#login', 
    '#password', 
    '#password2', 
    '#firstname', 
    '#surname', 
    '#email'
];

function checkForSubmit() {
    for (var i = 0; i < allFields.length; i++) {
        if ($(allFields[i]).hasClass('correct')) {
            $('#submit').removeAttr('disabled');
            $('#submit').css({
                "border": "0",
                "background-color": "greenyellow",
                "color": "white"
            });
        } else {
            $('#submit').attr('disabled');
            $('#submit').css({
                "background-color": "#c6c6c6",
                "color": "black"
            });
        }
    }
}

function correct(field, error) {
    $(field).removeClass("incorrect");
    $(field).addClass("correct");
    $(error).css({"display": "none"});
}

function incorrect(field, error) {
    $(field).removeClass("correct");
    $(field).addClass("incorrect");
    $(error).css({"display": "inline"});
}

function checkLogin() {
    $('#login').change(function () {
        if ($(this).val().length < 4) {
            incorrect('#login', '#log_er');
        } else {
            correct('#login', '#log_er');
        }
        checkForSubmit();
    });
}

function checkPassword() {
    var regexp = /[A-Za-zА-Яа-я]+/;
    var regexp2 = /[0-9]+/;

    $('#password').change(function () {
        if (!($(this).val().match(regexp) && $(this).val().match(regexp2))) {
            incorrect('#password', '#pas_er');
        } else {
            correct('#password', '#pas_er');
        }
        checkForSubmit();
    });
}

function checkRepeatPassword() {
    $('#password2').change(function () {
        if ($(this).val() !== $('#password').val()) {
            incorrect('#password2', '#pas2_er');
        } else {
            correct('#password2', '#pas2_er');
        }
        checkForSubmit();
    });
}

function checkName() {
    var regexp = /^[А-Яа-я]+$/;
    $('#firstname').change(function () {
        if (!($(this).val().match(regexp))) {
            incorrect('#firstname', '#fir_er');
        } else {
            correct('#firstname', '#fir_er');
        }
    });
    $('#surname').change(function () {
        if (!($(this).val().match(regexp))) {
            incorrect('#surname', '#sur_er');
        } else {
            correct('#surname', '#sur_er');
        }
        checkForSubmit();
    });
}

function checkEmail() {
    var regexp = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
    $('#email').change(function () {
        if (!($(this).val().match(regexp))) {
            incorrect('#email', '#email_er');
        } else {
            correct('#email', '#email_er');
        }
        checkForSubmit();
    });
}

$(function () {
    checkLogin(), checkPassword(), checkRepeatPassword(), checkName(), checkEmail();

   $('#submit').on('click', function(e) {
       e.preventDefault();
       $.ajax({
           type: 'POST',
           url: 'reg.php',
           cache: false,
           data: {
               login: $('#login').val(),
               password: $('#password').val(),
               firstname: $('#firstname').val(),
               surname: $('#surname').val(),
               email: $('#email').val()
           },
           success: function (res) {
               $('#result').html(res);
           }
        });
    });
});