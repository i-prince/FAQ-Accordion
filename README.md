# FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of my FAQ Accordion Solution](./public/Project-Guidelines/assets/images/Screenshot%20from%202024-08-28%2014-14-57.png)

### Links

- Solution URL: [Click to Access the Github Link to the Solution](https://github.com/i-prince/FAQ-Accordion)
- Live Site URL: [Click to Access the Live App](https://i-prince.github.io/FAQ-Accordion/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I Learned

This project allowed me to practice and implement an accordion feature using React. I focused on creating a seamless user experience where answers to frequently asked questions could be revealed and hidden efficiently. The project also enhanced my skills in CSS for layout and responsiveness.

Here's a snippet of the code I'm proud of:

```html
<h1>FAQs</h1>
```
```css
.mbody {
  padding: 40px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  width: 40%;
}
```
```js
const toggleDropdown = () => {
  document.querySelector('.drop-content').classList.toggle('show');
}
```

### Continued development

I plan to explore more advanced React features, such as context and hooks, to manage state and props more efficiently in similar projects. Improving my skills in responsive design and accessibility is also a priority for future projects.

### Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - The official documentation for React, which was invaluable in building this project.
- [MDN Web Docs](https://developer.mozilla.org/) - A great resource for understanding web development fundamentals.

## Author

- Website - [Mola Brother Tonny](https://i-prince.github.io/Social-Links-Profile/)
- Github - [Mola Tonny](https://github.com/i-prince)
- Frontend Mentor - [@i-prince](https://www.frontendmentor.io/profile/i-prince)

## Acknowledgments

- Github
- The Odin Project
- Front-end Mentor