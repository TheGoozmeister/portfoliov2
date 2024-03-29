import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import contactTexts from "./text.ts";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/index.tsx";

function Contact(): JSX.Element {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [mailSent, setMailSent] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // Nouvel état pour la case à cocher
    const actualLanguage = useSelector((state: RootState) => state.language.language);
    const texts = contactTexts[actualLanguage];
    const [showCheckboxMessage, setShowCheckboxMessage] = useState(false); // Nouvel état pour afficher ou masquer le message de la case à cocher
    
    async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!isChecked) {
            setShowCheckboxMessage(true); // Afficher le message demandant à l'utilisateur de cocher la case
            return;
        }
        emailjs.init('Xt-2ubovHZVuoZIXp');
        emailjs.send("service_undax5e", "template_2e2j9j7", {
            to_email: "vincent.pastor.pro@gmail.com",
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message + formData.email + formData.name,
        })
        .then(function () {
            console.log('SUCCESS')
            setMailSent(true);
        })
        .catch(function (error) {
            console.log('failed', error);
        })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;
        if (name === "isChecked" && event.target instanceof HTMLInputElement) {
            setIsChecked(event.target.checked);
            setShowCheckboxMessage(false); // Masquer le message lorsque la case est cochée
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    return (
        <div>
            <div className="mainContainer">
                <h2>{texts.title}</h2>
                <div className="rgpd">{texts.rgpd}</div>
                {mailSent ?
                    <div className="rgpd">{texts.confirmed}</div>
                    :
                    <form className="form" onSubmit={sendEmail}>
                        <div className="form__name">
                            <label className="label" htmlFor="name">{texts.name}</label>
                            <input className="input" type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form__email">
                            <label className="label" htmlFor="email">{texts.mail}</label>
                            <input className="input" type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form__message">
                            <label className="label" htmlFor="message">{texts.message}</label>
                            <textarea className="input" name="message" id="message" value={formData.message} onChange={handleChange} />
                        </div>
                        <div className="form__checkbox">
                            <input type="checkbox" id="agreeCheckbox" name="isChecked" checked={isChecked} onChange={handleChange} className="form__checkbox__box"/>
                            <label htmlFor="agreeCheckbox" className="form__checkbox__label">{texts.check}</label>
                            {showCheckboxMessage && <div className="form__checkbox__agree">{texts.checkboxMessage}</div>}
                        </div>
                        <div className="retBut">
                            <NavLink to={"/projects"} className="return">
                                <i className="fa-solid fa-arrow-left"></i>
                            </NavLink>
                            <button className="button form__button" type="submit" id="sendBtn">{texts.button}</button>
                        </div>
                    </form>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
