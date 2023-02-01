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
        {id: 3, name: 'Roman', salary: 800, bonus: false, rise: false},
      ],
      term: '',
      filter: 'all'
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

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return{...item, [prop]: !item[prop]};
        }
        return item;
      })
    }))
  }

  searchStaff = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPosts = (items, filter) => {
    switch(filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000': 
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const staffCount = this.state.data.length;
    const staffOnbonus = this.state.data.filter(item => item.bonus).length;
    const visibleData = this.filterPosts(this.searchStaff(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          staffCount={staffCount}
          staffOnbonus={staffOnbonus}
        />
  
        <div className='search-panel'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
  
        <StaffList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          />
  
        <StaffAddForm addItem={this.addNewItem}/>
      </div>
    )
  }
}

export default App;