var CategoryListItem = React.createClass({
    render: function() {
        var taskList = this.props.tasks.map(function(task, i) {
            return (
                <TaskListItem key={i} item={task} />
            );
        }.bind(this));

        return (
            <li>{this.props.item.get('name')}
                <ul data-category="{this.props.item.get('id')}">
                    {taskList}
                </ul>
            </li>
        );
    }
});

var TaskListItem = React.createClass({
    render: function() {
        return (
            <li data-status={this.props.item.get('status')}><a href="#" data-id={this.props.item.get('id')}>{this.props.item.get('name')}</a></li>
        );
    }
});

var TaskList = React.createClass({
    getInitialState: function() {
        return { categories: [], tasks: [] };
    },

    componentDidMount: function() {
        this.props.categoryCollection.on('sync remove', function() {
            this.setState({categories: this.props.categoryCollection});
        }.bind(this));

        this.props.taskCollection.on('sync remove', function() {
            this.setState({tasks: this.props.taskCollection});
        }.bind(this));
    },

    completeTask: function(e) {
        e.preventDefault();

        var task = this.props.taskCollection.get(event.target.getAttribute('data-id'));

        task.toggleStatus();
    },

    render: function() {
        var categoryList = this.state.categories.map(function(category, i) {
            var tasks = [];

            if (this.state.tasks.length) {
                tasks = this.state.tasks.where({category: category.get('id')});

            }
            
            return (
                <CategoryListItem key={i} item={category} tasks={tasks} />
            );
        }.bind(this));

        return (
            <ul className="taskList" onClick={this.completeTask}>
                {categoryList}
            </ul>
        );
    }
});

export default TaskList;