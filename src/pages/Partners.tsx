import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Partners = () => {
  const organizers = [
    {
      name: "Детская бизнес-школа «Планета BALANCE»",
      logo: "https://cdn.poehali.dev/projects/208adb51-1b01-42d5-b2bf-88a64ef17409/files/1bf60551-a3f0-4881-8d35-f9c4ed55ec32.jpg"
    },
    {
      name: "Центр поддержки предпринимательства города Новороссийска",
      logo: "https://cdn.poehali.dev/projects/208adb51-1b01-42d5-b2bf-88a64ef17409/files/62057029-9f8d-460b-b335-5ec87e640a08.jpg"
    }
  ];

  const partners = [
    {
      name: "Партнёр 1",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=200&fit=crop"
    },
    {
      name: "Партнёр 2",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop"
    },
    {
      name: "Партнёр 3",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop"
    },
    {
      name: "Партнёр 4",
      logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Rocket" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Семейный проект
            </span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              На главную
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Партнёры конкурса
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Благодарим наших партнёров за поддержку и развитие детского предпринимательства
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Организаторы
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {organizers.map((organizer, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={organizer.logo} 
                      alt={organizer.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-foreground">
                    {organizer.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            Партнёры
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-foreground">
                    {partner.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center mt-16">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Home" className="mr-2" size={20} />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>

      <footer className="bg-primary text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            © 2024 Конкурс детских и семейных проектов
          </p>
          <p className="text-primary-foreground/80">
            г. Новороссийск
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Partners;