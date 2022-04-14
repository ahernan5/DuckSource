function cookieAlert(){
    alert('You need cookies enabled in order to use this website!')
}
cookieAlert();

function createCookie(key, value, date) {
    const expiration = new Date(date).toUTCString();
    const cookie = escape(key) + "=" + escape(value) + ";expires=" + expiration + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: " + key + " value: " + value + " expiration: " + expiration);
}

function check_login(){
    axios.get('https://sheetdb.io/api/v1/gml9sag3ds9h6')
    .then( response => {
        var users = response.data;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        for (i=0; i < users.length; i++){
            if (users[i].Username == username && users[i].Password == password){
                createCookie('ISID', users[i].ISID, Date.UTC(2022, 8, 1));
                window.location.href = 'screens/homepage.html';
            }
        }
        document.getElementById('incorrect').innerHTML = "Incorrect Password or Username";
        
    });
}

function readCookie(name) {
    let key = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}