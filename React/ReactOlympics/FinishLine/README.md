#Recta Final

##Resumen

Felicitaciones *Maker*, para este momento ya conoces todos los puntos clave de React, lo unico que falta es practicar y elevar un poco el nivel de complejidad para que te sientas comodo creando interfaces de usuario con esta increible libreria.

Vamos a terminar la aplicacion de Notas que empezamos, ya deberias saber todos los conceptos que faltan para hacerlo.

El objetivo es que tu aplicacion funcionalmente quede identica a esta:

[Notes App](http://blog.makeitreal.camp/notes-react-app/)

Como puedes ver esta aplicacion contiene muchas cosas que actualmente no hemos desarrollado:

- Las notas se ubican con una rotacion aleatoria cuando son creadas
- Las notas se pueden Crear con el boton `+` de la esquina superior derecha
- Las notas se pueden eliminar con el boton que tiene el icono de la caneca
- Las notas son draggable
- Cuando eliminas, editas o creas una nota no se siente que el cambio sucede en solo esa nota y no que todas las notas saltan y cambian de orden. Este problema suceda actualmente por que no hemos usado la propiedad `Key` cuando creamos una `Note`. Para arreglar este problema vas a tener que reescribir el codigo para que cada nota no sea en el estado de `Board` Sea no solo texto si no un objeto que contenga `id` y `texto` y pasar ese `id` como `key` a cada nota que creas.

