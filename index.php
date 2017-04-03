<!DOCTYPE html>
<html>
<head>
	<title>AJAX</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
	<script src="https://www.google.com/jsapi"></script>
    <script>
        google.load("jquery", "1");
    </script>
    <script src="api.js"></script>
</head>
<body>
	<form method="post">
		
		<input type="text" name="login" placeholder="Логин" id="login"><br>
		<div class="error" id="log_er">Логин должен содержать не менее 4-х символов</div>
		
		<input type="password" name="password" placeholder="Пароль" id="password"><br>
		<div class="error" id="pas_er">Пароль должен содержать буквы и цифры</div>
		
		<input type="password" name="password2" placeholder="Повторите пароль" id="password2"><br>
		<div class="error" id="pas2_er">Пароли не совпадают</div>
		
		<input type="text" name="firstname" placeholder="Имя" id="firstname"><br>
        <div class="error" id="fir_er">Введите имя на русском языке</div>
		
		<input type="text" name="surname" placeholder="Фамилия" id="surname"><br>
        <div class="error" id="sur_er">Введите фамилию на русском языке</div>
		
		<input type="email" name="email" placeholder="E-mail" id="email"><br>
		<div class="error" id="email_er">Некорректная почта</div>
		
		<input type="submit" value="Зарегистироваться" id="submit" disabled>
		
	</form>
	<div id="result"></div>
</body>
</html>