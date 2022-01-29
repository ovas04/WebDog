function enviar() {

    const forma =  document.forms['forma'];

    let nombre = forma['nombre'];

    let email = forma['email'];

    let imagen = document.getElementById("actual");


    if( nombre.value !== '' && email.value !== '' && imagen !== '') {

        var link = `mailto:${email.value}`
             + `?cc=Foto de ${nombre.value}`
             + "&body=" + encodeURIComponent(`Te envio la foto de este perro a quien llame ${nombre.value} miralo aqui ${imagen.src}`)
             ;
    
             window.location.href = link;

    }
    else{

        alert("Ups algo salio mal, verifique que haya una imagen cargada y los campos esten completados correctamente")

    }

}