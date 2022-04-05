   
    function createCookie(key, value, date) {
        const expiration = new Date(date).toUTCString();
        const cookie = escape(key) + "=" + escape(value) + ";expires=" + expiration + ";";
        document.cookie = cookie;
        console.log(cookie);
        console.log("Creating new cookie with key: " + key + " value: " + value + " expiration: " + expiration);
    }
    
    
    window.onload = function() {
        axios.get('https://sheetdb.io/api/v1/0fjcjli9h840i')
            .then( response => {
                var users = response.data;
                var condition = true;
                while(condition){
                    var isid = Math.floor(Math.random() * 100000)
                    for (i=0; i < users.length; i++){
                        if(users[i].ISID == isid){
                            break;
                        }
                    }
                    if(i == users.length){
                        condition = false;
                        createCookie('ISID', isid, Date.UTC(2022, 8, 1));
                    }
                }
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
    
    function postValues(){
        var fname = document.getElementById('firstname').value;
        var lname = document.getElementById('lastname').value;
        var pword = document.getElementById('password').value;
        var mail = document.getElementById('Email').value;
        var uname = document.getElementById('username').value;
        var maj = document.getElementById('major').value;
       
    
        axios.post('https://sheetdb.io/api/v1/0fjcjli9h840i',{
            "data": [{"ISID": readCookie('ISID'), "First_Name": fname, "Last_Name": lname, "Password": pword,"Email": mail, "Username": uname, "Major": maj}]
        }).then( response => {
            console.log(response.data);
            window.location.href = '../screens/homepage.html';
        })
        .catch(function (error) {
            console.log(error);
        });
    }