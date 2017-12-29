jQuery.easing.def = "easeOutQuad";
var loaded = "false";
var fromDefault = "false";
function goToTab(evt, tabName){
    window.location.href = `${tabName}.html`;
}
function openTab(tabName) {
    if(tabName==="index"){
        document.getElementById("hometab").style.marginLeft = "0";
    }
    var i, tabcontent, tablinks;
    window.scrollTo(0,0);

    // Get all elements with class="tablinks" and remove the class "active"
    // tablinks = document.getElementsByClassName("menu");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(tabName) //make this black
    // Show the current tab, and add an "active" class to the link that opened the tab
    // document.getElementById(tabName).style.display = "block";

    //evt.currentTarget.className += " active";
    if (tabName==='index') {
        if(loaded === "false"){
            //only trigger animation when the css has loaded on the page
            // if (!$("link[href='../styles/style.css']").length){
            //     $('<link href="../styles/style.css" rel="stylesheet">').appendTo("head");
            // }
            // var url = "../styles/style.css",
            // head = document.getElementsByTagName('head')[0];
            // link = document.createElement('link');

            // link.type = "text/css";
            // link.rel = "stylesheet"
            // link.href = "../styles/style.css";
            
            // link.onload = function () {
            loaded = "true";
            $("#hometab").delay(400).velocity({
                marginLeft: '200px',
                fontSize: '2.5em'
            },2000,[400,20]); /*velocity's spring animation for a 1.2 seconds*/
        } else {
            $("#hometab").velocity("stop");
            document.getElementById("hometab").style.marginLeft = "0";
            document.getElementById("hometab").style.fontSize = "0.83em";
            $("#hometab").velocity({
                marginLeft: '200px',
                fontSize: '2.5em'
            },2000,[400,20]);
        }
    }
    if (tabName==='about'||tabName==='courses'||tabName==='projects') {
        var popnum;
        if (tabName==='about') {
            popnum = "#pop1";
        } else if (tabName==='courses'){
            popnum = "#pop2";
        } else {
            popnum = "#pop3";
        };
        $(popnum).velocity("finish");
        $(popnum).velocity({
            translateY: "-15px"
        },{duration:500, loop:3});
    }; 
}
// slide open something
function slideOpen(evt, sliding){
    var items;
    items = document.getElementsByClassName("rolldown");
    if (document.getElementById(sliding).style.display !== "block"){
        for (i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }
        $("#"+sliding+"-expand").velocity("slideUp",{duration: 100})
        $("#"+sliding).velocity("slideDown",{duration: 500});
    } else {
        $("#"+sliding).velocity("slideUp",{duration: 300});
        $("#"+sliding+"-expand").velocity("slideDown",{duration: 100})
    }
}