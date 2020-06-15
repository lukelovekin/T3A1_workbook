# T3A1 Assignment Workbook, Luke Lovekin

## Q1 Provide an overview and description of a standard source control process for a large project

6.0 to >5.0 pts
HD
Provides an extensive overview and description of a standard source control process



## Q2	What are the most important aspects of quality software?

6.0 to >5.0 pts
HD
List discuss and demonstrate 6 software quality characteristics.



## Q3	Outline a standard high level structure for a MERN stack application and explain the components

6.0 to >5.0 pts
HD
Shows almost flawless understanding of the high level structure of the app



## Q4	A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

6.0 to >5.0 pts
HD
Effectively describes a range of skills and knowledge required by IT workers to complete a quality web development project



## Q5	With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges

6.0 to >5.0 pts
HD
Effectively describes a range of skills and knowledge used to complete a project.



## Q6	With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature


6.0 to >5.0 pts
HD
Evaluates effectiveness of knowledge and skills accurately, providing examples, and providing an insightful improvement on each skill



## Q7	Explain control flow, using an example from the JavaScript programming language


6.0 to >5.0 pts
HD
Provides a thorough explanation of control flow in programming



## Q8	Explain type coercion, using examples from the JavaScript programming language

6.0 to >5.0 pts
HD
Provides a thorough explanation of type coercion in programming



## Q9	Explain data types, using examples from the JavaScript programming language

6.0 to >5.0 pts
HD
Provides a thorough explanation of data types in programming



## Q10	Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

6.0 to >5.0 pts
HD
Demonstrates an extensive ability to manipulate arrays



## Q11	Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

6.0 to >5.0 pts
HD
Demonstrates an extensive ability to manipulate objects



## Q12	Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language

6.0 to >5.0 pts
HD
Demonstrates an extensive ability to manipulate JSON



## Q13	For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes


12.0 to >10.0 pts
HD
Demonstrates an extensive ability to recognise functions, ranges and classes

Q13 Code Snippet

```
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it was made in ' + this.model;
  }
}

let makes = ["Ford", "Holden", "Toyota"]
let models = Array.from(new Array(40), (x,i) => i + 1980)

function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (model of models) {

  make = makes[randomIntFromInterval(0,makes.length-1)]
  model = models[randomIntFromInterval(0,makes.length-1)]
    
  mycar = new Model(make, model);
  console.log(mycar.show())
}
```

# Give Headings
# Convert to a singe PDF file(LukeSkywalker_T3A1.pdf)

### References