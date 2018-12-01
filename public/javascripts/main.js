function actividades(){

fetch("/users/", {method: "GET"})
.then (res=> res.json())
.then(data =>{
    let filas ="";
    data.forEach(element => {
        filas = filas +  `<tr>
        <td> ${element._id}</td>
        <td> ${element.nombre}</td>
        <td> ${element.apellido}</td>
        <td> ${element.celular}</td>
        <td>
            <a href="">Actualizar </a>
            <a href="">eliminar </a>
            </td>
            </tr>`

    });
    document.querySelector("#filas").innerHTML=filas;
})
};
actividades();