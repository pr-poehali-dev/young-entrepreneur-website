import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const stages = [
    {
      number: 1,
      title: 'Подача заявок',
      date: '1-15 ноября 2025',
      description: 'Регистрация участников через Яндекс.Формы',
      icon: 'FileText'
    },
    {
      number: 2,
      title: 'Отборочный этап',
      date: '16-25 ноября 2025',
      description: 'Проверка заявок и отбор финалистов',
      icon: 'Users'
    },
    {
      number: 3,
      title: 'Финал',
      date: '1 декабря 2025',
      description: 'Защита проектов перед жюри',
      icon: 'Trophy'
    }
  ];

  const nominations = [
    {
      title: 'Лучшая бизнес-идея',
      description: 'Оригинальность и реалистичность проекта',
      icon: 'Lightbulb',
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'Инновации',
      description: 'Применение новых технологий и подходов',
      icon: 'Rocket',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      title: 'Social',
      description: 'Польза проекта для общества',
      icon: 'Heart',
      color: 'bg-accent/20 text-accent-foreground'
    },
    {
      title: 'Командная работа',
      description: 'Слаженность и эффективность команды',
      icon: 'Handshake',
      color: 'bg-muted text-muted-foreground'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 text-base px-6 py-2 bg-accent/80 hover:bg-accent text-accent-foreground font-semibold">
              Бесплатный городской конкурс
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              ЮНЫЙ ПРЕДПРИНИМАТЕЛЬ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Покажи свою бизнес-идею и стань лидером будущего! Участвуй в конкурсе для детей 10-17 лет
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                onClick={() => window.open('https://forms.yandex.ru/cloud/65f8a1a2d0468847a1234567/', '_blank')}
              >
                <Icon name="Rocket" className="mr-2" size={24} />
                Зарегистрироваться
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold transition-all"
                onClick={() => document.getElementById('stages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </section>

      <section id="stages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Этапы конкурса</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Три простых шага к победе</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name={stage.icon as any} size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-primary mb-1">ЭТАП {stage.number}</div>
                      <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                    </div>
                  </div>
                  <div className="bg-accent/20 rounded-lg px-4 py-2 mb-3 inline-block">
                    <p className="text-sm font-semibold text-accent-foreground">{stage.date}</p>
                  </div>
                  <p className="text-muted-foreground">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Номинации</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выбери направление для своего проекта</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nominations.map((nomination, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-2xl mb-4 ${nomination.color}`}>
                    <Icon name={nomination.icon as any} size={40} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{nomination.title}</h3>
                  <p className="text-sm text-muted-foreground">{nomination.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                <Icon name="Star" size={48} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готов стать предпринимателем?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Заполни форму регистрации и присоединяйся к сообществу молодых лидеров! Участие бесплатное, призы гарантированы.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                onClick={() => window.open('https://forms.yandex.ru/cloud/65f8a1a2d0468847a1234567/', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={24} />
                Подать заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4 mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@youngentrepreneur.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (800) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Организаторы</h3>
              <p className="text-muted-foreground">Городской центр развития предпринимательства</p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="text-muted-foreground hover:text-foreground p-0">
                  Политика конфиденциальности и обработки персональных данных
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Политика конфиденциальности</DialogTitle>
                  <DialogDescription className="text-base">
                    Обработка персональных данных участников конкурса
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-bold mb-2">1. Общие положения</h4>
                    <p className="text-muted-foreground">
                      Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных участников конкурса "Юный предприниматель" (далее - Конкурс).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">2. Собираемые данные</h4>
                    <p className="text-muted-foreground">
                      При регистрации мы собираем: ФИО участника, дату рождения, контактные данные (email, телефон), образовательное учреждение, описание проекта.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">3. Цели обработки данных</h4>
                    <p className="text-muted-foreground">
                      Персональные данные используются для: организации и проведения Конкурса, связи с участниками, объявления результатов, вручения призов.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">4. Согласие на обработку</h4>
                    <p className="text-muted-foreground">
                      Для участников младше 14 лет требуется согласие родителей/законных представителей. Участники 14-18 лет предоставляют согласие самостоятельно с уведомлением родителей.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">5. Защита данных</h4>
                    <p className="text-muted-foreground">
                      Мы применяем технические и организационные меры для защиты персональных данных от несанкционированного доступа, изменения или уничтожения.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">6. Права субъектов данных</h4>
                    <p className="text-muted-foreground">
                      Участники имеют право на доступ к своим данным, их исправление, удаление или ограничение обработки. Для реализации прав обращайтесь по email: privacy@youngentrepreneur.ru
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">7. Срок хранения данных</h4>
                    <p className="text-muted-foreground">
                      Данные хранятся в течение проведения Конкурса и 1 года после его завершения, после чего подлежат удалению.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">8. Контакты</h4>
                    <p className="text-muted-foreground">
                      По вопросам обработки персональных данных: privacy@youngentrepreneur.ru, +7 (800) 123-45-67
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <p className="text-center text-muted-foreground mt-4">
              © 2025 Конкурс "Юный предприниматель". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
