// Set Variables For Typing Effect
var fpstext = 20;
var fpscursor = 1;
var sitetitles = ["Louis Dalibard's website", "cd ~/Apps/OpenNotes", "techadvancedcyborg.github.io", "Work in progress...", "cd ~/Apps/TTACT-s-Anime-Player-Revamped", "Why did the chicken cross the road?", "Beans!", "\“Fix the cause, not the symptom.\” – Steve Maguire", "\“Talk is cheap. Show me the code.\” ― Linus Torvalds", "Justice for George Floyd.", "\“I can\'t breathe...\” ― George Floyd"]
//System Variables
var slice = 0;
var typing = true;
var sitetitle = sitetitles[Math.round((window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) * (sitetitles.length - 1))]
var cursorstate = true;
//Text Rendering Loop
function updatetypingeffect() {
    //Set Cursor String Accordingly
    cursor = " ";
    if (cursorstate) {
        cursor = "_";
    }
    //Type
    if (typing) {
        //Set text in page
        document.getElementsByClassName("typing-text")[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        //Set title text
        document.getElementsByTagName('title')[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        slice++;
    }
    //Delete
    else {
        //Set text in page
        document.getElementsByClassName("typing-text")[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        //Set title text
        document.getElementsByTagName('title')[0].innerHTML = "> " + sitetitle.slice(0, slice) + cursor;
        slice += 0 - 1;
    }
    //Reverse When At End of String
    if (slice > sitetitle.length) {
        typing = false;
    }
    //Reverse When At Start of String
    if (slice < 1) {
        typing = true;
        sitetitle = sitetitles[Math.round((window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) * (sitetitles.length - 1))]
    }
}
setInterval(updatetypingeffect, 1000 / fpstext);
//Cursor State Loop
setInterval(function() {
    //Reverse cursorstate variable
    if (cursorstate) {
        cursorstate = false;
    } else {
        cursorstate = true;

    }
}, 1000 / fpscursor);
// Days and Seconds Since DOB Render Loop
setInterval(function() {
    try {
        //Set Dates
        now = new Date();
        birth = new Date("2007/02/12");
        //Calculate Differences
        diffsecs = Math.floor((now - birth) / 1000);
        diffdays = Math.floor((now - birth) / (1000 * 3600 * 24));
        //Render Text
        let informationelement = document.getElementById("information");
        let ageelement = document.getElementsByClassName("age")[0];
        ageelement.innerHTML = diffdays.toString() + " days or " + diffsecs.toString() + " seconds old.";
        ageelement.style.color = "#000000FF";
        informationelement.style.transform = "none";
        informationelement.style.color = "#000000FF";
    } catch (e) {
        //Catch Error (if element is not loaded yet)
        console.log("error");
        console.log(e.toString());
    }
}, 1000);
//On Page Finish Loading
$(document).ready(function() {
    //Start Animation
    setTimeout(function() {
        document.getElementsByClassName("typing-text")[0].style.width = "100%";
    }, 1000);
    setTimeout(function() {
        document.getElementsByClassName("typing-text")[0].style.color = "#000";
    }, 2000);

});
