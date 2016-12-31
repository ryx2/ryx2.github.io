jQuery.easing.def = "easeOutQuad";
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

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
}
document.getElementById("default").click();
function slideOpen(evt, sliding){
    var items, width;
    items = document.getElementsByClassName("rolldown");
    if (document.getElementById(sliding).style.display !== "block"){
        width=$("#"+sliding).width;
        document.getElementById(sliding).style.width = width;
        for (i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }
        $("#"+sliding).slideDown();
        document.getElementById(sliding).style.display = "block";
    } else {
        document.getElementById(sliding).style.display = "none";
    }
}