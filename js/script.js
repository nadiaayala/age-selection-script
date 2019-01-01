var costumers =
    [
        {
            "name": "John",
            "lastName": "Doe",
            "age":"18",
            "email": "john_doe@hotmail.com"
        },
        {
            "name": "Ana",
            "lastName": "Doe",
            "age":"54",
            "email": "ana_doe@hotmail.com"
        },
        {
            "name": "Mary",
            "lastName": "Thorton",
            "age":"28",
            "email": "mary_thorton@yahoo.com"
        },
        {
            "name": "Lizzie",
            "lastName": "McCallan",
            "age":"32",
            "email": "lizzie.mccallan@gmail.com"
        },
        {
            "name": "Roger",
            "lastName": "Tompkins",
            "age":"17",
            "email": "roger.tompkins@gmail.com"
        },
        {
            "name": "Anne",
            "lastName": "Harris",
            "age":"16",
            "email": "anne.harris@gmail.com"
        },
        {
            "name": "Louis",
            "lastName": "Kasan",
            "age":"126",
            "email" : "louis.kasan@icloud.com"
        },
        {
            "name": "Louise",
            "lastName": "Swift",
            "age":"33",
            "email": "louise.swift@gmail.com"
        }
    ];

// Declare a function which can make calculations using the array and the function given as parameters: 
function arrayCalc(arr, fn)
{
    var arrayResults = [];
    for (var i = 0; i<costumers.length;i++)
    {
        arrayResults.push(fn(arr[i].age));
    }
    return arrayResults;
}

// Functions that will be used as the callback function for the arrayCalc function:
function isFullAge(el)
{
    return el>=18;
}

//This function checks the ages to make a new list of appropriate targets to a new offer:
function isTarget(el)
{
    return (el>=18 && el<=35);
}

// Variables which will store the array containing the results provides by the arrayCalc function:
var fullAges = arrayCalc(costumers,isFullAge);
var targets = arrayCalc(costumers, isTarget);
console.log(targets);



