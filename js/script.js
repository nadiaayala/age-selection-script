var costumers =
    [
        {
            "name": "John",
            "lastName": "Doe",
            "age":"18"
        },
        {
            "name": "Ana",
            "lastName": "Doe",
            "age":"54"
        },
        {
            "name": "Mary",
            "lastName": "Thorton",
            "age":"28"
        },
        {
            "name": "Lizzie",
            "lastName": "McCallan",
            "age":"32"
        },
        {
            "name": "Roger",
            "lastName": "Tompkins",
            "age":"17"
        },
        {
            "name": "Anne",
            "lastName": "Harris",
            "age":"16"
        },
        {
            "name": "Louis",
            "lastName": "Kasan",
            "age":"126"
        },
        {
            "name": "Louise",
            "lastName": "Swift",
            "age":"33"
        }
    ];
console.log(costumers);

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



