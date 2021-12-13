# ManageOfficeSpace

# Intro

The app allows users to create and manage office space. The home page is a view of current offices and a brief summary of the occupants. A user is able to add a new office. 

Once an office is added it appear on the home page. If a user clicks on the office it navigates to the office details, which includes individuals who work at the office. The user is able to create, update, and delete office workers. The user is able to search for the office workers. 

This app is designed for phones.

The app uses Ionic, Angular and Firebase.

## Prerequisites

- ManageOfficeSpace uses npm

## Up and running

- Clone the repo

- Install dependencies
  npm install

- Run the app
  Run `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
  Run `ionic serve`. Navigate to `http://localhost:8100`. The app will automatically reload if you change any of the source files.

## Deploy

 Run `ng build --prod` or ionic build  . Will build the distribution files in ./www directory.
 Run `firebase deploy`. Will deploy to firebase


  ## Structure

```
app
└── components
└── constants
└── containers
└── core
└── models
└── pipes
└── services
```