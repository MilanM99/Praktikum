let web_dev_section = document.querySelector(".web_dev_section");
let frontend_section = document.querySelector(".frontend_section");
let backend_section = document.querySelector(".backend_section");
let menu = document.querySelector(".menu");
let ul = document.querySelector("ul");
let counter = 1;
function afterLoad()
{
	setTimeout(function(){
		web_dev_section.style.opacity = 1;
		frontend_section.style.opacity = 1;
		backend_section.style.opacity = 1;
	},500);
}
afterLoad();

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

