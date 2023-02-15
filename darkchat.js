function hideButton(){
    document.getElementById("LauchButton").classList.toggle("LauchButton-fade-out");
    setTimeout(() => { document.getElementById("LauchContainer").style.display = "none"; }, 500);
}
