
import networkDesign from '../../assets/images/services/networking-infrastructure/network-design.png';
import securitySystems from '../../assets/images/services/networking-infrastructure/security-systems.png';
import switchRouterManagement from '../../assets/images/services/networking-infrastructure/switch-router-management.png';
import aiSecurity from '../../assets/images/services/networking-infrastructure/ai-security.png';
import technicalSupport from '../../assets/images/services/networking-infrastructure/technical-support.png';
import FlipCard from '../../components/ui/FlipCard';
import CallToAction from '../../components/ui/CallToAction';

function NetworkService() {
  const networkCards = [
    {
        frontTitle: "أنظمة المراقبة والأمن (الكاميرات)",
        image: securitySystems,
        contentText: "التكنولوجيا تراقب وأنت تستمتع بسلامتك\nحوّل بيئتك إلى منطقة آمنة مع أنظمة مراقبة ذكية تمنحك تحذيرات فورية ومشاهدة حية دون عناء",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20أنظمة%20المراقبة%20والأمن%20(الكاميرات)%20،%20شكرًا"
    },
    {
        frontTitle: "تصميم وبناء شبكات الحاسب المحلية",
        image: networkDesign,
        contentText: "ثقتكم غايتنا، نصنع لكم شبكات متكاملة موثوقة مصممة بدقة وإتقان، لتحويل اتصالات مؤسستك إلى نقطة قوة دائمة لا مكان للعشوائية فيها\nاستشارتكم مجانية لتبدأوا مشروعكم بثقة",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20تصميم%20وتركيب%20الشبكات%20،%20شكرًا"
    },
    
    {
        frontTitle: "برمجة وإدارة\n(السويتشات والراوترات)",
        image: switchRouterManagement,
        contentText: "ندير أجهزة، نبني أنظمة\nلتحويل بنيتك التحتية إلى أقوى نقاط قوتك لتحقيق أتمتة مطلقة وسيطرة غير مسبوقة",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20برمجة%20وإدارة%20(السويتشات%20والراوترات)%20،%20شكرًا"
    },
    {
        frontTitle: "تقنيات حديثة للحماية من الاختراق",
        image: aiSecurity,
        contentText: "لا تقبل بحماية عادية\nجرب حماية متطورة تعتمد على الذكاء الاصطناعي وتحليل السلوك، أمانك يستحق الأفضل دائماً",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20تقنيات%20حديثة%20للحماية%20من%20الاختراق%20،%20شكرًا"
    },
    {
        frontTitle: "خدمات الصيانة والدعم الفني الشامل",
        image: technicalSupport,
        contentText: "كن شريكنا التقني الدائم، نحن ندير تقنيتكم، وأنتم تديرون أعمالكم\nاستمتع بعقود صيانة ودعم فني شهرية أو سنوية، واحصل على ميزة مراقبة الشبكات والأجهزة عن بعد لحل المشاكل لحظياً",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20خدمات%20الصيانة%20والدعم%20الفني%20الشامل%20،%20شكرًا"
    }
  ];

  return (
    <>
    <div class="h-[25vh] flex items-center justify-center">
      <h2 class="text-2xl md:text-4xl font-bold text-center">
        <span class="p-2 bg-gradient-to-r from-white via-[var(--gold)] to-white bg-clip-text text-transparent">
          خدمات الشبكات والبنية التحتية
        </span>
      </h2>
    </div>

    <div className="flex flex-col items-center justify-start p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full justify-center">
        {networkCards.map((card, index) => (
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
export default NetworkService;