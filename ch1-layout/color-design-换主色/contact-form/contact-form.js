v_fields = new Array('sender_name','sender_email');alert_on = false;thanks_on = true; thanks_message = "Thank you. Your message has been sent.";	
	function validateForm(){
		
		//alert(v_fields);
		
		//init errors
		var err = "";
		
		//start checking fields
		for(i=0;i<v_fields.length;i++){
			
			//store the field value
			var _thisfield = eval("document.contact."+v_fields[i]+".value");
			
			//check the field value
			if(v_fields[i] == "sender_name"){
				if(!isAlpha(_thisfield)){ err += "Name Required\n";}
			}else if(v_fields[i] == "sender_subject"){
				if(!isAlpha(_thisfield)){ err += "Please enter a valid subject\n";}
			}else if(v_fields[i] == "sender_email"){
				if(!isEmail(_thisfield)){ err += "Email Required\n";}
			}else if(v_fields[i] == "sender_url"){
				if(!isURL(_thisfield)){ err += "Please enter a valid URL\n";}
			}else if(v_fields[i] == "sender_phone"){
				if(!isPhone(_thisfield)){ err += "Please enter a valid phone number\n";}
			}else if(v_fields[i] == "sender_message"){
				if(!isText(_thisfield)){ err += "Please enter a valid message\n";}
			}
			
		}//end for
		
		if(err != ""){ 
			if(alert_on){
				alert("The following errors have occurred\n"+err);
			}else{
				showErrors(err);
			}
			
			return false;
		
		}
		
		$('#bandar').css('display','');
		
		return true;
	}
	
	//function to show errors in HTML
	function showErrors(str){
		var err = str.replace(/\n/g,"<br />");
		document.getElementById("form_errors").innerHTML = err;
		document.getElementById("form_errors").style.display = "block";
	
	}
	
	//function to show thank you message in HTML
	function showThanks(str){
		var tym = str.replace(/\n/g,"<br />");
		document.getElementById("form_thanks").innerHTML = tym;
		document.getElementById("form_thanks").style.display = "block";
	
	}
	
	function isEmail(str){
	if(str == "") return false;
	var regex = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i
	return regex.test(str);
	}
	
	function isText(str){
		if(str == "") return false;
		return true;
	}
	
	function isURL(str){
		var regex = /[a-zA-Z0-9\.\/:]+/
		return regex.test(str);
	}
	
	// returns true if the number is formatted in the following ways:
	// (000)000-0000, (000) 000-0000, 000-000-0000, 000.000.0000, 000 000 0000, 0000000000
	function isPhone(str){
		var regex = /^\(?[2-9]\d{2}[\)\.-]?\s?\d{3}[\s\.-]?\d{4}$/
		return regex.test(str);
	}
	
	// returns true if the string contains A-Z, a-z or 0-9 or . or # only
	function isAddress(str){
		var regex = /[^a-zA-Z0-9\#\.]/g
		if (regex.test(str)) return true;
		return false;
	}
	
	// returns true if the string is 5 digits
	function isZip(str){
		var regex = /\d{5,}/;
		if(regex.test(str)) return true;
		return false;
	}
	
	// returns true if the string contains A-Z or a-z only
	function isAlpha(str){
		var regex = /[a-zA-Z]/g
		if (regex.test(str)) return true;
		return false;
	}
	
	// returns true if the string contains A-Z or a-z or 0-9 only
	function isAlphaNumeric(str){
		var regex = /[^a-zA-Z0-9]/g
		if (regex.test(str)) return false;
		return true;
	}