var RemoveCompletedTasksButton = React.createClass({
    handleClick: function(e) {
        e.preventDefault();

        this.props.collection.removeCompleted();
    },

    render: function() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Remove Completed</button>
        );
    }
});

export default RemoveCompletedTasksButton;