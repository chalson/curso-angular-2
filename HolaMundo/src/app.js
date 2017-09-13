import { hello } from "sample"; 

var app = { 
	saludo : () => {
		hello("Carlos");
		}
	}
	
console.log(app.saludo());

//export app;
