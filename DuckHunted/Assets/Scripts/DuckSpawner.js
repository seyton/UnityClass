#pragma strict


var spawnPrefab:Transform[]; // 0 - Green Duck. 1 - Blue Duck. 2 - Red Duck
var maxDucks:int = 3;
var noSpawnRadius:float = 3;

private var duckType;

@System.NonSerialized
static var ducks = new Array();

function Start () {
	ducks = new Array();
	Duck.duckCount = 0;
}

function Update () {
	// If need be, we can get smarter about spawning more ducks
	// for now, when a duck goes down, a new one rises
	if (Duck.duckCount < maxDucks)
	{
		
		// Spawn the duck behind the player
		var pTransform = GameObject.Find("Player").transform;
		
		// Only spawn one duck until the player moves away
		if (Vector3.Distance(pTransform.position, gameObject.transform.position) > noSpawnRadius){
			var spawnPos:Vector3 = pTransform.position - (pTransform.forward * 10.0);
			spawnPos.y = pTransform.position.y + 5;
			
			// Pick a random duck! (Heavily weighted towards a green duck)
			var randomRange = Random.Range(0, 100);
			if (randomRange >= 20)
				duckType = 0;
			else if (randomRange > 3 && randomRange < 20)
				duckType = 1;
			else
				duckType = 2;
				
			
			var clone:Transform = Instantiate(spawnPrefab[duckType], spawnPos, Quaternion.identity);	
			ducks.Push(clone);
			gameObject.transform.position = pTransform.position;
		}
	}
}

static function RemoveDuck(duck:GameObject){
	for (var i = 0; i < ducks.length; i++){
		if (ducks[i] == duck.transform){
			ducks.RemoveAt(i);
			i--;
		}
	}
}

function OnDrawGizmos(){
	Gizmos.DrawIcon(transform.position, "DuckSpawner.png", true);
	
	Gizmos.color = Color.red;
	Gizmos.DrawWireSphere(transform.position, noSpawnRadius);
}