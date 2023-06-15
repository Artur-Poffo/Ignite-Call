<h1 align="center">
  <a href="#">Ignite Call</a>
</h1>

<h3 align="center">
    Full Stack call scheduling application
</h3>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#author">Author</a>
</p>


## About

Ignite Call - Full Stack call scheduling application connected to Google calendar, [@Rocketseat's Ignite Course Challenge](https://www.rocketseat.com.br/ignite)

---

## Features

- [x] Create a new user with social login
- [x] Connect with Google Calendar
- [x] Filter available days and times
- [x] See other users page
- [x] Schedule event and save to your Google calendar

---

## Layout

The application layout is available on Figma:

<a href="https://www.figma.com/community/file/1161274296921389678">
  <img alt="" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [docker](https://www.docker.com/) to run a container with MySql.
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Run the app

**Create an .env file to add the environment variables, it should look like this:**

> To configure NextAuth and Google provider read the [documentation](https://next-auth.js.org/getting-started/introduction)

```bash
# Database URL to your local database in MySql
DATABASE_URL='mysql://.....'

# Next Auth Configs and providers

# URL of project
NEXTAUTH_URL="http://localhost:3000"
# Random string
NEXTAUTH_SECRET="dawodkiwdjufdkjnfueisfhisjfhsieuhyfhyfthfdgr"

# Following the steps in the NextAuth documentation to configure the providers is a bit of a long explanation :(

# Google Provider
GOOGLE_CLIENT_ID="................"
GOOGLE_CLIENT_SECRET=".............."
```

**Now run the project....**

```bash
# Clone this repository
$ git clone https://github.com/Artur-Poffo/Ignite-Call.git

# Access the project folder cmd/terminal
$ cd Ignite-Call

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The server will start at port: 3000 - go to http://localhost:3000
```

---

## Tech Stack

The following tools were used in the construction of the project:

- **Next.js**
- **Typescript**
- **Prisma ORM**
- **Axios**
- **@phosphor-icons**
- **stitches**
- **React-Hook-Form**
- **next-seo**
- **dayjs**
- **react-query**
- **NextAuth**
- **Zod**
- **googleapis**

> See the file  [package.json](https://github.com/Artur-Poffo/Ignite-Call/blob/main/package.json)

---

## Author

- _**Artur Poffo - Developer**_

[![Linkedin Badge](https://img.shields.io/badge/-Artur-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/arturpoffo/)](https://www.linkedin.com/in/arturpoffo/)
[![Gmail Badge](https://img.shields.io/badge/-arturpoffop@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:arturpoffop@gmail.com)

---