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
}

function replay()
{
	$('#endScreen').hide();
}

function init(){
	imgPlayer = $("#imgPlayer");
	btnRock = $("#btnRock");
	btnPaper = $("#btnPaper");
	btnScissors = $("#btnScissors");
	btnGo = $("#btnGo");
	deselectAll();
}
	
function select(choice)
{
	playerChoice = choice;
	imgPlayer.attr("src", "images/"+choice+".png");//imgPlayer.src = 'images/'+ choice + '.png';
	deselectAll();
	if(choice.toLowerCase()=='rock')
		btnRock.css("background-color", "#888888");
	if(choice.toLowerCase()=='paper')
		btnPaper.css("background-color", "#888888");
	if(choice.toLowerCase()=='scissors')
		btnScissors.css("background-color", "#888888");
	
	btnGo.show();
}
	
function deselectAll()
{
	btnRock.css("background-color", "silver");
	btnPaper.css("background-color", "silver");
	btnScissors.css("background-color", "silver");
}

function go()
{
	var txtEndTitle = $("#txtEndTitle");
	var txtEndMessage = $("#txtEndMessage");
	
	var numChoice = Math.floor(Math.random()*3);
	var imgComputer = $("#imgComputer");
	
	$("#lblRock").css("background-color", "#EEEEEE");
	$("#lblPaper").css("background-color", "#EEEEEE");
	$("#lblScissors").css("background-color", "#EEEEEE");
	
	if(numChoice==0)
	{
		computerChoice = 'rock';
		imgComputer.attr("src", "images/rock.png");
		$("#lblRock").css("background-color", "yellow");
		
		if(playerChoice == 'paper')
		{
			txtEndTitle.html("Paper covers Rock");
			txtEndMessage.html("YOU WIN");
		}
		else if(playerChoice == 'scissors')
		{
			txtEndTitle.html("Rock covers Scissors");
			txtEndMessage.html("YOU LOSE");
		}
		else if(playerChoice == 'rock')
		{
			txtEndTitle.html("");
			txtEndMessage.html("TIE");
		}
	}
	else if(numChoice == 1)
	{
		computerChoice = 'paper';
		imgComputer.attr("src", "images/paper.png");
		$("#lblPaper").css("background-color", "yellow");
	
		if(playerChoice == 'scissors')
		{
			txtEndTitle.html("Scissors cuts Paper");
			txtEndMessage.html("YOU WIN");
		}
		else if(playerChoice == 'rock')
		{
			txtEndTitle.html("Paper covers Rock");
			txtEndMessage.html("YOU LOSE");
		}
		else if(playerChoice == 'paper')
		{
			txtEndTitle.html("");
			txtEndMessage.html("TIE");
		}
	}
	else
	{
		computerChoice = 'scissors';
		imgComputer.attr("src", "images/scissors.png");
		$("#lblScissors").css("background-color", "yellow");
	
		if(playerChoice == 'rock')
		{
			txtEndTitle.html("Rock smashes Scissors");
			txtEndMessage.html("YOU WIN");
		}
		else if(playerChoice == 'paper')
		{
			txtEndTitle.html("Scissors cuts Paper");
			txtEndMessage.html("YOU LOSE");
		}
		else if(playerChoice == 'scissors')
		{
			txtEndTitle.html("");
			txtEndMessage.html("TIE");
		}
	}
	
	document.getElementById('endScreen').style.display = 'block';
}
