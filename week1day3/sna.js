var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

var getNameFromID = function(userID)
{
  return data[userID].name
}

var getFollowedBy = function(userID)
{
  var following = [];
  for (var key in data){
    if (data[key].follows.includes(userID)) following.push(getNameFromID(key));
  }
  return following;
}

var getFollowing = function(userID)
{
  var follows = [];
  for (var i = 0; i < data[userID].follows.length; i++) {
    follows.push(getNameFromID(data[userID].follows[i]));
  }
  return follows;
}

var printEveryone = function() {
    for (var key in data){
      var personName = data[key].name;
      var personID = key;
      console.log(`${personName} follows: ${getFollowing(personID).join(', ')}, and is followed by: ${getFollowedBy(personID).join(', ')}`)
    }
  }

var getMostFollowed = function() {
  mostFollowed = ['nobody', 0];
  for (var key in data){
    if (getFollowedBy(key).length > mostFollowed[1]) mostFollowed = [getNameFromID(key), getFollowedBy(key).length]
  }
  return mostFollowed[0]
}

// var getMostFollowedOverAge = function (age) {
//   mostFollowed = ['nobody', 0];
//   for (var key in data){
//     if (getFollowedBy(key).length > mostFollowed[1]) mostFollowed = [getNameFromID(key), getFollowedBy(key).length]
//   }
//   return mostFollowed[0]
// }


// var getReach = function(depth) {
//   for (var key in data){

//   }
// }

//console.log(getFollowedBy('f04'))
console.log(getMostFollowed())