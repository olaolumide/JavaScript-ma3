//Console.log out elements in JSON file
var calling, i, a, logging ="";
calling = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};
for (i in calling.video){
	logging = calling.video[i].id + " This is id";
	console.log (logging);
	
	logging = calling.video[i].name + " This is name";
	console.log(logging);
	
	logging = calling.video[i].url + " This is url ";
	console.log (logging);

	logging = calling.video[i].author;
	console.log (logging);
	
	for (a in calling.video[i].author.data){
		logging = calling.video[i].author.data[a].name_author;
		console.log(logging);
		
		logging = calling.video[i].author.data[a].url;
		console.log(logging);
		
		logging = calling.video[i].author.data[a].type;
		console.log(logging);
	}	
};