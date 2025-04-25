import {
  CheckCircle,
  Code,
  Palette,
  Clock,
  Headphones,
  Globe,
} from "lucide-react";

const WhyHireMe = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
            Pourquoi Me Choisir ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un partenaire de confiance pour vos projets web au Maroc
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-text-light dark:text-text-dark">
                  Expertise en React.js
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  أبني تطبيقات ويب حديثة وسريعة باستخدام React.js، مع التركيز
                  على الأداء العالي.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-text-light dark:text-text-dark">
                  تصميم UI/UX جذاب
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  أصمم واجهات مستخدم جميلة وسهلة الاستخدام لضمان تجربة مميزة
                  لزوار موقعك.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-text-light dark:text-text-dark">
                  التزام بالمواعيد
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  أحترم المواعيد النهائية لتسليم مشروعك في الوقت المحدد دون
                  تأخير.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-text-light dark:text-text-dark">
                  دعم مستمر
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  أقدم دعما مستمرا وصيانة مجانية لمدة شهرين بعد تسليم المشروع.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-text-light dark:text-text-dark">
                  خدمة محلية فالمغرب
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  كوني فالمغرب، أفهم احتياجات السوق المحلي وأقدم حلولا تناسب
                  العملاء المغاربة.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Icons Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Code className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                React.js Expert
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Palette className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                UI/UX Design
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Clock className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                On-Time Delivery
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Headphones className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                Continuous Support
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Globe className="w-8 h-8 text-primary-light dark:text-primary-dark" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                Local Expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
