import React from "react";
import {WithContext as ReactTags} from 'react-tag-input'

function getInitialState() {
  return {
    tags: [ {id: 1, text: "Apples"}, {id: 2, text: "Cakes"} ],
    suggestions: ["Banana", "Mango", "Pear", "Apricot"]
  };
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  componentDidMount() {
    console.log('test');
  }

  componentWillUnmount() {
    console.log('test');
  }

  handleDelete(i) {
      var tags = this.state.tags;
      tags.splice(i, 1);
      this.setState({tags: tags});
  }

  handleAddition(tag) {
      var tags = this.state.tags;
      tags.push({
          id: tags.length + 1,
          text: tag
      });
      this.setState({tags: tags});
  }

  handleDrag(tag, currPos, newPos) {
      var tags = this.state.tags;

      // mutate array
      tags.splice(currPos, 1);
      tags.splice(newPos, 0, tag);

      // re-render
      this.setState({ tags: tags });
  }

  /**
   * @return {object}
   */
  render() {

    var tags = this.state.tags;
    var suggestions = this.state.suggestions;

    return (
      <div className="container">
        <ReactTags tags={tags}
            suggestions={suggestions}
            handleDelete={this.handleDelete.bind(this)}
            handleAddition={this.handleAddition.bind(this)}
            handleDrag={this.handleDrag.bind(this)}
        />
      </div>
    );
  }

}

export default App;
