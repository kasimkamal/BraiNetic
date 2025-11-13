import './Contact.css';
import { useState } from 'react';
import Socials from '../components/ui/Socials';

function Contact() {
    const contactItems = [
  {
    icon: 'fa-envelope',
    text: 'brainetic.kh@gmail.com',
    label: 'البريد الإلكتروني',
    link: 'mailto:brainetic.kh@gmail.com',
  },
  {
    icon: 'fa-phone',
    text: '+963 939 650 544',
    label: 'رقم الهاتف',
    link: 'tel:+963939650544',
    ltr: true,
  },
//   {
//     icon: 'fa-map-marker-alt',
//     text: 'سوريا، حلب',
//     label: 'الموقع',
//     link: 'https://www.google.com/maps/search/?api=1&query=123+Innovation+Street+Tech+District+TD+12345',
//     external: true,
//   },
];


    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

        if (name === 'email') {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmailError(isValidEmail ? '' : 'يرجى إدخال بريد إلكتروني صالح');
        }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log — you can wire this to an API later
    console.log('Contact form submitted', form);
    alert('شكراً! تم إرسال رسالتك.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="gradient-heading">تواصل معنا</h1>
        <div className="contact-grid">
            {/* Right: the form */}
            <div className="form-column">
                <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    الاسم <span className="text-red-500 ml-1 font-bold">*</span>
                    <input name="name" value={form.name} onChange={handleChange} required />
                </label>

                <label>
                    البريد الإلكتروني <span className="text-red-500 ml-1 font-bold">*</span>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={`form-input ${emailError ? 'border-red-500' : ''}`}
                    />
                    </label>
                    {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                <label>
                    الرسالة <span className="text-red-500 ml-1 font-bold">*</span>
                    <textarea name="message" value={form.message} onChange={handleChange} required />
                </label>

                <button type="submit" className="cta-button">إرسال</button>
                </form>
            </div>

            {/* Left: contact info + socials */}
            <div className="contact-info">
                <p className="normal-text">للاستفسار عن الخدمات أو طلبها، تواصل معنا عبر الوسائل التالية</p>
                
                <div className="contact-items">
                    {contactItems.map((item, index) => (
                        <div className="contact-item" key={index}>
                        <a
                            href={item.link}
                            target={item.external ? '_blank' : '_self'}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                        >
                            <div className="icon-box">
                            <i className={`fas ${item.icon}`}></i>
                            </div>
                        </a>
                        <div className="contact-text">
                            <h4>{item.label}</h4>
                            <p className={`${item.ltr ? 'ltr text-left' : ''}`}>{item.text}</p>
                        </div>
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                <div className="socials-wrapper">
                <Socials />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
