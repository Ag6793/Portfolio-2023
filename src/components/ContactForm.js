import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form>
    );
  };
  
  export default ContactForm;


// import '../styles/ContactForm.css';

// export default function ContactForm() {
//     const [values, setValues] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     //If submit is sucessful, the success submit text will appear
//     const [submitted, setSubmitted] = useState(false);

//     const [valid, setValid] = useState(false);

//     const handleNameInputChange = (event) => {
//         setValues({ ...values, name: event.target.value })
//     }

//     const handleEmailInputChange = (event) => {
//         setValues({ ...values, email: event.target.value })
//     }

//     const handleMessageInputChange = (event) => {
//         setValues({ ...values, message: event.target.value })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if(values.name && values.email && values.message) {
//             setValid(true);
//         }
//         setSubmitted(true);
//     }

//     return (
//         <div className="form-container" id="form-block">
//             <form onSubmit={handleSubmit} className="form-container">
//                 {submitted && valid ? <div id="success">Success! You sent a message!</div> : null}
//                 <input
//                     className='text-block'
//                     disabled={submitted}
//                     value={values.name}
//                     onChange={handleNameInputChange}
//                     type="text"
//                     placeholder="Name"
//                     name="name" />

//                 {submitted && !values.name ? <span>Please enter a name</span> : null}
//                 <input
//                     className='text-block'
//                     disabled={submitted}
//                     value={values.email}
//                     onChange={handleEmailInputChange}
//                     type="text"
//                     placeholder="Email"
//                     name="email" />
//                     {/* Need to add email validation */}

//                 {submitted && !values.email ? <span>Please enter an email address</span> : null}
//                 <input
//                     id="message-block"
//                     className='text-block'
//                     disabled={submitted}
//                     value={values.message}
//                     onChange={handleMessageInputChange}
//                     type="text"
//                     placeholder="Type Your Message Here"
//                     name="message" />

//                 {submitted && !values.message ? <span>Please enter a message</span> : null}
//                 <button type="submit" id="submit">Submit</button>
//                 {/* when user submits message, the message will be sent via email with the user's name attached */}
//             </form>
//         </div>

//     )

// }


// export default ContactForm;