function findBus() {
    var fromValue = document.getElementById('r_from').value;
    var toValue = document.getElementById('r_to').value;
    //console.log(fromValue);
    //console.log(toValue);
    if (fromValue == 'empty' || toValue == 'empty') {
        document.getElementById("result").innerHTML = "--- Field is empty ---";
    } else if (fromValue == 'gazipur' && toValue == 'abdullahpur') {
        document.getElementById("result").innerHTML = "#Boshomoti => Chowrasta > Tongi > Abdullahpur > Uttara <br> #Bolaka=> Joydebpur > Chowrasta > Tongi > Abdullahpur > Uttara";
    } else {
        document.getElementById("result").innerHTML = "Sorry! Not added yet!";
    }
}