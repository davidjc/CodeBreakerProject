let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == "" && attempt.value == "")
    {
    	setHiddenFields();
    }

    if(validateInput(input.value))
    {
    	attempt.value++;

    	if(getResults(input.value))
    	{
    		setMessage("You Win! :)");
    		showAnswer(true);
    		showReplay();
    	}
    	else
    	{
    		if(attempt.value >= 10)
    		{
    			setMessage("You Lose! :(");	
    			showAnswer(false);
    			showReplay();
    		}
    		else
    		{
    			setMessage("Incorrect, try again.");
    		}
    		
    	}
    }
    else
    {
    	return false;
    }


}

//implement new functions here
function setHiddenFields()
{
	var randNum = Math.floor(Math.random() * 9999).toString();
	while(randNum.length < 4)
	{
		randNum = "0" + randNum;
	}
	answer.value = randNum;
	attempt.value = 0;


}

function setMessage(m)
{
	let message = document.getElementById('message');
	message.innerHTML = m;
}

function validateInput(m)
{
	if(m.length == 4)
	{
		return true;
	}
	else
	{
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
}

function getResults(r)
{
	var correct = 0;
	var html = '<div class="row"><span class="col-md-6">' + r + '</span><div class="col-md-6">';

	for(i = 0;i < r.length;i++)
	{
		if(r[i] == answer.value[i])
		{
			correct++;
			html += '<span class="glyphicon glyphicon-ok"></span>';
		}
		else if(answer.value.indexOf(r[i]) >= 0)
		{
			html += '<span class="glyphicon glyphicon-transfer"></span>';
		}
		else
		{
			html += '<span class="glyphicon glyphicon-remove"></span>';
		}
	}

	html += '</div>';
	document.getElementById("results").innerHTML += html;

	if(correct == 4)
	{
		return true;
	}
	else
	{
		return false;
	}

}

function showAnswer(winner)
{
	let code = document.getElementById("code");
	code.innerHTML = answer.value;
	if(winner)
		code.className += " success";	
	else
		code.className += " failure";
}

function showReplay()
{
	document.getElementById("guessing-div").style.display = 'none';
	document.getElementById("replay-div").style.display = 'block';
}
