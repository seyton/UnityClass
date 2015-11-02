#pragma strict

function Start () {

}

function Update () {

}

function SetBullets (theValue : float) {
	transform.GetComponent(AudioSource).Play();
	Camera.main.transform.parent.GetComponent(Player).bullets = theValue;
}