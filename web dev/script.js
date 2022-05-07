function resetcolors() {
    document.getElementById('fndiv').setAttribute('style', 'color:gold font-weight:normal')
    document.getElementById('lndiv').setAttribute('style', 'color:gold')
    document.getElementById('pwdiv').setAttribute('style', 'color:gold')
    document.getElementById('emdiv').setAttribute('style', 'color:gold')
    document.getElementById('nodiv').setAttribute('style', 'color:gold')
    document.getElementById('addrdiv').setAttribute('style', 'color:gold')
}
function verify() {
    resetcolors()
    { // check first name and last name and password and phno
        var len = document.getElementById('fname').value.length
        if (len < 6) {
            window.alert('First Name must be atleast 6 characters long!')
            document.getElementById('fndiv').setAttribute('style', 'color:red')
            return
        }
        len = document.getElementById('lname').value.length
        if (len < 6) {
            window.alert('Last Name must be atleast 6 characters long!')
            document.getElementById('lndiv').setAttribute('style', 'color:red')
            return
        }
        len = document.getElementById('pw').value.length
        if (len < 6) {
            window.alert('password must be atleast 6 characters long!')
            document.getElementById('pwdiv').setAttribute('style', 'color:red')
            return
        }
    }

    { // check for valid email
        let reg = /[a-zA-Z_][a-zA-Z0-9_]*@[a-zA-Z0-9]+\.[a-z]+.*/gi
        var em = document.getElementById('email').value
        if (!em.match(reg)) {
            window.alert('invalid email!')
            document.getElementById('emdiv').setAttribute('style', 'color:red')
            return
        }
    }

    { // check phno and address
        var len = document.getElementById('no').value.length
        if (len != 10) {
            window.alert('Phone number must be 10 digits long')
            document.getElementById('nodiv').setAttribute('style', 'color:red')
            return
        }
        len = document.getElementById('addr').value.length
        if (len == 0) {
            window.alert('Address cannot be empty!')
            document.getElementById('addrdiv').setAttribute('style', 'color:red')
            return
        }
    }
    // if the control gets here, it means all entries are valid

    window.alert('Successful submission!!!')
    document.getElementById('outertext').setAttribute('style', 'color:lime')
    document.getElementById('outertext').innerHTML = 'ACCEPTED'
}
