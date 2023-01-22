import StaffListItem from "../staff-list-item/staff-list-item";
import './staff-list.css';

const StaffList = ({data}) => {
  const elements = data.map(item => {
    return (
      <StaffListItem 
        key={item.id} 
        name={item.name} 
        salary={item.salary}
        bonus={item.bonus}
        />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default StaffList;