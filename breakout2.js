var cookiesEaten = 0;
var cookieInventory = 10;

// function eatCookie(inventory){
// 	return inventory - 1;
// }

// function bakeCooke(inventory){
// 	return inventory + 1;
// }

//dependent on inputs -- very accident prone

// cookieInventory = eatCookie(cookieInventory)


//this has no var assignment and allows us to modify other variables
function eatCookie() {
	cookiesEaten++;
	cookieInventory--;
}

//function that allows you to take other functions
//HTML tags

function div(content){
	return '<div.${content}</div>'
}

function p(content){
	return '<p.${content}</p>'
}


function br(content){
	return '<br/>'
}

function img(url){
	return '<img href=${}'
}

//instead
function tagFactory(tagName){
		switch(tagName) {
			case "br": 
			return function() {
				return '<${tagname}/>';
			}
			case "img":
				return function(url)
				'img href ='${}/>''
		}
		//then a default
	}
}
var divTag = tagFactory('div')