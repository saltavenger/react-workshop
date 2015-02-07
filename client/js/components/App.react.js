// components
import Navbar from './Navbar.react';
import CategoryForm from './CategoryForm.react';
import TaskForm from './TaskForm.react';
import TaskList from './TaskList.react';
import RemoveCompletedTasksButton from './RemoveCompletedTasksButton.react';

// collections
import CategoryCollection from '../domain/CategoryCollection';
import TaskCollection from '../domain/TaskCollection';

// fetch categories
var categoryCollection = new CategoryCollection();
categoryCollection.fetch();

// fetch tasks
var taskCollection = new TaskCollection();
taskCollection.fetch();

var App = React.createClass({
    render: function() {
        return (
            <section>
                <Navbar title="Task Manager" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <TaskList categoryCollection={categoryCollection} taskCollection={taskCollection} />
                        </div>
                        <div className="col-md-6">
                            <CategoryForm collection={categoryCollection} />
                            <TaskForm categoryCollection={categoryCollection} taskCollection={taskCollection} />

                            <hr/>

                            <RemoveCompletedTasksButton collection={taskCollection} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default App;