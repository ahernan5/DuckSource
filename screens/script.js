// Tab Navigation - ZC
/*
function changeTab(evt, pageName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(pageName).style.display = "block";
        evt.currentTarget.className += " active";
      }
*/

// Dropdown Menu
function openDrop(){
document.getElementById("myDropdown").classList.toggle("show");
 }

// Checkboxes select
document.getElementById('select').onclick = function() {
    var checkboxes = document.getElementsByName('vehicle');
    for (var checkbox of checkboxes)
    {
        if (checkbox.checked) {
            document.write(checkbox.value + ' ');
            document.cookie
        }
    }
}
