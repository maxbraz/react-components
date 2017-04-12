const GroceryList = (props) => {
  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {props.items.map((item, i) => 
          <GroceryListItem key={i} item={item} />
        )}
      </ul>
    </div>
  );
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      important: false
    };
  }
  
  onListItemClick (event) {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover (event) {
    this.setState({
      important: !this.state.important
    });
  }

  render() {

    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.important ? 'bold' : 'normal'
    };

    return (
      <li 
        style={style} 
        onMouseEnter={this.onListItemHover.bind(this)} 
        onMouseLeave={this.onListItemHover.bind(this)} 
        onClick={this.onListItemClick.bind(this)}> {this.props.item} 
      </li>
    );
  }
}

let groceries = ['Asparagus', 'Broccoli', 'Carrots', 'Cauliflower', 'Celery', 'Corn', 'Cucumbers', 'Lettuce', 'Mushrooms', 'Onions', 'Peppers', 'Potatoes', 'Spinach', 'Squash', 'Zucchini', 'Tomatoes'];

ReactDOM.render(<GroceryList items={groceries} />, document.getElementById('app'));