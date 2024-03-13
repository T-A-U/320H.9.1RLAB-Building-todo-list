# ALAB 320H.9.1 - Building a Todo List (assignment)

## Learning Objectives

After completing this lab, learners will have demonstrated the ability to:

- Use the useReducer and/or useImmerReducer hook to manage state with reducer functions.

- Use useState in places where reducers are not appropriate or necessary.
- Implement controlled forms and inputs.
- Effectively decide where pieces of state should live.
- Use conditional rendering and conditional styling to provide a positive, interactive user experience.
- Create a complete React application from a set of desired functionality.


## Instructions

This lab will test your ability to build an application from scratch, using a set of desired functionality to drive your design decisions.

   
~~1. Create a React CodeSandbox and name it "React Todo List."~~
~~2. Follow the requirements below to create your React application.~~
~~3. Submit the link to your CodeSandbox on Canvas when you are finished.~~

 Not using CodeSandbox.

The layout and styling of the application is left up to your discretion. There are no layout or styling requirements, but you should always make sure your applications are neat, sensible, and provide a good user experience. If you are left with extra time, there is always more styling to be done!

## Requirements

After reading through the requirements below, it is recommended you start with a mockup and follow the steps described in "Thinking in React" to complete your application. Remember, stay organized!

**Your todo list application must have:**



1. A heading labeling it as a "todo list."

2. A list of "todo" items, which are strings listing activities to be accomplished (e.g. "find that missing sock"). Each "todo" item should have:
        1. A checkbox next to it which indicates whether it is "complete."

2. A "delete" button next to it which removes it from the list.
            The "delete" button should be disabled unless the todo is complete!

3. An "edit" button that replaces the todo string with a text input used to edit the todo.
            Hint: bind the value of this text input to a piece of state so that it is always accurate, even when first displayed!
            When this text input is active, the "delete" and "edit" buttons should be hidden, and a "save" button should appear. The "save" button should save any changes made to the todo within the text input.
3. An input element that creates new todo items and adds them to the list.
4. New todos should be added to the top of the list visually; the oldest todos should be at the bottom.










# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
