import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'All staff'},
    {name: 'rise', label: 'Staff for promotion'},
    {name: 'moreThen1000', label: 'Salary more than 1000$'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const classes = active ? 'btn-light' : 'btn-outline-light'

    return (
      <button 
        className={`btn ${classes} search-staff__btn`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
        >
          {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;