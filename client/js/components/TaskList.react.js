var CategoryListItem = React.createClass({
    render: function() {
        var taskList = this.props.tasks.map(function(task, i) {
            return (
                <TaskListItem key={i} item={task} />
            );
        });

        return (
            <li>{this.props.category.get('name')}
                <ul>
                    {taskList}
                </ul>
            </li>
        );
    }
});

var TaskListItem = React.createClass({
    completeTask: function(e) {
        e.preventDefault();

        this.props.item.toggleStatus();
    },

    render: function() {
        return (
            <li data-status={this.props.item.get('status')}><a href="#" onClick={this.completeTask}>{this.props.item.get('name')}</a></li>
        );
    }
});

var TaskList = React.createClass({
    render: function() {
        var categoryList = this.props.categories.map((category, i) => {
            var tasks = this.props.tasks.where({category: category.get('id')});
            
            return (
                <CategoryListItem key={i} category={category} tasks={tasks} />
            );
        });

        return (
            <ul className="taskList">
                {categoryList}
            </ul>
        );
    }
});

export default TaskList;