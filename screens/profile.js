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

axios.get('https://sheetdb.io/api/v1/0fjcjli9h840i')
.then( response => {
    var users = response.data;

    for (i=0; i < users.length; i++){
        if (users[i].ISID == readCookie('ISID')){

            console.log(users[i]);

            var uname = document.getElementsByTagName('p')[1];
            celltext = document.createTextNode(users[i].Username)
            uname.appendChild(celltext);

            var name = document.getElementsByTagName('p')[2];
            celltext = document.createTextNode(users[i].First_Name)
            name.appendChild(celltext);

            var uname = document.getElementsByTagName('p')[2];
            celltext = document.createTextNode(" " + users[i].Last_Name)
            uname.appendChild(celltext);

            var uname = document.getElementsByTagName('p')[4];
            celltext = document.createTextNode(users[i].Major)
            uname.appendChild(celltext);

            var uname = document.getElementsByTagName('p')[3];
            celltext = document.createTextNode(users[i].Email)
            uname.appendChild(celltext);
        }
    }
});