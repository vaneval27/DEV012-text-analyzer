# Analizador de texto

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Descripción del proyecto](#2-descripción-del-proyecto)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Diseño y prototipo](#4-diseño-y-prototipo)


***

## 1. Consideraciones generales

La lógica de este proyecto está implementada completamente en `JavaScript` puro. No se usaron librerías ni frameworks para su desarrollo. Se utilizó `HTML` en la estructura y `CSS` para dar el estilo.


## 2. Descripción del proyecto

Este proyecto es una aplicación web que permite a los usuarios realizar análisis de textos desde su navegador, obteniendo una serie de cifras y métricas detalladas sobre las letras, caracteres y números que contenga el texto ingresado, ya sea que se haya escrito directamente o copiado y pegado desde otra fuente.


## 3. Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación permite a la usuario ingresar un texto escribiéndolo directamente o por medio del copiado y pegado en el cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualiza los
resultados en tiempo real a medida que el usuario escribe su texto:

    - **Recuento de palabras**: Cuenta el número de
    palabras que hay en el texto ingresado.

    - **Recuento de caracteres**: Cuenta el número de
    caracteres que hay en el texto ingresado, incluidos espacios y signos de
    puntuación.

    - **Recuento de caracteres excluyendo espacios y signos de puntuación**: Cuenta el número de caracteres que hay en el texto ngresado,     excluyendo espacios y signos de
    puntuación.

    - **Recuento de números**: Cuenta la cantidad de números que hay en
    el texto ingresado.

    - **Suma total de números**: Muestra la suma total de todos los números ingresados en el texto.
      
    - **Longitud media de las palabras**: Calcula y muestra la longitud media de las palabras en el texto de entrada.

3. La aplicación permite limpiar el contenido del área de texto y reiniciar los datos de las métricas por medio del botón "Reiniciar".


## 4. Diseño y prototipo

El diseño y prototipo de esta aplicación web se llevaron a cabo teniendo en cuenta los criterios de aceptación y los requisitos del proyecto.

Inicialmente, se consideraron los aspectos y funcionalidades de la estructura básica del contenido en `HTML` para poder crear el diseño del prototipo de baja fidelidad utilizando `Figma`.

![Prototype_Low-fidelity](https://github.com/vaneval27/DEV012-text-analyzer/assets/132302061/1b4354b0-ce74-4cdc-a456-1199b8e7df5e)

Posteriormente se trabaja la lógica del programa en `JavaScript` y se estructura el diseño visual de la aplicación aplicando estilos con `CSS`. Finalmente la interfaz de la aplicación se ve así: 

![Text-Analyzer](https://github.com/vaneval27/DEV012-text-analyzer/assets/132302061/1b692123-10ed-40fd-aa47-22843856fafa)







