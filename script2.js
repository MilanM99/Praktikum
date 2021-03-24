let menu = document.querySelector(".menu");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let answer = document.querySelector("#answer");
let button = document.querySelector("#button");
let counter = 1;

function dropDown()
{
	if(counter == 1)
	{
		ul.style.display = "block";
		counter++;
	}
	else if(counter == 2)
	{
		ul.style.display = "none";
		counter = 1
	}
}
menu.onclick = dropDown;

function Email_Check()
{
	if(input.value != "" && textarea.value != "")
	{
		if(input.value.includes("@") && input.value.includes(".com"))
		{
			answer.style.color = "blue";
			answer.innerHTML = "Mejl je poslat";
		}
		else
		{
			answer.style.color = "red";
			answer.innerHTML = "Mejl nije poslat";
		}
	}
	else
	{
		answer.style.color = "red";
		answer.innerHTML = "Mejl nije poslat";
	}
}
button.onclick = Email_Check;
