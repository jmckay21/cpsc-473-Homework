var exercise1 = function (arr){
    
    "use strict";
    var sumSoFar = 0;
    
    arr.forEach(function (value) {
    sumSoFar = sumSoFar + value;
    });
    
    return (sumSoFar/arr.length);
};

console.log(exercise1([1,2,3,4]));
var $content1 = $("<div> Exercise 1 Result </div><div> "+ exercise1([1,2,3,4]) +" </div>");
$("body").append($content1);

var exercise2 = function (arr){
    
    "use strict";
    var max = arr[0];
    arr.forEach(function (value){
        if (value > max){
            max = value;
        }
    });
    return max;
};

console.log(exercise2([1,2,3,4]));
var $content2 = $("<div> Exercise 2 Result </div><div> "+ exercise2([1,2,3,4]) +" </div>");
$("body").append($content2);

var exercise3 = function (arr){
    
    "use strict";
    var res = false;
    arr.forEach(function (value){
        if ((value%2) == 0){
            res = true;
        }
    });
    return res;
};

console.log(exercise3([1,2,3,4]));
var $content3 = $("<div> Exercise 3 Result </div><div> "+ exercise3([1,2,3,4]) +" </div>");
$("body").append($content3);

var exercise4 = function (arr){
    
    "use strict";
    var res = true;
    arr.forEach(function (value){
        if ((value%2) != 0){
            res = false;
        }
    });
    return res;
};

console.log(exercise4([1,2,3,4]));
var $content4 = $("<div> Exercise 4 Result </div><div> "+ exercise4([1,2,3,4]) +" </div>");
$("body").append($content4);

var arrayContains = function (arr, string){
    
    "use strict";
    var res = false;
    arr.forEach(function(value){
        if (value == string){
            res = true;
        }
    });
    return res;
};

console.log(arrayContains(["hello" , "world" ], "hello" ));
var $content5 = $("<div> Exercise 5 Result </div><div> "+ arrayContains(["hello" , "world" ], "hello" ) +" </div>");
$("body").append($content5);

var arrayContainsTwo = function (arr, string){
    
    "use strict";
    var res = false;
    var counter = 0;
    arr.forEach(function(value){
        if (value == string){
            counter++;
        }
    });
    if(counter>=2){
        res = true;
    }
    return res;
};

console.log(arrayContainsTwo(["a" , "b" , "a" , "c" ], "a" ));
var $content6 = $("<div> Exercise 6 part 1 Result </div><div> "+ arrayContainsTwo(["a" , "b" , "a" , "c" ], "a") +" </div>");
$("body").append($content6);

var arrayContainsThree = function (arr, string){
    
    "use strict";
    var res = false;
    var counter = 0;
    arr.forEach(function(value){
        if (value == string){
            counter++;
        }
    });
    if(counter>=3){
        res = true;
    }
    return res;
};

console.log(arrayContainsThree(["a" , "b" , "a" , "c" , "a" ], "a"));
var $content7 = $("<div> Exercise 6 part 2 Result </div><div> "+ arrayContainsThree(["a" , "b" , "a" , "c" , "a" ], "a") +" </div>");
$("body").append($content7);

var arrayContainsNTimes = function (arr, str, n){
    
    "use strict";
    var res = false;
    var counter = 0;
 
    arr.forEach(function(value){
        if (value == str){
            counter++;
        }
    });

    if(counter >= n){
        res = true;
    }
    return res;
};

console.log(arrayContainsNTimes(["a" , "b" , "a" , "c" , "a" ], "a" , 4));
var $content8 = $("<div> Exercise 6 part 3 Result </div><div> "+ arrayContainsNTimes(["a" , "b" , "a" , "c" , "a" ], "a" , 4) +" </div>");
$("body").append($content8);

var exercise2Underscore = function (arr){
    
    "use strict";
    var max = _.max(arr);
   
    return max;
};

console.log(exercise2Underscore([1,2,3,4]));
var $content9 = $("<div> Exercise 2 with Underscore Result </div><div> "+ exercise2Underscore([1,2,3,4]) +" </div>");
$("body").append($content9);

var exercise3Underscore = function (arr){
    
    "use strict";
    var res = false;
    var even = _.find(arr, function(value){ //function highly based off example in Underscore documentation
        if(value % 2 ==0){
            return value;
        }
    });
   if (even != undefined){
       res = true;
   }
    return res;
};

console.log(exercise3Underscore([1,2,3,4]));
var $content10 = $("<div> Exercise 3 with Underscore Result </div><div> "+ exercise3Underscore([1,2,3,4]) +" </div>");
$("body").append($content10);

var exercise4Underscore = function (arr){
    
    "use strict";
    var res = true;
    var evens = _.filter(arr, function(value){ //function highly based off example in Underscore documentation
        if(value % 2 ==0){
            return value;
        }});
    if(evens != arr){
        res = false;
    }
    return res;
};

console.log(exercise4Underscore([1,2,3,4]));
var $content11 = $("<div> Exercise 4 with Underscore Result </div><div> "+ exercise4Underscore([1,2,3,4]) +" </div>");
$("body").append($content11);