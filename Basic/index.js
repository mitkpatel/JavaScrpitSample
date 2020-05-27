console.log("Hello world")

var myStr = "Jello world!"
myStr = "Hello";
console.log(myStr)

//Nested array 
var ourArray = [["Hello",1], ["Hello again", 2]];
console.log(ourArray);
console.log(ourArray[1][0]);

ourArray.push(["Third",3]);   
console.log(ourArray);  //After push

ourArray.pop();
console.log(ourArray);  //After pop

ourArray.shift();
ourArray.unshift(["happy",1]);

console.log(ourArray);

var glob = 0;  //Global var

//Function Example
function funWithArgs(var1, var2) {
    console.log("Function called: "+(var2 - var1));
    globalInsideFun = 22;
    glob = var2 - var1;
    return glob;
}

console.log(funWithArgs(2,9));
console.log("Global var value inside fun: "+globalInsideFun);
console.log(glob);

//Next In Line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before nextInLine: " +JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After nextInLine: " +JSON.stringify(testArr));

//In Strict Equality(===) operrator, 10 === "10" return false

var names = ["One", "Two", "Three", "Four", "Five", "Six"];
function testElseIf(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else {
        return names[2];
    }
}

console.log(testElseIf(3,5));

//Build JavaScript Objects
var object = {
    "name": "Mit",
    "Height": 175,
    "weight": 70,
    "friends": ["everything!", "one", "two"]
};

var name = object.name;
var friend = object.friends[0];
console.log("Name: " + name + "\tFriends: "+friend);

var objectAdd = {
    "name": "Mit",
    "Height": 175,
    "weight": 70,
    "friends": ["everything!", "one", "two"]
};
objectAdd['address'] = "Chilhodra";
console.log("after adding variable to object: " +objectAdd['address']);

//delete property in object
delete objectAdd.address;
console.log("after deleting variable to object: " +objectAdd['address']);


function returnName(val) {

    var object = {
        "name": "Mit",
        "Height": 175,
        "weight": 70,
        "friends": ["everything!", "one", "two"],
        "address": "anand"
    };

    return object[val];
}

console.log("Get address from function with object: "+returnName("address"));

var myPlant = [
    {
        type: "flowers",
        list: [
            "rose",
            "sunflower",
            "tulip"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

console.log("Tree: " +myPlant[1].list[1]);