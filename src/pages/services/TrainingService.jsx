import cvDesign from '../../assets/images/services/training-development/cv-design.png';
import workshops from '../../assets/images/services/training-development/workshops.png';
import employeeTraining from '../../assets/images/services/training-development/employee-training.png';

import FlipCard from '../../components/ui/FlipCard';
import CallToAction from '../../components/ui/CallToAction';

function TrainingService() {
  const trainingCards = [
    {
        frontTitle: "تصميم السير الذاتية الاحترافية",
        image: cvDesign,
        contentText: "ثقتكم غايتنا، نصنع لكم سير ذاتية احترافية مصممة بدقة وإتقان، لتحويل طموحاتكم إلى فرص حقيقية. استشارتكم مجانية لتبدأوا مشروعكم بثقة",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا، أنا مهتم بالتعرّف على خدماتكم التقنية. هل يمكنكم تزويدي بمعلومات حول تصميم السير الذاتية الاحترافية، شكرًا"
    },
    {
        frontTitle: "ورش عمل ودورات تدريبية",
        image: workshops,
        contentText: "حتى لا تكون المهارات التقنية عائقاً أمام طموحك، نحن نبني لك جسراً من المعرفة التطبيقية يوصلك للنجاح. انطلق بشغفك البحثي والعملي، ودعنا نساعدك في اكتساب المهارات اللازمة",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا، أنا مهتم بالتعرّف على خدماتكم التقنية. هل يمكنكم تزويدي بمعلومات حول ورش العمل والدورات التدريبية، شكرًا"
    },
    {
        frontTitle: "برامج تدريب موظفين",
        image: employeeTraining,
        contentText: "لأن الاستثمار الأهم هو في فريق عملك، نصمّم برامج تدريبية تحول طاقاتهم الكامنة إلى إنتاجية حقيقية ونتائج ملموسة. ركّز على قيادة نموّ شركتك، ودع مهمة تطوير فريقك لنا",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا، أنا مهتم بالتعرّف على خدماتكم التقنية. هل يمكنكم تزويدي بمعلومات حول برامج تدريب الموظفين، شكرًا"
    }
];

  return (
    <>
      <div class="h-[25vh] flex items-center justify-center">
        <h2 class="text-2xl md:text-4xl font-bold text-center">
          <span class="p-2 bg-gradient-to-r from-white via-[var(--gold)] to-white bg-clip-text text-transparent">
          خدمات التدريب والتطوير          
          </span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-start p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full justify-center">
          {trainingCards.map((card, index) => (
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

export default TrainingService;
