import React from 'react';
import { 
  Globe, 
  MapPin, 
  Users, 
  Calendar, 
  Mic, 
  MessageCircle, 
  BookOpen, 
  UsersRound, 
  Brain, 
  Home, 
  AlertTriangle, 
  GraduationCap, 
  Languages, 
  Building2, 
  TrendingUp, 
  Search, 
  UserCheck, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4 leading-tight">
            Адаптация студентов по обмену <br />в корейском университете
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ff7f6a] to-[#ffd166] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Лонгитюдное социологическое исследование
          </p>
        </header>

        {/* Section 1: Research Context */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a]">1. Контекст исследования</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Map visualization */}
            <div className="relative bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <Globe className="w-16 h-16 text-[#1e3a8a] mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Международная студенческая мобильность</p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div className="w-8 h-8 bg-[#ff7f6a] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-[#ff7f6a] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-[#ff7f6a] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-[#1e3a8a]" />
                <MapPin className="w-10 h-10 text-[#ff7f6a]" />
              </div>
              <div className="text-center bg-[#1e3a8a] text-white py-2 px-4 rounded-lg">
                <p className="font-bold">Университет Дон-А</p>
                <p className="text-sm">Пусан, Южная Корея</p>
              </div>
            </div>

            {/* Right: Key numbers */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#ff7f6a]">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#ff7f6a]" />
                  <div>
                    <p className="text-3xl font-bold text-[#1e3a8a]">7</p>
                    <p className="text-sm text-gray-600">студентов опрошено</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#ffd166]">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-[#ffd166]" />
                  <div>
                    <p className="text-lg font-bold text-[#1e3a8a]">4 страны</p>
                    <p className="text-sm text-gray-600">Россия, Германия, Чили, Япония</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#1e3a8a]">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-[#1e3a8a]" />
                  <div>
                    <p className="text-lg font-bold text-[#1e3a8a]">Возраст: 20–25 лет</p>
                    <p className="text-sm text-gray-600">Студенты бакалавриата</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Research Method */}
        <section className="mb-16 bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#ff7f6a] rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a]">2. Методология исследования</h2>
          </div>

          <p className="text-center text-lg font-semibold text-gray-700 mb-6">
            Качественное лонгитюдное исследование — два замера в течение одного семестра
          </p>

          <div className="relative">
            {/* Timeline */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-2 h-2 bg-[#1e3a8a] rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
              <div className="w-full h-1 bg-gradient-to-r from-[#1e3a8a] via-[#ff7f6a] to-[#1e3a8a] absolute top-1/2 transform -translate-y-1/2"></div>
              <div className="w-2 h-2 bg-[#1e3a8a] rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10 mt-8">
              {/* Wave 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#1e3a8a]">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Волна 1</h3>
                  <p className="text-sm font-semibold text-[#ff7f6a]">Начало семестра</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="w-5 h-5 text-[#ff7f6a] flex-shrink-0 mt-1" />
                    <p className="text-sm">Первые интервью</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#ff7f6a] flex-shrink-0 mt-1" />
                    <p className="text-sm">Начальный адаптационный стресс</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Search className="w-5 h-5 text-[#ff7f6a] flex-shrink-0 mt-1" />
                    <p className="text-sm">Знакомство с системой</p>
                  </div>
                </div>
              </div>

              {/* Wave 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#1e3a8a]">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Волна 2</h3>
                  <p className="text-sm font-semibold text-[#ffd166]">Конец семестра</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="w-5 h-5 text-[#ffd166] flex-shrink-0 mt-1" />
                    <p className="text-sm">Повторные интервью</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-[#ffd166] flex-shrink-0 mt-1" />
                    <p className="text-sm">Результаты адаптации</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-[#ffd166] flex-shrink-0 mt-1" />
                    <p className="text-sm">Лонгитюдное сравнение</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Dimensions of Adaptation */}
        <section className="mb-16 bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border-2 border-yellow-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#ffd166] rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#1e3a8a]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a]">3. Измерения адаптации</h2>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Pyramid/Layered structure */}
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b5fbe] p-4 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-8 h-8" />
                    <div>
                      <p className="font-bold text-lg">Академическая адаптация</p>
                      <p className="text-sm opacity-90">Учебная система, требования, оценка</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#ff7f6a] to-[#ff9580] p-4 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <UsersRound className="w-8 h-8" />
                    <div>
                      <p className="font-bold text-lg">Социо-культурная адаптация</p>
                      <p className="text-sm opacity-90">Отношения, культурные нормы, коммуникация</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#ffd166] to-[#ffdb85] p-4 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8" />
                    <div>
                      <p className="font-bold text-lg">Психологическая адаптация</p>
                      <p className="text-sm opacity-90">Эмоции, стресс, благополучие</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#64748b] to-[#94a3b8] p-4 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <Home className="w-8 h-8" />
                    <div>
                      <p className="font-bold text-lg">Повседневная адаптация</p>
                      <p className="text-sm opacity-90">Общежитие, быт, ежедневные практики</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Main Adaptation Challenges */}
        <section className="mb-16 bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#ff7f6a] rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a]">4. Основные вызовы адаптации</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#ff7f6a] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages className="w-6 h-6 text-[#ff7f6a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-1">Языковые барьеры</h3>
                  <p className="text-sm text-gray-600">Трудности в коммуникации на корейском и английском языках</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#ff7f6a] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#ff7f6a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-1">Иная учебная система</h3>
                  <p className="text-sm text-gray-600">Непривычные методы преподавания и академические требования</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#ff7f6a] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UsersRound className="w-6 h-6 text-[#ff7f6a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-1">Культурная иерархия</h3>
                  <p className="text-sm text-gray-600">Конфуцианские нормы и иерархические отношения</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#ff7f6a] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#ff7f6a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-1">Правила общежития</h3>
                  <p className="text-sm text-gray-600">Строгие правила проживания и повседневные трудности</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Adaptation Dynamics */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-white p-8 rounded-2xl border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1e3a8a] to-[#ff7f6a] rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a]">5. Динамика адаптации — ключевой инсайт</h2>
          </div>

          <p className="text-center text-lg font-semibold text-gray-700 mb-8">
            Изменение во времени: от дезориентации к интеграции
          </p>

          <div className="grid md:grid-cols-3 gap-4 items-center">
            {/* Beginning */}
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-xl shadow-lg">
              <h3 className="text-center font-bold text-[#1e3a8a] mb-4 text-lg">Начало семестра</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#ff7f6a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Растерянность</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#ff7f6a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Неопределенность</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#ff7f6a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Учебный стресс</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#ff7f6a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Социальная изоляция</p>
                </div>
              </div>
            </div>

            {/* Transformation Arrow */}
            <div className="flex justify-center">
              <div className="text-center">
                <ArrowRight className="w-16 h-16 text-[#1e3a8a] mx-auto animate-pulse" />
                <p className="text-sm font-semibold text-[#ff7f6a] mt-2">Трансформация</p>
                <Clock className="w-8 h-8 text-gray-400 mx-auto mt-2" />
              </div>
            </div>

            {/* End */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl shadow-lg">
              <h3 className="text-center font-bold text-[#1e3a8a] mb-4 text-lg">Конец семестра</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Понимание системы</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Стабильные социальные связи</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Чувство принадлежности</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-1" />
                  <p className="text-sm">Эмоциональный комфорт</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Adaptation Strategies */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a]">6. Стратегии адаптации</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-7 h-7 text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-2 text-lg">Поиск информации</h3>
                  <p className="text-sm text-gray-600">Активное изучение правил, норм и возможностей университета</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <UsersRound className="w-7 h-7 text-[#ff7f6a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-2 text-lg">Поддержка сверстников</h3>
                  <p className="text-sm text-gray-600">Формирование дружеских связей с другими международными студентами</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-[#ffd166]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-2 text-lg">Переосмысление ожиданий</h3>
                  <p className="text-sm text-gray-600">Когнитивная переоценка ситуации и корректировка ожиданий</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e3a8a] mb-2 text-lg">Время и привыкание</h3>
                  <p className="text-sm text-gray-600">Постепенное освоение среды через опыт и практику</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Highlight Block */}
        <section className="bg-gradient-to-r from-[#1e3a8a] via-[#2d4fb8] to-[#1e3a8a] p-10 rounded-2xl shadow-2xl text-white">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-[#ffd166]" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Ключевой вывод</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed mb-6">
                <span className="font-bold text-[#ffd166]">Адаптация — это динамический процесс.</span> Несмотря на начальную неопределенность, студенты по обмену постепенно интегрируются в академическую и социальную среду через накопление опыта, социальную поддержку и взаимодействие с институциональными структурами.
              </p>
              <div className="flex justify-center gap-4 flex-wrap mt-8">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <p className="text-sm">опыт</p>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <p className="text-sm">время</p>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <p className="text-sm">социальная поддержка</p>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <p className="text-sm">институциональное взаимодействие</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Лонгитюдное социологическое исследование | Университет Дон-А, Пусан, Южная Корея | 2026</p>
        </footer>
      </div>
    </div>
  );
}
