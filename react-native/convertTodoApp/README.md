# Convierte un App de React a React-Native


##Resumen

En este reto vamos a convertir una simple aplicacion de React, a una que funcione en dispositivos mobiles usando `React Native`.

Como puedes ver ya tenemos todo un App de React creado, el cual es una simple aplicacion par tomar Notas.

Tu trabajo sera ponerla a funcionar en un celular sea un IOS o Android.

##Pasos

###Paso 1

Lo primero es poner la aplicacion de React a funcionar y ver que hace. En este proyecto usamos el boilerplate de React el cual es `create-react-app`. Para iniciar la aplicacion deberas correr los comandos:

```bash
npm install
```

```bash
npm start
```

Podras ver la aplicacion en tu navegador, en localhost:3000. Ahora bien te daras cuenta que todavia no se ve ningun `Todo`. Podras pensar que es por que todavia no hay ninguno creado, pero si abres la consola de desarrollador veras que salen unos errores de `fetch`. Esto es por que estamos usando un modulo de `npm` llamado `json server` el cual nos permite crear rapida y facilmente una API restful.

El servidor de `json server` va a actuar como nuestra API y base de datos, para inciar este servidor parate en el root de la aplicacion en la terminal y ejecuta el siguiente comando.

```bash
json-server --watch db.json --port 3001
```
Una vez hagas esto y refresques el navegador podras ver que aparecen los Todos que ya existen en la base de datos.


###Paso 2

Dale una buena leida al codigo que ya esta implementado. Asegurate que entiendas todo lo que hace e incluso sientete libre de hacerle modificacion y mejores si lo deseas.

Una vez estes familiarizado con el codigo es hora de migrar este proyecto a `React-Native`.

Lo primero que vas hacer es crear un proyecto de react native con el comando:

```bash
react-native init todoApp
```

Una vez este comando termine de instalar todo lo que necesita haz `cd` al proyecto y ejecuta el siguiente comando:


```bash
react-native run-android
```

*NOTA* : Asegurate antes de tener el emulador de android prendido

si todo salio bien deberas ver que en el emulador sale la pantalla de bienvenida de react native.


###Paso 3

Para completar este reto vas a tener que hacer varios cambios al codigo que ya te proporcionamos, esta es una lista de las posibles cosas que vas a tener que cambiar:

- Todos los tags nativos de HTML tienen que ser cambiados por componentes Nativos a mobiles. EJ: `<div> -> <View>`

- Los eventos en react funcionan diferente y tienen nombres diferentes. EJ: `onClick -> onPress`

- Ya no existe ReactDOM por lo cual la forma de montar en componente root de la aplicacion es diferente.

Realiza estos cambias y devuelve la aplicacion a la vida ahora desde un celular.






