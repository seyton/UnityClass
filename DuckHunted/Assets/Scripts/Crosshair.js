#pragma strict

function Start () {

}

function Update () {
	if (transform.parent.GetComponent(gui).playerTransform.gunZoom == false)
		GetComponent.<GUITexture>().enabled = true;
	else
		GetComponent.<GUITexture>().enabled = false;
}