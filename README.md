# IFDMilestoneProject
A dashboard to visualize some exercise data from the strava api.

##Description
A single page application that will calculate the total distance and elevation ccovered, show a pie chart of the amount of time spent doing different sports, a stacked bar chart of time spent doing each sport with time spent in each zone and a map of all the routes.

## Features Implemented

### Commute breakdown
Shows the proportion of running distance as part of commute runs. 

### Cadence against average speed
Scatter graph plots the cadence against the average speed to see what the ideal cadence is.

### Distance against time
Shows the run distance over the months I have been using strava.

### Map of distance around the world
Shows a google map of the world and plots a polyline of totla distance starting at my house to see how far I would have travelled as the crow flies.

## Features to Implement

### Real connection with Strava API

Currently the site takes a static data source downloaded from my own strava profile. Going forward 
I want to add the capability for a user to log in with their own strava credentials and the dashboard will populate with the data from their profile. Tried to do this but couldn't work out how to make the authorisation work. 