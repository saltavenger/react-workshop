var TaskModel = Backbone.Model.extend({
    toggleStatus: function() {
        if (this.get('status') === 0) {
            this.set('status', 2);
        } else {
            this.set('status', 0);    
        }

        this.save();
    }
});

export default TaskModel;