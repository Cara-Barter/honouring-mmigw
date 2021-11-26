import "./EventRegistration.scss";
import { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class EventRegistration extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    country: "",
    postalCode: "",
    nation: "",
    walkingFor: "",
    gender: "",
    age: null,
    survivor: null,
    shirtSize: null,
    isRedirecting: false,
    nameRequired: false,
    emailRequired: false,
    addressRequired: false,
    phoneRequired: false,
    ageRequired: false,
    shirtRequired: false,
  };

  // create change handler for all inputs
  handleChange = (e) => {
    //   console.log('in handlechange', e.target.name, e.target.value);
    const eRequired = e.target.name + "Required";
    this.setState({
      [e.target.name]: e.target.value,
      [eRequired]: false,
    });
  };

  isFormValid = () => {
    // check if all required fields are filled
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.address1 ||
      !this.state.city ||
      !this.state.province ||
      !this.state.postalCode ||
      !this.state.country ||
      !this.state.age ||
      !this.state.shirtSize
    ) {
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.firstName) {
      this.setState({
        nameRequired: true,
      });
    }
    if (!this.state.lastName) {
      this.setState({
        nameRequired: true,
      });
    }
    if (!this.state.address1) {
      this.setState({
        addressRequired: true,
      });
    }
    if (!this.state.city) {
      this.setState({
        cityRequired: true,
      });
    }
    if (!this.state.age) {
      this.setState({
        ageRequired: true,
      });
    }
    if (!this.state.shirtSize) {
      this.setState({
        shirtRequired: true,
      });
    }
    const newParticipant = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      organization: this.state.organization,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      province: this.state.province,
      country: this.state.country,
      postalCode: this.state.postalCode,
      nation: this.state.nation,
      walkingFor: this.state.walkingFor,
      gender: this.state.gender,
      age: this.state.age,
      survivor: this.state.survivor,
      shirtSize: this.state.shirtSize,
    };
    console.log("hello", newParticipant);

    if (this.isFormValid()) {
    //   axios
    //     .post(`${process.env.REACT_APP_API_URL}/register/`, newParticipant)
    //     .then((response) => {
    //       this.setState({
    //         register: response.data,
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
      alert("registration successful");
      this.setState({ isRedirecting: true });
    } else {
      alert("failed to upload, please check for errors in your form");
    }
  };

  render() {
    if (this.state.isRedirecting) {
      return <Redirect to="/" />;
    }
    return (
      <article className="event">
        <h1 className="event__title">Honouring MMIGW Event Registration</h1>
        <form className="event__form" onSubmit={this.handleSubmit}>
            <label className="event__label">
                Name<span className="event__star">*</span>
            </label>
            <input
                className={`event__input ${
                    this.state.nameRequired ? "event__input--invalid" : ""
                }`}
                type="text"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
                placeholder="First Name"
            />
            <input
                className={`event__input ${
                    this.state.nameRequired ? "event__input--invalid" : ""
                }`}
                type="text"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
                placeholder="Last Name"
            />

            <label className="event__label">
                Email<span className="event__star">*</span>
            </label>
            <input
                className={`event__input ${
                    this.state.emailRequired ? "event__input--invalid" : ""
                }`}
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder="email"
            />

            <label className="event__label">
                Address<span className="event__star">*</span>
            </label>
            <input
                className={`event__input ${
                    this.state.addressRequired ? "event__input--invalid" : ""
                }`}
                type="text"
                name="address1"
                onChange={this.handleChange}
                value={this.state.address1}
                placeholder="street address"
            />
            <input
                className='event__input' 
                type="text"
                name="address2"
                onChange={this.handleChange}
                value={this.state.address2}
                placeholder="apt, suite, etc"
            />
            <input
                className={`event__input ${
                    this.state.addressRequired ? "event__input--invalid" : ""
                }`}
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.city}
                placeholder="city"
            />
            <input
                className={`event__input ${
                    this.state.addressRequired ? "event__input--invalid" : ""
                }`}
                type="text"
                name="province"
                onChange={this.handleChange}
                value={this.state.province}
                placeholder="province"
            />
            <input
                className={`event__input ${
                    this.state.addressRequired ? "event__input--invalid" : ""
                }`}
                type="text"
                name="postalCode"
                onChange={this.handleChange}
                value={this.state.postalCode}
                placeholder="postal code"
            />
            <input
                className={`event__input ${
                    this.state.addressRequired ? "event__input--invalid" : ""
                }`}
                type="text"
                name="country"
                onChange={this.handleChange}
                value={this.state.country}
                placeholder="country"
            />

            <label className="event__label">
                Phone Number<span className="event__star">*</span>
            </label>
            <input
                className={`event__input ${
                    this.state.phoneRequired ? "event__input--invalid" : ""
                }`}
                type="number"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                placeholder="area code"
            />

            <label className="event__label">
                Nation
            </label>
            <input
                className='event__input' 
                type="text"
                name="nation"
                onChange={this.handleChange}
                value={this.state.nation}
                placeholder="Nation"
            />

            <label className="event__label">
                Dedication
            </label>
            <input
                className='event__input'
                type="text"
                name="walkingFor"
                onChange={this.handleChange}
                value={this.state.walkingFor}
                placeholder="Is there someone you're dedicating your walk to?"
            />

            <label className="event__label">
                Gender
            </label>
            <input
                className='event__input'
                type="text"
                name="gender"
                onChange={this.handleChange}
                value={this.state.gender}
                placeholder="gender"
            />
            <div className='event__wrapper'>
                <label className="event__label">
                    Age<span className="event__star">*</span>
                </label>
                <input
                    className={`event__input ${
                        this.state.ageRequired ? "event__input--invalid" : ""
                    }`}
                    type="radio"
                    name="age"
                    onChange={this.handleChange}
                    value="0-19"
                /> 0-19
                <input
                    className={`event__input ${
                        this.state.ageRequired ? "event__input--invalid" : ""
                    }`}
                    type="radio"
                    name="age"
                    onChange={this.handleChange}
                    value="20-59"
                /> 20-59
                <input
                    className={`event__input ${
                        this.state.ageRequired ? "event__input--invalid" : ""
                    }`}
                    type="radio"
                    name="age"
                    onChange={this.handleChange}
                    value="60+"
                /> 60+
            </div>
            <label className="event__label">
                Survivor
            </label>
            <select
                className='event__input'
                type='text'
                name="survivor"
                id="survivor"
                onChange={this.handleChange}
                defaultValue=''
            >
                <option value='' disabled>Please Select</option>
                <option value='Residential School Survivor'>Residential School Survivor</option>
                <option value='Day School Survivor'>Day School Survivor</option>
                <option value='Intergenerational Survivor'>Intergenerational Survivor</option>
                <option value='MMIWG Survivor'>MMIWG Survivor</option>
                <option value='MMIWG Family Member'>MMIWG Family Member</option>
            </select>

            <label className={`event__input ${
                    this.state.shirtRequired ? "event__input--invalid" : ""
                }`}>
                Shirt Size
            </label>
            <select
                className='event__input'
                type='text'
                name="shirtSize"
                id="shirtSize"
                onChange={this.handleChange}
                defaultValue=''
            >
                <option value='' disabled>Please Select</option>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='XL'>XL</option>
                <option value='XXL'>XXL</option>
                <option value='XXXL'>XXXL</option>
            </select>
            <div className='event__btns'>
                <Link to='/' className='event__link'>
                    <button className='event__btn'>
                        Cancel
                    </button>
                </Link>
                <button 
                    className='event__btn'
                    type='submit'
                    disabled={!this.isFormValid()}
                >
                    Submit
                </button>
            </div>
        </form>
      </article>
    );
    }
}

export default EventRegistration;
