fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let tabla = "<tr><th>Nombre</th><th>Nombre de Usuario</th><th>Correo Electrónico</th><th>Teléfono</th></tr>"

        for (let usuario of data) {
            tabla += `<tr><td>${usuario.name}</td>
                          <td>${usuario.username}</td>
                          <td>${usuario.email}</td>
                          <td>${usuario.phone}</td></tr>`
        }
        document.getElementById("tblUsers").innerHTML = tabla
    })