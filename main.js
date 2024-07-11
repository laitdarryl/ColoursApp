var colourNumbers = {
    "0": "#03ecfc",
    "1": "#fc03e8",
    "2": "#fc6603",
    "3": "#fc0366",
    "4": "#15cf3d",
    "5": "#ff0000",
    "6": "#ffff00",
    "7": "#9900ff",
    "8": "#ffffff",
    "9": "#1500ff"
}

setInterval(function(){
    time = Date.now().toString()
    secondsTime = time.charAt(time.length - 4)
    document.body.style.backgroundColor = colourNumbers[secondsTime];
}, 50)