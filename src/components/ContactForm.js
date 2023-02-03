import React, { useState } from 'react';
import '../styles/ContactForm.css';

export default function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    //If submit is sucessful, the success submit text will appear
    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        setValues({ ...values, name: event.target.value })
    }

    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const handleMessageInputChange = (event) => {
        setValues({ ...values, message: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.name && values.email && values.message) {
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {submitted && valid ? <div>Sucess! You sent a message!</div> : null}
                <input
                    disabled={submitted}
                    value={values.name}
                    onChange={handleNameInputChange}
                    type="text"
                    placeholder="Name"
                    name="name" />

                {submitted && !values.name ? <span>Please enter a name</span> : null}
                <input
                    disabled={submitted}
                    value={values.email}
                    onChange={handleEmailInputChange}
                    type="text"
                    placeholder="Email"
                    name="email" />

                {submitted && !values.email ? <span>Please enter an email address</span> : null}
                <input
                    disabled={submitted}
                    value={values.message}
                    onChange={handleMessageInputChange}
                    type="text"
                    placeholder="Type Your Message Here"
                    name="message" />

                {submitted && !values.message ? <span>Please enter a message</span> : null}
                <button type="submit">Submit</button>
            </form>
        </div>

    )

}


// export default ContactForm;