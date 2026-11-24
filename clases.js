// Sistema de tareas

let mis_tareas = ["terminar ejercicios", "darle un beso a Damarys"]

// 1 - Mostrar mis tareas

function mostrar_tareas(lista_tareas){
    console.log(lista_tareas)
}

// 2 - Crear una tarea nueva
function añadir_tarea(lista_tareas, nueva_tarea){
    lista_tareas.push(nueva_tarea)
}

// 3 - Eliminar una tarea
function eliminar_tarea(lista_tareas){
    lista_tareas.pop()
}

// 4 - Ver tamaño total
function tamaño_de_mis_tareas(lista_tareas){
    return lista_tareas.length
}

// 5 - Menu para las tareas
function menu_tareas(opcion_menu, lista_tareas){
    if (opcion_menu == 1){
        mostrar_tareas(lista_tareas)
    } else if (opcion_menu == 2){
        let nueva_tarea = "test"
        añadir_tarea(lista_tareas, nueva_tarea)
    } else if (opcion_menu == 3){
        eliminar_tarea(lista_tareas)
    } else {
        let res = tamaño_de_mis_tareas(lista_tareas)
        console.log(`Mi tamaño es ${res}`)
    }
}

// Pruebas

console.log("Este es mi menu para el programa de tareas")
console.log("1 - Mostrar tareas")
console.log("2 - Crea tarea nueva")
console.log("3 - Eliminar la ultima tarea")
console.log("4 - Ver cuantas tareas tienes")
let opcion = 4
menu_tareas(opcion, mis_tareas)
menu_tareas(1, mis_tareas)