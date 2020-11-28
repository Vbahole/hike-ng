# my fork of this [angular material app](https://github.com/ajtowf/styling-applications-with-angular-material) from a pluralsight guy

make the npm prod build push the dist folder to the ec2 instance
to build run `npm run-script build-prod`  
that will push code using scp out to ec2 at `home/ec2-user/hike-ng`  
which is not the location it is served from which is `/usr/share/nginx/html/hike-ng`
to get it over there `sudo cp -r /home/ec2-user/hike-ng /usr/share/nginx/html/hike-ng`



## Styling Applications with Angular Material

This project is the application we build throughout the [pluralsight course Styling Applications with Angular Material](https://www.pluralsight.com/courses/angular-material).

## Live demo

The latest version of the master branch can be found running live at [https://styling-angular-applications.web.app/](https://styling-angular-applications.web.app/), feel free to check it out.

## Getting up and running

To serve the application from a dev server run the following commands:

    git clone https://github.com/ajtowf/styling-applications-with-angular-material.git
    npm i
    ng build
    ng s -o
