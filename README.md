# 2020 Junior Devs Project - Earth Academy
2020 collaboration project for members of the Junior Devs group

## Purpose of this project
The main goal of this project is to enable members of the Junior Devs group to collaborate and learn valuable skills such as remote collaboration, practice their programming skills, learn new frameworks, and add a nice project to their portfolio, among other things.

All members of the group had a chance to add their ideas for a project to work on together, and we finally decided on one via a poll on the Telegram group. The details of the project are below. 

In the following days we will discuss how the work will be organized and more information will be added to this repository.

## Details on the selected project

### E-learning platform focused on educational material to reduce waste

 - Creation of a landpage
 - Catalog of available E-Learnings, with possibility to track completed, open, and in progress e-learnings
 - Creation of 2 or more short E-Learnings, with at least 5 slides and a short exam at the end with a minimum requirement of 70%, otherwise the e-learning should be started again, or just the section that failed... Suggested topics for the e-learning
   - A journey to a "Zero Waste" Lifestyle
   - Packaging Free Shopping
   - Reduce plastic at home
   - How to classify correctly your home waste: Paper/Glass/Plastic/Textil/Organic( for compost)/.... 
   - How to make compost at home

### Tech stack
We will be building this project with JavaScript: React on the frontend and Node.js on the backend. More details to come!

## How to contribute to this project

Please read our [contributing guide](https://github.com/Junior-Devs/2020-Junior-Devs-Project/blob/master/CONTRIBUTING.md). 

## How to run the app

- Fork the repo. See our guide for this [here](https://junior-devs.com/git-guide)

### Backend

- See [here](https://github.com/Junior-Devs/2020-Junior-Devs-Project/wiki/Local-Database-Setup-for-Testing-Backend) how to set up the local database.
- In the main directory, run `npm install`
- Run `npm start`. If all went well you should see "NodeJS Server Running"

### Frontend
- `cd frontend`
- Run `npm install` (the frontend and backend are two separate projects with separate `package.json` files, so you need to do this again inside the `frontend` directory
- Run `npm run dev`. If all went well, you should see "Server running at http://localhost:1234". You can now open the project at http://localhost:1234.

*** Important ***: There is a `HelloWorld.jsx` sample component with its corresponding test file (`HelloWorld.spec.jsx`) and story (`HelloWorld.stories.jsx`). DO NOT delete these, they are there as templates to help you and others get started. 

### To run Storybook:

- `cd frontend` if you're not already in the `frontend` directory
- Run `npm run storybook`. The browser will open up with Storybook.
