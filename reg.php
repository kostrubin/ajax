<?php
	echo "<h3>Вы успешно зарегистрированы!</h3> 
			<p>Ваш логин: <strong>" . $_POST['login'] . "</strong></p> 
			<p>Пароль: <strong>" . $_POST['password'] . "</strong></p>	
			<p>Имя: <strong>". $_POST['firstname'] . "</strong></p>
			<p>Фамилия: <strong>" . $_POST['surname'] . "</strong></p>	
			<p>Электронная почта: <strong>" . $_POST['email'] . "</strong></p>";
?>