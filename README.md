# Practica03-Javascript

Práctica de la asignatura: Programación Hipermedial, correspondiente al desarrollo de scripts con JavaScript.
\*PRÁCTICA DE LABORATORIO\*\*

**CARRERA** : Computación

**ASIGNATURA** : Programación Hipermedial

**TÍTULO PRÁCTICA** : Resolución de problemas sobre JavaScript

**OBJETIVO ALCANZADO** :

- Entender y organizar de una mejor manera los sitios web en internet.
- Diseñar adecuadamente elementos gráficos en sitios web en internet.
- Crear sitios web aplicando estándares actuales.
- Aplicar validaciones sobre formularios y operaciones utilizando scripts.

**ACTIVIDADES DESARROLLADAS**

1. Crear un repositorio en GitHub con el nombre "Practica03-JavaScript".

Usuario de GitHub: bryansb

Repositorio de la presente práctica: https://github.com/bryansb/Practica03-Javascript

2. Realizar un commit y push por cada requerimiento.

Se fueron realizando commits de acuerdo se fue avanzando en el desarrollo de la práctica.

3. Crear una carpeta para la solución de cada ejercicio antes mencionado.

Hay una carpeta para cada problema planteado, donde, en cada uno de ellos se encuentran tres archivos: la página web (estructura en _.html), la hoja de estilos (_.css) y un script de validaciones requeridas para ese problema. (\*.js)

4. Crear el archivo README del repositorio.

Nota: El archivo se lo generó en cuanto se creó el repositorio; el mismo presentará la misma información presente en este informe.

5. Generar el informe del primer ejercicio: Formulario.

Planteamiento: Se pide generar un formulario en HTML, el cuál deberá de tener validaciones mediante JavaScript de todos los inputs del mismo.

HTML: Básicamente consta de un formulario dentro de una sección. El formulario tiene 8 inputs con sus respectivos labels, además cuenta con una etiqueta span para cada una de ellas, las cuales servirán para imprimir los mensajes de error. Finalmente cuenta con un botón para enviar los datos del formulario.

CSS: Se le dieron estilos minimalistas y sencillos a la página en cuestión. Además, se le dieron algunos colores y se usó una fuente importada desde Google.

JavaScript:

Para la parte de JavaScript se pidieron las siguientes validaciones:

a. Cédula: Ingresar sólo números, y verificar el número mediante el algoritmo de dígito verificador. Para validar la cédula, primero se llama a una función que obtiene tanto el input, como su etiqueta span. Posteriormente a través de dos funciones secundarias, se establecen unas banderas que permitirán posteriormente saber si está o no validado correctamente ese campo.

![imagen](/recursos/ima1.png)

La primera función secundaria valida que se ingresen solo caracteres de tipo numérico, mediante la verificación de caracteres ASCII ingresados. Si cumple con la condición, de acuerdo con el rango de valores, se ingresa correctamente; caso contrario, si se ingresa más de 10 caracteres, o si se ingresa un caracter que no se contemple como uno numérico, este se elimina.

![imagen](/recursos/ima2.png)

La segunda, función secundaria, es la que contiene el algoritmo para la validación de la cédula mediante el dígito verificador; este, contiene una serie de pasos para determinar si es o no válida una cédula.
El proceso consiste en multiplicar por dos todos los dígitos impares, luego estos productos se suman con los dígitos pares de la cédula. Al resultado de la suma se busca su decena superior, y se le resta; por ejemplo, si el resultado es 23, la decena superior sería 30, por lo tanto quedaría como: 30-25=5. Este último resultado se lo compara con el décimo dígito de la cédula, si son iguales la cédula es válida.

![imagen](/recursos/ima3.png)

b. Nombres y Apellidos: Ingresar sólo letras, y se deben ingresar los dos nombres.
Las condiciones para validar el campo de nombres, y apellidos son las mismas. Para ello, se tiene una función principal que llamará a otras dos, siguiendo la lógica de la validación anterior de las banderas y la validación final.

![imagen](/recursos/ima4.png)

