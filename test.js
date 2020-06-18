// class declared, which in javascript are actually just special functions
class Car {
    // method used for creating and initializing and object created with classs
    constructor(brand) {
    // declaring a variable for the classes instance properties
        this.carname = brand;
    }
    // class function that returns an interpolated string that includes the value of this.carname as intered into a new instance of Car when present function is called on by a class instance
    present() {
        return 'I have a ' + this.carname;
    }
}

// creating a child class of Car using extends
class Model extends Car {

// method used for creating and initializing and object created within just this child class of Car except the "super(brand) calls the constructor from the parent class and passes the brand parameter through it. Cars can be a lot of brands this class is specific to a Model"
    constructor(brand, mod) {
        super(brand);
    
    // declaring a variable for the Model classes parameters/instance properties
        this.model = mod;
    }
    // class function that returns an interpolated string that includes the value of this.model as entered into a new instance of Model when show function is called on by a class instance but also adds the present method for the Car class as this Model is a child of the Car class it has access to the present method and the data that is put in class
    show() {
        return this.present() + ', it was made in ' + this.model;
    }
}

// declaring makes as an array of stings
let makes = ["Ford", "Holden", "Toyota"]

//declaring models as an array of years from 1980 + the next 40 numbers up to 2019
let models = Array.from(new Array(40), (x, i) => i + 1980)

// this function return a random number betweent the min and maximum put into parameters
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//calling a loop to iterate over each element in the model array (1980 to 2019) since the model array has 40 elements this loop will iterate 40 times
for (model of models) {

// each time this loop iterates a make variable is declared with the value of an element from the make array with the index value of between 0 and makes.length - 1 which is 2 so the element at the index in the make array of between 0 to 2 (random index value can be "Ford", "Holden or "Toyota")
    make = makes[randomIntFromInterval(0, makes.length - 1)]

// each time this loop iterates a model variable is declared with the value of an element from the model array with the index value of between 0 and makes.length  - 1 (Which would make more sense if it was "models.length - 1" as the models array is 40 elements long with years 1980 to 2019 instead of only using the makes array and choosing an index of 0 to 2) which is also 2 so the element at the index in the model array of between 0 to 2 of the (random index value can only be "1980", "1981" or "1982" )
    model = models[randomIntFromInterval(0, makes.length - 1)] 


// creating a new instace of the Model class which shares functions from the Car class and since this is still in the loop each iteration includes an instance property of make and model which are random values from the functions previous
    mycar = new Model(make, model);

// 40 times this console logs the Models "show" function which add on the the super classes "present" functions showing its string and make value and the rest of the shows function string with the model value
    console.log(mycar.show())
}
