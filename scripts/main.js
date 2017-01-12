jQuery.easing.def = "easeOutQuad";
var loaded = "false";
document.getElementById("hometab").style.marginLeft = "0";
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    window.scrollTo(0,0);
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("menu");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    if (tabName==='home') {
        if(loaded === "false"){
            $(window).on("load", function() {
                loaded = "true";
                $("#hometab").delay(200).animate({
                    marginLeft: '200px',
                    fontSize: '2.5em'
                },1200,"easeOutBounce");
            });
        } else {
            document.getElementById("hometab").style.marginLeft = "0";
            document.getElementById("hometab").style.fontSize = "0.83em";
            $("#hometab").stop().animate({
                marginLeft: '200px',
                fontSize: '2.5em'
            },1200,"easeOutBounce");
        }
    } 
}
// open home tab by default
document.getElementById("default").click();
// slide open something
function slideOpen(evt, sliding){
    var items;
    items = document.getElementsByClassName("rolldown");
    if (document.getElementById(sliding).style.display !== "block"){
        for (i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }
        $("#"+sliding).velocity("slideDown",{duration: 400});
        document.getElementById(sliding).style.display = "block";
    } else {
        document.getElementById(sliding).style.display = "none";
    }
}