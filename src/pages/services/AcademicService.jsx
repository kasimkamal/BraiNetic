import researchWriting from '../../assets/images/services/academic-research/research-writing.png';
import presentationDesign from '../../assets/images/services/academic-research/presentation-design.png';
import studentProjects from '../../assets/images/services/academic-research/student-projects.png';
import examFiles from '../../assets/images/services/academic-research/exam-files.png';
import dataAnalysis from '../../assets/images/services/academic-research/data-analysis.png';
import proofreading from '../../assets/images/services/academic-research/proofreading.png';
import surveysTests from '../../assets/images/services/academic-research/surveys-tests.png';
import audioTranscription from '../../assets/images/services/academic-research/audio-transcription.png';

import FlipCard from '../../components/ui/FlipCard';
import CallToAction from '../../components/ui/CallToAction';

function AcademicService() {
  const academicCards = [
    {
        frontTitle: "التفريغ الصوتي الاحترافي",
        image: audioTranscription,
        contentText: "لأن الوقت والمعلومة لا ينتظران, نفرّغ تسجيلاتك الصوتية بدقة، ونحولها إلى ملفات جاهزة بصيغ Word أو Excel أو PDF\nللمحاضرات، المقابلات، والاجتماعات – نوفر لك نصوصًا منسقة، جاهزة للاستخدام فورًا.\nوفّر وقتك… واترك لنا مهمة التفريغ",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20التفريغ%20الصوتي%20الاحترافي%20،%20شكرًا"
    },
    {
        frontTitle: "إعداد العروض التقديمية الاحترافية",
        image: presentationDesign,
        contentText: "لا تُلقِ محاضرة.. قدّم تجربة\nعروضنا التقديمية تستهوي الجمهور من الشريحة الأولى وتنقلك من البيانات المعقدة إلى القصة المرئية الجذابة، نحوّل ملخصك إلى عرض تقديمي لا يُقاوم",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20إعداد%20العروض%20التقديمية%20الاحترافية%20،%20شكرًا"
    },
    {
        frontTitle: "تصميم استطلاعات الرأي والاختبارات",
        image: surveysTests,
        contentText: "لأن القرار الذكي يبدأ من معلومة دقيقة, نقدّم لك استطلاعات واختبارات مصممة باحتراف، تساعدك على جمع البيانات وتحليلها بسهولة\nسواء كنت تستهدف العملاء، الطلاب، أو الموظفين – نوفر أدوات قياس فعّالة، ونتائج قابلة للتحليل الواضح، اتخذ قرارات تستند إلى بيانات... لا إلى توقعات",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20تصميم%20استطلاعات%20الرأي%20والاختبارات%20،%20شكرًا"
    },
    {
        frontTitle: "إنجاز المشاريع الطلابية (البحثية والبرمجية)",
        image: studentProjects,
        contentText: "لا تُضيع فرصة التميز! مشاريعنا البحثية والبرمجية تحقق أعلى الدرجات بأسلوب مبتكر\nخصص وقتك للتحضير للامتحانات ودع لنا المهمة الصعبة",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20إنجاز%20المشاريع%20الطلابية،%20شكرًا"
    },
    {
        frontTitle: "إعداد الأسئلة الامتحانية والملفات الدراسية",
        image: examFiles,
        contentText: "لأن وقتك ثمين.. نحن نعدّ وننسق لك أسئلتك الامتحانية وملفاتك الدراسية بدقة واحترافية\nتفرغ لعملك ودع عناء التحضير علينا",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20إعداد%20الأسئلة%20الامتحانية%20والملفات%20الدراسية%20،%20شكرًا"
    },
    {
        frontTitle: "تدقيق لغوي وتقني",
        image: proofreading,
        contentText: "لأن الدقة تصنع الفارق.. نراجع نصوصك ووثائقك لغوياً وتقنياً لنقدمها بأبهى صورة\nتفرغ للإنجاز، ودع التفاصيل الدقيقة لخبرائنا",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20تدقيق%20لغوي%20وتقني%20،%20شكرًا"
    },
    {
        frontTitle: "كتابة وتحرير الأبحاث والمقالات",
        image: researchWriting,
        contentText: "نكتب نجاحك بكلمات دقيقة وأفكار أصلية\nنترجم طموحاتك الأكاديمية إلى أوراق بحثية متميزة، تُسلم في وقتك المحدد وبجودة تستحق الإشادة، لا تؤجل تميزك واتخذ القرار",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20كتابة%20وتحرير%20الأبحاث%20والمقالات%20،%20شكرًا"
    },
    {
        frontTitle: "تحليل البيانات الإحصائية للأبحاث",
        image: dataAnalysis,
        contentText: "لأن قوة معلوماتك تكمن في دقة نتائجها.. نحول بياناتك المعقدة إلى رؤية واضحة ونتائج موثوقة باستخدام أحدث التقنيات\nركز على استنتاجاتك، ودع تعقيدات التحليل لنا",
        buttonText: "اطلب الخدمة",
        buttonLink: "https://wa.me/963939650544?text=مرحبًا،%20أنا%20مهتم%20بالتعرّف%20على%20خدماتكم%20التقنية.%20هل%20يمكنكم%20تزويدي%20بمعلومات%20حول%20تحليل%20البيانات%20الإحصائية%20للأبحاث%20،%20شكرًا"
    },
    
    
];


  return (
    <>
      <div class="h-[25vh] flex items-center justify-center">
        <h2 class="text-2xl md:text-4xl font-bold text-center">
          <span class="p-2 bg-gradient-to-r from-white via-[hsl(42,37%,52%)] to-white bg-clip-text text-transparent">
          الخدمات الأكاديمية والبحثية          
          </span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-start p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full justify-center">
          {academicCards.map((card, index) => (
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

export default AcademicService;
