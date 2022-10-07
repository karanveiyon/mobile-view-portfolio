const date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var tdate = date.getDate();
var mon = date.getMonth();
var month = mon+1;
var year = date.getFullYear();
document.getElementById("date").innerHTML = tdate+".";
document.getElementById("month").innerHTML = month+".";
document.getElementById("year").innerHTML = year;
window.onload = function hrs(hr){
const gdate = new Date();
var hr = gdate.getHours();
var min = gdate.getMinutes();
    if (hr<12){
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min+" AM";
    }
    else{
        document.getElementById("hr").innerHTML = (hr-12)+":";
        document.getElementById("min").innerHTML = min+" PM";
    }

}
    document.getElementById("my-profile").onclick = function (){
        document.getElementById("content").style.display = "none ";
        document.getElementById("profile").style.display = "flex";
        var top = document.getElementById("top-bar");
        top.style.backgroundColor= "black";
        top.style.opacity ="0.8";
/*         var screen = document.getElementById("screen");
        screen.style.background = "black";
        screen.style.opacity =".9" */
        var back = document.getElementById("back");
        back.onclick = function(){
            document.getElementById("content").style.display = "block";
        document.getElementById("profile").style.display = "none";
        document.getElementById("project-div").style.display = "none";
        document.getElementById("resume-div").style.display = "none";
        top.style.backgroundColor= "";
        top.style.opacity ="";
        }
    }
/*     document.getElementById("chrome-icon").onclick = function()
        {
            document.getElementById("content").style.display = "none "; 
            var frame = document.createElement("iframe");
            frame.setAttribute=("src","https://arunkrishna97.github.io/googlesearch/","width","100%");
        } */
        document.getElementById("resume").onclick = function()
        {
            document.getElementById("content").style.display = "none";
            document.getElementById("profile").style.display = "none";
            document.getElementById("project-div").style.display = "none";
            document.getElementById("resume-div").style.display = "flex";
            var top = document.getElementById("top-bar");
            top.style.backgroundColor= "black";
            top.style.opacity ="0.8";
            

        }
        document.getElementById("projects").onclick = function()
        {
            document.getElementById("content").style.display = "none";
            document.getElementById("profile").style.display = "none";
            document.getElementById("project-div").style.display = "flex";
            document.getElementById("resume-div").style.display = "none";
            var top = document.getElementById("top-bar");
            top.style.backgroundColor= "black";
            top.style.opacity ="0.8";
        }