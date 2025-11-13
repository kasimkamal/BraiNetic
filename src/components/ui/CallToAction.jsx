import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

function CallToAction({ link = "/contact" }) {
  return (
    <div className="call-to-action-section">
      <div className="call-to-action-content">
        {/* title */}
        <div className="cta-title-section">
          <h2 className="cta-title">              
            هل أنت مستعد لتجربة التميز مع برانيتك؟
          </h2>
          <div className="cta-dividers">
            <div className="divider divider-1"></div>
            <div className="divider divider-2"></div>
            <div className="divider divider-3"></div>
          </div>
        </div>

        <h2 className="subtitle">
          عندما تختار براينتك، فأنت لا توظّف مجرد مقدّم خدمة، بل تتعاون مع فريق ملتزم بنجاحك<br />
          نحن ندرك أنه في عالم اليوم سريع الوتيرة، تحتاج إلى أكثر من مجرد حلول<br />
          فأنت بحاجة إلى شريك يفهم الصورة الأكبر
        </h2>

        <Link to={link} className="contact-button">
          تواصل معنا
          <div className="hoverEffect">
            <div></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
