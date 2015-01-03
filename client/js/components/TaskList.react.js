var Task = React.createClass({
    render: function() {
        return (
            <li data-status={this.props.item.get('status')} data-id={this.props.item.get('id')}>{this.props.item.get('name')}</li>
        );
    }
});

var TaskList = React.createClass({
    getInitialState: function() {
        return { tasks: [] };
    },

    componentDidMount: function() {
        this.props.collection.on('sync remove', function() {
            this.setState({tasks: this.props.collection});
        }.bind(this));
    },

    completeTask: function(e) {
        e.preventDefault();

        var task = this.props.collection.get(event.target.getAttribute('data-id'));

        if (task.get('status') === 0) {
            task.set('status', 2);
        } else {
            task.set('status', 0);    
        }

        task.save();
    },

    render: function() {
        var taskList = this.state.tasks.map(function(task, i) {
            return (
                <Task key={i} item={task} />
            );
        });

        return (
            <ul className="taskList" onClick={this.completeTask}>
                {taskList}
            </ul>
        );
    }
});

export default TaskList;