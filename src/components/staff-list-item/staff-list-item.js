import React, { useState } from 'react';
import './staff-list-item.css';

const StaffListItem = ({name, salary, bonus}) => {
  const [isBonus, setBonus] = useState(bonus);

  return (
    <li 
      className={`list-group-item d-flex justify-content-between
        ${
          isBonus ? 'increase' : ''
        }`}>
      <span className="list-group-item-label">{name}</span>
      <input 
        type="text" 
        className="list-group-item-input" 
        defaultValue={salary + ' $'}/>
      <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
              className="btn-cookie btn-sm "
              onClick={() => {
                  !isBonus ? setBonus(true) : setBonus(false)
                }}>
              <i className="fas fa-cookie"></i>
          </button>

          <button 
                type="button"
                className="btn-trash btn-sm ">
              <i className="fas fa-trash"></i>
          </button>
          <i 
            className="fas fa-star">
            </i>
      </div>
    </li>
  )
}

export default StaffListItem;