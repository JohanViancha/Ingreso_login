function iniciar() {

    let us = 'yeila';
    let pass = '123';
    let nombre = 'Yeila Ardila';

    usuario.addEventListener('keydown', function(ev) {


        if (ev.keyCode != 9 && ev.keyCode != 13 && ev.keyCode != 17 && ev.keyCode != 18 && ev.keyCode != 16 && ev.keyCode != 91 && ev.keyCode != 186) {

            if (ev.keyCode == 8) {
                usuario_mostrar.innerHTML = usuario_mostrar.innerHTML.slice(0, usuario_mostrar.innerHTML.length - 1);
            } else {
                usuario_mostrar.innerHTML = usuario_mostrar.innerHTML + ev.key;
            }
        }

    }, false)


    ingresar.addEventListener('click', function(ev) {


        ev.preventDefault();
        console.log();
        if (usuario.value != "" && password.value != "") {

            if (usuario.value != us || password.value != pass) {
                Swal.fire({
                    title: 'Usuario y/o contaseña incorrectos',
                    text: 'Por favor intente de nuevo',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            } else {
                localStorage.setItem('nombre', nombre);
                usuario.value = "";
                password.value = "";
                Swal.fire({
                    title: '¡Bienvenido!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    location.href = "home.html";
                })

            }

        } else {
            Swal.fire({
                text: 'El usuario y la contraseña son obligatorios',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
        }

    }, false)
}

iniciar();