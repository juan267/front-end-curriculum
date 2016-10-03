# Express Authentication

##Learning Competencies

* Implemetar Login de usuarios.

##Resumen

Usunado express, crea un sistema de `signin/signout` , el cual autentique usuarios antes de mostrarles informacion que este protegida. En este reto encontraras en la carpeta `express-authentication` un esqueleto el cual contiene todo el boilerplate necesario inlcuido vistas. Tu reto es modificar `server.js` para que todo funcione.

##Pasos

###Paso 0: Implementa el Sign In / Sign Up

Modifica el codigo actual para que logres la siguiente funcionalidad:

1. Un usuario puede crear una cuenta con un `email` y un `password`.
2. Un usuario existente puede hacer `sign-in`
3. Si un usuario no esta logueado, solo podran ver un mensaje de bienvenida en el home page.
4. Si un usuario se loguea, pueden ver una lista de los nombres de los usuarios que existen en la aplicacion en el home page.
5. Un usuario puede hacer `sign out` de la aplicacion.
6. Crear el `middleware` necesario para poder saber quien es el `currentUser` que esta logueado.

###Paso 1: Encrypcion

Guardar passwords es un asunto serio, de modo que tenemos que tomar todos los pasos necesarios para mantener esa informacion segura. Los passwords de los usuarios solo deberian guarderse en la base de datos de forma encryptada. Usa el modulo `bcrypt` para lograr esto.

###Paso 2: Validaciones (opcional)

Agrega mensajes de error que le indiquen al usuario que:

1. Cuando este haciendo un `login` que el email que ingreso no existe
2. Cuando este haceindo un `login` que el password que ingreso no es correcto
3. Cuando esta haciendo un `Sign up` que el email que quiere usar ya existe en el la base de datos.

