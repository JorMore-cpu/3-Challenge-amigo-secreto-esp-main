// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

// Function to add a name to the list.
    function agregarAmigo() {
        let nombre = document.getElementById('amigo').value.trim();  //Tomamos el valor del container_input, siempre tipo string, cuyo "id = amigo" en el archivo HTML
                                                                    // el trim sólo remueve cualquier espacio en balco que el texto pudiera tener al comienzo y al final.
            console.log(nombre);

        //Creo y despliego mi lista de nombres
            if (nombre && !listaNombres.includes(nombre)){  //Discrima valores vacíos o repetidos en el arreglo "listaNombres"
                listaNombres.push(nombre);
                    console.log(listaNombres);

                //Generate HTML for the list.
                    const listaHTML = listaNombres.map(nombre => `<li>${nombre}</li>`).join('');  //The .join('') method is used to concatenate all elements of an array into a single string. The argument '' specifies that there should be no separator between the elements.
                        console.log(listaHTML);

                //Update the list to be deploy in the "listaAmigos" element of the HTML file.
                    asignarTextoElemento('#listaAmigos', listaHTML);

                //Limpiamos la caja "amigo" que es un objeto HTML
                    limpiarCaja();

            }else{
                alert("El nombre ya existe en la lista o no ingresaste ningún valor. Por favor intenta de nuevo.");  //despliega una ventana de alerta.
            }; 
    };



//Creamos la función para sortear amigos.
    function sortearAmigo(){
        let sorteo = parseInt(Math.random()*listaNombres.length);
            console.log(listaNombres.length);
        
        //Update the list to be deploy in the "listaAmigos" element of the HTML file.
            asignarTextoElemento('#resultado', `Tú amigo secreto sorteado es: ${listaNombres[sorteo]}`); //El "#" indica que estamos identificando el objeto HTML por su ID

    };



// Creamos una funcion para asignar texto a un elemento del HTML.
    function asignarTextoElemento(elemento, texto){  // Lo que esta entre parentesis lo único que hace es crear dos variables que se pueden utilizar en la función como se puede apreciar.
        // Esta función no retorna nada.
    let elementoHTML = document.querySelector(elemento);  //creamos un objeto "titulo" que selecciona el encabezado "h1" que esta en el archivo HTML. Este es un objeto de encabezado. 
    elementoHTML.innerHTML = texto; // Ingresamos lo que deseamos que despliegue el encabezado;
    return;  //No retorna nada, es buena práctica.
    };


// Creamos una función que limpia la caja dónde se insertan los números.
    function limpiarCaja() {
        let valorCaja = document.querySelector('#amigo');  //esta es otra forma de indicar al "querySelector" que identificaré un objeto HTML por un ID.
                                    // Es el equivalente a "document.getElementById('valorUsuario').value".
                                    // el "#" es equivalente a ".getElementById()".
        valorCaja.value = '';  // asigna un "valor vacío" al valor que se encuentra dentro del objeto "valorCaja" 

        //Forma alterna de borrar el contenido.
            // document.querySelector('#amigo').value = '';
    }