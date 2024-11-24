//Mensaje de bienvenida al usuario.
alert("Bienvenido a HuellaVerde: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente.");

let evaluaciones = [];  // Arreglo para guardar las evaluaciones de huella de carbono.

do {
    opcion = prompt(
        "BIENVENIDO\n\n" +
        "1. Introducción al Cambio Climático.\n" +
        "2. Huella de Carbono Personal.\n" +
        "3. Consejos Prácticos para Reducir tu Impacto.\n" +
        "4. Ver Reporte de Evaluaciones.\n" +
        "5. Salir\n\n" +
        "Seleccione una opción:"
    );

    switch (opcion) {
        case "1":
            do {
                opcion2 =  prompt("BIENVENIDO A INTRODUCCION AL CAMBIO CLIMATICO\n" +
                    "Acontinuacion encontrara un menu con diferentes causas de cambios climaticos\n\n" +
                    "1. Uso de fertilizantes y pesticidas.\n" +
                    "2. Explotación de recursos fósiles.\n" +
                    "3. Procesos industriales.\n" +
                    "4. Deforestación\n" +
                    "5. Uso intensivo de la agricultura industrial\n" +
                    "6. Urbanización y expansión de infraestructuras.\n" +
                    "7. Explotación de los océanos.\n" +
                    "8. Volver atrás\n\n" +
                    "Seleccione una opción:")

                switch (opcion2) {
                    case "1":
                        mensaje("DESCRIPCION:\n\n"+"El uso excesivo de fertilizantes nitrogenados en la agricultura libera óxidos de nitrógeno en la atmósfera.\n"+
                            "Estos gases son potentes contribuyentes al cambio climático, ya que atrapan el calor en la atmósfera.")
                        break;
                    case "2":
                        mensaje("DESCRIPCION:\n\n"+"La extracción y quema de petróleo y gas natural no solo produce CO₂, sino también metano, otro gas de efecto invernadero que es aún más potente.Esto produce el cambio climático.")
                        break;
                    case "3":
                        mensaje("DESCRIPCION:\n\n"+"Algunos procesos industriales, como la fabricación de cemento y acero, liberan grandes cantidades de CO₂ a la atmósfera"+
                            "La demanda de estos productos sigue en aumento, lo que incrementa las emisiones globales.")
                        break;
                    case "4":
                        mensaje("DESCRIPCION:\n\n"+"La tala de bosques para la agricultura, la ganadería y la urbanización reduce la cantidad de árboles que pueden absorber el CO₂, lo que aumenta"+
                            " las concentraciones de este gas en la atmósfera.")
                        break;
                    case "5":
                        mensaje("DESCRIPCION:\n\n"+"La agricultura industrial, especialmente la ganadería, produce grandes cantidades de metano,"+
                            " un gas de efecto invernadero que es mucho más potente que el CO₂.")
                        break;
                    case "6":
                        mensaje("DESCRIPCION:\n\n"+"La expansión de las ciudades y la construcción de infraestructuras aumenta la demanda de energía, muchas veces proveniente de fuentes no renovables,"+
                            " lo que incrementa las emisiones de gases de efecto invernadero.")
                        break;
                    case "7":
                        mensaje("DESCRIPCION:\n\n"+"La sobrepesca y la contaminación marina afectan la capacidad de los océanos para regular el clima y absorber CO₂, lo que intensifica el cambio climático.")
                        break;
                    case "8":
                        alert("Volviendo al menu principal......")
                        break;
                    default:
                        break;
                }
            } while (opcion2 !== "8");
            break;

        case "2":
            let evaluacion = calcularHuellaCarbono();
            evaluaciones.push(evaluacion);  // Guardar la evaluación en el arreglo.
            alert(`Tu huella de carbono estimada es de ${evaluacion.huellaCarbono.toFixed(2)} toneladas de CO₂ al año.\nLa media global es de 4 toneladas.`);
            break;

        case "3":
            // Mostrar consejos prácticos basados en la última evaluación guardada
            if (evaluaciones.length > 0) {
                let ultimaEvaluacion = evaluaciones[evaluaciones.length - 1];  // Obtener la última evaluación

                if (ultimaEvaluacion.huellaCarbono > 8) {
                    mensaje("Tu huella de carbono es alta. Aquí hay algunas recomendaciones para reducirla:\n" +
                        "1. Usa transporte público o bicicleta más a menudo.\n" +
                        "2. Reduce el consumo de carne roja y opta por alternativas vegetales.\n" +
                        "3. Usa fuentes de energía renovable si es posible.\n" +
                        "4. Reduce el uso de plásticos y otros materiales no biodegradables.");
                } else if (ultimaEvaluacion.huellaCarbono > 4) {
                    mensaje("Tu huella de carbono es moderada. Aquí hay algunas recomendaciones para reducirla aún más:\n" +
                        "1. Considera compartir coche o usar transporte público para trayectos largos.\n" +
                        "2. Intenta disminuir el consumo de carne roja y aumentar el de vegetales.\n" +
                        "3. Implementa prácticas de eficiencia energética en tu hogar.");
                } else {
                    mensaje("Tu huella de carbono es baja, ¡pero aún puedes mejorar! Aquí tienes algunas recomendaciones:\n" +
                        "1. Usa menos el coche y camina o usa bicicleta siempre que puedas.\n" +
                        "2. Aumenta el uso de productos de bajo impacto ambiental, como alimentos locales y orgánicos.\n" +
                        "3. Aprovecha la energía solar o eólica si tienes acceso a ellas.");
                }
            } else {
                mensaje("Por favor, primero calcula tu huella de carbono en el caso 2.");
            }
            break;

        case "4":
            // Mostrar el reporte de todas las evaluaciones
            if (evaluaciones.length > 0) {
                let reporte = "Reporte de Evaluaciones de Huella de Carbono:\n\n";
                evaluaciones.forEach((evaluacion, index) => {
                    reporte += `Evaluación #${index + 1}:\n`;
                    reporte += `Frecuencia de uso de transporte público: ${evaluacion.habitosTransporte}\n`;
                    reporte += `Días de consumo de carne roja por semana: ${evaluacion.diasCarne}\n`;
                    reporte += `Huella de carbono estimada: ${evaluacion.huellaCarbono.toFixed(2)} toneladas de CO₂\n\n`;
                });
                alert(reporte);
            } else {
                alert("No se han realizado evaluaciones aún.");
            }
            break;

        case "5":
            alert("Saliendo del sistema de inventario. ¡Hasta luego!");
            break;

        default:
            alert("Opción inválida. Intente de nuevo.");
    }
} while (opcion !== "5");

