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

## Structure and Components for a MERN Stack Application

The high-level structure of a MERN stack application includes:

M = MongoDB, used as the database for an application, MongoDB is a NoSQL document-oriented database with a JSON based query language. Unlike common relational databases, NoSQL doesn't have tables rows and relations. Data is seen as objects or documents, there can be a collection instead of a table and the collection can have multiple documents instead of rows each collection with there own unique identifying documents. Storing data in this way makes the database schema-less and the collections don't need the same set of fields. Unlike other common databases that use a SQL language to communicate with the database, MongoDB uses Javascript and you make database calls on the JSON objects created. 

E = Express, Meant for Node.js backend framework that makes writing Node.js and writing server code a lot simpler. Express helps define routes and helps control what to do with HTTP requests when they match specific patterns, parses request URL headers and parameters, sets response codes, cookies headers and more. To help with common functionality like authorisation and authentication,  you can create custom Express middleware code that can be included into Express code. Express doesn't have a built-in template engine butt supports others although not necessary and the dynamic content is generated on the client/browser.

R = React, is a front end framework more likely to a library, open sources javascript library. It is the defining component of the MERN stack, used to create views rendered in Html. React is used to render a view in the MVC model. Views are declarative, meaning less management required for the effect of changes in the view state or data and the transitions and mutations into DOM. React applies changes to new and old views and does the figuring out of how the new view looks like, making them predictable, consistent, easier to understand and maintain. React uses virtual DOM technology which is an in-memory data structure. The view is declared how to look in the form of the virtual representation. Similar to other popular libraries, React is component-based where components maintain their own state and render themselves. Each component talks to each other and the app splits into components and focuses on one at a time.
React creates repetitive and or conditional DOM elements using javascript.
Being isomorphic, react can run on both server and browser.

N = NodeJs, is basically Javascript out of the browser providing a javascript environment that allows the user to run code on the server and using npm the user has is able to choose from thousands of free packages to download to help achieve commonly used functionality. Open-sourced, single-threaded, fast and highly scalable.

## Skills and Knowledge Need in Order to develop a Project?

As a minimum :

Hard Skills:
- Broad technical Experience
A Full stack of coding languages for e.g
- HTML, structures a webpage with information
- CSS, styles the webpage
- Ruby and Rails, a  server side web app framework and programming language that uses the MVC model
- PostgreSQL to store data
- Knowledge of the Command Line Interface.

The ability to use Third Party software such as:
- A Source control process to store and manage source like using GitHub
- Deployment website like Heroku
- A cloud service like AWS S3 to store images to the cloud that show on the webpage
- A payment system for financial transactions on the site like Stripe

- Must understand authorisation and authentication and how to implement into the project

Soft Skills:
- Ability to work in a team
- Good communication skills
- Good Time management
- An understanding of Project management and Development methodology proccesses like Agile or a Trello board
- Aptitude to problem solve

## Knowledge and Skills Required to Complete a past Project, 

Hard Skills:


- The ability to use a Tech stack such as:
  - Ruby on rails 
      - The server-side web framework. A model-view-controller framework that uses Ruby as the programming language
      -Knowledge on HTTP Requests, routes, Controllers, Rendering, Params, Views, Embedded Ruby, Partials, Models, Forms, Model Relations, Validation
  - Ruby
      - A programming language, version 2.7.1,
      - The use of Data typoes, Flow control, loops, arrays, symbols, hashes, iterators, methods, blocks, classes, objects, gems
  - VScode
      - Text editor
  - Bootstrap & SCSS
      - one of the most popular frameworks for styling and making webpages responsive The code used for styling the website
      - Bootstrap also for styling.
  - Postgresql
      - A relational database management system which uses Structured query language (SQL) to set up the database and hold data for the webpage. 
  - HTML 5
      - A hypertext Markup Language used to structure the web app.

- The ability to use and implement Ruby Gems:
Other than rails default gems, gems that were used include
  - Devise
      - A very common, battle-tested, open-sourced gem used to authenticate new and existing user also making it easy for allowing user authorisation to hide certain things from certain users. Devise comes with views and controllers that can be used for almost any webpage
  - AWS-SDK-s3
      - This gem is needed in conjunction with active storage and Amazons S3 Bucket to store images on the internet

- Third-Party Software
  - Heroku
    - An online deployment website/ server/cloud used for hosting my website
  - Github
    - A git repository host online, used for storing managing and backing up my source code
  - Amazon S3 Bucket
    - Stores images on the Amazon AWS cloud keeping image uploads dynamic and keeping the webpage from running slower
  - Trello
      -  A Kanban software used to help with project management
  - Lucid chart
      - Software used to draw Sitemaps and ERDs and other charts and diagrams

Soft Skills
- Knowledge of Time management
- An understanding of Project management and Development methodology processes like Agile or a Trello board
- Creativity

The main challenge was being pretty new to all these skills and having to really figure them out as you go and it was hard to accurately plan a project that your not really familiar with

## Evaluate the Effectiveness of Knowledge and Skills

Starting my terminal app project I had no prior knowledge to programming and I wasn't very handy with a computer. In preparation for this project, I had 3 weeks of trying to learn as much as possible to complete it. Starting from scratch I learnt:
- Setting up my pc and Ubuntu terminal so I could use WSL for programming.
- Learning Command Line Interface
- Ruby, Data types, flow control, loops, arrays, symbols, hashes, iterators, methods blocks, classes, objects, inheritance, modules, gems, test-driven development, error handling.

I had a lot in mind when starting this project and the week felt like a couple of days and I quickly realised I bit off more then I could chew. I aimed for too many features and sprinkles instead of just focusing on Minimum Viable Product. Taking away from this project I will better plan out MVP and aim to finish that first and as I progress with the planned date I will reconsider adding extra features to projects. The areas that need work (below) were mainly due to me running out of time and just simply not getting around to finishing them in time.

Areas that were effective:
- Software Development Plan states the purpose. Could have a higher level of clarity.
- Outlined area of user interaction and experience. Could have been outlined at a high level
- Control flow diagram, done at a basic level. Could be done at a higher level
- Variables and variable scope declared correctly. Could have used more block coding and nested structures and used their own scoped variables
- Conditional control and loops which had multiple paths to handle multiple contingencies. Could have used them in a more effective manner
- Imported Ruby Gems
- The moderate use of ruby gems. Could have used more gems for more extensive functions.
- Simple functions
- DRY code.  Could have been more DRYer.
- Code style and convention. Could have been done across all code with fewer errors
- The application had few errors. Could have had less
- Source control. Could have done more commits
- Project management. Tools used could have been used more frequently.
- Execution of a script. Only did one could have done more.
- A very thorough walkthrough of the logic of the application, high level of thinking demonstrated

Areas that need work:
- Not much if at all any error handling included in this project. Could have simply achieved this but adding some "begins and rescues" to handling exceptions
- Standard input and output. COuld have implemented in two or more sophisticated ways and demonstrated a deeper understanding.
- Did not use command line arguments. Could have used at least one to demonstrate understanding.
- The help file was too basic and only somewhat accurate. Could have been more detailed and accurate.
- Tests were not implemented at all. Could have sacrificed some unnecessary sprinkles and made time to add tests at least 1.

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

Q3 https://www.apress.com/de/blog/all-blog-posts/why-mern/12056000

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
