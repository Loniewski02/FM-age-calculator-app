# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./desktop-view.png)
![](./mobile-view.png)


### Links

- Solution URL: [Repo](https://github.com/Loniewski02/FM-age-calculator-app)
- Live Site URL: [Live](https://loniewski02.github.io/FM-age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

I learned many useful methods related to the date object, such as:

```js
   .getFullYear(),
   .getMonth(), 
   .getDate(),
   .setFullYear()
```

### Useful resources

- [Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - Until now, I rarely used Date(), so I reached out to MDN for knowledge.

## Author

- Frontend Mentor - [@Loniewski02](https://www.frontendmentor.io/profile/Loniewski02)
