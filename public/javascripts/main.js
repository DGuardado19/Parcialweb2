tarea();


document.querySelector("#form").addEventListener('submit', function(e){
    e.preventDefault();
    let data ={
        nombre: document.forms.form.nombre.value,
        apellido: document.forms.form.apellido.value,
        celular: document.forms.form.celular.value
    }

})