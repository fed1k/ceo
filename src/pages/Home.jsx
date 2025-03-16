import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube } from "react-icons/fa";
import personImg from "../../public/home.png"
import { CheckCircle, Phone, Mail } from "lucide-react"
// import ContactForm from "../components/contactForm"

const Home = () => {
  return (
    <>
      <div className=" bg-[url(https://portm-html.vercel.app/assets/img/bg/hero_bg_2.svg)] px-5 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 px-2 md:grid-cols-2 gap-8 ">
          <div className="w-full py-6">
            <h1 className="md:text-3xl text-xl mt-10 font-bold uppercase text-[rgb(181_181_192)]">
              Добрый день!
            </h1>
            <p className="font-black text-[75px]"><span className="linear-gradent-firstname">Меня зовут Максим</span>  <span className="cs_gradient_border_text">Водянов</span></p>
            <div className="person-frame flex relative justify-center bg-[url(https://portm-html.vercel.app/assets/img/bg/hero_bg_3.svg)]">

              <img className="rounded-md person-animation w-[80%] h-[80%] lg:hidden my-4" src={personImg} alt="" />
              <div className="absolute flex gap-4 lg:hidden items-center py-2.5 px-4 rounded-[20px] top-1/2 right-0 custom-client-shadow">
                <p className="text-[#342ead] font-semibold text-4xl">9+</p>
                <div>
                  <p className="text-[#12103e] text-lg">Years</p>
                  <p className="text-[#767682]">Happy Clients</p>
                </div>
              </div>
            </div>
            <h2 className="md:text-3xl text-xl font-semibold mt-4">
              <span className="text-blue-600">Консультант по подбору персонала для автосервисов</span>
            </h2>
            <p className="text-gray-700 mt-4 font-jost text-justify">
              Максим Водянов – эксперт в подборе персонала для автосервисов, руководитель СТО с реальным опытом. Специализируется на поиске и отборе квалифицированных сотрудников, которые повышают качество сервиса и увеличивают прибыль бизнеса. Обладает глубокими знаниями отрасли, тщательно проверяет каждого кандидата и гарантирует замену, если специалист не подходит.
            </p>

            <div className="flex gap-6 mt-6 text-blue-700 text-xl">
              <FaFacebookF className="md:text-3xl text-2xl cursor-pointer " />
              <FaInstagram className="md:text-3xl text-2xl cursor-pointer " />
              <FaTelegramPlane className="md:text-3xl text-2xl cursor-pointer " />
              <FaWhatsapp className="md:text-3xl text-2xl cursor-pointer " />
              <FaYoutube className="md:text-3xl text-2xl cursor-pointer " />
            </div>

            <div className="flex gap-6 pt-10 items-center">
              <button className="md:px-5 font-jost px-3 cursor-pointer md:py-3 py-2 bg-[rgb(255_109_90)] text-white font-semibold text-lg rounded-xl">
                Оставить заявку
              </button>

              <a className="text-2xl decoration text-[#342ead] font-semibold font-jost" href="">Давай обсудим</a>
            </div>

          </div>
          <div className="hidden lg:flex relative person-frame bg-[url(https://portm-html.vercel.app/assets/img/bg/hero_bg_3.svg)] w-full h-full pt-10 justify-center items-center">
            <img className="rounded-md person-animation w-[400px] h-[600px] object-cover lg:block hidden" src={personImg} alt="" />
            <div className="absolute gap-4 flex items-center py-2.5 px-4 rounded-[20px] top-1/2 right-0 custom-client-shadow">
              <p className="text-[#342ead] font-semibold text-4xl">9+</p>
              <div>
                <p className="text-[#12103e] text-lg">Years</p>
                <p className="text-[#767682]">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <section id="problems" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Ваша проблема:</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-red-500 text-2xl mb-3">🛑</div>
                <p>Нужны надежные специалисты, но на рынке много непрофессионалов</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-red-500 text-2xl mb-3">🛑</div>
                <p>Текучка кадров мешает стабильности бизнеса</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-red-500 text-2xl mb-3">🛑</div>
                <p>Поиск сотрудников отнимает слишком много времени</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Мое решение:</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-500 text-2xl mb-3">✔</div>
                <p>Я сам из отрасли и знаю, кто вам нужен</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-500 text-2xl mb-3">✔</div>
                <p>Отбираю только проверенных специалистов с опытом</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-500 text-2xl mb-3">✔</div>
                <p>Гарантирую замену, если кандидат не подойдет</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="why-me" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">🔥 Почему выбирают меня, а не агентства?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <div className="text-blue-700 text-xl">🎯</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Специализация</h3>
                    <p className="text-gray-700">
                      Я работаю только с автосервисами – знаю отрасль и ее проблемы изнутри
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <div className="text-blue-700 text-xl">🔍</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Тщательный отбор</h3>
                    <p className="text-gray-700">Не просто ищу резюме, а проверяю реальный опыт</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <div className="text-blue-700 text-xl">💰</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ориентация на прибыль</h3>
                    <p className="text-gray-700">Помогаю не просто закрыть вакансию, а увеличить прибыль</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <div className="text-blue-700 text-xl">📈</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Экономия времени</h3>
                    <p className="text-gray-700">Экономлю ваше время – беру весь процесс на себя</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">🚀 Результат:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Вы не теряете клиентов из-за плохого сервиса</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Ваши сотрудники действительно работают на результат</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Ваш бизнес растет, а не буксует из-за кадровых проблем</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section id="positions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">👥 Кого я подбираю?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="text-xl font-bold mb-2">Автослесарь / Автомеханик</h3>
              <p className="text-gray-700 mb-4">💡 Качественный ремонт + Высокий уровень обслуживания клиентов</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-3">🛠</div>
              <h3 className="text-xl font-bold mb-2">Диагност / Автоэлектрик</h3>
              <p className="text-gray-700 mb-4">💡 Точная диагностика + Опыт работы с современными системами</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-3">📦</div>
              <h3 className="text-xl font-bold mb-2">Менеджер по продаже запчастей</h3>
              <p className="text-gray-700 mb-4">💡 Увеличение продаж + Оперативный подбор деталей</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="text-xl font-bold mb-2">Мастер-приемщик</h3>
              <p className="text-gray-700 mb-4">💡 Организация работы + Клиентоориентированный сервис</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2">Бухгалтер</h3>
              <p className="text-gray-700 mb-4">💡 Оптимизация финансов + Грамотное ведение учета</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">📌 Как я подбираю сотрудников?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 text-blue-700 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">Понимаю ваш бизнес и требования</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Анализирую, какой специалист вам нужен</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Определяю ключевые навыки кандидатов</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 text-blue-700 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">Нахожу и отбираю лучших</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Использую базу проверенных специалистов</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Размещаю объявления и провожу собеседования</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Проверяю рекомендации и опыт работы</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 text-blue-700 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">Проверяю компетенции</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Интервью + тестирование навыков</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Проверка на соответствие требованиям</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 text-blue-700 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">Передаю вам лучших кандидатов</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Организую собеседования</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Согласовываем условия работы</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium">
                🛠 Вы получаете проверенного специалиста, который приносит прибыль!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">💰 Стоимость услуг</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Автослесарь / Автомеханик</h3>
                <p className="text-3xl font-bold text-blue-700 mb-4">60-80 тыс. ₽</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Диагност / Автоэлектрик</h3>
                <p className="text-3xl font-bold text-blue-700 mb-4">90 тыс. ₽</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Менеджер, мастер-приемщик</h3>
                <p className="text-3xl font-bold text-blue-700 mb-4">50 тыс. ₽</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Бухгалтер</h3>
                <p className="text-3xl font-bold text-blue-700 mb-4">60 тыс. ₽</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">💡 Почему мои услуги стоят этих денег?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Вы не тратите время на поиск – я делаю все за вас</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Вы получаете сотрудника, который реально приносит деньги</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Вы не рискуете – у вас есть гарантия замены</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section id="terms" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">🤝 Условия сотрудничества</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">💳 Оплата поэтапно:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>30% предоплата – после заключения договора</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Оставшаяся сумма – после выхода сотрудника на работу</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Если специалист не найден в срок – предоплата возвращается</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">📌 Гарантия 3 месяца</h3>
              <p className="text-gray-700">Если сотрудник не справляется или увольняется – бесплатно найду замену.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">
                🚀 Почему мое предложение сильнее, чем работа с агентствами?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Специализация только на автосервисах – знаю отрасль изнутри</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Личный контроль качества – проверяю каждого кандидата</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Работа на результат – подбираю не просто "кого-то", а лучшего специалиста</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>Экономия вашего времени – вам не нужно заниматься подбором</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">📲 Готов помочь вам найти лучших сотрудников!</h2>
            <p className="text-xl mb-8">
              🔥 Оставьте заявку прямо сейчас, и я найду для вас профессионалов, которые будут приносить прибыль.
            </p>
            <p className="text-xl mb-12">📞 Свяжитесь со мной, и обсудим ваши задачи!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Максим Водянов</h3>
              <p>Эксперт по подбору персонала для автосервисов</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Все права защищены</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
