




function setTime(index) 
{
    var iframe = document.getElementsByTagName('iframe')[index];
    var startTime = 0;
    console.log(index);
    if(index == 0)
        startTime = 1;
    if(index == 1)
        startTime = 25;
    if(index == 2)
        startTime = 57;
    console.log(startTime)
    iframe.src = "https://www.youtube.com/embed/9-8XghVh01s?start=" + startTime;
    console.log(iframe.src);
  }



