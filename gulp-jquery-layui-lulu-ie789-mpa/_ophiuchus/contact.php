<?php
	$to = "jennpereira13@gmail.com"; /*Your Email*/
	$subject = "Messsage from Pereira Digital Media Template"; /*Issue*/
	$date = date ("l, F jS, Y"); 
	$time = date ("h:i A"); 	
	$msg="
	Name: $_REQUEST[name]
	Email: $_REQUEST[email]
	Subject: $_REQUEST[subject]
	
	Message sent from website on date  $date, hour: $time.\n

	Message:
	$_REQUEST[message]";

	mail($to, $subject, $msg, "From: $_REQUEST[email]");
	header( 'Location: sent.html' ) ;
