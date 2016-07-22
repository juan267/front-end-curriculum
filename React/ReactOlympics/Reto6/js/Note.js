var Note = React.createClass({
    render: function() {
      <div className="note">
        <p></p>
        <span>
          <button
            className="btn btn-primary glyphicon glyphicon-pencil"/>
          <button
            className="btn btn-danger glyphicon glyphicon-trash"/>
        </span>
      </div>
      );
    }
});

React.render(<Note>Hello World</Note>,
    document.getElementById('react-container'));

// Agrega dentro del p tag del componente Note el syntax necesario para mostrar el texto de la nota. El primero boton va a ser nuestro boton de editar, agregale un evento cuando se le haga click que disparte una alerta que diga editando nota. Luego añadale al segundo boton un evento que al hacerle click dispare un alert que diga borrando nota.
