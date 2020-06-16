# T3A1 Assignment Workbook, Luke Lovekin

## Standard Source Control Process for a Large Project.

Source control, also known as version control, allows us to make backups of all our source content, keeps a history, compares and views new changes, allows us to experiment with new codes and features, collaborate with others on the same piece of source, allows us to revert back to previous source states, record code changes and more.

There are two types of source control, centralised and distributed. Centralised version control (Cvsc) is when source stored on a central server, each person sends their copy/changes/source to this server and after every change is made you have to access the server which can be done offline. Distributed version control (Dvcs) is when the entire source is stored online and mirrors the source on each users system.

One of the most popular versions of distributed control systems is git. Git is online, small, fast, open-source and free. Using git on a directory or a folder allows us to add, commit and push our source to an online git host were it is stored safely. After initializing a directory we can then add and commit, which is similar to saving/recording and making a note of our source at a certain time, and push(send) to our origin, which is our online git repository that is saved onto the online git host in most cases Github.

To keep our main source "master branch (default branch)", clean and in working order, new branches can be created. A branch is like a pointer to the latest commit. New branches copy the master branch at the point of creation and allows the use of the source in a separate environment where features, changes, tests and more can be trialled and tested before it is merged in with the master branch and checked for merge conflicts. At any time you can revert back to a previous commit if need be as all commits are recorded. The source can be collaborated on with other users allowing them to alter code directly (usually on a branch) or allowing them to copy the repo which they can push to your repo which you can then see the changes and pull their code into yours

Working on large projects with other developers, a git repository can have more than one collaborator. The Developer/Organisation of the initial repository can invite collaborators and allow them a number of different permissions whether it's just read-only or being able to edit and add and make commits of their own from their own cloned/forked version of the repository. Like previously mentioned, each collaborator would generally be working off different branches in different areas of the code and once finished they can add, commit and push their version of the code to the origin where the origin can then make a pull request and pull/merge the code and check for merge conflicts before finalising. Each time a collaborator begin work it is best to do a git pull in the command line to make sure they are about to work with the latest version of the code saving potential merge conflicts.

## Important Aspects of Quality Software.

Reliability:
The software should consistency do exactly what the user expected it to do, if users run into errors then they should be handled in a way that doesn't disadvantage the user in any way. Things that can make software unreliable could include bad coding practices, non-compliance, lack of testing, lack of error and exception handling and more.

Efficiency:
Efficient software is software that is fast, memory-efficient, uses minimal resources, minimal external service calls and database calls. Efficiency is a result of keeping and checking to make sure the software has well thought out Application Architectural practices, good coding practices with object-oriented and SQL programming and keeping and maintaining data, memory and network management.

Security:
Quality software security includes being able to prevent attackers and keep data secure and maintained as well as keeping attackers from going where they shouldn't. This includes minimum features such as being Payment Card Industry (PCI) Compliant, makes data encrypted, secure authentication and authorisation. To keep software secure the following should be included as a minimum, validating input, Error and Exception handling, multi-layer design compliance and best practices used amongst Security, programming and application architecture.

Portability:
Portable software is software that can be used by many users, each of which can use the software on a number of different devices and on a number of operating systems all on the one account and shouldn't be relied on by hardware that isn't common to the everyday person.

Modifiability:
Modifiable software is software that is adaptable and flexible in a way so to add or change the software behaviour, takes minor alterations to code while not affecting any code that might be coupled to code that is being altered

Usability: 
Usability includes the software being intuitive, easy to user and user friendly. The software should include a nice design. The software features should cover all the possible user stories/requirements expected from the software. The main and most commonly used functions and features should be noticeable and visible or at least easy to navigate to without having to go searching or googling to find out what the software does and how to do it.

## Q3	Outline a standard high level structure for a MERN stack application and explain the components

Just the M.E.R.N components and structure and what they?

https://blog.hyperiondev.com/index.php/2018/09/10/everything-need-know-mern-stack/
https://www.geeksforgeeks.org/mern-stack/

6.0 to >5.0 pts
HD
Shows almost flawless understanding of the high level structure of the app



## Q4	A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

seek requirements??

6.0 to >5.0 pts
HD
Effectively describes a range of skills and knowledge required by IT workers to complete a quality web development project



## Q5	With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges


self reflect and more seek
rails ruby html css 
time management technical and soft skills
bring up previous project
why did i use this language and why, aws, deployment

6.0 to >5.0 pts
HD
Effectively describes a range of skills and knowledge used to complete a project.



## Q6	With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature

bring up previous project

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

next few questions were also in workbook one but with ruby examples

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

Q1  https://www.atlassian.com/git/tutorials/what-is-version-control

Q2  https://en.wikipedia.org/wiki/Software_quality#:~:text=Based%20on%20these%20models%2C%20the,Maintainability%20and%20(adequate)%20Size.
    https://www.silasreinagel.com/blog/2016/11/15/the-seven-aspects-of-software-quality/

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
