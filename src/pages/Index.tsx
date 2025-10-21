import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    "Создание собственного проекта",
    "Профориентация",
    "Работа в команде",
    "Лидерство",
    "Публичное выступление"
  ];

  const goals = [
    "Повышение финансовой грамотности детей и молодежи города Новороссийска",
    "Пропаганда и развитие предпринимательства, предпринимательского мышления",
    "Развитие потенциала школьников",
    "Развитие социальной направленности детей и молодежи",
    "Объединение общей целью семей"
  ];

  const nominations = [
    {
      title: "Мой первый проект",
      icon: "Lightbulb"
    },
    {
      title: "Мой бизнес",
      icon: "TrendingUp"
    },
    {
      title: "Социальный проект",
      icon: "Heart"
    },
    {
      title: "Семейный бизнес",
      icon: "Users"
    },
    {
      title: "Приз зрительских симпатий",
      icon: "Award"
    }
  ];

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-white py-12 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary rounded-full opacity-15 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent rounded-full opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/a8432a8c-0f5e-4f3f-b69c-e7c69be94c71.png"
                alt="Планета BALANCE"
                className="w-full"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Первая сеть детских бизнес-школ в Южном Федеральном округе
              </h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  onClick={scrollToRegistration}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 shadow-lg"
                >
                  Участвовать в конкурсе
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-muted via-white to-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/ef65bbe5-bad8-4b25-8508-e23bd82bb3af.png"
                alt="Юный предприниматель"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Добрый день!</h2>
              <div className="space-y-4 text-lg">
                <p>
                  В рамках образовательной программы бизнес-школы Планета «BALANCE», 
                  приглашаем Вас и Вашего ребенка <strong className="text-accent">принять участие в масштабном 
                  и перспективном конкурсе «Юный предпринимательЪ»</strong>, первой в Краснодарском крае 
                  премии для школьников по предпринимательству.
                </p>
                <p className="text-foreground">
                  Мероприятие ориентировано на детей <strong>от 7 до 17 лет (включительно)</strong>. 
                  Участвовать может каждый у кого есть бизнес-идея, в том числе и родители 
                  (в номинации «Семейный бизнес»)
                </p>
                <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-primary font-bold text-xl mb-2">
                    Для участия в конкурсе требуется только проект подготовленный ребенком 
                    и НИКАКОЙ ОПЛАТЫ
                  </p>
                </div>
                <div className="bg-accent/10 rounded-xl p-4">
                  <p className="font-semibold">
                    <span className="text-accent">Немного цифр:</span> В Новороссийске конкурс проводится уже в <strong>5-й</strong> раз!
                  </p>
                  <p className="mt-2">За предыдущие годы <strong>91</strong> школьник в возрасте от <strong>7 до 17</strong> лет стали 
                  <strong className="text-accent"> лауреатами</strong> конкурса. <strong>209 проектов</strong> было представлено в очной защите, 
                  а количество поданных заявок превысило <strong>600</strong>. Объём инвестиций направленных в детские проекты составил</p>
                  <p className="text-3xl font-bold text-accent mt-2">более 1 млн 140 тыс.руб.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">
                В рамках премии дети смогут получить такие навыки:
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 bg-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src="https://cdn.poehali.dev/files/4898d2fd-49ed-481c-86ff-17f485db4582.png"
                alt="Навыки участников"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/92fad429-0e8b-43b9-8d22-a8251c46978f.png"
                alt="Цель конкурса"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Цель конкурса:</h2>
              <div className="space-y-3">
                {goals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-lg">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <img 
          src="https://cdn.poehali.dev/files/61ad1d16-0eff-48ab-bf60-7df37e6e4f58.png"
          alt="Номинации"
          className="w-full h-auto"
        />
      </section>

      <section id="registration" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Участвуй в конкурсе!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Заполни форму регистрации и начни свой путь к успеху
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <a 
                href="https://lcvr.net/YzPR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button 
                  size="lg" 
                  className="w-full max-w-md bg-primary hover:bg-primary/90 text-white font-semibold text-xl py-8 shadow-lg"
                >
                  <Icon name="FileText" className="mr-2" size={24} />
                  Заполнить форму регистрации
                </Button>
              </a>
              
              <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
                Участвуя в конкурсе, вы даёте согласие на обработку персональных данных в соответствии 
                с Федеральным законом от 27.07.2006 № 152-ФЗ "О персональных данных". 
                Данные используются исключительно для организации конкурса и не передаются третьим лицам.
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Info" className="text-primary flex-shrink-0" size={24} />
                  <div className="text-left">
                    <h4 className="font-bold mb-2">Требования к участникам</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Возраст: 7-17 лет (включительно)</li>
                      <li>• Наличие бизнес-идеи или проекта</li>
                      <li>• Готовность презентовать проект</li>
                      <li>• Согласие родителей на участие</li>
                      <li>• Участие бесплатное, без оплаты</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/90">
                <p className="flex items-center gap-2">
                  <Icon name="Globe" size={18} />
                  <a href="https://lcvr.net/YzPR" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    lcvr.net/YzPR
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  balanceschool_nov
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Организатор</h3>
              <p className="text-white/90">
                Детская бизнес-школа "Планета BALANCE"
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">География</h3>
              <p className="text-white/90">
                Первая сеть детских бизнес-школ в Южном Федеральном округе
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>© 2024 Планета BALANCE. Все права защищены.</p>
            <p className="mt-2">
              Персональные данные участников обрабатываются в соответствии с ФЗ-152 
              и используются исключительно для целей проведения конкурса.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;