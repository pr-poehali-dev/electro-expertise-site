import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Video",
      title: "Экспертиза систем видеонаблюдения",
      description: "Судебная и досудебная экспертиза систем видеонаблюдения, анализ видеозаписей, проверка подлинности материалов"
    },
    {
      icon: "FileCheck",
      title: "Техническая экспертиза оборудования",
      description: "Оценка состояния IT-оборудования, списание основных средств, инвентаризация и документальное оформление"
    },
    {
      icon: "Shield",
      title: "Информационная безопасность",
      description: "Экспертиза утечек данных, анализ систем защиты информации, аудит безопасности сетевой инфраструктуры"
    },
    {
      icon: "HardDrive",
      title: "Компьютерно-техническая экспертиза",
      description: "Исследование цифровых носителей, восстановление данных, анализ программного обеспечения"
    },
    {
      icon: "Scale",
      title: "Судебная экспертиза",
      description: "Подготовка экспертных заключений для судебных разбирательств, участие специалиста в судебных заседаниях"
    },
    {
      icon: "FileText",
      title: "Досудебная экспертиза",
      description: "Предварительное исследование материалов, консультации по техническим вопросам, подготовка документации"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheck" size={32} className="text-primary" />
            <h1 className="text-xl font-bold text-secondary">ЭкспертЦентр</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Заказать экспертизу</Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                Профессиональная судебная экспертиза
              </h2>
              <p className="text-lg text-muted-foreground">
                Независимые экспертные исследования в области IT-технологий, видеонаблюдения и цифровой криминалистики. Аккредитованные специалисты с опытом работы более 15 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Наши услуги
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Экспертиз проведено</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/c856ffe8-c8a4-4fcb-9bcf-eb582b7ec39b/files/177bdb7a-f088-4826-be2f-ef65b98dbbb7.jpg" 
                alt="Экспертная лаборатория"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные экспертные исследования для физических и юридических лиц
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Почему выбирают нас</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Аккредитация и лицензии</h3>
                    <p className="text-muted-foreground">Все необходимые разрешения и сертификаты для проведения судебных экспертиз</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Квалифицированные эксперты</h3>
                    <p className="text-muted-foreground">Специалисты с высшим техническим образованием и опытом работы от 10 лет</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Соблюдение сроков</h3>
                    <p className="text-muted-foreground">Гарантируем выполнение экспертизы в установленные договором сроки</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Lock" size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Конфиденциальность</h3>
                    <p className="text-muted-foreground">Строгое соблюдение требований по защите персональных данных и коммерческой тайны</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Этапы работы</h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Обращение", desc: "Звонок или заявка на сайте" },
                  { step: "02", title: "Консультация", desc: "Бесплатная консультация специалиста" },
                  { step: "03", title: "Договор", desc: "Заключение договора и получение материалов" },
                  { step: "04", title: "Экспертиза", desc: "Проведение исследования" },
                  { step: "05", title: "Заключение", desc: "Выдача экспертного заключения" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="text-3xl font-bold text-primary/30">{item.step}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваш вопрос или задачу"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Телефон</h4>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">info@expertcenter.ru</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Адрес</h4>
                <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ShieldCheck" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ЭкспертЦентр</h3>
              </div>
              <p className="text-sm opacity-90">
                Профессиональная судебная и досудебная экспертиза с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Видеонаблюдение</li>
                <li>Техническая экспертиза</li>
                <li>Информационная безопасность</li>
                <li>Компьютерная экспертиза</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (495) 123-45-67</li>
                <li>info@expertcenter.ru</li>
                <li>Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 ЭкспертЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
