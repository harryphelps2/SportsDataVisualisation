# Interactive Front End Development Milestone Project - Strava Data Dashboard

Link to live site: https://harryphelps2.github.io/SportsDataVisualisation/

A dashboard to visualize some exercise data from the Strava api. A single page application that will calculate the total distance and elevation covered, show a pie chart of the amount of time spent doing different sports, a stacked bar chart of time spent doing each sport with time spent in each zone and a map of all the routes.
 
## UX
 
This website is designed for athletes to gain insight into their training achievements as a whole giving them some facts they can show off with (eg: I've ran 20% around the world in total). It is designed for the commuter runner who trains during the week and races at the weekend.

- As a user I want to see a breakdown of my commute runs.

- I want to see how my cadence correlates with my speed.

- I want to see how far I have travelled around the world as a percentage.

- I want to adjust that data to see how far I have travelled as part of my commute runs.

- I want to know where I would be in the world if I had been running in a straight line from my house.

## Features

### Existing Features

- Commute breakdown: Shows the proportion of running distance as part of commute runs. The user can select the commute section and the other graphs will adjust to show the filtered data.

- Cadence against average speed: Scatter graph plots the cadence against the average speed to see what the ideal cadence is.

- Distance against time: Shows the run distance over the months I have been using Strava.

- Distance as an absolute value and a percentage around the world.

- Map of distance around the world: Shows a google map of the world and plots a polyline of total distance starting at my house to see how far I would have travelled as the crow flies (currently in Algeria).

### Features Left to Implement

- Elevation - How many Mount Everests have I climbed in elevation.

Currently the site takes a static data source downloaded from my own strava profile. Going forward I want to add the capability for a user to log in with their own strava credentials and the dashboard will populate with the data from their profile. Tried to do this but couldn't work out how to make the authorisation work. 

I would also like to intergrate a similar dashboard with my full stack e-commerce site (now live and taking orders) to give customers a reason to sign up ([shoepersonic](https://github.com/harryphelps2/shoepersonic2))

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

The site uses javasript, D3, DC and crossfilter to display a static data set of running sessions taken from the Strava API.

For the map of the world the site uses the Google Maps API

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [D3](https://d3js.org/)
    - The site uses javascript library **D3** to manipulate the data set and bind the data to the DOM

- [DC](https://dc-js.github.io/dc.js/)
    - The site uses DC (dimensional charting javascript library with Crossfilter support) to chart the data.

- [Crossfilter](http://square.github.io/crossfilter/)
    - The site uses crossfilter to link the data so when the commute filter is applied the other graphs respond.

## Testing

1. The user visits the page and all the graphs show.
2. The user clicks on a section of the pie chart and the other graphs adjust.

## Deployment

To deploy the project the project I uploaded all my changes to GitHub and went into the repo settings to deploy to GitHub pages.

To run locally:

1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command

2. After you've that you'll need to make sure that you have **npm** installed
    1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
    2. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
    3. Once **http-server** is installed run ```http-server -c-1```
    4. The project will now run on [localhost](http://127.0.0.1:8080)
    5. Make changes to the code and if you think it belongs in here then just submit a pull request

## Credits

### Acknowledgements

- My mentor Nishant Kumar helped me a lot with accessing the Strava API and downloading a dataset.
