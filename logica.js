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
            do {
                opcion2 = prompt("BIENVENIDO A INTRODUCCION AL CAMBIO CLIMATICO\n" +
                    "A continuación encontrará un menú con diferentes causas de cambios climáticos\n\n" +
                    "1. Uso de fertilizantes y pesticidas.\n" +
                    "2. Explotación de recursos fósiles.\n" +
                    "3. Procesos industriales.\n" +
                    "4. Deforestación\n" +
                    "5. Uso intensivo de la agricultura industrial\n" +
                    "6. Urbanización y expansión de infraestructuras.\n" +
                    "7. Explotación de los océanos.\n" +
                    "8. Volver atrás\n\n" +
                    "Seleccione una opción:");

                switch (opcion2) {
                    case "1":
                        mensaje("DESCRIPCIÓN:\n\n" + "El uso excesivo de fertilizantes nitrogenados en la agricultura libera óxidos de nitrógeno en la atmósfera.\n"
                            + "Estos gases son potentes contribuyentes al cambio climático, ya que atrapan el calor en la atmósfera.");
                        break;
                    case "2":
                        mensaje("DESCRIPCIÓN:\n\n" + "La extracción y quema de petróleo y gas natural no solo produce CO₂, sino también metano, otro gas de efecto invernadero que es aún más potente. Esto produce el cambio climático.");
                        break;
                    case "3":
                        mensaje("DESCRIPCIÓN:\n\n" + "Algunos procesos industriales, como la fabricación de cemento y acero, liberan grandes cantidades de CO₂ a la atmósfera."
                            + "La demanda de estos productos sigue en aumento, lo que incrementa las emisiones globales.");
                        break;
                    case "4":
                        mensaje("DESCRIPCIÓN:\n\n" + "La tala de bosques para la agricultura, la ganadería y la urbanización reduce la cantidad de árboles que pueden absorber el CO₂, lo que aumenta"
                            + " las concentraciones de este gas en la atmósfera.");
                        break;
                    case "5":
                        mensaje("DESCRIPCIÓN:\n\n" + "La agricultura industrial, especialmente la ganadería, produce grandes cantidades de metano,"
                            + " un gas de efecto invernadero que es mucho más potente que el CO₂.");
                        break;
                    case "6":
                        mensaje("DESCRIPCIÓN:\n\n" + "La expansión de las ciudades y la construcción de infraestructuras aumenta la demanda de energía, muchas veces proveniente de fuentes no renovables,"
                            + " lo que incrementa las emisiones de gases de efecto invernadero.");
                        break;
                    case "7":
                        mensaje("DESCRIPCIÓN:\n\n" + "La sobrepesca y la contaminación marina afectan la capacidad de los océanos para regular el clima y absorber CO₂, lo que intensifica el cambio climático.");
                        break;
                    case "8":
                        alert("Volviendo al menú principal......");
                        break;
                    default:
                        break;
                }
            } while (opcion2 !== "8");

            break;

        case "2":
            let huellaCarbono = calcularHuellaCarbono();
            alert(`Tu huella de carbono estimada es de ${huellaCarbono} toneladas de CO₂ al año.\nLa media global es de 4 toneladas.`);
            mostrarConsejos();
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

function mensaje(msj) {
    alert(msj);
}

function calcularHuellaCarbono() {
    //Declarar variables
    let huellaCarbonoTotal = 0;
    const cantidadCarneComida = 0.25; //este dato es una porción (kg) promedio.
    let consumoAnualCarne = 0;
    const semanasAnuales = 52;
    const factorEmisionCarne = 30; // kg CO₂e por kg de carne.
    const emisionTransporte = 0.15;

    // Pedir datos al usuario
    alert("A continuación vamos a medir tu huella de carbono");
    let habitos = prompt(`¿Con qué frecuencia usas transporte público? 
        1. diario.
        2. semanal.
        3. nunca`);
    let dias = parseInt(prompt("¿Cuántos días a la semana consumes carne roja?"));

    // -------------------------- Realizar cálculos --------------------------------

    // Huella de carbono por uso de transporte público
    if (habitos === "1") {
        huellaCarbonoTotal += ((10 * emisionTransporte) * 30); // 10 km diarios, 30 días
    } else if (habitos === "2") {
        huellaCarbonoTotal += ((10 * emisionTransporte) * 4); // 10 km semanales, 4 semanas
    } else {
        huellaCarbonoTotal += 0; // Nunca usa transporte público
    }

    // Huella de carbono por consumo de carne roja
    if (dias >= 3) {
        consumoAnualCarne = cantidadCarneComida * dias * semanasAnuales;
        huellaCarbonoTotal += ((consumoAnualCarne * factorEmisionCarne) / 1000); // En toneladas
    } else if (dias > 0 && dias < 3) {
        consumoAnualCarne = cantidadCarneComida * dias * semanasAnuales;
        huellaCarbonoTotal += ((consumoAnualCarne * factorEmisionCarne) / 1000);
    }

    return huellaCarbonoTotal;
}

function mostrarConsejos() {
    let habitos = prompt(`¿Con qué frecuencia usas transporte público? 
        1. diario.
        2. semanal.
        3. nunca`);
    let dias = parseInt(prompt("¿Cuántos días a la semana consumes carne roja?"));

    // Consejos según el uso de transporte público
    if (habitos === "1" || habitos === "2") {
        alert("Optar por transporte público o bicicleta puede reducir tu impacto ambiental significativamente.");
    } else if (habitos === "3") {
        alert("Considera usar más el transporte público para disminuir las emisiones de CO₂.");
    }

    // Consejos según el consumo de carne roja
    if (dias >= 3) {
        alert("Reducir el consumo de carne roja a una vez por semana puede disminuir tu huella de carbono en 0.8 toneladas al año.");
    } else if (dias > 0 && dias < 3) {
        alert("Continuar moderando tu consumo de carne roja también puede ayudar a reducir las emisiones.");
    }
}
