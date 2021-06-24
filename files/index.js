function sTimeAll() {
    var date = new Date();
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();

    var d = date.getDay();
    var dat = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    switch (d) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    switch (m) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;

    }


    document.getElementById('tAll').innerHTML = h + ":" + mi + ":" + s + "<br>" + day + "<br>" + dat + "/" + month + "/" + y;

    setTimeout(sTimeAll, 1000);
}


function sTime() {
    document.getElementById('mFun').innerHTML = Date();
    setTimeout(sTime, 1000);
}
sTime();
sTimeAll()
