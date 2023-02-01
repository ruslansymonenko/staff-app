import './app-info.css'

const AppInfo = ({staffCount, staffOnbonus}) => {
  return (
    <div className="app-info">
      <h1>Staff app</h1>
      <h2>All employees: {staffCount}</h2>
      <h2>Employees will get bonus: {staffOnbonus}</h2>
    </div>
  )
}

export default AppInfo;