/* //Programación sincrónica y asincrónica.

//La programación sincronica ejecuta una tarea a la vez, en orden secuencial.

//La programación asincrónica ejecuta varias tareas al mismo tiempo en orden NO secuencial.

//Para practicar podemos usar setTimeOut. Recordar que recibe dos parametros: una función y un tiempo en milisegundos.
//Me permite simular el retraso de una peticion a un servidor.


//Promesas: un objeto que representa un evento a futuro.
//En general representa el resultado eventual de una petición asincrona.

//Las promesas tienen tres estados: pendiente, cumplida o rechazada.



const Promesas = () => {
    //Programación sincrónica:
    console.log("Tarea 1");
    console.log("Tarea 2");

    //Programación Asincrónica:

    setTimeout(() => {
        console.log("Tarea A");

    }, 2000);

    setTimeout(() => {
        console.log("Tarea B");
    }, 1000);

    //Promesas: 

    const tusPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve("Promesas cumplida, me llego el karting");
            } else {
                reject("Promesa rechazada, el karting nunca llegó");
            }

        })
    }
    console.log(tusPromesas(true));


    //THEN Y CATCH:
    //Podemos concatenar dos métodos que me permiten ejecutar una función cunado la promesa se cumple o cuando se rechaza.
    //THEN se ejecuta cuando la promesa se cumple.
    //CATCH se ejecuta cuando la promesa se rechaza.
    //FINALLY se ejecuta siempre.


    tusPromesas(true)
        .then((respuesta) => {
            console.log(respuesta);
        })
        .catch((error) => {
            console.log(error);
        })

    //Ahora practicamos con un array de datos:

    const array = ["Juan", "Roman", "Riquelme"];

    const solicitarNombres = (estado) => {
        return new Promise((resuelto, rechazado) => {
            if (estado) {
                resuelto(array)
            } else {
                rechazado("No hay jugadores");
            }




        })
    }

    solicitarNombres(true)
        .then(respuesta => {
            console.table(respuesta);
        })
        .catch(error => console.error(error))
        .finally(() => console.log("Proceso terminado"));


    return (
        <div>La Copa Libertadores es mi obsesion</div>
    )
}

export default Promesas */