# Evaluate a News Article with Natural Language Processing

## Table of Contents

* [Introduction](#Introduction)
* [Setting up the application](#setting-up-the-application)

## Introduction

The code in this repository represents the result of the news-evaluator application project from the Udacity Front Ent
Web
Developer nanodegree. The task is to create an asynchronous web app that uses the MeaningCloud API and
individual user input data to rate a website's content with Natural
Language Processing (NLP) making a call to MeaningCloud's API. In this project, node.js, webpack loaders and plugins as
well as Jest are used.

## Setting up the application

### Clone Git Repository

Open your terminal and move to the directory / folder where you want to store the files:

```
cd <path to your project folder>
```

Clone the project from this git repository:

```
git clone <Github-Repository-URL>
```

### Install Dependencies

Install the dependencies with Node Package Manager.

```
npm install
```
This project has following dependencies:

```
@babel/core
@babel/preset-env
babel-loader
body-parser
clean-webpack-plugin
cors
css-loader
dotenv
express
html-webpack-plugin
jest
mini-css-extract-plugin
node-fetch
sass
sass-loader
style-loader
webpack
webpack-cli
webpack-dev-server
workbox-webpack-plugin
```

### Obtain API Key from MeaningCloud

Open [MeaningCloud](https://www.meaningcloud.com/developer/create-account) and create an account to receive your
personal API key.

### Create *.env* file

API keys are like private keys. As the name already says, the information is private and **should not** be visible to
anyone else except you. To prevent your API from disclosing to the public, go to the *root* directory of
your project and create a *.env* file. Within the *.env* file, create a variable **"API_KEY="** and add the API key as
follows:

```
API_KEY=****************************
```

### Start express server and run the program

This project has a *Test*, *Development*, and *Production* mode.

To run the *unit tests*, type in the following command:

```
npm run test
```

To run the *development* mode, type in the following command:

```
npm run build-dev
```

To run the *production* mode, type in the following command:

```
npm run build-prod
```

To start the *express server*, type in the following command:

```
npm start
```

### Open the Web Application

Open your web browser at http://localhost:8081/