//Mensaje de bienvenida al usuario.
alert("Bienvenido a HuellaVerde: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente.");
do {
    opcion = prompt(
        "BIENVENIDO\n\n" +
        "1. Introducción al Cambio Climático.\n" +
        "2. Huella de Carbono Personal.\n" +
        "3. Consejos Prácticos para Reducir tu Impacto.\n" +
        "4. Salir\n\n" +
        "Seleccione una opción:"
    );

    switch (opcion) {
        case "1":
            
            break;

        case "2":
            
            break;

        case "3":
            
            break;
        case "4":
            alert("Saliendo del sistema de inventario. ¡Hasta luego!");
            break;
            
        default:
            alert("Opción inválida. Intente de nuevo.");
    }
} while (opcion !== "4");

// --------------------------------Funciones-------------------------