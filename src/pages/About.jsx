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
          بدأت براينتك بفكرة بسيطة، كثير من العملاء يضطرون للتعامل مع جهات متعددة لحل مشكلة واحدة. فأسسنا فريقًا متعدد التخصصات ليقدّم حلًا متكاملًا من أول خطوة وحتى ما بعد التسليم—بنية تحتية، أمن، محتوى، تصميم، تدريب، وتسويق—في منظومة واحدة متناغمة
          <br /><br />
          ما بدأ كفريق صغير شغوف بالتكنولوجيا والتعليم نما ليصبح مركزاً شاملاً للحلول. واليوم، نخدم الكثير من العملاء والشركات الناشئة التي تحتاج إلى بنية تحتية لتكنولوجيا المعلومات إلى الطلاب الذين يسعون إلى التفوق الأكاديمي، والشركات التي تسعى إلى تأسيس حضورها الرقمي
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="about-cards-row">
        <div className="about-card">
          <div className="card-icon"><i className="fas fa-globe fa-2x"></i></div>
          <h2 className="gradient-heading">رؤيتنا</h2>
          <p className="about-card-text">
            أن نكون الشريك الأكثر اعتمادًا في تحويل طريقة تعامل المؤسسات والأفراد مع التكنولوجيا والتعليم والخدمات الإبداعية. نحن نصور مستقبلًا يتمتع فيه كل عميل بإمكانية الوصول إلى حلول عالمية المستوى وشاملة تقود النجاح والابتكار تحت سقف واحد موثوق به
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon"><i className="fas fa-bullseye fa-2x"></i></div>
          <h2 className="gradient-heading">رسالتنا</h2>
          <p className="about-card-text">
            نعمل في BraiNetic على تمكين الشركات والطلاب والمهنيين من خلال دمج التكنولوجيا والإبداع والمعرفة بسلاسة في حلول شاملة. نحن نحول التحديات إلى فرص، ونقدم التميز من خلال مجموعة متنوعة من الخدمات التي تسد الفجوة بين الابتكار التقني والتعبير الإبداعي
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
