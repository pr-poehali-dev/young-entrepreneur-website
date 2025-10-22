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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="hidden md:flex items-center justify-center gap-2">
            <Button 
              size="sm" 
              onClick={() => scrollToSection('about')}
              variant="ghost"
              className="text-primary hover:bg-primary/10 text-xs"
            >
              О конкурсе
            </Button>
            <Button 
              size="sm" 
              onClick={() => scrollToSection('skills')}
              variant="ghost"
              className="text-primary hover:bg-primary/10 text-xs"
            >
              Навыки
            </Button>
            <Button 
              size="sm" 
              onClick={() => scrollToSection('goals')}
              variant="ghost"
              className="text-primary hover:bg-primary/10 text-xs"
            >
              Цели
            </Button>
            <Button 
              size="sm" 
              onClick={() => scrollToSection('nominations')}
              variant="ghost"
              className="text-primary hover:bg-primary/10 text-xs"
            >
              Номинации
            </Button>
            <Button 
              size="sm" 
              onClick={() => scrollToSection('registration')}
              className="bg-accent hover:bg-accent/90 text-white text-xs ml-2"
            >
              Регистрация
            </Button>
          </div>
          
          <div className="md:hidden flex items-center justify-between">
            <span className="text-sm font-bold text-primary">Планета BALANCE</span>
            <Button 
              size="sm" 
              onClick={() => scrollToSection('registration')}
              className="bg-accent hover:bg-accent/90 text-white text-xs"
            >
              Участвовать
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative bg-white py-12 px-4 overflow-hidden mt-16">
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
                V конкурс премия ЮНЫЙ ПРЕДПРИНИМАТЕЛЬ 2025
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
                href="https://forms.yandex.ru/cloud/68da5026493639a5275c2eb3" 
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
              <h3 className="text-base font-bold mb-2">Контакты</h3>
              <div className="space-y-1 text-xs text-white/90">
                <p className="flex items-center gap-2">
                  <Icon name="Globe" size={14} />
                  <a href="https://lcvr.net/YzPR" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    lcvr.net/YzPR
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.863-.523-2.049-1.723-1.033-1.01-1.49-1.146-1.745-1.146-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202-2.17-3.092-2.763-5.424-2.763-5.932 0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.744-.576.744z"/>
                  </svg>
                  <a href="https://vk.com/balanceschool_nov" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    balanceschool_nov
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-bold mb-2">Организатор</h3>
              <p className="text-xs text-white/90">
                Детская бизнес-школа "Планета BALANCE"
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-bold mb-2">География</h3>
              <p className="text-xs text-white/90">
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