/*
	====================================================================================================
	
	NOTE:
	The code below serves only demonstration purposes. It could be improved.
	
	The use of global variables is not recommended, due to higher risk of errors. 
	
	====================================================================================================
*/


//*
//========================
//LISTS
//========================

var listOfNames 	= ["John",	"Deniz",		"Sakura",			"Anna", 	"Imani" ];
var listOfColor 	= ["Black", 	"Blonde", 		"Mixed",			"Red",		"White"	];
var listOfBodySize 	= ["Small", 	"Big", 			"Medium",			"Strong",	"Weak"];
var listOfWalk 		= ["Slow", 	"Fast", 		"Straddle-Legged",		"Sneaking",	"Crawling"];



//Purpose: Random attributes generator
var RandomElementFrom = function(List)
{
	//Pseudo random number between 0 and 4
	var attribute = Math.floor(Math.random() * 5);
	
	return List[attribute];
}



//========================
//PARENTS & CHILD
//========================

//Purpose: Parents "class" which will be inherited by child
var Parents = function()
{
	//Will be filled in function "makeChild"
}

//Purpose: Child variable which will be needed for inheriting the "class" Parents 
var Child;


//Purpose: The process of making a child
function makeChild()
{
	//Init Variables
	var parentsCheckboxes 		= document.getElementsByClassName('parents-attributes');
	var childCheckboxes 		= document.getElementsByClassName('child-attributes');
	var choosableAttributes		= document.getElementById('child');
	var name			= RandomElementFrom(listOfNames);		
	var haircolor			= RandomElementFrom(listOfColor);	
	var size			= RandomElementFrom(listOfBodySize);
	var explanation			= document.getElementsByClassName('explanation');
	
	
	//Reset
	explanation.innerHTML = '';
	
	
	//If any parent attribute is checked
	if(parentsCheckboxes[0].checked === true || parentsCheckboxes[1].checked || parentsCheckboxes[2].checked)
	{
		
		/*
			ATTENTION:
			This is where prototype is used to define parent attributes.
		*/
		//Name
		if(parentsCheckboxes[0].checked)
		{
			Parents.prototype.Name = name;
		}
		else
		{
			//Deletes property!!!
			delete Parents.prototype.Name;
		}
		
		
		//Haircolor
		if(parentsCheckboxes[1].checked)
		{
			Parents.prototype.HairColor = haircolor;
		}
		else
		{
			//Deletes property!!!
			delete Parents.prototype.HairColor
		}
		
		
		//Size
		if(parentsCheckboxes[2].checked)
		{
			Parents.prototype.Size = size;
		}
		else
		{
			//Deletes property!!!
			delete Parents.prototype.Size;
		}

		
		//Parent method
		Parents.prototype.Talk = function()
		{
			alert("Hello, my real name is " + this.Name + ". " + Parents.prototype.Name + " is the name of my parent!");
		}
		
		
		//A child is born 
		Child = new Parents();
		
		
		//Activate choosable child attributes
		choosableAttributes.style.visibility = "visible";
		
		
		//MONITOR
		//console.dir(Parents);
		//console.dir(Child);
		
		
		
		//Result
		explanation[0].innerHTML =  "<u>Child gets attributes from parents</u> <br>";
		
		explanation[0].innerHTML += "<b>	Name: 		</b>" 	+ Child.Name 		+ "<br>";
		explanation[0].innerHTML += "<b> 	Hair Color:	</b>" 	+ Child.HairColor 	+ "<br>";
		explanation[0].innerHTML += "<b>	Size: 		</b>" 	+ Child.Size 		+ "<br><br>";
		
		explanation[0].innerHTML +=  "<u>Specific child attributes</u> <br>";
		
		
		//Cild gets an own name
		Child.Name = RandomElementFrom(listOfNames);
		
	}
	else
	{
		alert("Please, select at least one parent attribute!");
	}
	
	
	
}



//Purpose: Sets and unsets child`s walk attribute
function Walk()
{
	var childCheckboxes 	= document.getElementsByClassName('child-attributes');
	var explanation		= document.getElementsByClassName('explanation');

	
	if(childCheckboxes[0].checked === true)
	{
		//New property for the child
		Child.Walk = RandomElementFrom(listOfWalk);
		
		explanation[1].innerHTML += "<b>Walk:</b>" 	+ Child.Walk 		+ "<br>";
		
	}
	else
	{
		//Reset
		explanation[1].innerHTML = '';
		
		//Deletes property!!!
		delete Child.Walk;
	}
	
	//MONITOR
	//console.dir(Parents);
	//console.dir(Child);

}
