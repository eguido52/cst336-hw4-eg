var imgPlayer;
var btnRock;
var btnPaper;
var btnScissors;
var btnGo;
var computerChoice;
var playerChoice;

function startGame()
{
	$('#introScreen').hide();
	//document.getElementById('introScreen').style.display = 'none';
}

function replay()
{
	$('#endScreen').hide();
	//document.getElementById('endScreen').style.display = 'none';
}

function init(){
	//imgPlayer = document.getElementById("imgPlayer");
	imgPlayer = $("#imgPlayer");
	//btnRock = document.getElementById("btnRock");
	btnRock = $("#btnRock");
	//btnPaper = document.getElementById("btnPaper");
	btnPaper = $("#btnPaper");
	//btnScissors = document.getElementById("btnScissors");
	btnScissors = $("#btnScissors");
	//btnGo = document.getElementById("btnGo");
	btnGo = $("#btnGo");
	deselectAll();
}
	
function select(choice)
{
	playerChoice = choice;
	imgPlayer.attr("src", "images/"+choice+".png");//imgPlayer.src = 'images/'+ choice + '.png';
	deselectAll();
	if(choice.toLowerCase()=='rock')
		btnRock.css("background-color", "#888888");//btnRock.style.backgroundColor = '#888888';
	if(choice.toLowerCase()=='paper')
		btnPaper.css("background-color", "#888888");//btnPaper.style.backgroundColor = '#888888';
	if(choice.toLowerCase()=='scissors')
		btnScissors.css("background-color", "#888888");//btnScissors.style.backgroundColor = '#888888';
	
	btnGo.show();//btnGo.style.display = 'block';
}
	
function deselectAll()
{
	//btnRock.style.backgroundColor = 'silver';
	btnRock.css("background-color", "silver");
	//btnPaper.style.backgroundColor = 'silver';
	btnPaper.css("background-color", "silver");
	//btnScissors.style.backgroundColor = 'silver';
	btnScissors.css("background-color", "silver");
}

function go()
{
	var txtEndTitle = $("#txtEndTitle");//document.getElementById('txtEndTitle');
	var txtEndMessage = $("#txtEndMessage");//document.getElementById('txtEndMessage');
	
	var numChoice = Math.floor(Math.random()*3);
	var imgComputer = $("#imgComputer");//document.getElementById('imgComputer');
	
	$("#lblRock").css("background-color", "#EEEEEE");//document.getElementById('lblRock').style.backgroundColor = '#EEEEEE';
	$("#lblPaper").css("background-color", "#EEEEEE");//document.getElementById('lblPaper').style.backgroundColor = '#EEEEEE';
	$("#lblScissors").css("background-color", "#EEEEEE");//document.getElementById('lblScissors').style.backgroundColor = '#EEEEEE';
	
	if(numChoice==0)
	{
		computerChoice = 'rock';
		imgComputer.attr("src", "images/rock.png");//src = 'images/rock.png';
		$("#lblRock").css("background-color", "yellow");//document.getElementById('lblRock').style.backgroundColor = 'yellow';
		
		if(playerChoice == 'paper')
		{
			txtEndTitle.html("Paper covers Rock");
			txtEndMessage.html("YOU WIN");
			// txtEndTitle.innerHTML = 'Paper covers Rock';
			// txtEndMessage.innerHTML = 'YOU WIN';
			
		}
		else if(playerChoice == 'scissors')
		{
			txtEndTitle.html("Rock covers Scissors");
			txtEndMessage.html("YOU LOSE");
			// txtEndTitle.innerHTML = 'Rock crushes Scissors';
			// txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'rock')
		{
			txtEndTitle.html("");
			txtEndMessage.html("TIE");
			// txtEndTitle.innerHTML = '';
			// txtEndMessage.innerHTML = 'TIE';
		}
	}
	else if(numChoice == 1)
	{
		computerChoice = 'paper';
		imgComputer.attr("src", "images/paper.png");//imgComputer.src = 'images/paper.png';
		$("#lblPaper").css("background-color", "yellow");//document.getElementById('lblPaper').style.backgroundColor = 'yellow';
	
		if(playerChoice == 'scissors')
		{
			txtEndTitle.html("Scissors cuts Paper");
			txtEndMessage.html("YOU WIN");
			//txtEndTitle.innerHTML = 'Scissors cuts Paper';
			//txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'rock')
		{
			txtEndTitle.html("Paper covers Rock");
			txtEndMessage.html("YOU LOSE");
			//txtEndTitle.innerHTML = 'Paper covers Rock';
			//txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'paper')
		{
			txtEndTitle.html("");
			txtEndMessage.html("TIE");
			//txtEndTitle.innerHTML = '';
			//txtEndMessage.innerHTML = 'TIE';
		}
	}
	else
	{
		computerChoice = 'scissors';
		imgComputer.attr("src", "images/scissors.png");//imgComputer.src = 'images/scissors.png';
		$("#lblScissors").css("background-color", "yellow");//document.getElementById('lblScissors').style.backgroundColor = 'yellow';
	
		if(playerChoice == 'rock')
		{
			txtEndTitle.html("Rock smashes Scissors");
			txtEndMessage.html("YOU WIN");
			// txtEndTitle.innerHTML = 'Rock smashes Scissors';
			// txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'paper')
		{
			txtEndTitle.html("Scissors cuts Paper");
			txtEndMessage.html("YOU LOSE");
			// txtEndTitle.innerHTML = 'Scissors cuts Paper';
			// txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'scissors')
		{
			txtEndTitle.html("");
			txtEndMessage.html("TIE");
			// txtEndTitle.innerHTML = '';
			// txtEndMessage.innerHTML = 'TIE';
		}
	}
	
	document.getElementById('endScreen').style.display = 'block';
}