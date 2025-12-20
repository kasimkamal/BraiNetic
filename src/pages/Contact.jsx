import './Contact.css';
import Socials from '../components/ui/Socials';

function Contact() {
    const contactItems = [
  {
    icon: 'fa-regular fa-envelope',
    text: 'brainetic.kh@gmail.com',
    label: 'البريد الإلكتروني',
    link: 'mailto:brainetic.kh@gmail.com',
  },
  {
    icon: 'fab fa-whatsapp',
    text: '+963 939 650 544',
    label: 'رقم الهاتف',
    link: 'https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20-الخدمة%20المطلوبة-%20،%20شكرًا',
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

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="gradient-heading">تواصل معنا</h1>
        <div className="contact-info">
          <p className="normal-text">للاستفسار عن الخدمات أو طلبها، تواصل معنا عبر الوسائل التالية</p>

          <div className="contact-items">
            {contactItems.map((item, index) => (
              <div className="contact-item" key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-box">
                    <i className={item.icon}></i>
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
          <p className="normal-text">تابعونا على منصات التواصل الاجتماعي</p>
           <Socials />
        </div>
      </div>
    </div>
  );
}

export default Contact;
