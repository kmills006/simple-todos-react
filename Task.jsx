Task = React.createClass({
  toggleChecked() {
    Tasks.update(this.props.task._id, {
      $set: { checked: ! this.prop.task.check },
    });
  },

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  },

  propTypes: {
    task: React.PropTypes.object.isRequired
  },

  render() {
    const taskClassName = this.props.checked ? 'checked' : '';

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly={true}
          checked={this.props.task.checked}
          onClick={this.toggleChecked} />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
});
