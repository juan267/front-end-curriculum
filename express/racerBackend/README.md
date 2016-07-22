# Javascript Racer Back-End

##Objetivos de Aprendizaje

- Mapear el flujo de datos de una aplicacion
- Implementar un CRUD usando el patron MVC
- Cambiar el DOM basado en eventos
- Usar AJAX para cambiar las vistas de forma asyncronica

##Resumen

En este reto vamos a agregar un Back end usando Express y Mongo a la aplicacion que ya habiamos creado en el reto Javascript Racer.

Los jugadores todavia juegan usando solo un navegador (Ambos en el mismo computador).

El flujo de la aplicacion seria el siguiente:

1. Dos personas visitan la aplicacion desde el mismo computador
2. La aplicacion inicia preguntales los nombres a los jugadores
3. Los jugadores llenan este formulario y empieza el juego
4. El juego inicia y cada jugador presiona teclas hasta que uno de los dos gana.
5. Despues de que alguno gane, el jugador ganador, el nombre del jugador ganador y el tiempo que le tomo ganar se envia al servidor y el juego es guardado como terminado.
6. Los jugadores pueden escoger empezar otro juego con los mismos nombres, o reiniciar con otros nombres.
7. Cuando el juego termina a los jugadores se les da una URL unica, en la cual pueden ver los resultados de ese juego en particular.

##Pasos

###Paso 1: Modelos

Deberias tener 2 modelos clave, `Player` y `Game`. Un `player` puede estar en muchos `games`, y un `game` puede tener muchos `players`.

los nombres de los `player` deben ser unicos.

### Paso 2: Rutas

Debes tener las siguientes rutas:

1. */* para crear un juego
2. una ruta para jugar el juego
3. una ruta para ver los resultados de un juego

## Paso 3: Juntalo todo

Junta tu Back-end con el front que ya habias hecho, y prueba que todo funcione!
