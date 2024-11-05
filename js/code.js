function pustoTu(x) {
    if(x.length > 0){
        // console.log(false)
        return false
    }else{
        // console.log(true)
        return true
    }
}

function bialeZnaki(string) {
    return /[\s\t\r\n]{1,}/.test(string); //funkcja testująca wyrażenie regularne.
}

function weryfikacja(form) {
    // let form = document.forms["user_data"]
    // console.log(pustoTu(form.elements['imie'].value))
    let x = bialeZnaki(form.elements['imie'].value)
    console.log(form.elements['imie'].value)
    console.log(x)
    if(pustoTu(form.elements['imie'].value) == true || x != false){
        alert("Podaj swoje imie!")
        return false
    }else{
        // console.log('yay')
        return true
    }
}