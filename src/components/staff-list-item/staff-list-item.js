import React, { Component } from 'react';
import './staff-list-item.css';

class StaffListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bonus: false,
      favorite: false
    }
  }

  handleBonus = () => {
    this.setState(({bonus}) => ({
      bonus: !bonus
    }))
  }

  handleFavorite = () => {
    this.setState(({favorite}) => ({
      favorite: !favorite
    }))
  }

  render() {
    const {name, salary, onDelete} = this.props;
    const {bonus, favorite} = this.state;

    let listItemClassLists = `list-group-item d-flex justify-content-between
    ${bonus ? 'increase' : ''} 
    ${favorite ? 'like' : ''}`

    return(
      <li 
      className={listItemClassLists}>
      <span 
        className="list-group-item-label"
        onClick={this.handleFavorite}>
        {name}
        </span>
      <input 
        type="text" 
        className="list-group-item-input" 
        defaultValue={salary + ' $'}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
            className="btn-cookie btn-sm "
            onClick={this.handleBonus}>
            <i className="fas fa-cookie"></i>
        </button>

        <button 
              type="button"
              className="btn-trash btn-sm "
              onClick={onDelete}
              >
            <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
    )
  }

}

export default StaffListItem;