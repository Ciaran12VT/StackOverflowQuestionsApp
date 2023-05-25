# StackOverflowQuestionsApp

## Instructions on how to run the app

1. Clone the repository: `git clone https://github.com/Ciaran12VT/StackOverflowQuestionsApp.git`
2. Navigate into the project directory: `cd StackOverflowQuestionsApp`
3. Install dependencies: `npm install`
4. Start the application: `npm start`
5. Open your browser and navigate to `http://localhost:4200`.

## Explanation of the project structure

This project is structured following the Angular Style Guide and Folder Structure. It includes a `core` module for singleton services and single-use components, and `feature-modules` for specific functionality areas.

- `/src/app/core`: This directory contains the core module, which includes global components.
- `/src/app/feature-modules`: This directory contains modules for specific features, each encapsulated in its own Angular module.

## Focus areas

During the development of this project, I focused on:

- Implementing the StackOverflow API to fetch and display questions.
- Creating a service to manage API calls.
- Creating components to display the list of questions and details.

## Compromises

In the interest of time, the following compromises were made:

- Simplified error handling: Currently, the application may not handle potential errors from the API.
- No test coverage: I did not have time to write tests.
- Organisation: Although I did spend some time considering where the modules should be placed in the folder structure, given more   time I would clean this up and double-check that I am importing only the modules I need where I need them.

## Future improvements

With more time, I would like to make the following improvements:

- Improve error handling: Add comprehensive error handling for all API calls.
- Enhance UI/UX: Improve the user interface and experience by adding more interactive elements.
- Increase test coverage: Write unit tests to ensure all components and services work as expected.
- Add more details components to the question-items (owner's avatar, reputation etc.)
- Write the implementation for a carousel component for the header
- Add the advertisment banner that cuts through the centre of the page.


