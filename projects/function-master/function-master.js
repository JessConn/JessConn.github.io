function objectValues(obj) {
    var newArr = [];
    for(var key in obj) {
       newArr.push(obj[key]); 
    }
    return newArr;
}

function keysToString(obj) {
	var newStr = '';
	for(var key in obj){
		newStr += (key + ' ');
	}
	return newStr.trim();
}

function valuesToString(obj) {
	var newestStr = '';
	for(var key in obj) {
		if (typeof obj[key] === 'string') {
			newestStr += (obj[key] + ' ');
		}
	}
	return newestStr.trim();
}

function arrayOrObject(entry) {
    if(Array.isArray(entry)) {
        return 'array';
    }else {
        return 'object';
    }
}

function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1);
}


function capitalizeAllWords(value){
    var arr = value.split(" ");
    for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  } 
    return arr.join(" ");  
} 

function welcomeMessage(object) {
  var entName = object['name']; 
  var capName = entName.charAt(0).toUpperCase() + entName.slice(1);
  return "Welcome " + capName + "!";
}

function profileInfo(obj) {
	var sent = ' is a ';
	var name = obj['name'];
	var spec = obj['species'];
	var capName = name.charAt(0).toUpperCase() + name.slice(1);
	var capSpec = spec.charAt(0).toUpperCase() + spec.slice(1);
	return capName + sent + capSpec; 
}

function maybeNoises(object) {
    if(!object.hasOwnProperty(['noises']) || object['noises'].length === 0) {
        return 'there are no noises';
    }
    if(object.hasOwnProperty(['noises'])) {
        object['noises'];
    }
		return object.noises.join(' ');
}

function hasWord(string, word) {
	var sepString = string.split(' ');
	for(i = 0; i < sepString.length; i++) {
		if(sepString[i] == word) {
			return true;
		}
	}
	for(i = 0; i < sepString.length; i++) {
		if(sepString[i] !== word) {
			return false;
		}
	}
}

function addFriend(name, object) {
	object.friends.push(name);
	return object;
}

function isFriend(name, object){
    if (object.hasOwnProperty('friends')){
        for (var i = 0; i < object.friends.length; i++){
            if (object.friends[i] === name){
                return true;
            }
            
       }
    }
    return false;
}

 function nonFriends(name, list){
  var notFriendsWith = [];
  for(var i = 0; i < list.length; i++){
      if (list[i]['name'] !== name) {
        var check = false
        for(var j = 0; j < list[i]['friends'].length; j++){
          if (list[i]['friends'][j] === name){
          check = true;
          }
          }if (check === false){
            notFriendsWith.push(list[i]['name']);
        }
      }
    }
  return notFriendsWith;
} 



function updateObject(obj, keyName, value) {
    obj[keyName] = value;
    return obj;
}

function removeProperties(object, array){
    for (var i = 0; i < array.length; i++){
        if (object.hasOwnProperty(array[i])) {
                delete object[array[i]];
            }
        } return object;
    }

function dedup(data){
    var newArray = [];
    for (var i = 0; i < data.length; i++){
        if (!(newArray.includes(data[i]))){
        newArray.push(data[i]);
    }
    }
    return newArray;
}