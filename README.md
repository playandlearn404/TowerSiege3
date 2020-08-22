## Tower Siege 3 Project
In this project the background image is updated with the help of an API which returns time of a particular time zone and also scores are added 
Score is increased on the basis of visibility of rectangle obstacles.
## API call, the JSON data structure and accessing data from JSON
```markdown
BaseClass.js
async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);

}

## Specific taks completed in the project
Create a variable score and initialize it with 0.
Display text to show the score in sketch.js.

Create a score() function inside box.js.
The score increases as the visibility of the boxes reduces.
Set a limit for visibility. (See Hints)
Call the score() function for each object of the box.

Change the background of the game based on whether it is day or night.
Call the WorldTimeAPI using fetch() and collect the response in a variable.
As done in the class, extract the time of the day in hours and assign the hour variable.
Using the hour variable:
If the time is between 6 am to 6 pm make the background image a light, bright color.
If the time is between 6 pm to 6 am make the background image a dark color.
Fetch the time at the start of the program and determine the initial color of the background.

-X-
