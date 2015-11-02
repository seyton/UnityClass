#pragma strict

// testing

private var player : Player;

function Start () 
{
	player = transform.parent.GetComponent(gui).playerTransform.GetComponent(Player);
}

function Update () 
{
	if (player.combo > 1)
	{
		GetComponent.<GUIText>().text = player.combo + "x Combo!\n";
		
		if (player.combo <= 6)
			GetComponent.<GUIText>().text += "Good!";
		else if (player.combo > 6 && player.combo <= 12)
			GetComponent.<GUIText>().text += "Nice!";
		else if (player.combo > 12 && player.combo <= 24)
			GetComponent.<GUIText>().text += "Cool!";
		else if (player.combo > 24 && player.combo <= 48)
			GetComponent.<GUIText>().text += "Crazy!";
		else if (player.combo > 48 && player.combo <= 96)
			GetComponent.<GUIText>().text += "Madness!";
		else if (player.combo > 96 && player.combo <= 192)
			GetComponent.<GUIText>().text += "Ballin'!";
		else if (player.combo > 192 && player.combo <= 384)
			GetComponent.<GUIText>().text += "Jammin'";
		else 
			GetComponent.<GUIText>().text += "Slammin'!";
			
			
		GetComponent.<GUIText>().text += "\n" + player.comboTimer.ToString("0.00");
		
		transform.position.x = Mathf.Lerp(transform.position.x, 1, Time.deltaTime*4);
	}
	else
	{
		transform.position.x = Mathf.Lerp(transform.position.x, 1.5, Time.deltaTime*4);
	}
}