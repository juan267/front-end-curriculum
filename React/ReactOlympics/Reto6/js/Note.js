var Note = React.createClass({
    render: function() {
      return (
          <div className="note">
          <p></p>
          <span>
            <button
              className="btn btn-primary glyphicon glyphicon-pencil"/>
            <button
              className="btn btn-danger glyphicon glyphicon-trash"/>
          </span>
        </div>
      )
    }
});

ReactDOM.render(<Note>Hello World</Note>,
    document.getElementById('react-container'));

