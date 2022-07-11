async function ajax() {
    var ajax = document.getElementsByClassName("ajax");
    const xhr = new XMLHttpRequest();
    var list = document.createElement('ul');
    list.setAttribute('class','list-user');
    xhr.open("GET","https://reqres.in/api/users?page=2", true);
    xhr.onload = await function(){
        let data = JSON.parse(this.responseText);
        for (let i = 0; i < (data.data.length); i++) {

            var card = document.createElement("li");
            card.setAttribute("class","list-user-item");

            var name = document.createElement('h3');
            name.innerHTML = data.data[i].first_name + " " + data.data[i].last_name;
            card.appendChild(name);

            var mail = document.createElement('p');
            mail.innerHTML = data.data[i].email;
            card.appendChild(mail);

            var avt = document.createElement('img');
            avt.setAttribute('src',data.data[i].avatar);
            avt.setAttribute('alt','Avatar');
            card.appendChild(avt);
            
            list.appendChild(card);

            if ((i+1) % 3 == 0){
                ajax[0].appendChild(list);
                list = document.createElement('ul');
                list.setAttribute('class','list-user');
            }
        }
    }   
    xhr.send();   
}

async function myFetch() {
    var f = document.getElementsByClassName("fetch");
    var list = document.createElement('ul');
    list.setAttribute('class','list-user');
    await fetch('https://reqres.in/api/users?page=2')
    .then((response)=> response.json())
    .then((data) => {
        for (let i = 0; i < (data.data.length); i++) {

            var card = document.createElement("li");
            card.setAttribute("class","list-user-item");

            var name = document.createElement('h3');
            name.innerHTML = data.data[i].first_name + " " + data.data[i].last_name;
            card.appendChild(name);

            var mail = document.createElement('p');
            mail.innerHTML = data.data[i].email;
            card.appendChild(mail);

            var avt = document.createElement('img');
            avt.setAttribute('src',data.data[i].avatar);
            avt.setAttribute('alt','Avatar');
            card.appendChild(avt);
            
            list.appendChild(card);

            if ((i+1) % 3 == 0){
                f[0].appendChild(list);
                list = document.createElement('ul');
                list.setAttribute('class','list-user');
            }
        }
    })
    .catch(error => {
        fetchBoard.innerHTML = "ERROR: "+error;
    });
}