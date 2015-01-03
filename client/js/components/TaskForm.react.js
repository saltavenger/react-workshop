import CategorySelect from './CategorySelect.react';

var TaskForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var task = this.refs.task.getDOMNode().value.trim();
        var category = this.refs.category.getDOMNode().value.trim();

        if (!task || !category) {
            return;
        }

        this.props.taskCollection.create({
            name: task,
            category: category
        });

        this.refs.task.getDOMNode().value = '';
    },

    removeCompleted: function(e) {
        e.preventDefault();

        this.props.taskCollection.where({status: 2}).forEach(function(task) {
            task.destroy();
        });
    },

    render: function() {
        return (
            <form role="form" className="js-taskForm" id="taskForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Task</label>
                    <input type="text" className="form-control" ref="task" />
                </div>
        
                <div className="form-group">
                    <label>Category</label>
                    <CategorySelect collection={this.props.categoryCollection} ref="category" />
                </div>
        
                <p><button type="submit" className="btn btn-primary">Add Task</button></p>
                
                <p><button type="button" className="btn btn-default" onClick={this.removeCompleted}>Remove Completed</button></p>
            </form>
        );
    }
});

export default TaskForm;