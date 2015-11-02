#pragma strict

var bulletNumber : int;
private var player : Player;

function Start () {
	player = transform.parent.GetComponent(gui).playerTransform.GetComponent(Player);
}

function Update () 
{
	if (bulletNumber > player.bullets)
		GetComponent.<GUITexture>().enabled = false;
	else
		GetComponent.<GUITexture>().enabled = true;
}