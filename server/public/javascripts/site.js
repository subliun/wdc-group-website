document.addEventListener('DOMContentLoaded', function() {
    generateTimeSelection();
}, false);

function generateTimeSelection() {
    var date = new Date();

    var parent = document.getElementById("time-picker");
    
    var hour = date.getHours();
    var half = true;
    for (var i = 0; i < 24 * 2; i++) {
        var text = "";

        if (date.getMinutes() > 30 && i == 0) {
            half = false;
            hour++;
        }

        text = hour + ":";
        if (half) {
            text += "30";
        } else {
            text += "00";
        }

        var option = document.createElement("option");
        option.value = text.replace(":", "");
        option.text = text;
        
        parent.appendChild(option);

        half = !half;
        hour++;
        hour = hour % 24;
    }

}

function fillStars(filledStarElement, rating) {

}

function onSearch() {
    alert("searching!");
}