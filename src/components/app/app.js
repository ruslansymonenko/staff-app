import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

function App () {
  return (
    <div className="app">
      <AppInfo/>

      <div className='search-panel'>
        <SearchPanel/>
        <AppFilter/>
      </div>

      <StaffList/>

      <StaffAddForm/>
    </div>
  )
}

export default App;