import React from 'react';
import './About.css';
import CallToAction from '../components/ui/CallToAction';

function About() {
  // Values data
  const values = [
    {
      icon: 'fas fa-users fa-2x',
      title: 'العميل أولاً',
      text: 'نفهم احتياجك ونبني حوله الحل المخصص',
    },
    {
      icon: 'fas fa-cubes fa-2x',
      title: 'التكامل والمرونة',
      text: 'نحن نؤمن بقوة الحلول المتصلة، وليس الخدمات المستقلة',
    },
    {
      icon: 'fas fa-handshake fa-2x',
      title: 'الثقة والأمانة',
      text: 'بناء شراكات دائمة من خلال التواصل الصادق والتسليم الموثوق به',
    },
    {
      icon: 'fas fa-graduation-cap fa-2x',
      title: 'التعلم المستمر',
      text: 'النمو المتسارع عبر التكيف المستمر مع متطلبات السوق والابتكار التقني',
    },
    {
      icon: 'fas fa-star fa-2x',
      title: 'التميز في التنفيذ',
      text: 'الجودة ليست مجرد هدف - إنها معيارنا في كل ما نقوم به',
    },
  ];

  return (
    <>
    <div className="about-container">
      {/* Story Section */}
      <div className="about-story-section">
        <div className="card-icon"><i className="fa-solid fa-book-open fa-2x"></i></div>
        <h2 className="gradient-heading">قصتنا</h2>
        <p className="about-story-text">
          بدأت براينتك بفكرة بسيطة، الكثير من العملاء يضطرون للتعامل مع جهات متعددة لحل مشكلة واحدة. فأسسنا فريقًا متعدد التخصصات ليقدّم حلًا متكاملًا من أول خطوة وحتى ما بعد التسليم—بنية تحتية، أمن، محتوى، تصميم، تدريب، وتسويق—في منظومة واحدة متناغمة
          <br /><br />
          ما بدأ كفريق صغير شغوف بالتكنولوجيا والتعليم تطور ليصبح مركزاً شاملاً للحلول. واليوم، نخدم الكثير من العملاء والشركات الناشئة التي تحتاج إلى بنية تحتية لتكنولوجيا المعلومات إلى الطلاب الذين يسعون إلى التفوق الأكاديمي، والشركات التي تسعى إلى تأسيس حضورها الرقمي
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="about-cards-row">
        <div className="about-card">
          <div className="card-icon"><i className="fas fa-globe fa-2x"></i></div>
          <h2 className="gradient-heading">رؤيتنا</h2>
          <p className="about-card-text">
            في BraiNetic، نطمح إلى أن نكون الشريك الأول الذي تعتمد عليه المؤسسات والأفراد في إعادة تعريف علاقتهم بالتكنولوجيا، التعليم، والخدمات الإبداعية. رؤيتنا أن يتمكن كل عميل من الوصول إلى حلول متكاملة، عالية الجودة، وملهمة للنجاح والابتكار — تحت مظلة واحدة تجمع بين الثقة، الاحترافية، والتجدد المستمر.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon"><i className="fas fa-bullseye fa-2x"></i></div>
          <h2 className="gradient-heading">رسالتنا</h2>
          <p className="about-card-text">
            إعادة تعريف التمكين من خلال دمج التكنولوجيا، الإبداع، والمعرفة في حلول متكاملة تخدم الشركات، الطلاب، والمهنيين. نحن لا نكتفي بحل التحديات، بل نحولها إلى فرص للنمو والتميّز. عبر مجموعة خدمات متنوعة، نربط بين الابتكار التقني والتعبير الإبداعي، لنمنح عملاءنا تجربة موثوقة ترتقي بطموحاتهم وتفتح أمامهم آفاقًا
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values-section">
        <div className="card-icon"><i className="fa-solid fa-gem fa-2x"></i></div>
        <h2 className="gradient-heading">قيمنا</h2>
        <div className="about-values-row">
          {values.map((val, idx) => (
            <div className="about-value-card" key={idx}>
              <div className="card-icon"><i className={`${val.icon}`}></i></div>
              <h3 className="about-value-title">{val.title}</h3>
              <p className="about-value-text">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <CallToAction />
    </>
  );
}

export default About;
