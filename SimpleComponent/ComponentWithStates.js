var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },

  render: function () {
    return (
      <div>
        <input type="text" value={this.state.count} />
        <button
          onClick={() => {
          this.setState({
            count: ++this.state.count
          });
        }}>+</button>
      </div>
    )
  }
});