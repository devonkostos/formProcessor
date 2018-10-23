$(document).ready(function() {
	var $custForm = $("#custForm"), 
		$errSubmit = $("#errSubmit"),
		$firstName = $("#firstName"),
		$errFirst = $("#errFirst"),
		$lastName = $("#lastName"),
		$address1 = $("#address1"),
		$errAdd1 = $("#errAdd1"),
		$address2 = $("#address2"),
		$errAdd2 = $("#errAdd2"),
		$errLast = $("#errLast"),
		$city = $("#city"),
		$errCity = $("#errCity"),
		$state = $("#state"),
		$hintState = $("#hintState"),
		$errState = $("#errState"),
		$zip = $("#zip"),
		$hintZip = $("#hintZip"),
		$errZip = $("#errZip"),
		$phone = $("#phone"),
		$hintPhone = $("#hintPhone"),
		$errPhone = $("#errPhone"),
		$email = $("#email"),
		$hintEmail = $("#hintEmail"),
		$errEmail = $("#errEmail"),
		$ccNum = $("#ccNum"),
		$hintCC = $("#hintCC"),
		$errCC = $("#errCC"),
		$expMo = $("#expMo"),
		$expYr = $("#expYr"),
		$errExp = $("#errExp");
		
	$state.focus(function() {
		$hintState.append('Use a two letter abbreviation');
	}).blur(function() {
		$hintState.empty();
	});//show validity hint when focus is given to state and empty when unfocused.
	
	$zip.focus(function() {
		$hintZip.append('Use a 5 digit Zip Code');
	}).blur(function() {
		$hintZip.empty();
	});//show validity hint when focus is given to zip and empty when unfocused.
	
	$phone.focus(function() {
		$hintPhone.append('Numbers Only - No Spaces or Dashes');
	}).blur(function() {
		$hintPhone.empty();
	});//show validity hint when focus is given to phone and empty when unfocused.
	
	$email.focus(function() {
		$hintEmail.append('Example - john@doe.com');
	}).blur(function() {
		$hintEmail.empty();
	});//show validity hint when focus is given to email and empty when unfocused.
	
	$ccNum.focus(function() {
		$hintCC.append('Numbers Only - No Spaces or Dashes');
	}).blur(function() {
		$hintCC.empty();
	});//show validity hint when focus is given to ccNum and empty when unfocused.
		
	$custForm.submit(function(event) {
		var firstMatch = /^[a-zA-Z\s]{2,20}$/,
			lastMatch = /^[a-zA-Z\s]{2,20}$/,
			cityMatch = /^[a-zA-Z\s]{2,20}$/,
			stateMatch = /^[a-zA-Z0-9\s]{2}$/,
			add1Match = /^[a-zA-Z0-9\s]{2,20}$/,
			add2Match = /^[a-zA-Z0-9\s]{2,20}$/,
			zipMatch = /^\d{5}$/,
			phoneMatch = /^\d{3}\d{3}\d{4}$/,
			emailMatch = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
			ccMatch = /^[0-9]{13,16}$/,
			errors = 0;
			
		$(".errMsg").empty();
		//prevent error message(s) from repeating.
		
		if (!firstMatch.test($firstName.val())) {
			$errFirst.append("Required: Must contain only letters and spaces between "
			+ "2 and 20 characters!");
			errors += 1;
		}//test firstName for validity & show message if response contains error(s).
		
		if (!lastMatch.test($lastName.val())) {
			$errLast.append("Required: Must contain only letters and spaces between "
							+ "2 and 20 characters!");
			errors += 1;
		}//test lastName for validity & show message if response contains error(s).
		
		if (!add1Match.test($address1.val())) {
			$errAdd1.append("Required: Must contain only letters, numbers and spaces "
							+ "between 2 and 20 characters!");
			errors += 1;
		}//test add1 for validity & show message if response contains error(s).
		
		if ($address2.val().length > 0) {
			if (!add2Match.test($address2.val())) {
				$errAdd2.append("Required: Must contain only letters, numbers and spaces "
								+ "between 2 and 20 characters!");
				errors += 1;
			}//test add2 for validity & show message if response contains error(s).
		}//test add2 field for input.
		
		if (!cityMatch.test($city.val())) {
			$errCity.append("Required: Must contain only letters and spaces between "
							+ "2 and 20 characters!");
			errors += 1;
		}//test city for validity & show message if response contains error(s).
		
		if (!stateMatch.test($state.val())) {
			$errState.append("Required: Must contain only letters and spaces between "
							 + "2 and 20 characters!");
			errors += 1;
		}//test state for validity & show message if response contains error(s).
		
		if (!zipMatch.test($zip.val())) {
			$errZip.append("Must contain a 5 number Zip Code!");
			errors += 1;
		}//test zip for validity & show message if response contains error(s).	
		
		if ($phone.val().length > 0) {
			if (!phoneMatch.test($phone.val())) {
				$errPhone.append("Must contain a 10 digit number with no spaces or dashes!");
				errors += 1;
			}//test phone for validity & show message if response contains error(s).
		}//test phone field for input.
		
		if (!emailMatch.test($email.val())) {
			$errEmail.append("Must contain a 10 digit number with no spaces or dashes!");
			errors += 1;
		}//test email for validity & show message if response contains error(s).
		
		if (custForm.payment[0].checked == false) {
			if (!ccMatch.test($ccNum.val())) {
				$errCC.append("Must contain a 13-16 digit number with no spaces or dashes!");
				errors += 1;
			}//test ccNum for validity & show message if response contains error(s).
			if ($expMo.val() == "month" || $expYr.val() == "year") {
				$errExp.append("Must select a Month and Year!");
				errors += 1;
			}//test expMo & expYr for validity & show message if response contains error(s).
		}//test payment field for nondefault input.
		
		if (errors > 0) {
			$errSubmit.append("Please edit the marked fields below to fix errors!");
			event.preventDefault();
		}//do not submit and show message if form contains error(s).
	});		
});