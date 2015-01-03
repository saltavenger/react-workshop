var CategorySelectOption = React.createClass({
    render: function() {
        return (
            <option value={this.props.item.get('id')}>{this.props.item.get('name')}</option>
        );
    }
});

var CategorySelect = React.createClass({
    getInitialState: function() {
        return {
            categories: []
        };
    },

    componentDidMount: function() {
        this.props.collection.on('sync', function() {
            this.setState({categories: this.props.collection});
        }.bind(this));
    },

    render: function() {
        var options = this.state.categories.map(function(item, i) {
            return (
                <CategorySelectOption item={item} key={i}/>
            );
        });

        return (
            <select className="form-control" ref="category">
                {options}
            </select>
        );
    }
});

export default CategorySelect;