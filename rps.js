var imgPlayer;
var btnRock;
var btnPaper;
var btnScissors;
var btnGo;
var computerChoice;
var playerChoice;

function startGame()
{
	document.getElementById('introScreen').style.display = 'none';
}

function replay()
{
	document.getElementById('endScreen').style.display = 'none';
}

function init(){
	imgPlayer = document.getElementById("imgPlayer");
	btnRock = document.getElementById("btnRock");
	btnPaper = document.getElementById("btnPaper");
	btnScissors = document.getElementById("btnScissors");
	btnGo = document.getElementById("btnGo");
	deselectAll();
}
	
function select(choice)
{
	playerChoice = choice;
	imgPlayer.src = 'images/'+ choice + '.png';
	deselectAll();
	if(choice.toLowerCase()=='rock')
		btnRock.style.backgroundColor = '#888888';
	if(choice.toLowerCase()=='paper')
		btnPaper.style.backgroundColor = '#888888';
	if(choice.toLowerCase()=='scissors')
		btnScissors.style.backgroundColor = '#888888';
	
	btnGo.style.display = 'block';
}
	
function deselectAll()
{
	btnRock.style.backgroundColor = 'silver';
	btnPaper.style.backgroundColor = 'silver';
	btnScissors.style.backgroundColor = 'silver';
}

function go()
{
	var txtEndTitle = document.getElementById('txtEndTitle');
	var txtEndMessage = document.getElementById('txtEndMessage');
	
	var numChoice = Math.floor(Math.random()*3);
	var imgComputer = document.getElementById('imgComputer');
	
	document.getElementById('lblRock').style.backgroundColor = '#EEEEEE';
	document.getElementById('lblPaper').style.backgroundColor = '#EEEEEE';
	document.getElementById('lblScissors').style.backgroundColor = '#EEEEEE';
	
	if(numChoice==0)
	{
		computerChoice = 'rock';
		imgComputer.src = 'images/rock.png';
		document.getElementById('lblRock').style.backgroundColor = 'yellow';
		
		if(playerChoice == 'paper')
		{
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU WIN';
			
		}
		else if(playerChoice == 'scissors')
		{
			txtEndTitle.innerHTML = 'Rock covers Scissors';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'rock')
		{
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
	}
	else if(numChoice == 1)
	{
		computerChoice = 'paper';
		imgComputer.src = 'images/paper.png';
		document.getElementById('lblPaper').style.backgroundColor = 'yellow';
	
		if(playerChoice == 'scissors')
		{
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'rock')
		{
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'paper')
		{
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
	}
	else
	{
		computerChoice = 'scissors';
		imgComputer.src = 'images/scissors.png';
		document.getElementById('lblScissors').style.backgroundColor = 'yellow';
	
		if(playerChoice == 'rock')
		{
			txtEndTitle.innerHTML = 'Rock smashes Scissors';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'paper')
		{
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'scissors')
		{
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
	}
	
	document.getElementById('endScreen').style.display = 'block';
}