# T3A1 Assignment Workbook, Luke Lovekin

## Standard Source Control Process for a Large Project.

Source control, also known as version control, allows us to make backups of all our source content, keeps a history, compares and views new changes, allows us to experiment with new codes and features, collaborate with others on the same piece of source, allows us to revert back to previous source states, record code changes and more.

There are two types of source control, centralised and distributed. Centralised version control (Cvsc) is when source stored on a central server, each person sends their copy/changes/source to this server and after every change is made you have to access the server which can be done offline. Distributed version control (Dvcs) is when the entire source is stored online and mirrors the source on each users system.

One of the most popular versions of distributed control systems is git. Git is online, small, fast, open-source and free. Using git on a directory or a folder allows us to add, commit and push our source to an online git host were it is stored safely. After initializing a directory we can then add and commit, which is similar to saving/recording and making a note of our source at a certain time, and push(send) to our origin, which is our online git repository that is saved onto the online git host in most cases Github.

To keep our main source "master branch (default branch)", clean and in working order, new branches can be created. A branch is like a pointer to the latest commit. New branches copy the master branch at the point of creation and allows the use of the source in a separate environment where features, changes, tests and more can be trialled and tested before it is merged in with the master branch and checked for merge conflicts. At any time you can revert back to a previous commit if need be as all commits are recorded. The source can be collaborated on with other users allowing them to alter code directly (usually on a branch) or allowing them to copy the repo which they can push to your repo which you can then see the changes and pull their code into yours

Working on large projects with other developers, a git repository can have more than one collaborator. The Developer of the initial repository can invite collaborators and allow them a number of different permissions whether it's just read-only or being able to edit and add and make commits of their own from their own cloned/forked version of the repository. Like previously mentioned, each collaborator would generally be working off different branches in different areas of the code and once finished they can add, commit and push their version of the code to the origin where the origin can then make a pull request and pull/merge the code and check for merge conflicts before finalising. Each time a collaborator begin work it is best to do a git pull in the command line to make sure they are about to work with the latest version of the code saving potential merge conflicts.


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
# Convert to a singe PDF file(LukeSkywalker_T3A1.pdf) before submitting

### References

Q1 https://www.atlassian.com/git/tutorials/what-is-version-control

Q2

Q3

Q4

Q5

Q6

Q7

Q8

Q9

Q10

Q11

Q12

Q13