// --------------------------------Funciones-------------------------
function mensaje(msj) {
    alert(msj);
}
function calcularHuellaCarbono(){
    // Declarar variables
    let huellaCarbonoTotal = 0;
    const cantidadCarneComida = 0.25; // Este dato es una porción (kg) promedio.
    let consumoAnualCarne = 0;
    const semanasAnuales = 52;
    const factorEmisionCarne = 30; // Factor de emisión de carne roja (kg CO₂e por kg de carne).
    const emisionTransporte = 0.15;  // Emisiones por km en transporte público (aproximación, ajustable según ciudad).

    // Pedir datos al usuario
    alert("A continuación vamos a medir tu huella de carbono.");
    let habitos = prompt("¿Con qué frecuencia usas transporte público?\n" +
        "1. diario.\n" +
        "2. semanal.\n" +
        "3. nunca");

    let dias = parseInt(prompt("¿Cuántos días a la semana consumes carne roja?"));

    // Realizar cálculos
    if (habitos === "1") {
        huellaCarbonoTotal += (30 * emisionTransporte);  // Transporte diario
    } else if (habitos === "2") {
        huellaCarbonoTotal += (4 * emisionTransporte);  // Transporte semanal
    }

    if (dias >= 3) {
        consumoAnualCarne = cantidadCarneComida * dias * semanasAnuales;
        huellaCarbonoTotal += ((consumoAnualCarne * factorEmisionCarne) / 1000); // Emisiones carne
    } else if (dias > 0) {
        consumoAnualCarne = cantidadCarneComida * dias * semanasAnuales;
        huellaCarbonoTotal += ((consumoAnualCarne * factorEmisionCarne) / 1000); // Emisiones carne
    }

    // Determinar el hábito de transporte
    let habitosTransporte;
    
    if (habitos === "1") {
        habitosTransporte = "diario";
    } else if (habitos === "2") {
        habitosTransporte = "semanal";
    } else {
        habitosTransporte = "nunca";
    }
    
    // Guardar la evaluación en un objeto
    let evaluacion = {
        habitosTransporte: habitosTransporte,
        diasCarne: dias,
        huellaCarbono: huellaCarbonoTotal
    };

    return evaluacion;
}