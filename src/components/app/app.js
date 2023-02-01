import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: 'Ruslan', salary: 1500, bonus: true, rise: false},
        {id: 2, name: 'Olga', salary: 2000, bonus: false, rise: true},
        {id: 3, name: 'Roman', salary: 1200, bonus: false, rise: false},
      ]
    }
  }

  makeId = () => {
    return `id${Math.random().toString(16).slice(2)}`;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  addNewItem = (event, name, salary) => {
    event.preventDefault();

    const newItem = {
      id: this.makeId(),
      name: name,
      salary: salary,
      bonus: false,
      rise: false
    }

    this.setState(({data}) => {
      return {
        data: [].concat(data, [newItem])
      }
    })
  }

  onToggleBonus = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return{...item, bonus: !item.bonus};
        }
        return item;
      })
    }))
  }

  inToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return{...item, rise: !item.rise};
        }
        return item;
      })
    }))
  }

  render() {
    const staffCount = this.state.data.length;
    const staffOnbonus = this.state.data.filter(item => item.bonus).length;

    return (
      <div className="app">
        <AppInfo
          staffCount={staffCount}
          staffOnbonus={staffOnbonus}
        />
  
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <StaffList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleBonus={this.onToggleBonus}
          onToggleRise={this.inToggleRise}
          />
  
        <StaffAddForm addItem={this.addNewItem}/>
      </div>
    )
  }
}

export default App;