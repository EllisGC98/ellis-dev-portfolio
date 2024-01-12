import '../App.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

    const SERVICE_ID =  process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form.current,PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

    }
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-title">
                        <p>Contact</p>
                        <h3>Get in touch with me 
                            <br></br>👇🏻</h3>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="user_name">Name</label>
                            <input type="text" id="user_name" name="user_name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_email">Email</label>
                            <input type="email" id="user_email" name="user_email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                            <button type="submit">Submit</button>
                    </form>
            </div>
        </section>
    )
}

export default Contact;
