const EditUser = () => {
    let user = JSON.parse(localStorage.getItem('user-info'));

    let card = document.getElementsByClassName("edit-user");
    let form_edit = document.createElement('form');
    form_edit.setAttribute('class','form');
    form_edit.setAttribute('action','index.html');
    form_edit.setAttribute('method','post');

    let title = document.createElement('h2');
    title.innerHTML = 'Edit User:';
    form_edit.appendChild(title);

    form_edit.appendChild(document.createElement('hr'));
    form_edit.appendChild(document.createElement('br'));

    let label_first_name = document.createElement('label');
    label_first_name.setAttribute('for','firstname');
    label_first_name.setAttribute('class','label');
    label_first_name.innerHTML = 'First name:';
    form_edit.appendChild(label_first_name);
    form_edit.appendChild(document.createElement('br'));

    let first_name = document.createElement('input');
    first_name.setAttribute('type','text');
    first_name.setAttribute('class','input');
    first_name.setAttribute('name','firstname');
    first_name.setAttribute('id','firstname');
    first_name.setAttribute('value',user.first_name);
    form_edit.appendChild(first_name);
    form_edit.appendChild(document.createElement('br'));

    let label_last_name = document.createElement('label');
    label_last_name.setAttribute('for','lastname');
    label_last_name.setAttribute('class','label');
    label_last_name.innerHTML = 'Last Name:';
    form_edit.appendChild(label_last_name);
    form_edit.appendChild(document.createElement('br'));

    let last_name = document.createElement('input');
    last_name.setAttribute('type','text');
    last_name.setAttribute('class','input');
    last_name.setAttribute('name','lastname');
    last_name.setAttribute('id','lastname');
    last_name.setAttribute('value',user.last_name);
    form_edit.appendChild(last_name);
    form_edit.appendChild(document.createElement('br'));

    let label_email = document.createElement('label');
    label_email.setAttribute('for','email');
    label_email.setAttribute('class','label');
    label_email.innerHTML = 'Email:';
    form_edit.appendChild(label_email);
    form_edit.appendChild(document.createElement('br'));

    let email = document.createElement('input');
    email.setAttribute('type','text');
    email.setAttribute('class','input');
    email.setAttribute('name','email');
    email.setAttribute('id','email');
    email.setAttribute('value',user.email);
    form_edit.appendChild(email);
    form_edit.appendChild(document.createElement('br'));

    let label_avt = document.createElement('label');
    label_avt.setAttribute('for','avatar');
    label_avt.setAttribute('class','label');
    label_avt.innerHTML = 'Avatar:';
    form_edit.appendChild(label_avt);
    form_edit.appendChild(document.createElement('br'));

    let avt = document.createElement('input');
    avt.setAttribute('type','text');
    avt.setAttribute('class','input');
    avt.setAttribute('name','avatar');
    avt.setAttribute('id','avatar');
    avt.setAttribute('value',user.avatar);
    form_edit.appendChild(avt);
    form_edit.appendChild(document.createElement('br'));

    let btn = document.createElement('input');
    btn.setAttribute('type','submit');
    btn.setAttribute('class','btn btn-update');
    btn.setAttribute('value','Update');
    btn.onclick = () => {
        editHandler();
    }
    form_edit.appendChild(btn)

    card[0].appendChild(form_edit);
}

const editHandler = () => {
    let first_name = document.getElementById('firstname').value;
    let last_name = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let avatar = document.getElementById('avatar').value;

    let user = JSON.parse(localStorage.getItem('user-info'));
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.avatar = avatar;

    let data = JSON.parse(localStorage.getItem('data'));
    data.forEach(element => {
       if (element.id == user.id){
        element.first_name = user.first_name; 
        element.last_name = user.last_name; 
        element.email = user.email; 
        element.avatar = user.avatar; 
       }
    });
    localStorage.removeItem("user-info");
    localStorage.setItem('data',JSON.stringify(data));
}