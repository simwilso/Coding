
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

//take the album ID and search for a match
//if a match is found replace the the given property with the value provided
//if the property value is not 'tracks' && the value is not empty set value and prop provided
//return the entire object collection with the update
 for (i=0; i<collection.length; i++) {
   if (id === collection[i]) {
     return true;
   }  else {
     return false;
   }
 }
//return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
