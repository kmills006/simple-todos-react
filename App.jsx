App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      tasks: Tasks.find({}, {
        sort: { createdAt: -1 }
      }).fetch(),
    };
  },

  toggleChecked() {
    Tasks.update(this.props.task._id, {
      $set: { checked: ! this.prop.task.check },
    });
  },

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  },

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  handleSubmit(e) {
    e.preventDefault();

    const text = React.findDOMNode(this.refs.textInput).value.trim();

    const taskId = Tasks.insert({
      text: text,
      createdAt: moment()._d,
    });

    React.findDOMNode(this.refs.textInput).value = '';
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <form className="new-task" onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add a new task"
            />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});
