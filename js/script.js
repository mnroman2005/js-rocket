var car={
   make:'VW',
   type:'Polo',
   color:'blue',
   isTuredOn:false,
   numberOfWheels:4,
   seats:[ 
        'seat 1',
        'seat 2',
         'seat3',
        'seat 4',
],
turnOn:function(){
	this.isTuredON=true;
},
fly:function(){
	alert('fly');
},
  switchCar:function(isOn){
  	console.log('turn car'+isOn);
  	if(isOn==true){
  		this.isTuredOn=true;
     	} else {
  	   	this.isTuredOn=false;
  	 }
   }
};

console.log('hello there friends!');