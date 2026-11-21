const saveEditBtn = document.querySelector("#saveEditBtn"),
    inputName   = document.querySelector("#inputName"),
    inputEmail  = document.querySelector("#inputEmail"),
    inputPhone  = document.querySelector("#inputPhone"),
    inputCity   = document.querySelector("#inputCity"),
    fullName    = document.querySelector("#fullName"),
    email       = document.querySelector("#Email"),
    phone       = document.querySelector("#Phone"),
    city        = document.querySelector("#City"),
    headerName  = document.querySelector("#headerName"),
    headerEmail = document.querySelector("#headerEmail");

saveEditBtn.addEventListener("click", function () {
    const name = inputName.value.trim();
    const mail = inputEmail.value.trim();

    if (name) {
        fullName.textContent = name;
        headerName.textContent = name;
    }
    if (mail) {
        email.textContent = mail;
        headerEmail.textContent = mail;
    }
    if (inputPhone.value.trim()) phone.textContent = inputPhone.value.trim();
    if (inputCity.value.trim())  city.textContent  = inputCity.value.trim();
});