La primera función valida que solo se ingresen caracteres de tipo alfabéticos, para ello se evalúa los códigos ASCII de los datos que se van ingresando. Si no es considerado dentro del rango, se va eliminando de la caja de texto. Cabe resaltar que se agregó al rango el código del “espacio”, para que así se puedan escribir dos nombres o dos apellidos.

![imagen](/recursos/ima5.png)

La segunda función auxiliar, es la que permite el ingreso de dos, y solo de dos nombres/apellidos dentro de la caja de texto. Lo que hace la función es “dividir” al contenido del input en dos partes, tomando como referencia el espacio que hay entre los dos nombres; si no encuentra el espacio, significa que se ha ingresado solo una palabra, por lo tanto el campo no puede ser validado.
Además, si se ha ingresado dos o más espacios, se seguirá negando la validación puesto a que se deben de tener dos palabras válidas.

![imagen](/recursos/ima6.png)

c. Teléfono: Ingresar sólo números, y verificar que tenga un máximo de 10 caracteres.
Para validar el teléfono solo se usa una función, la que se explicó en el primer punto de esta sección, la cuál se muestra en la Ilustración 5.

![imagen](/recursos/ima7.png)

d. Fecha de nacimiento: Ingresar y validar el formato dd/mm/aaaa.
Para validar la fecha de nacimiento, primero se tiene una función principal que se encarga de llamar a otras dos, la que valida que solo se ingresen valores numéricos (Ilustración 5.), y la que valida que se cumpla el formato de fecha; además de tener las banderas necesarias para validar finalmente el contenido de ese campo.

![imagen](/recursos/ima8.png)

La función auxiliar nueva aquí, verifica que se siga un orden de formato de ingreso de los números. Se trabaja con “substring()” para ir separando a medida que se vaya escribiendo la fecha, y así saber el día, mes y año que se ingresa. Para validar este campo, es necesario que los dos primeros números ingresados estén entre 0 y 31, los siguientes dos entre 0 y 12, y los últimos cuatro números entre 1900 y 2020. Además, se ingresa un “/” automáticamente entre números, y se eliminan los que no se contemplen en los rangos establecidos.

![imagen](/recursos/ima9.png)

e. Correo electrónico: Ingresar un correo con la extensión “ups.edu.ec” o “est.ups.edu.ec” después del “@”. Además la parte del usuario tiene que ser mayor o igual a 3 caracteres.
Para validar el input del correo electrónico, primero se verifica que se ingrese solo un “@” ya que con ese carácter se verifica posteriormente las demás condiciones. Lo siguiente es verificar que antes del “@” se haya ingresado más de dos caracteres. Finalmente, se verifica que el correo tenga la extensión de correo de la universidad.

![imagen](/recursos/ima10.png)

f. Contraseña: Ingresar mínimo 8 caracteres, además, entre ellos debería constar al menos una letra mayúscula, una minúscula y un caracter especial. (@, \_, \$)
Para validar la contraseña, se debe validar en primer lugar que tenga una longitud de al menos 8 caracteres, posteriormente con la ayuda de unas variables booleanas se termina si es que ese string, contiene al menos uno de los 3 caracteres especiales que se solicitan. Finalmente, mediante un recorrido de los caracteres, se verifica que haya alguna coincidencia respecto a si existe o no una mayúscula y una minúscula; esto se puede determinar al comparar los códigos ASCII y utilizando unas variables booleanas. En caso de que existan ambas, se procede a validar ese campo.

![imagen](/recursos/ima11.png)

**Consideraciones:**
a. Validaciones: Hacerse en tiempo real. (Mientras el usuario ingresa los datos)
Para poder validar “en tiempo real”, se utiliza el evento onkeyup, el cual se “dispara” cuando el usuario deja de presionar una tecla. Esto se puede observar en la Ilustración 2.

b. Mensaje de error: Se deberá presentar un mensaje de error si no se cumple con alguna validación; además, el borde de dicho input deberá ser de color rojo.
Para poder imprimir por pantalla un error de acuerdo con el tipo de validación, se utilizan dos funciones, la primera imprime un mensaje por medio de la etiqueta span que se encuentra bajo cada input además de aplicar estilos a la caja de texto. La segunda función sirve para quitar dicho error, a la vez que aplica un estilo con color verde.

