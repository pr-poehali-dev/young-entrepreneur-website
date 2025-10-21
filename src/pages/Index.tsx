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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 right-0 z-50 p-4">
        <div className="flex flex-col gap-2">
          <Button 
            size="sm" 
            onClick={() => scrollToSection('about')}
            className="bg-primary/90 hover:bg-primary text-white shadow-lg"
          >
            О конкурсе
          </Button>
          <Button 
            size="sm" 
            onClick={() => scrollToSection('skills')}
            className="bg-primary/90 hover:bg-primary text-white shadow-lg"
          >
            Навыки
          </Button>
          <Button 
            size="sm" 
            onClick={() => scrollToSection('goals')}
            className="bg-primary/90 hover:bg-primary text-white shadow-lg"
          >
            Цели
          </Button>
          <Button 
            size="sm" 
            onClick={() => scrollToSection('nominations')}
            className="bg-primary/90 hover:bg-primary text-white shadow-lg"
          >
            Номинации
          </Button>
          <Button 
            size="sm" 
            onClick={() => scrollToSection('registration')}
            className="bg-accent hover:bg-accent/90 text-white shadow-lg"
          >
            Регистрация
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative bg-white py-12 px-4 overflow-hidden">
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
                  onClick={() => scrollToSection('registration')}
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

      <section id="about" className="bg-white">
        <img 
          src="https://cdn.poehali.dev/files/ef65bbe5-bad8-4b25-8508-e23bd82bb3af.png"
          alt="Юный предприниматель"
          className="w-full h-auto"
        />
      </section>

      <section id="skills" className="bg-white">
        <img 
          src="https://cdn.poehali.dev/files/4898d2fd-49ed-481c-86ff-17f485db4582.png"
          alt="Навыки участников"
          className="w-full h-auto"
        />
      </section>

      <section id="goals" className="bg-white">
        <img 
          src="https://cdn.poehali.dev/files/92fad429-0e8b-43b9-8d22-a8251c46978f.png"
          alt="Цель конкурса"
          className="w-full h-auto"
        />
      </section>

      <section id="nominations" className="bg-white">
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