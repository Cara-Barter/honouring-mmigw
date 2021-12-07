import "./EventRegistration.scss";
import Button from "../../components/Button/Button";
import { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import logo from '../../assets/logo/MMIWG-logo.png';

class EventRegistration extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    nation: "", 
    gender: "",
    survivor: null,
    age: null,
    dedicate: "",
    shirtSize: null,
    phone: "",
    organization: "",
    isRedirecting: false,
    nameRequired: false,
    emailRequired: false,
    addressRequired: false,
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
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      province: this.state.province,
      postalCode: this.state.postalCode, 
      country: this.state.country,
      nation: this.state.nation, 
      gender: this.state.gender,
      survivor: this.state.survivor,
      age: this.state.age,
      dedicate: this.state.dedicate,  
      shirtSize: this.state.shirtSize,     
      phone: this.state.phone,
      organization: this.state.organization
    };

    if (this.isFormValid()) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/participants/`, newParticipant)
        .then((response) => {
            console.log(response);
          this.setState({
            register: response.data,
            isRedirecting: true
          });
          alert("registration successful");
        })
        .catch((error) => {
          console.log(error);
        });
    } 
  };

  render() {
    if (this.state.isRedirecting) {
      return <Redirect to="/" />;
    }
    return (
      <article className="event">
          <div className="event__container">
            <h1 className="event__title">Honouring MMIGW Event Registration</h1>
            <section className="event__wrapper">
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
                    {this.state.nameRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}
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
                    {this.state.nameRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}

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
                        placeholder="Email"
                    />
                    {this.state.emailRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}

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
                        placeholder="Street Address"
                    />
                    {this.state.addressRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}
                    <input
                        className='event__input' 
                        type="text"
                        name="address2"
                        onChange={this.handleChange}
                        value={this.state.address2}
                        placeholder="Apt, Suite, etc"
                    />
                    <input
                        className={`event__input ${
                            this.state.addressRequired ? "event__input--invalid" : ""
                        }`}
                        type="text"
                        name="city"
                        onChange={this.handleChange}
                        value={this.state.city}
                        placeholder="City"
                    />
                    {this.state.addressRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}
                    <input
                        className={`event__input ${
                            this.state.addressRequired ? "event__input--invalid" : ""
                        }`}
                        type="text"
                        name="province"
                        onChange={this.handleChange}
                        value={this.state.province}
                        placeholder="Province"
                    />
                    {this.state.addressRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}
                    <input
                        className={`event__input ${
                            this.state.addressRequired ? "event__input--invalid" : ""
                        }`}
                        type="text"
                        name="postalCode"
                        onChange={this.handleChange}
                        value={this.state.postalCode}
                        placeholder="Postal Code"
                    />
                    {this.state.addressRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}
                    <input
                        className={`event__input ${
                            this.state.addressRequired ? "event__input--invalid" : ""
                        }`}
                        type="text"
                        name="country"
                        onChange={this.handleChange}
                        value={this.state.country}
                        placeholder="Country"
                    />
                    {this.state.addressRequired && (
                        <div className='event__error-container'>
                            <p className='event__error-text'>
                                This field is required
                            </p>
                        </div>
                    )}

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
                        Gender
                    </label>
                    <input
                        className='event__input'
                        type="text"
                        name="gender"
                        onChange={this.handleChange}
                        value={this.state.gender}
                        placeholder="Gender"
                    />

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
                        <option value=''disabled>Please Select</option>
                        <option value='Supporter'>Supporter</option>
                        <option value='Residential School Survivor'>Residential School Survivor</option>
                        <option value='Day School Survivor'>Day School Survivor</option>
                        <option value='Intergenerational Survivor'>Intergenerational Survivor</option>
                        <option value='MMIWG Survivor'>MMIWG Survivor</option>
                        <option value='MMIWG Family Member'>MMIWG Family Member</option>
                    </select>   

                    <label className="event__label">
                            Age<span className="event__star">*</span>
                    </label>
                    <select
                        className={`event__input ${
                            this.state.ageRequired ? "event__input--invalid" : ""
                        }`}
                        type='text'
                        name="age"
                        id="age"
                        onChange={this.handleChange}
                        defaultValue=''
                    >
                        <option value=''disabled>Please Select</option>
                        <option value='0-19'>0-19</option>
                        <option value='20-39'>20-39</option>
                        <option value='40-59'>40-59</option>
                        <option value='60-74'>60-74</option>
                        <option value='75+'>75+</option>
                    </select>   

                    <label className="event__label">
                        Dedication
                    </label>
                    <input
                        className='event__input'
                        type="text"
                        name="dedicate"
                        onChange={this.handleChange}
                        value={this.state.dedicate}
                        placeholder="Is there someone you're dedicating your walk to?"
                    />

                    <label className='event__label'>
                        Shirt Size<span className="event__star">*</span>
                    </label>
                    <select
                        className={`event__input ${
                            this.state.shirtRequired ? "event__input--invalid" : ""
                        }`}
                        type='text'
                        name="shirtSize"
                        id="shirtSize"
                        onChange={this.handleChange}
                        defaultValue=''
                    >
                        <option value=''disabled>Please Select</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='XL'>XL</option>
                        <option value='XXL'>XXL</option>
                        <option value='XXXL'>XXXL</option>
                        <option value='XXXXL'>XXXL</option>
                    </select>

                    <label className="event__label">
                        Phone Number
                    </label>
                    <input
                        className='event__input'
                        type="text"
                        name="phone"
                        onChange={this.handleChange}
                        value={this.state.phone}
                        placeholder="Phone"
                    />

                    <label className="event__label">
                        Organization
                    </label>
                    <input
                        className='event__input' 
                        type="text"
                        name="organization"
                        onChange={this.handleChange}
                        value={this.state.organization}
                        placeholder="Organization"
                    />

                    <div className='event__btns'>
                        <Link to='/' className='event__link'>
                            <Button 
                                className='event__btn'
                                text='Cancel'
                            />
                        </Link>
                        <Button 
                            className='event__btn'
                            type='submit'
                            text='Submit'
                        />
                    </div>
                </form>
                <img 
                className="event__logo" 
                src={logo} 
                alt='art of woman in red dress with arms outstretched' />
            </section>
        </div>
    </article>
    );
    }
}

export default EventRegistration;
