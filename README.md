# ClickUp Mini Project

Project assessment. A demo app built with HTML, CSS, and Vanilla JavaScript (no frameworks).

A one-page mini website that shows why it is necessary to save your data.

![click up mini project](https://user-images.githubusercontent.com/25850598/131431627-ffbab8c4-0995-47b7-8572-04535afbab51.png)

## Set Up and Installation

I used Gulp to compile the SCSS file into CSS so that my index.html could read it. [Gulp](https://gulpjs.com/) is a toolkit to enhance and automate your workflow.

1. You will need to initialize your created directory with npm
```
npm init -y
```

2. Install the following dev dependencies using.
```
npm install -D browser-sync gulp gulp-sass
```

3. Last but not least, install the Sass dependency.
```
npm install sass
```

After the installation process and creating the `gulpfile.js` with the following configuration needed, watch all your files and build them automatically while you code.

To learn more on the configuration, check [this](https://youtu.be/QgMQeLymAdU).

```
gulp style
gulp watch
```

The above commands allow you to run and compile your CSS and javascript files all in a /dist folder to be used by the project.

### Author
Teri Eyenike
