const saveEditBtn = document.querySelector("#saveEditBtn"),
    inputName = document.querySelector("#inputName"),
    inputEmail = document.querySelector("#inputEmail"),
    inputPhone = document.querySelector("#inputPhone"),
    inputCity = document.querySelector("#inputCity"),
    email = document.querySelector("#inputCity"),
    phone = document.querySelector("#Phone"),
    city = document.querySelector("#City"),
    date = document.querySelector("#Date")
saveEditBtn.addEventListener("click", function () {
    email.innerText=inputEmail
    phone.innerText=inputPhone
    city.innerText=inputCity
    date.innerText=inputEmail
})