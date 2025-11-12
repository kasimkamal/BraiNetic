import logoDesign from '../../assets/images/services/branding-design/logo-design.png';
import socialContent from '../../assets/images/services/branding-design/social-content.png';
import brochuresCards from '../../assets/images/services/branding-design/brochures-cards.png';
import visualContent from '../../assets/images/services/branding-design/visual-content.png';
import printingPackaging from '../../assets/images/services/branding-design/printing-packaging.png';
import digitalMarketing from '../../assets/images/services/branding-design/digital-marketing.png';

import FlipCard from '../../components/ui/FlipCard';
import CallToAction from '../../components/ui/CallToAction';

function DesignService() {
  const designCards = [
    {
        frontTitle: "تصميم الشعارات",
        image: logoDesign,
        contentText: "نقدم لك تصميم شعارات فريدة تعكس هوية علامتك التجارية وتساعدك على التميز في السوق",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20تصميم%20الشعارات%20،%20شكرًا"
    },
    
    {
        frontTitle: "تصميم البروشرورات وبطاقات العمل",
        image: brochuresCards,
        contentText: "نضمن لك تصميمات جذابة تلبي متطلبات العصر وتعزز هويتك",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20تصميم%20البروشرورات%20وبطاقات%20العمل%20،%20شكرًا"
    },
    
    {
        frontTitle: "الطباعة والتغليف الاحترافي",
        image: printingPackaging,
        contentText: "نقدم لك حلاً متكاملاً من الفكرة إلى المنتج النهائي",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20الطباعة%20والتغليف%20الاحترافي%20،%20شكرًا"
    },
    {
        frontTitle: "إدارة محتوى وسائل التواصل الاجتماعي",
        image: socialContent,
        contentText: "حوّل رؤيتك الرقمية إلى واقع مؤثر مع محتوى جذاب يجذب جمهورك",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20إدارة%20محتوى%20وسائل%20التواصل%20الاجتماعي%20،%20شكرًا"
    },
    {
        frontTitle: "صناعة محتوى بصري متقن",
        image: visualContent,
        contentText: "نحوّل أفكارك إلى محتوى بصري يبقى في الذاكرة",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20صناعة%20محتوى%20بصري%20متقن%20،%20شكرًا"
    },
    {
        frontTitle: "التسويق الرقمي",
        image: digitalMarketing,
        contentText: "نترجم أهدافك التجارية إلى استراتيجيات رقمية ناجحة",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20التسويق%20الرقمي%20،%20شكرًا"
    }
];

  return (
    <>
      <div class="h-[25vh] flex items-center justify-center">
        <h2 class="text-2xl md:text-4xl font-bold leading-[1.2] text-center">
          <span class="bg-gradient-to-r from-white via-[hsl(42,37%,52%)] to-white bg-clip-text text-transparent">
          خدمات التصميم والهوية البصرية          
          </span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-start p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full justify-center">
          {designCards.map((card, index) => (
            <FlipCard
              key={index}
              frontTitle={card.frontTitle}
              image={card.image}
              contentText={card.contentText}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
            />
          ))}
        </div>
        
      </div>
      <CallToAction/>
    </>
  );
}

export default DesignService;
