import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

function App () {
  const data = [
    {id: 1, name: 'Ruslan', salary: 1500, bonus: false},
    {id: 2, name: 'Olga', salary: 2000, bonus: false},
    {id: 3, name: 'Roman', salary: 1200, bonus: false},
  ]

  return (
    <div className="app">
      <AppInfo/>

      <div className='search-panel'>
        <SearchPanel/>
        <AppFilter/>
      </div>

      <StaffList data={data}/>

      <StaffAddForm/>
    </div>
  )
}

export default App;