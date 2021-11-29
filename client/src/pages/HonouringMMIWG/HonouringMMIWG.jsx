import "./HonouringMMIWG.scss";
import handleChange from "../../components/Utility/handleChange";
import { Component } from "react";

class HonouringMMIWG extends Component {
    state = {
        yourName: "",
        lovedOnesName: "",
        Nation: "",
        Gender: "",
        Community: "",
        Relationship: "",
        isRedirecting: false,
        nameRequired: false,
        lovedOneRequired: false
    }
    render () {
        return (
            <article className="honour">
                <h1 className="honour__title">Register a Loved One to be Honoured</h1>
                <section className="honour__wrapper">
                    <form onSubmit={this.handleSubmit} className="honour__form">
                        <label className="honour__label">
                            Your Name<span className="honour__star">*</span>
                        </label>
                        <input 
                            type="text" 
                            className={`honour__input ${
                                this.state.nameRequired ? "honour__input--invalid" : ""
                            }`} />
                    </form>
                </section>
            </article>
        )
    }
}

export default HonouringMMIWG;