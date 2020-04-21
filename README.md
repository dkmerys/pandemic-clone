# _Pandemic Clone_


####Intermediate JavaScript, Friday Project, April 20th, 2020

#### By _ Dan Merys, Tyler Bates

## Description

An interactive game where the user attempts to beat a pandemic which spreads incrementally over time.
## Logic Specifications
| Spec:                                                           | Example:                                      | Output:                              |
|-----------------------------------------------------------------|-----------------------------------------------|--------------------------------------|
| Create base game construct defining key game elements           | player,virus,city                             | quarantine:-10, PPE:-5, sanatize: -1 |
| create virus with base infection value of 10                    | virus                                         | 10                                   |
| virus infection number will increase to 15 after 6000ms         | jest.advanceTimersByTime(60001);              | 15                                   |
| virus infection rate increases upon reaching doubling of number | infected=20, jest.advanceTimersByTime(45001); | 25                                   |
| create actions that reduce virus infected number                | sanitize()                                    | infection -- 1                       |
| create action that reduces virus infection increase             | quarantine()                                  | this.city.infected -= 3 per 60000ms  |
| set outbreak to begin after 45 seconds upon game initialization | jest.advanceTimersByTime(45001);              | infection = 10                       |
| create cure variable and function for game goal                 | if (cure >= 5) {                              | you win!}                            |


## Setup/Installation Requirements


For additional information on this project, you can:
* _clone repository from_ "https://github.com/dkmerys/pandemic-clone"
* _find in directory_
* _open index in local server_
* _enjoy_


## Technologies Used

_HTML, CSS, Bootstrap, JavaScript, JQuery, Jest, node, webpack.

### License


Copyright (c) 2020 **_Dan Merys & Tyler Bates @ Epicodus_**
```