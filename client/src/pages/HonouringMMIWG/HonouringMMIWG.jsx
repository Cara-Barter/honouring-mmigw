import "./HonouringMMIWG.scss";
import Button from "../../components/Button/Button";
import { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import logo from '../../assets/logo/MMIWG-logo.png';

class HonouringMMIWG extends Component {
    state = {
        yourName: "",
        lovedOnesName: "",
        nation: "",
        gender: "",
        community: "",
        relationship: "",
        isRedirecting: false,
        nameRequired: false,
        lovedOneRequired: false,
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
        //check if all required fields are filled
        if (
        !this.state.yourName ||
        !this.state.lovedOnesName 
        ) {
            return false;
        }
        return true;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.yourName) {
          this.setState({
            nameRequired: true,
          });
        }
        if (!this.state.lovedOnesName) {
          this.setState({
            lovedOneRequired: true,
          });
        }

    const newHonour = {
        yourName: this.state.yourName,
        lovedOnesName: this.state.lovedOnesName,
        nation: this.state.nation,
        gender: this.state.gender,
        community: this.state.community,
        relationship: this.state.relationship,
    }
    console.log('newHonour', newHonour);

    if(this.isFormValid()) {
        axios
            .post(`${process.env.REACT_APP_API_URL}/honouring/`, newHonour)
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

    render () {
        if(this.state.isRedirecting) {
            return <Redirect to="/" />;
        }
        return (
            <article className="honour">
                <div className="honour__container">
                    <h1 className="honour__title">Register a Loved One to be Honoured</h1>
                    <section className="honour__wrapper">

                        <form onSubmit={this.handleSubmit} className="honour__form">
                            
                            <label className="honour__label">
                                Your Name<span className="honour__star">*</span>
                            </label>
                            <input
                                className={`honour__input ${
                                    this.state.nameRequired ? "honour__input--invalid" : ""
                                }`}
                                type="text"
                                name="yourName"
                                onChange={this.handleChange}
                                value={this.state.yourName}
                                placeholder="Your Name"
                            />
                            {this.state.nameRequired && (
                                <div className='honour__error-container'>
                                    <p className='honour__error-text'>
                                        This field is required
                                    </p>
                                </div>
                            )}

                            <label className="honour__label">
                                Your Loved Ones Name<span className="honour__star">*</span>
                            </label>
                            <input
                                className={`honour__input ${
                                    this.state.lovedOneRequired ? "honour__input--invalid" : ""
                                }`}
                                type="text"
                                name="lovedOnesName"
                                onChange={this.handleChange}
                                value={this.state.lovedOnesName}
                                placeholder="Your Loved Ones Name"
                            />
                            {this.state.lovedOneRequired && (
                                <div className='honour__error-container'>
                                    <p className='honour__error-text'>
                                        This field is required
                                    </p>
                                </div>
                            )}

                            <label className="honour__label">
                                Their Nation
                            </label>
                            <input
                                className='honour__input' 
                                type="text"
                                name="nation"
                                onChange={this.handleChange}
                                value={this.state.nation}
                                placeholder="Their Nation"
                            />

                            <label className="honour__label">
                                Their Gender
                            </label>
                            <input
                                className='honour__input'
                                type="text"
                                name="gender"
                                onChange={this.handleChange}
                                value={this.state.gender}
                                placeholder="Their Gender"
                            />

                            <label className="honour__label">
                                Their Community
                            </label>
                            <input
                                className='honour__input'
                                type="text"
                                name="community"
                                onChange={this.handleChange}
                                value={this.state.community}
                                placeholder="Their Community"
                            />

                            <label className="honour__label">
                                Your Relationship
                            </label>
                            <input
                                className='honour__input'
                                type="text"
                                name="relationship"
                                onChange={this.handleChange}
                                value={this.state.relationship}
                                placeholder="eg. sister, cousin, friend"
                            />

                            <div className='honour__btns'>
                                
                                <Button 
                                    className='honour__btn'
                                    type='submit'
                                    text='Submit'
                                />
                                <Link to='/' className='honour__link'>
                                    <Button 
                                        className='honour__btn'
                                        text='Cancel'
                                    />
                                </Link>
                            </div>
                        </form>
                        <img 
                        className="honour__logo" 
                        src={logo} 
                        alt='art of woman in red dress with arms outstretched' />
                    </section>
                </div>
            </article>
        )
    }
}

export default HonouringMMIWG;