c. Inputs: Todos los inputs deberán ser de tipo “texto”, solo el de la contraseña podrá ser diferente. (Password)
Como se muestra en la Ilustración 2, todos los inputs son de tipo “text” a excepción del último, el cual es de tipo password.

d. Obligatoriedad: Todos los campos deberán ser ingresados de manera obligaría, además, se deberá enviar el formulario a una página php sencilla que muestre: “Bienvenido, has pasado las validaciones.!”
Para poder determinar que todos los campos son válidos, se llama desde un botón, mediante el evento onclick, a una función general que hace un recorrido de todos los elementos del formulario. Durante las funciones que se presentaron con anterioridad, se veían banderas, las cuales actúan como verificadores de validez. La función mencionada, si y solo sí todos los campos están con un valor de verdadero procederá a enviar los datos.

![imagen](/recursos/ima13.png)

En la siguiente ilustración se presenta el resultado final, en donde se presenta un ejemplo de un campo que ha sido correctamente validado, y otro que no ha cumplido con las condiciones necesarias para ser validado.

![imagen](/recursos/ima14.png)

6. Generar el informe del segundo ejercicio: Galería.

Planteamiento: Se pide diseñar una interfaz en HTML que contenga una imagen, y tres botones: Anterior, Inicio y Siguiente. Mediante JavaScript se pide que al momento de presionar los botones de anterior y siguiente se realice una animación.

HTML: Básicamente, la estructura es muy simple. Dentro de una sección, se encuentra un bloque de div que contendrá a la imagen, y a los botones; a su vez, dentro de este se encontrará otra etiqueta div la cual contendrá a todos los botones que serán necesarios para realizar las animaciones correspondientes.

CSS: La estructura CSS de la presente sección se encarga principalmente de dar estilos a los botones, además de establecer un background oscuro, y la importación de una fuente desde Google.

C.	Animación con JavaScript

-	Arreglo con 10 imágenes: Se debe de contar con una carpeta llamada: “images” que contenga diez imágenes previamente descargadas. Se recomienda que todas tenga una misma dimensión.
-	Arreglo de la Galería: Se deben visualizar exclusivamente 5 imágenes.
-	Botón Inicio: Cade vez que se haga clic en el botón Iniciar se deben de escoger de -anera aleatoria cinco de las diez imágenes almacenadas.
-	Cambio de imagen: Se debe cambiar de imagen al hacer clic en el cualquier botón.
-	Animación: Al cambiarse de imagen se debe de realizar una animación; usar Left o Right.
-	Botón Siguiente: Al hacer clic en el botón siguiente, y al llegar al final este se deshabilitará.
-	Botón Anterior: Al hacer clic en el botón anterior, y al llegar al principio este se deshabilitará.

-	Variables Globales: Para realizar este ejercicio se hizo uso de variables globales las cuales pueden controlar el flujo del script, como banderas, o determinar la velocidad de las animaciones, la como se muestra en la siguiente Ilustración.

![imagen](/recursos/ima15.png)

-	Cargar imágenes: Para cargar las imágenes se cuenta con una función principal la cual consta de dos partes: mediante un bucle while, se genera un array de números aleatorios que servirán para asignar cinco de las diez imágenes a un array temporal que permitirá mostrarlas en la galería.

Posteriormente, mediante un bucle for, y según los valores almacenados en el array numérico del punto anterior se crea el vector de imágenes más pequeño, el cual enseguida presentará en pantalla.

Esta función será llamada desde el body en inicio, y desde el botón de “Iniciar”-

![imagen](/recursos/ima16.png)


-	Animación izquierda: Para realizar esta animación tenemos un total de tres funciones, las cuales serán llamadas entre sí de manera sucesiva. La primera función se llamará desde el botón Siguiente.

![imagen](/recursos/ima17.png)

En esta función, primero comprueba la posición actual del array de imágenes. Mediante la creación de un intervalo el cuál comenzará la animación. La segunda función hará incrementos del porcentaje del parámetro Right. Además, debido que, a este punto la imagen salió del campo visual, se cambia a la siguiente imagen.

