function actividades(){

fetch("/users/", {method: "GET"})
.then (res=> res.json())
.then(data =>{
    let filas ="";
    data.forEach(element => {
        filas = filas +  `<tr>
        <td class="table-primary"> ${element._id}</td>
        <td class="table-secondary"> ${element.nombre}</td>
        <td class="table-success"> ${element.apellido}</td>
        <td class="table-warning"> ${element.celular}</td>
        <td class="table-danger">
            <a href=""><i class="fas fa-pen-alt"></i> </a>
            <a href="#">  <i class="fas fa-trash-alt"></i>
            </a>
            </td>
            </tr>`

    });
    document.querySelector("#filas").innerHTML=filas;
})
};
actividades();