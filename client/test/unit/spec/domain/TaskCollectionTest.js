var TaskCollection = require('../../../../babelified/domain/TaskCollection.js');

describe('TaskCollection', function() {
    'use strict';

    beforeEach(function() {
        spyOn($, 'ajax');

        this.taskCollection = new TaskCollection();

        this.taskCollection.add([{
            id: 1,
            name: 'Cook Dinner',
            category: 1,
            status: 0
        },{
            id: 2,
            name: 'Clean out inbox',
            category: 2,
            status: 0
        },{
            id: 3,
            name: 'Play ping pong',
            category: 2,
            status: 2
        }]);
    });

    it('removeCompleted()', function() {
        expect(this.taskCollection.length).toBe(3);

        this.taskCollection.removeCompleted();

        expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining({
            type: 'DELETE',
            url: 'http://localhost:3000/tasks/3'
        }));

        expect(this.taskCollection.length).not.toBe(3);
        expect(this.taskCollection.length).toBe(2);
    });

});