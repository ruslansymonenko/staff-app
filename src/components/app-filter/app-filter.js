import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
        className="btn btn-light search-staff__btn"
        type="button">
          All staff
      </button>
      <button 
        className="btn btn-outline-light search-staff__btn"
        type="button">
          Staff for promotion
      </button>
      <button 
        className="btn btn-outline-light search-staff__btn"
        type="button">
          Salary more than 1000$
      </button>
    </div>
  )
}

export default AppFilter;