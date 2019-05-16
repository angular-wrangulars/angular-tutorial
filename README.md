# JS Framework Comparative Analysis

## Framework: Angular
----------


<p align="center">
  <img style= float: left width="75" height="75" src="./assets/angular-wrangulars-compressed.png">
</p> 

<h2 align="center">Team: Angular Wrangulars</h2>

<p align="center">By: Billy Bunn, Erin Trainor, Greg Dukes, & Jon Gentry</p>

----------

**Overall Score and Comments**
**Score (Out of 10)****:** **5**

**General Comments:**
If you are a company deciding whether to choose Angular vs other options… choose React (or Vue). If you are already using React do not regress into Angular. If you are already using Angular or starting at a company that currently uses Angular, here are some resources to help you understand how it compares to React and some Angular history and tutorials.

There are some **big** differences between React and Angular. 

- Angular is a JavaScript **framework**, React is a JavaScript **library**
    - **Framework** implies that Angular deals with every piece in the Model-View-Controller (MVC) framework. As a **library**, React only deals with the “View” in MVC.
    - This means that Angular is much pickier about how you use it and how you structure your application. React offers more freedom for use, but offers fewer features “out of the box”.
- Angular uses **templating** to affect markdown, React uses **JSX**.
    - With JSX, both the HTML markdown *and* ******the JavaScript logic are together inline in a *component*.
    - With Angular, HTML is extended with Angular-specific [template syntax](https://angular.io/guide/template-syntax) (e.i., double curly braces for interpolation). 
- Angular uses a **regular DOM**, React uses a **virtual DOM**.
    - When an HTML tag in a page changes, Angular will update the entire DOM tree down to that tag.
    - React will change its virtual DOM, compare against the current page, and only change the HTML tags that have changed.
- Angular uses **two-way data binding**, React uses **one-way data binding**.
    - When state is changed in React—e.g., *setState({this.state.count + 1})*— it updates any rendered markdown (the “View”) that uses that piece of state. But when the markdown is changed on the page (e.g., a user types in an input box), state (in the “Model”) does **not** change unless you manage it yourself—the state data is bound **one-way**.
    - When state is changed in Angular, the markdown on the page 


## Versions of Angular
![Angular for beginners: AngularJS vs Angular 2 vs Angular 7](https://s3-us-west-2.amazonaws.com/angular-templates/tutorials/learn-angular-from-scratch-step-by-step/angular-evolution-heros.png)

## 

**Big Takeaway… Angular JS and Angular ARE NOT the same thing**

**Angular JS**
The original version 1 release in 2010. AngularJS was completely based on controllers and the view communicates using `$scope`.
 
**Angular 2 (AKA Angular)**
In 2016 the Angular JS framework was completely re-written and renamed “Angular.” The new Angular is 100% component based. Angular recommends using TypeScript and supports a variety of benefits taken from ES6 such as:

    - For/Of loops
    - Improved dependency injection
    - Iterators
    - Reflection
    - Dynamic loading
    - Asynchronous template compilation
    - Simpler Routing

**Angular 4**
Backwards compatible to Angular 2. Changes to the project structure made the framework more stable, smaller and faster.There were some major changes, but mostly on the project structure with lots of refactors that made the framework more stable.

**Angular 7**
Backwards compatible to Angular 2 and 4. Angular 7 is full of new features, bug fixes, performance improvements, and some code deprecation as a clean up of the refactors from old versions. Lots of new features to learn without gaining any benefits you could not get from another framework (like React).


----------
## Pros and Cons of Angular
| **Pros**                                      | **Cons**                                              |
| --------------------------------------------- | ----------------------------------------------------- |
| Two-way data binding (some things are easier) | Two-way data binding (some things are more dangerous) |
| Supports Sass, Lass, CSS3, Component Styles   | Updates entire DOM on change                          |
| High performance                              | Tough to convert from legacy AngularJS                |
| TypeScript                                    | TypeScript                                            |
| Large community                               | Mixed reviews within community                        |
| Reusable, component-based architecture        | High barrier to entry                                 |



----------
## Ratings and Reviews

**Documentation**
A great aspect of Angular’s documentation  (that is often lacking in other documentation) is great navigation. From anywhere on the Angular site it’s easy to navigate to the Docs (as well as other resources) from the top nav. Also once within the documentation it is always clear as to where you are due to side navigation and dropdown menus. 

**Systems Requirements**


- NPM Packages
    - Typescript 
    - tslint
    - Jasmine
    - Karma
    - Protractor


- Given the NPM packages above, no other system requirements.  Angular apps can be written in any editor, on any OS.  Angular apps are supported at all major cloud hosting sites, and can grab data from any major db type.


----------
## Ramp-Up Projections
![Image result for angular usage after introduction of react](https://www.academind.com/static/e56e5993d966e51142b91df3c0f97ad2/a296c/angular-react-vue-learning-curve.jpg)


*How long would/should it take a team of mid-junior developers to become productive?*

Getting an app up-and-running is simple, as the Angular CLI has an equivalent to “create-react-app”: “ng new”. Tutorials on common applications can be found easily online (like to-do lists). 

**Note: If the junior developers did not have a prior working knowledge of components (like in React) the ramp up period would be much longer.**

The documentation on Angular is decent, there are a myriad of resources online, and there are *many* devs who use Angular every day. However, compared to React, the barrier to entry using Angular is high (see learning curve above). 

- If you just know JavaScript, the big new stuff in React is JSX syntax, managing internal state, and passing down props.
- If you just know JavaScript, there’s a *lot* more to learn in Angular.  There are many central concepts that drive an Angular app like directives, decorators, services, dependency injection, pipes, and templates.

To create something simple or something that’s been done before, a team of devs could get it working pretty quickly by googling their way through it. To write complex, non-tutorial app that a business would pay for a, a team of mid–junior devs would need at *least* a few days to learn the framework. If this team of devs had never used a front-end framework (like React) before, it’d take even longer.

We started following a tutorial and within 20 mins (Erin timed it) we were writing our own Angular code on our app. We had a working todo list in another 20 minutes. If we didn’t have a tutorial to guide us, we think this would’ve taken us *much* longer. However, our experience with React definitely helped us understand a little more about the ins and outs of our first Angular app.


----------
## Community Support and Adoption levels
![Image result for usage of angular vs react](https://zendev.com/assets/img/posts/framework-popularity/all-4-star-history.png)



    **How popular is this framework?**
    - The popularity of AngularJS peaked in 2016 and has been losing ground to ReactJS considerably since then with 2017 being the year that React took over.
    
     **What big companies are running on it?** 
    - Gmail, YouTube, Google AdWords, PayPal, Netflix, The Guardian, etc. 
    
    **How is it "seen" in the general JS community?** 
    - In 2018, developers were asked their opinion of Angular vs. React and Vue JS:  
        - React is the most loved frontend framework, more than **80%** of developers *used it and would use again* or *would like to learn it*. 
        - More than **70%** of developers used VueJS.
        - Only **33%** of developers used Angular and more than 60% *would not use it again* or *are not interested*.
    
----------
## Links and Resources
    **Framework** 
    - [Angular.io](https://angular.io/)
    **Docs**
    - [Angular.io Docs](https://angular.io/docs)
    **Tutorials**
    - [Learn how to create your first Angular app in 20 minutes](https://medium.freecodecamp.org/learn-how-to-create-your-first-angular-app-in-20-min-146201d9b5a7)
    - [Tour of Heroes](https://angular.io/tutorial)
    - [Angular Tutorial: Learn Angular from scratch step by step](https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step)
    **Resources**
    - [React vs. Angular: The Complete Comparison](https://programmingwithmosh.com/react/react-vs-angular/)
[](https://blog.angularindepth.com/the-mechanics-of-dom-updates-in-angular-3b2970d5c03d)    - [The Mechanics of DOM Updates in](https://blog.angularindepth.com/the-mechanics-of-dom-updates-in-angular-3b2970d5c03d) [](https://blog.angularindepth.com/the-mechanics-of-dom-updates-in-angular-3b2970d5c03d)[Angular](https://blog.angularindepth.com/the-mechanics-of-dom-updates-in-angular-3b2970d5c03d)
    - [Is Angular Dead?](https://dev.to/zooly/is-angular-dead--1627)
    - [Angular vs React.js vs Vue.js - My Thoughts!](https://www.academind.com/learn/javascript/angular-vs-react-vs-vue-my-thoughts/)
    - [Github Stars !== Usage: React is still blowing Vue and Angular Away](https://zendev.com/2018/06/19/react-usage-beating-vue-angular.html)
    
----------
## Code Demos
- [Code Repository](https://github.com/angular-wrangulars/angular-tutorial)

**Operating Instructions**
*If someone were to download your repo (above), what steps do they need to take to run the application*

- ng serve

     - Type into text box
     - Adds text to the DOM with Edit and Delete options
     
     

----------


## Bottom Line

Do not make the switch from React to Angular.
