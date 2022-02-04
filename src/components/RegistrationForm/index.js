// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    secondname: '',
    blurfirst: false,
    blursecond: false,
    isFormSubmit: false,
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeSecondName = event => {
    this.setState({secondname: event.target.value})
  }

  onBlurFirst = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({blurfirst: !isValidFirstName})
  }

  onBlurSecond = () => {
    const isValidLastName = this.validateLastName()
    this.setState({blursecond: !isValidLastName})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmit: true})
    } else {
      this.setState({
        isFormSubmit: false,
        blurfirst: !isValidFirstName,
        blursecond: !isValidLastName,
      })
    }
  }

  validateFirstName = () => {
    const {firstname} = this.state

    return firstname !== ''
  }

  validateLastName = () => {
    const {secondname} = this.state

    return secondname !== ''
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmit: !prevState.isFormSubmit,
      firstname: '',
      secondname: '',
    }))
  }

  render() {
    const {
      firstname,
      secondname,
      blurfirst,
      blursecond,
      isFormSubmit,
    } = this.state
    const firstnameClassInput = blurfirst
      ? 'background-blur-class'
      : 'input-class'
    const secondnameClassInput = blursecond
      ? 'background-blur-class'
      : 'input-class'

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Registration</h1>
          {isFormSubmit ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-image"
              />
              <p>Submitted Successfully</p>
              <button
                type="button"
                className="submit-button"
                onClick={this.onClickSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <label htmlFor="first" className="label-class">
                FIRST NAME
              </label>
              <input
                id="first"
                placeholder="First name"
                className={firstnameClassInput}
                value={firstname}
                onChange={this.onChangeFirstName}
                onBlur={this.onBlurFirst}
              />
              {blurfirst && <p className="error-msg">Required</p>}
              <label htmlFor="second" className="label-class">
                LAST NAME
              </label>
              <input
                id="second"
                placeholder="Second name"
                className={secondnameClassInput}
                value={secondname}
                onChange={this.onChangeSecondName}
                onBlur={this.onBlurSecond}
              />
              {blursecond && <p className="error-msg">Required</p>}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
