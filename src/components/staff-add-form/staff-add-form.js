import { Component } from 'react';
import './staff-add-form.css';

class StaffAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  formEmptyMessage = (event) => {
    event.preventDefault();
    alert('Please fill all field!')
  }

  render() {
    const {name, salary} = this.state;
    const {addItem} = this.props;
    const formFilled = this.state.name !== '' && this.state.salary !== '';

    return (
      <div className="app-add-form">
        <h3>Add new employees</h3>
        <form
            className="add-form d-flex">
            <input type="text"
                className="form-control new-post-label"
                placeholder="What his/her name?"
                name="name"
                value={name}
                onChange={this.onValueChange}
                />
            <input type="number"
                className="form-control new-post-label"
                placeholder="Salary $?"
                name="salary"
                value={salary}
                onChange={this.onValueChange}
                />
  
            <button 
              type="submit"
              className="btn btn-outline-light"
              onClick={
                formFilled ? (event) => {
                  addItem(event, name, salary);
                  this.setState({name: ''});
                  this.setState({salary: ''})
                } 
                : 
                (event) => this.formEmptyMessage(event)
              }
              >
                Add
            </button>
        </form>
      </div>
    )
  }
}

export default StaffAddForm;