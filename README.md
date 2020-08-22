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


```

