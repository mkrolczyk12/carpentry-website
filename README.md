# Uslugi stolarskie

Website created for the needs of a carpentry company.

## Table of contents

- [General info](#general-info)
- [Technologies and dependencies](#technologies-and-dependencies)
- [External services](#external-services)
- [Build instruction](#build-instruction)
- [Status](#status)
- [Contact](#contact)

## General info
A website based on the gatsby.js framework. The main purpose of page is to present the company's offer. A content management system is connected to the website, thanks to which the owners can change the agreed scope of the website content (photos, descriptions etc.) at any time. When the website owner changes its content, the website will be automatically rebuild without the need for the developer to intervention (content build trigger). The application also has an attached notification system (when the customer sends the completed form, the owner will receive an email notification). The website is fully responsive, prepared for 6 types of screen width (xsm < 576px sm > 576 px, md > 768px, lg > 992px, xl > 1200px, xxl > 1400px). The application is implemented on the Netlify platform.

## Technologies and dependencies

- Gatsby.js
- React.js
- Html5
- Sass
- Css3
- Webpack
- Node Package Manager

## External services
- DatoCMS (headless CMS)
- React Leaflet
- Font Awesome

## Build instruction

Requirements: git, npm, node.js, gatsby.js <br />
To run project, follow these steps: <br />

1. Open terminal and clone the project from github repository:

```
$ git clone https://github.com/mkrolczyk12/zagorowski-zaklad-stolarski.git
```

2. After successful clone project will need to provide DATO_CMS_API_KEY:

```
$ touch .env
```
Paste into .env file your DATO_CMS_API_KEY (like in .env.sample example file)

3. Open terminal and type below command:

```
$ `npm install`
```

4. Start application in development mode:

```
$ `gatsby develop`
```
This script runs the app in the development mode.<br />

5. After loading application is ready to use.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Status

_completed_

## Contact

Created by @mkrolczyk12 - feel free to contact me!

- Phone: (48) 503 699 962
- E-mail: m.krolczyk66@gmail.com

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all project packages.<br />

### `gatsby develop`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `gatsby build`

Builds the app for production to the `public` folder.<br />
It correctly bundles gatsby project in production mode and optimizes the build for the best performance.

### `gatsby serve`

At the root of a Gatsby site, serve the production build of your site for testing.<br />

### `gatsby clean`

At the root of a Gatsby site, wipe out the cache (.cache folder) and public directories.<br />
