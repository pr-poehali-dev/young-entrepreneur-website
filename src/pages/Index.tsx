import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const nominations = [
    {
      title: "Лучшая бизнес-идея",
      description: "Самый креативный и реализуемый проект",
      icon: "Lightbulb"
    },
    {
      title: "Социальный предприниматель",
      description: "Проект, помогающий обществу",
      icon: "Heart"
    },
    {
      title: "Эко-инициатива",
      description: "Забота об экологии и природе",
      icon: "Leaf"
    },
    {
      title: "Цифровые технологии",
      description: "Инновации и IT-решения",
      icon: "Rocket"
    }
  ];

  const stages = [
    {
      date: "15 ноября - 30 ноября",
      title: "Приём заявок",
      description: "Регистрация участников и подача проектов"
    },
    {
      date: "1 декабря - 10 декабря",
      title: "Отборочный этап",
      description: "Экспертная оценка поданных проектов"
    },
    {
      date: "15 декабря",
      title: "Финал и награждение",
      description: "Презентация лучших проектов и вручение призов"
    }
  ];

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-accent to-secondary py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <Badge className="mb-4 bg-white text-primary hover:bg-white/90">
                Бесплатный городской конкурс
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Юный предприниматель
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Покажи свою бизнес-идею, получи ценный опыт и выиграй призы! 
                Конкурс для детей, которые хотят изменить мир.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToRegistration}
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 shadow-lg"
                >
                  Подать заявку
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/208adb51-1b01-42d5-b2bf-88a64ef17409/files/590df5a6-4023-41ff-a643-6c75ce034d05.jpg"
                alt="Дети-предприниматели"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              О конкурсе
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Юный предприниматель" — это уникальная возможность для детей попробовать себя в роли настоящих бизнесменов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ценные призы</h3>
                <p className="text-muted-foreground">
                  Победители получат дипломы, призы и сертификаты на обучение
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Менторство</h3>
                <p className="text-muted-foreground">
                  Участники получат консультации от опытных предпринимателей
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Опыт и навыки</h3>
                <p className="text-muted-foreground">
                  Развитие предпринимательского мышления и лидерских качеств
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Номинации конкурса
            </h2>
            <p className="text-xl text-muted-foreground">
              Выбери направление, которое тебе ближе всего
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {nominations.map((nomination, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={nomination.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{nomination.title}</h3>
                      <p className="text-muted-foreground">{nomination.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Этапы конкурса
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой путь от идеи до победы
            </p>
          </div>

          <div className="relative">
            {stages.map((stage, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {index + 1}
                    </div>
                    {index < stages.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-primary/30"></div>
                    )}
                  </div>
                  
                  <Card className="flex-1 border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-secondary">{stage.date}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
                      <p className="text-muted-foreground text-lg">{stage.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="registration" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Участвуй в конкурсе!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Заполни форму регистрации и начни свой путь к успеху
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/208adb51-1b01-42d5-b2bf-88a64ef17409/files/a292f2d2-185b-4d7a-b436-62994bcdf237.jpg"
                alt="Юный предприниматель"
                className="rounded-xl mb-6 w-full max-w-md mx-auto"
              />
              
              <a 
                href="https://forms.yandex.ru/cloud/YOUR_FORM_ID/" 
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
                      <li>• Возраст: 8-17 лет</li>
                      <li>• Наличие оригинальной бизнес-идеи</li>
                      <li>• Готовность презентовать проект</li>
                      <li>• Согласие родителей на участие (для несовершеннолетних)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  contest@example.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (XXX) XXX-XX-XX
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Организаторы</h3>
              <p className="text-white/80">
                Городской центр поддержки молодёжного предпринимательства
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Поддержка</h3>
              <p className="text-white/80">
                При поддержке Министерства образования и Торгово-промышленной палаты
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 Юный предприниматель. Все права защищены.</p>
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
