var RemoveCompletedTasksButton = React.createClass({
    handleClick: function(e) {
        e.preventDefault();

        this.props.tasks.removeCompleted();
    },

    render: function() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Remove Completed</button>
        );
    }
});

export default RemoveCompletedTasksButton;