![imagen](/recursos/ima18.png)

Antes de salir de esta función, se crea inmediatamente una segunda animación que será la que traiga la imagen de regreso al centro, pero desde el otro lado de la pantalla. Es básicamente los mismos procedimientos, pero con diferentes valores.

![imagen](/recursos/ima19.png)

-	Animación derecha: Para realizar la animación, pero en sentido contrario, se sigue exactamente la misma lógica, por lo que también consta de tres funciones. La primera que se llama desde el botón y que genera la llamada a la primera animación para que la imagen salga de pantalla, y esta, que genera la llamada hacia la función que genera la segunda animación que correspondería el movimiento de vuelta hacia el centro.

La única diferencia, entre estas y las funciones que se definieron anteriormente son los valores que compara, son inversas a los valores que se definieron en las funciones de las Ilustraciones 22, 23 y 24.

![imagen](/recursos/ima19.png)

-	Validación de botones: Para validar cuándo se deben bloquear los botones, se creó una función que, dado la posición del array, bloquea o desbloquea los botones. Así, cuando se está en la primera posición, se bloquea la tecla de “Anterior”, y a su vez, si se encuentra en la última posición se bloquea la tecla de “Siguiente”.

![imagen](/recursos/ima21.png)

![imagen](/recursos/ima22.png)


7. Generar el informe del tercer ejercicio: Calculadora.

Planteamiento: Se pide realizar una calculadora básica en HTML, para lo cual se deberá de hacer uso de botones y una caja de texto para visualizar los resultados. Se deberá de poder realizar las cuatro operaciones básicas, además de usar la función “eval()” para determinar el resultado.

HTML: Este ejercicio tiene una estructura HTML más compleja. Se traba de una tabla con botones en sus celdas. Además, se optó la utilización de dos cajas de texto a modo de pantallas para mostrar los resultados de las operaciones.

CSS: Para los estilos, se dio bastante énfasis en adaptar la tabla para que adopte la forma de una calculadora física. Para lo cual se dieron tamaños, colores y una fuente especial para números desde la página de Google Fonts El resultado, fue una pequeña calculadora con apariencia minimalista y con botones que cambian de color al pasar sobre ellos con el mouse.

C.	Operaciones con JavaScript
A pesar de tener una estructura HTML más compleja que los ejercicios anteriores, su implementación en JavaScript es más sencilla. Consta de solo cuatro funciones.
La primera función init(), se encarga de setear desde el onload el cero en la caja de texto. La segunda función writeValue(), se encarga de agregar los valores de los botones en la caja de texto de valores.
La función, clearPanel(), se encarga de “limpiar” la memoria de la calculadora. Y finalmente, la función getAnswer(), obtiene el string formado hasta ese momento para evaluarla y determinar así el resultado.

![imagen](/recursos/ima23.png)

![imagen](/recursos/ima24.png)

**RESULTADO(S) OBTENIDO(S)**:

- Se logró entender, organizar y desarrollar de una mejor manera los sitios web.
- Se logró diseñar, de manera adecuada elementos gráficos en sitios web.
- Se logró aplicar hojas de estilos CSS a páginas web, logrando así una mejor presentación de este.
- Se logró validar, mediante determinadas condiciones, el comportamiento y formato de ciertos elementos de las páginas \*.html mediante el uso de scripts.

**CONCLUSIONES** :

- El uso de scripts en los sitios web, permiten que estas tengan una mayor flexibilidad, funcionalidad y estilo al determinar ciertas características que por sí sola, ni con el uso de hojas de estilo pudiera haber realizado.

**RECOMENDACIONES** :

- Probar el sitio web en al menos tres navegadores web: Google Chrome, Firefox y Safari.
- En caso de dudas, preguntar al docente encargado.
- Revisar la documentación de apoyo, para así tener mejor entendimiento del tema.
- Haber asistido a las clases de la asignatura.

**Estudiante:** Sarmiento Douglas Bryan Sarmiento

![imagen](/)
