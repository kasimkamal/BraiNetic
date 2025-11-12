import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';
import CallToAction from '../components/ui/CallToAction';

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollToServices) {
      const el = document.querySelector('.services-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const services = [
    {
      icon: 'fas fa-network-wired',
      title: 'حلول الشبكات والبنية التحتية',
      path: '/services/network',
      items: [
        'تصميم وتركيب الشبكات المتكاملة',
        'أنظمة المراقبة والأمن (الكاميرات)',
        'برمجة وإدارة (السويتشات والراوترات)',
        'تقنيات حديثة للحماية من الاختراق',
        'خدمات الصيانة والدعم الفني الشامل',
      ],
    },
    {
      icon: 'fas fa-book',
      title: 'الخدمات الأكاديمية والبحثية',
      path: '/services/academic',
      items: [
        'كتابة وتحرير الأبحاث والمقالات',
        'إعداد العروض التقديمية الاحترافية',
        'إنجاز المشاريع الطلابية (البحثية والبرمجية)',
        'إعداد الأسئلة الامتحانية والملفات الدراسية',
        'تحليل البيانات الإحصائية',
        'تدقيق لغوي وتقني',
        'تصميم استطلاعات الرأي والاختبارات',
        'التفريغ الصوتي إلى ملفات Word أو Excel أو PDF',
      ],
    },
    {
      icon: 'fas fa-palette',
      title: 'التصمـيم والهـوية البـصـريـة',
      path: '/services/design',
      items: [
        'تصميم الهوية البصرية والشعارات (LOGO)',
        'إدارة وتصميم محتوى وسائل التواصل الاجتماعي',
        'تصميم البروشرورات وبطاقات العمل',
        'صناعة محتوى بصري متقن وفيديوهات إبداعية',
        'الطباعة والتغليف الاحترافي',
        'خدمات التسويق الرقمي',
      ],
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'التدريب والتطوير المهني والأكاديمي',
      path: '/services/training',
      items: [
        'تصميم السيرة الذاتية الاحترافية',
        'ورش عمل ودورات تدريبية',
        'برامج تدريب وإعداد موظفين',
      ],
    },
  ];

  const specials = [
    {
      icon: 'fas fa-cubes',
      title: 'حلول متكاملة',
      text: 'نقدم لك حلاً متكاملاً يجمع بين الخدمات التقنية والاستشارية والتدريبية، لنضمن لك تحقيق أهدافك بكفاءة وفعالية.',
    },
    {
      icon: 'fas fa-award',
      title: 'احترافية في الأداء',
      text: 'نسعى جاهدين لارتقاء مستوى الأداء إلى أعلى مستويات الجودة في كل ما نقدمه من خدمات.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'شراكة نحو التميز',
      text: 'نرتقي بك وبشركتك بخطوات مدروسة نحو التميز، لنستثمر إمكانياتك ونحقق الطموحات.',
    },
    {
      icon: 'fas fa-headset',
      title: 'دعم فني دائم',
      text: 'نقدم لك دعماً فنياً متواصلاً يضمن استمرارية أعمالك بكفاءة.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'تطوير دائم',
      text: 'لا نكتفي بتقديم الحلول، بل نحرص على تطوير خدماتنا بما يواكب متطلباتك ويحقق مستقبلك المهني.',
    },
    {
      icon: 'fas fa-cogs',
      title: 'خدمات مخصصة',
      text: 'لا نؤمن بالحلول الجاهزة، نصمم لك خدماتنا بما يتناسب مع احتياجاتك الخاصة ويحقق أهدافك.',
    },
  ];

  const teamMembers = [
  { icon: 'fa-microchip', text: 'الخبراء التقنيون' },
  { icon: 'fa-user-graduate', text: 'مستشارو التعليم' },
  { icon: 'fa-pen-nib', text: 'كتّاب ومحررون '},
  { icon: 'fa-language', text: 'مدققون لغويون' },
  { icon: 'fa-chart-line', text: 'محللي بيانات' },
  { icon: 'fa-palette', text: 'مصممين جرافيكس' },
  { icon: 'fa-chalkboard-teacher', text: 'مدربون معتمدون' },
  { icon: 'fa-bullhorn', text: 'مختصين تسويق رقمي' },
];


  return (
    <div>
    {/* Hero Section */}
      <div className="hero-content">
        <h2 className='white-heading'>Welcome to</h2>
        <h1 className="title">Brai<span>N</span>etic</h1>
        <h2 className="orange-heading">WHERE IDEAS CONNECT</h2>
      </div>

    {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-top">
              <div className="card-icon">
                <i className={`${service.icon} fa-2x`}></i>
              </div>
              <div className="text-container">
                <h2 className="orange-heading">{service.title}</h2>
                <ul className="normal-text">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="check">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* CTA button */}
            <Link to={service.path} className="cta-button">اكتشف المزيد</Link>  
          </div>
        ))}
      </div>
    
    {/* What is special about us */}
      <div className="special-section">
        <div class="special-content">
            <h1 className="glow-heading">ما يميز براينتك</h1>
          <div className="special-grid">
            {specials.map((special, index) => (
            <div className="special-item" key={index}>
              <div className="special-icon-wrapper">
                <div className="circle-ping-ring"></div>
                <div className="circle-pulse-ring"></div>
                <div className="special-icon">
                  <i className={`${special.icon} rotating-icon`}></i>
                </div>
              </div>
              <div className="special-text">
                <h2 className="orange-heading">{special.title}</h2>
                <p className="normal-text">{special.text}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      
    {/* our Team */}
      <div className="team-section">
        <div className="team-content">
          <h2 className="glow-heading">فريقنا</h2>
          <h2 className="subtitle">فريق متكامل يجمع خبرات تقنية وإبداعية</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                {/* Content wrapped in a relative container to layer above ::after */}
                <div className="team-card-content">
                  <i className={`fas ${member.icon}`}></i>
                  <p className="team-normal-text">{member.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />







    </div>    
  );
}

export default Home;