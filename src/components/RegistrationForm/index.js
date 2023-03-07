// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    submitted: false,
    para: '',
    first: '',
    last: '',
    para1: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {first, last} = this.state

    if (first === '' && last !== '') {
      this.setState({para: 'Required'})
    } else if (first !== '' && last === '') {
      this.setState({para1: 'Required'})
    } else if (first === '' && last === '') {
      this.setState({
        para: 'Required',
        para1: 'Required',
        submitted: false,
      })
    } else {
      this.setState(prevState => ({
        submitted: !prevState.submitted,
        para: '',
        para1: '',
        first: '',
        last: '',
      }))
    }
  }

  onChangeFirst = event => {
    this.setState({first: event.target.value})
  }

  onChangeLast = event => {
    this.setState({last: event.target.value})
  }

  onBlurEvent = event => {
    if (event.target.value === '') {
      this.setState({
        para: 'Required',
      })
    } else {
      this.setState({para: ''})
    }
  }

  onBlurEvent1 = event => {
    if (event.target.value === '') {
      this.setState({
        para1: 'Required',
      })
    } else {
      this.setState({para1: ''})
    }
  }

  renderForm = () => {
    const {para, para1} = this.state
    return (
      <div className="bg-container">
        <h1>Registration</h1>
        <form onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              id="firstName"
              type="text"
              className="inputEl"
              placeholder="First name"
              onChange={this.onChangeFirst}
              onBlur={this.onBlurEvent}
            />
            <p>{para}</p>
          </div>
          <div className="input-container">
            <label htmlFor="lastName">LAST NAME</label>
            <input
              id="lastName"
              type="text"
              onChange={this.onChangeLast}
              className="inputEl"
              placeholder="Last name"
              onBlur={this.onBlurEvent1}
            />
            <p>{para1}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  renderSuccess = () => (
    <form className="bg-container" onSubmit={this.onSubmitForm}>
      <h1>Registration</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="submit">Submit Another Response</button>
    </form>
  )

  render() {
    const {submitted} = this.state
    return <div>{submitted ? this.renderSuccess() : this.renderForm()}</div>
  }
}
export default RegistrationForm
