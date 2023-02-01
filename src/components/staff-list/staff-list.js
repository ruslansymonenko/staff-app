import StaffListItem from "../staff-list-item/staff-list-item";
import './staff-list.css';

const StaffList = ({data, onDelete, onToggleBonus, onToggleRise}) => {
  const elements = data.map(item => {
    return (
      <StaffListItem 
        key={item.id} 
        name={item.name} 
        salary={item.salary}
        bonus={item.bonus}
        rise={item.rise}
        onDelete={() => onDelete(item.id)}
        onToggleBonus={() => onToggleBonus(item.id)}
        onToggleRise={() => onToggleRise(item.id)}
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