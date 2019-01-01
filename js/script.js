
var ages = [18,20,25,60,64,34,32,28,17,16,46,47,35,22,23,18,17,53,52];

// Declare a function which can make calculations using the array and the function given as parameters: s 
function arrayCalc(arr, fn)
{
    var arrayResults = [];
    for (var i = 0; i<ages.length;i++)
    {
        arrayResults.push(fn(arr[i]));
    }
    return arrayResults;
}

// functions that will be used as the callback function for the arrayCalc function:
function isFullAge(el)
{
    return el>=18;
}

// variables which will store the array containing the results provides by the arrayCalc function:
var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges);
aa 
