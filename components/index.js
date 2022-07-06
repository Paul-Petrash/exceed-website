class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a href="/index.html" class="logo">
          <img src="/public/itrum-logo.svg" alt="logo"/>
        </a>
        <div class="navigation">
          <a class="nav-item hover-text" href="/pages/cases.html">Кейсы</a>
          <a class="nav-item hover-text" href="/pages/services.html">Услуги</a>
          <img id="nav-burger" src="/public/menu-hamburger.svg" alt="burger"/>
        </div>

        <div id="burger-menu">
          <div class="burger-menu-wrapper">
            <div class="burger-header">
              <a href="/index.html" class="logo">
                <img src="/public/itrum-logo.svg" alt="logo"/>
              </a>
              <img id="burger-close-icon" src="/public/components/header/close.svg" alt="close icon">
            </div>
            <div class="burger-body">
              <div class="menu-pannel">
                <a class="burger-text-link hover-text" href="/pages/team.html">Команда</a>
                <a class="burger-text-link hover-text" href="/pages/cases.html">Кейсы</a>
                <a class="burger-text-link hover-text" href="/pages/services.html">Услуги</a>
                <a class="burger-text-link hover-text" href="/pages/team.html">Контакты</a>
              </div>
              <div class="menu-pannel">
                <!-- <a class="burger-text-link hover-text" href="/pages/blog.html">Блог</a>-->
                <a class="burger-text-link hover-text" href="/pages/team.html">Отрасли</a>
                <a class="burger-text-link hover-text" href="/pages/team.html">Начать работу</a>
                <div class="social-links social-links-burger">
                  <a href="https://www.linkedin.com/in/exceed-team-63aaab145/" target="_blank"><img src="/public/components/footer/media_social_linkedIn_icon.svg" alt="linked in link"></a>
                  <a href="https://vk.com/exceed.team" target="_blank"><img src="/public/components/footer/media_social_vk_icon.svg" alt="vk link"></a>
                  <a href="https://www.behance.net/exceed-team" target="_blank"><img src="/public/components/footer/media_social_behance_icon.svg" alt="behance link"></a>
                  <a href="https://dribbble.com/ExceedTeam" target="_blank"><img src="/public/components/footer/media_social_dribble_icon.svg" alt="dribble link"></a>
                </div>
                <!-- <div class="languages">
                  <p class="language language-current">Rus</p>
                  <p class="language">Eng</p>
                </div> -->
              </div>
            </div>
            <div class="burger-background"></div>
          </div>
        </div>
      </header>
    `;
  }
}

class ReviewCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || "";
    const company = this.getAttribute('company') || "no company";
    const review = this.getAttribute('review') || "no text";
    const avatar = this.getAttribute('avatar');
    const date = this.getAttribute('date') || "no date";

    this.innerHTML = `
      <div class="carousel-card">
        <div class="carousel-card-header">
          <div class="header-left">
            <img class="carousel-card-avatar" src="${avatar}" alt="feedback avatar">
            <div class="reviewer">
              <h3 class="reviewer-name">${name}</h3>
              <p class="reviewer-company">${company}</p>
            </div>
          </div>
          <p class="header-right-date">${date}</p>
        </div>
        <img class="quote" src="/public/homepage/quote.svg" alt="quote" />
        <p class="review-text">${review}</p>
        <!-- <button class="go-clatch">На CLUTCH</button> -->
        <div class="card-background"></div>
      </div>
    `;
  }
}

class ReviewCardMobile extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || "";
    const company = this.getAttribute('company') || "no company";
    const review = this.getAttribute('review') || "no text";
    const avatar = this.getAttribute('avatar');
    const date = this.getAttribute('date') || "no date";

    this.innerHTML = `
      <div class="carousel-card-mob">
        <div class="carousel-card-header">
          <div class="header-left">
            <img class="carousel-card-avatar-mob" src="${avatar}" alt="feedback avatar">
            <div class="reviewer">
              <h3 class="reviewer-name-mob">${name}</h3>
              <p class="reviewer-company-mob">${company}</p>
            </div>
          </div>
          <p class="header-right-date">${date}</p>
        </div>
        <img class="quote-mob" src="/public/homepage/quote.svg" alt="quote" />
        <p class="review-text-mob">${review}</p>
        <!-- <button class="go-clatch">На CLUTCH</button> -->
        <div class="card-background"></div>
      </div>
    `;
  }
}

class CasesGrid extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="cases-grid">
        <div class="case-item grid-cell-1 hover-zone-1">
          <div class="case-item-text ">
            <h3>Save Health</h3>
            <p>CRM-системы для частной клиники</p>
          </div>
          <img class="case-item-img save-health" src="/public/components/cases/save-health.svg" alt="save health" />
        </div>
        <div class="case-item grid-cell-2 hover-zone-2">
          <div class="case-item-text">
            <h3>Ukie</h3>
            <p>Сайт для британской геймдев-индустрии</p>
          </div>
          <img class="case-item-img ukie" src="/public/components/cases/ukie.svg" alt="save health" />
        </div>
        <div class="case-item grid-cell-3 hover-zone-3">
          <div class="case-item-text">
            <h3>Real Estate</h3>
            <p>CRM-система для риэлторского агентства</p>
          </div>
          <img class="case-item-img real-estate" src="/public/components/cases/real-estate.svg" alt="Real Estate" />
        </div>
        <div class="case-item grid-cell-4 hover-zone-4 case-item-joined-first">
          <div class="case-item-text">
            <h3>FinPro</h3>
            <p>CRM-система для финтех стартапа, со встроенной функцией звонков</p>
          </div>
          <img class="case-item-img fin-pro" src="/public/components/cases/finPro.svg" alt="FinPro" />
        </div>
        <div class="case-item grid-cell-5 hover-zone-5">
          <div class="case-item-text">
            <h3>What Song</h3>
            <p>Онлайн-сервис, для поиска популярные треков из любимых фильмов или сериалов</p>
          </div>
          <img class="case-item-img what-song" src="/public/components/cases/what-song.svg" alt="What Song" />
        </div>
        <div class="case-item grid-cell-6 hover-zone-6">
          <div class="case-item-text">
            <h3>Continental Clothing Co</h3>
            <p>Веб-платформа для продажи одежды с готовыми к печати принтами</p>
          </div>
          <img class="case-item-img clothing" src="/public/components/cases/clothing.svg" alt="clothing" />
        </div>
        <div class="case-item grid-cell-7 hover-zone-7">
          <div class="case-item-text">
            <h3>Palmetto Park</h3>
            <p>Платформа для размещения объявлений о продаже недвижимости</p>
          </div>
          <img class="case-item-img palmetto-back" src="/public/components/cases/palmetto-back.png" alt="palmetto back" />
          <img class="case-item-img palmetto-front" src="/public/components/cases/palmetto-front.png" alt="palmetto front" />
        </div>
        <div class="case-item grid-cell-8 hover-zone-8">
          <div class="case-item-text">
            <h3>GaiaHerbs</h3>
            <p>Интернет-магазин здорового питания</p>
          </div>
          <img class="case-item-img gaia-herbs" src="/public/components/cases/gaiaHerbs.png" alt="Gaia Herbs" />
        </div>
        <div class="case-item grid-cell-9 hover-zone-9">
          <div class="case-item-text">
            <h3>Bitpool</h3>
            <p>Технологическая экосистема, которая позволяет контролировать ресурсы и эффективность</p>
          </div>
          <div class="rotate">
            <img class="case-item-img bitpool-passion-hovered" src="/public/components/cases/bitpool-passion.png" alt="Bitpool passion" />
            <img class="case-item-img bitpool-process-hovered" src="/public/components/cases/bitpool-process.png" alt="Bitpool process" />
            <img class="case-item-img bitpool-passion" src="/public/components/cases/bitpool-passion.png" alt="Bitpool passion" />
            <img class="case-item-img bitpool-process" src="/public/components/cases/bitpool-process.png" alt="Bitpool process" />
          </div>
        </div>
        <div class="case-item grid-cell-10 hover-zone-10 case-item-joined-second">
          <div class="case-item-text">
            <h3>Kopi-d Co</h3>
            <p>Быстрый, легкий и SEO-оптимизированный интернет-магазин</p>
          </div>
          <img class="case-item-img kopi-d" src="/public/components/cases/kopi-d.png" alt="Kopi-d Co" />
        </div>
      </div>
    `;
  }
}

class CasesCarousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <div class="cases-carousel">
          <div class="cases-slider">
            <div id="cases-carousel-container">
              <div class="cases-carousel-item grid-cell-1">
                <div class="case-item-text case-item-text-mobile">
                  <h3>Save Health</h3>
                  <p>CRM-системы для частной клиники</p>
                </div>
                <img class="case-item-img save-health" src="/public/components/cases/save-health.svg" alt="save health" />
              </div>
              <div class="cases-carousel-item grid-cell-2">
                <div class="case-item-text case-item-text-mobile">
                  <h3>Ukie</h3>
                  <p>Сайт для британской геймдев-индустрии</p>
                </div>
                <img class="case-item-img ukie" src="/public/components/cases/ukie.svg" alt="save health" />
              </div>
              <div class="cases-carousel-item grid-cell-3">
                <div class="case-item-text case-item-text-mobile">
                  <h3>Real Estate</h3>
                  <p>CRM-система для риэлторского агентства</p>
                </div>
                <img class="case-item-img real-estate" src="/public/components/cases/real-estate.svg" alt="Real Estate" />
              </div>
              <div class="cases-carousel-item grid-cell-4">
                <div class="case-item-text case-item-text-mobile">
                  <h3>FinPro</h3>
                  <p>CRM-система для финтех стартапа, со встроенной функцией звонков</p>
                </div>
                <img class="case-item-img fin-pro" src="/public/components/cases/finPro.svg" alt="FinPro" />
              </div>
              <div class="cases-carousel-item grid-cell-5">
                <div class="case-item-text case-item-text-mobile">
                  <h3>What Song</h3>
                  <p>Онлайн-сервис, для поиска популярные треков из любимых фильмов или сериалов</p>
                </div>
                <img class="case-item-img what-song" src="/public/components/cases/what-song.svg" alt="What Song" />
              </div>
              <div class="cases-carousel-item grid-cell-6">
                <div class="case-item-text case-item-text-mobile">
                  <h3>Continental Clothing Co</h3>
                  <p>Веб-платформа для продажи одежды с готовыми к печати принтами</p>
                </div>
                <img class="case-item-img clothing" src="/public/components/cases/clothing.svg" alt="clothing" />
              </div>
              <div class="cases-carousel-item grid-cell-7">
                <div class="case-item-text case-item-text-mobile">
                  <h3>Palmetto Park</h3>
                  <p>Платформа для размещения объявлений о продаже недвижимости</p>
                </div>
                <img class="case-item-img palmetto-back" src="/public/components/cases/palmetto-back.png" alt="palmetto back" />
                <img class="case-item-img palmetto-front" src="/public/components/cases/palmetto-front.png" alt="palmetto front" />
              </div>
              <div class="cases-carousel-item grid-cell-8">
                <div class="case-item-text case-item-text-mobile">
                  <h3>GaiaHerbs</h3>
                  <p>Интернет-магазин здорового питания</p>
                </div>
                <img class="case-item-img gaia-herbs" src="/public/components/cases/gaiaHerbs.png" alt="Gaia Herbs" />
              </div>
              <div class="cases-carousel-item grid-cell-9">
                <div class="case-item-text case-item-text-mobile">
                  <h3>Bitpool</h3>
                  <p>Технологическая экосистема, которая позволяет контролировать ресурсы и эффективность</p>
                </div>
                <div class="rotate">
                  <img class="case-item-img bitpool-passion" src="/public/components/cases/bitpool-passion.png" alt="Bitpool passion" />
                  <img class="case-item-img bitpool-process" src="/public/components/cases/bitpool-process.png" alt="Bitpool process" />
                </div>
              </div>
              <div class="cases-carousel-item grid-cell-10">
                <div class="case-item-text case-item-text-mobile">
                  <h3>Kopi-d Co</h3>
                  <p>Быстрый, легкий и SEO-оптимизированный интернет-магазин</p>
                </div>
                <img class="case-item-img kopi-d" src="/public/components/cases/kopi-d.png" alt="Kopi-d Co" />
              </div>
            </div>
          </div>
        </div>

        <div class="cases-carousel-slide-counter">
          <img src="/public/homepage/arrow-left.svg" alt="previous slide" id="cases-carousel-prev-slide"/>
          <span>
            <span id="cases-carousel-current-slide"></span>
            <span>/</span>
            <span id="cases-carousel-max-slide"></span>
          </span>
          <img src="/public/homepage/arrow-right.svg" alt="next slide" id="cases-carousel-next-slide"/>
        </div>
      </div>
    `;
  }
}


class InfoCard extends HTMLElement {
  connectedCallback() {
    const vals = this.getAttribute('title') || "NOT FOUND";
    const hoverSVG = this.getAttribute('hover') + ".svg";
    const fields = JSON.parse(this.getAttribute('fields')) || [];

    let main = `
      <div class="info-card">
        <div class="hover-effect"></div>
        <img class="hover-icon" src="/public/components/infoCard/${hoverSVG}" alt="hover icon" />
        <p class="info-card-title">${vals}</p>
        <ul class="info-card-list">
    `;

    fields.forEach(i => {
      main += `<li class="info-card-list-item">${i}</li>`;
    });

    main += `</ul></div>`;
    this.innerHTML = main;
  }
}

class TeamCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="team">
        <div class="section-header">
          <h2 class="section-name">Команда</h2>
        </div>
        <div class="team-grid">
          <div class="team-card team-card-1">
            <img class="team-card-img" src="/public/homepage/team-1.png" alt="team pic" />
          </div>
          <div class="team-card team-card-2">
            <img class="team-card-img" src="/public/homepage/team-2.png" alt="team pic" />
          </div>
          <div class="team-card team-card-3">
            <img class="team-card-img" src="/public/homepage/team-3.png" alt="team pic" />
          </div>
          <div class="team-card team-card-4">
            <img class="team-card-img" src="/public/homepage/team-4.png" alt="team pic" />
          </div>
          <div class="team-card team-card-5">
            <img class="team-card-img" src="/public/homepage/team-5.png" alt="team pic" />
          </div>
          <div class="team-card team-card-6">
            <img class="team-card-img" src="/public/homepage/team-6.png" alt="team pic" />
          </div>
          <div class="team-card team-card-7">
            <img class="team-card-img" src="/public/homepage/team-7.png" alt="team pic" />
          </div>
          <div class="team-card team-card-8">
            <img class="team-card-img" src="/public/homepage/team-8.png" alt="team pic" />
          </div>
        </div>
      </div>
    `;
  }
}

class Rewards extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="rewards">
        <div class="section-header">
          <h2 class="section-name">Наши награды</h2>
        </div>
        <div class="rewards-scroll">
          <img class="reward" src="/public/homepage/rewards/nexmo.png" alt="nexmo" />
          <img class="reward" src="/public/homepage/rewards/stripe.png" alt="stripe" />
          <img class="reward" src="/public/homepage/rewards/google-devs.png" alt="google developers" />
          <img class="reward" src="/public/homepage/rewards/mongoDB.png" alt="mongoDB" />
          <img class="reward" src="/public/homepage/rewards/google-cloud.png" alt="google cloud" />
          <img class="reward" src="/public/homepage/rewards/aws.png" alt="aws" />
          <img class="reward" src="/public/homepage/rewards/psm.png" alt="psm" />
          <img class="reward" src="/public/homepage/rewards/open-js.png" alt="open js" />
          <img class="reward" src="/public/homepage/rewards/cancanit.png" alt="cancanit js" />
          <img class="reward" src="/public/homepage/rewards/twilio.png" alt="twilio" />
          <img class="reward" src="/public/homepage/rewards/microsoft-gold.png" alt="microsoft gold" />
        </div>
      </div>
    `;
  }
}

class FeedbackCarousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="feedback">
        <div class="section-header">
          <h2 class="section-name name-margin">Отзывы</h2>
        </div>
        
        <div class="carousel-wrapper">
          <div id="carousel">
            <review-card
              name="Francois Holl"
              company="Co-Founder & CEO at Kiskadi"
              avatar="/public/components/reviews/francois_holl.jpeg"
              date="17.03.2019"
              review="Мой стартап разрабатывает облачные CRM-решения. Мы хотели выпустить новую версию маркетингового модуля в течение двух месяцев. ITRUM успешно скооперировались с нашей бразильской командой и создали ключевую часть функционала уже в первый месяц работы."
            ></review-card>
            <review-card
              name="Nestor Hernandez"
              company="Licensed Realtor at Coldwell Banker Paradise"
              avatar="/public/components/reviews/nestor_hernandez.jpeg"
              date="17.03.2019"
              review="Разработчики из ITRUM смогли не только оправдать, но и превзойти наши ожидания: обеспечили успешный запуск (проект был готов на 70%, и ребята вовремя закончили все спринты по нашему расписанию), а также предоставили техническую поддержку (исправление багов и различные улучшения). Отличные навыки коммуникации, работа на профессиональном уровне, и стоимость тоже устраивает. Спасибо, что помогли нам преуспеть!"
            ></review-card>
            <review-card
              name="Ricardo Matos"
              company="Head of Tech at AlfaConvert"
              avatar="/public/components/reviews/ricardo_matos.jpeg"
              date="17.03.2019"
              review="ITRUM создали лендинг и веб-приложение для нашей AdTech-компании. Хороший код и достойное тестирование перед запуском. Также они давали нам качественную обратную связь и помогали развивать продуктовые идеи."
            ></review-card>
            <review-card
              name="Dominic Hacking"
              company="Founder & Web Developer at Hax"
              avatar="/public/components/reviews/dominic_hacking.jpeg"
              date="17.03.2019"
              review="Я работал с ITRUM над несколькими проектами. Вас ожидает сотрудничество с инициативным партнером, который предан своему делу, честен, трудолюбив и внимателен к деталям, что повышает эффективность бизнес-процессов клиента."
            ></review-card>
            <review-card
              name="Ilyas Djeddou"
              company="CTO at SIX Travel"
              avatar="/public/components/reviews/ilyas_djeddou.jpeg"
              date="17.03.2019"
              review="ITRUM разработали приложение для бронирования отелей, продемонстрировав качественный результат в обговоренные сроки. Стоит отметить эффективность их работы и готовность откликаться на идеи клиента. Это увлеченная команда, которая легко идет на контакт."
            ></review-card>
            <review-card
              name="Gavin Wedell"
              company="Founder & CEO at Change Activation"
              avatar="/public/components/reviews/gavin_wedell.jpeg"
              date="17.03.2019"
              review="ITRUM предоставили нам услуги Fullstack-разработки для создания SaaS-платформы. Они показали себя как честный и надежный партнер с отличными навыками управления проектами. Качество работы – на высшем уровне, и мы получили положительные отзывы от клиентов."
            ></review-card>
            <review-card
              name="Kit Norman"
              company="Director at Mercury Digital Assets Ltd"
              avatar="/public/components/reviews/kit_norm.webp"
              date="17.03.2019"
              review="Мы проработали с этими ребятами уже несколько месяцев, и собираемся продолжать сотрудничество как можно дольше. Они приятные в общении и предоставляют очень качественные услуги по разумным ценам."
            ></review-card>
            <review-card
              name="Arina Yakovleva"
              company="Account Manager at OK Pixels"
              avatar="/public/components/reviews/arina_yakovleva.jpeg"
              date="17.03.2019"
              review="Наша компания специализируется на кастомной разработке, аутсорсе и аутстафе. ITRUM оказывают нам услуги фронтенд-разработки RIA/SPA и работают с проектами интернет-банкинг и маркетплейс. В обязанности ребят также входит ревью кода, техническая оценка, Agile-обсуждение с бэкенд-командой, использование Git и Jira и т.д. ITRUM получили положительные отзывы."
            ></review-card>
            <review-card
              name="EvaCodes"
              company="Project Manager at EvaCodes"
              avatar="/public/components/reviews/avatar_default.jpeg"
              date="17.03.2019"
              review="ITRUM работают над внутренним проектом для HR-отдела нашей IT-компании. Проект направлен на систематизацию процессов обработки информации. Значительная часть работы уже завершена. Нам нравится качество и темп, коммуникация, высокий уровень технической подготовки и большой опыт разработчиков, а также соблюдение сроков и требований."
            ></review-card>
          </div>
        </div>

        <div class="slide-counter">
          <img src="/public/homepage/arrow-left.svg" alt="previous slide" id="prev-slide"/>
          <span>
            <span id="current-slide"></span>
            <span>/</span>
            <span id="max-slide"></span>
          </span>
          <img src="/public/homepage/arrow-right.svg" alt="next slide" id="next-slide"/>
        </div>
      </div>
    `;
  }
}

class FeedbackSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="feedback-car-mobile">
        <div class="section-header">
          <h2 class="section-name">Отзывы</h2>
        </div>

        <div class="cases-carousel-mobile">
          <div id="feedback-slider">
            <div id="feedback-carousel-container">
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Francois Holl"
                  company="Co-Founder & CEO at Kiskadi"
                  avatar="/public/components/reviews/francois_holl.jpeg"
                  date="17.03.2019"
                  review="Мой стартап разрабатывает облачные CRM-решения. Мы хотели выпустить новую версию маркетингового модуля в течение двух месяцев. ITRUM успешно скооперировались с нашей бразильской командой и создали ключевую часть функционала уже в первый месяц работы."
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Nestor Hernandez"
                  company="Licensed Realtor at Coldwell Banker Paradise"
                  avatar="/public/components/reviews/nestor_hernandez.jpeg"
                  date="17.03.2019"
                  review="Разработчики из ITRUM смогли не только оправдать, но и превзойти наши ожидания: обеспечили успешный запуск (проект был готов на 70%, и ребята вовремя закончили все спринты по нашему расписанию), а также предоставили техническую поддержку (исправление багов и различные улучшения). Отличные навыки коммуникации, работа на профессиональном уровне, и стоимость тоже устраивает. Спасибо, что помогли нам преуспеть!"
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Ricardo Matos"
                  company="Head of Tech at AlfaConvert"
                  avatar="/public/components/reviews/ricardo_matos.jpeg"
                  date="17.03.2019"
                  review="ITRUM создали лендинг и веб-приложение для нашей AdTech-компании. Хороший код и достойное тестирование перед запуском. Также они давали нам качественную обратную связь и помогали развивать продуктовые идеи."
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Dominic Hacking"
                  company="Founder & Web Developer at Hax"
                  avatar="/public/components/reviews/dominic_hacking.jpeg"
                  date="17.03.2019"
                  review="Я работал с ITRUM над несколькими проектами. Вас ожидает сотрудничество с инициативным партнером, который предан своему делу, честен, трудолюбив и внимателен к деталям, что повышает эффективность бизнес-процессов клиента."
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Ilyas Djeddou"
                  company="CTO at SIX Travel"
                  avatar="/public/components/reviews/ilyas_djeddou.jpeg"
                  date="17.03.2019"
                  review="ITRUM разработали приложение для бронирования отелей, продемонстрировав качественный результат в обговоренные сроки. Стоит отметить эффективность их работы и готовность откликаться на идеи клиента. Это увлеченная команда, которая легко идет на контакт."
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Gavin Wedell"
                  company="Founder & CEO at Change Activation"
                  avatar="/public/components/reviews/gavin_wedell.jpeg"
                  date="17.03.2019"
                  review="ITRUM предоставили нам услуги Fullstack-разработки для создания SaaS-платформы. Они показали себя как честный и надежный партнер с отличными навыками управления проектами. Качество работы – на высшем уровне, и мы получили положительные отзывы от клиентов."
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Kit Norman"
                  company="Director at Mercury Digital Assets Ltd"
                  avatar="/public/components/reviews/kit_norm.webp"
                  date="17.03.2019"
                  review="Мы проработали с этими ребятами уже несколько месяцев, и собираемся продолжать сотрудничество как можно дольше. Они приятные в общении и предоставляют очень качественные услуги по разумным ценам."
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="Arina Yakovleva"
                  company="Account Manager at OK Pixels"
                  avatar="/public/components/reviews/arina_yakovleva.jpeg"
                  date="17.03.2019"
                  review="Наша компания специализируется на кастомной разработке, аутсорсе и аутстафе. ITRUM оказывают нам услуги фронтенд-разработки RIA/SPA и работают с проектами интернет-банкинг и маркетплейс. В обязанности ребят также входит ревью кода, техническая оценка, Agile-обсуждение с бэкенд-командой, использование Git и Jira и т.д. ITRUM получили положительные отзывы."
                ></review-card-mobile>
              </div>
              <div class="cases-carousel-item">
                <review-card-mobile
                  name="EvaCodes"
                  company="Project Manager at EvaCodes"
                  avatar="/public/components/reviews/avatar_default.jpeg"
                  date="17.03.2019"
                  review="ITRUM работают над внутренним проектом для HR-отдела нашей IT-компании. Проект направлен на систематизацию процессов обработки информации. Значительная часть работы уже завершена. Нам нравится качество и темп, коммуникация, высокий уровень технической подготовки и большой опыт разработчиков, а также соблюдение сроков и требований."
                ></review-card-mobile>
              </div>
            </div>
          </div>
        </div>

        <div class="cases-carousel-slide-counter">
          <img src="/public/homepage/arrow-left.svg" alt="previous slide" id="cases-carousel-prev-slide-mob"/>
          <span>
            <span id="cases-carousel-current-slide-mob"></span>
            <span>/</span>
            <span id="cases-carousel-max-slide-mob"></span>
          </span>
          <img src="/public/homepage/arrow-right.svg" alt="next slide" id="cases-carousel-next-slide-mob"/>
        </div>
      </div>
    `
  }
}

class TeamSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="team-slider-mobile">
        <div class="section-header">
          <h2 class="section-name">Команда</h2>
        </div>

        <div class="team-carousel-mobile">
          <div id="team-slider">
            <div id="team-carousel-container">
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-1.png" alt="team" />
              </div>
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-2.png" alt="team" />
              </div>
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-3.png" alt="team" />
              </div>
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-4.png" alt="team" />
              </div>
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-5.png" alt="team" />
              </div>
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-6.png" alt="team" />
              </div>
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-7.png" alt="team" />
              </div>
              <div class="team-carousel-item">
                <img class="team-slider-img" src="/public/homepage/team-8.png" alt="team" />
              </div>
            </div>
          </div>
        </div>

        <div class="team-carousel-slide-counter">
          <img src="/public/homepage/arrow-left.svg" alt="previous slide" id="team-carousel-prev-slide"/>
          <span>
            <span id="team-carousel-current-slide"></span>
            <span>/</span>
            <span id="team-carousel-max-slide"></span>
          </span>
          <img src="/public/homepage/arrow-right.svg" alt="next slide" id="team-carousel-next-slide"/>
        </div>
      </div>
    `
  }
}

class Request extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="request">
        <div class="section-header request-header">
          <h2 class="section-name">Оставьте заявку</h2>
          <p>Опишите масштаб проекта, сроки, технические требования, бизнес-задачи и другие детали, которые считаете необходимыми. Наша команда изучит их и в ближайшее время свяжется с вами.</p>
          <p>Давайте вместе сделаем интересный продукт!</p>
        </div>
        <div class="request-form">
          <div class="form-line">
            <input class="form-field cfn" name="full_name" type="text" placeholder="Имя*" />
            <input class="form-field cfp" name="phone" type="text" placeholder="Телефон" />
          </div>
          <input class="form-field cfe" type="email" name="email" placeholder="Электронная почта*" />
          <textarea class="form-field textarea cfm" name="about_project" placeholder="О проекте"></textarea>
          <div class="tags-list">
            <div class="tag" id="CRM">CRM</div>
            <div class="tag" id="Mobile app">Мобильное приложение</div>
            <div class="tag" id="Website">Сайт</div>
            <div class="tag" id="E-commerce">Интернет-магазин</div>
            <div class="tag" id="Landing page">Landing-page</div>
            <div class="tag" id="Redesign">Редизайн</div>
            <div class="tag" id="MVP">MVP</div>
            <div class="tag" id="Team extension">Расширение команды</div>
            <div class="tag" id="Other">Другое</div>
          </div>
          <input type="file" id="img-upload" style="display:none"/>
          <label for="img-upload">
            <div class="attach-file">
              <img src="/public/homepage/Paperclip.svg" alt="attach file" />
              <p>Прикрепите документ</p>
            </div>
          </label>
          <button id="send-request" class="cfbtn">Отправить</button>
          <p class="politics">Отправкой этого сообщения вы подтверждаете прочтение и согласие c <a href="#">Политикой конфиденциальности</a></p>
        </div>
      </div>
    `;
  }
}

class BlogCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="blog-grid">
        <div class="blog-grid-card">
          <img class="blog-image" src="/public/blog/blog-demo.png" alt="blog image" />
          <span class="tags-list">
            <span class="tag">sdfsdf</span>
            <span class="tag">sdf2222sdf</span>
          </span>
          <h4 class="blog-card-title">Как бизнесу поддерживать связь с клиентом</h4>
          <p class="blog-card-text">Способы понять аудиторию вашего бренда и выстроить с ними отношения.</p>
        </div>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <div class="footer-left">
            <div class="logo">
              <img src="/public/itrum-logo.svg" alt="logo"/>
            </div>
            <p class="footer-info">©ITRUM 2016-2022<br/>Все права защищены</p>
          </div>
          <div class="footer-right">
            <div class="section">
              <h5 class="footer-section-name">Компания</h5>
              <ul class="footer-section-list">
                <li><a href="/pages/cases.html">Кейсы</a></li>
                <li><a href="/pages/services.html">Услуги</a></li>
                <li><a href="/pages/team.html">Команда</a></li>
                <!-- <li><a href="/pages/blog.html">Блог</a></li> -->
                <li><a href="/pages/contacts.html">Контакты</a></li>
              </ul>
            </div>
            <!-- <div class="section">
              <h5 class="footer-section-name">Отрасли</h5>
              <ul class="footer-section-list">
                <li><a href="#">Медицина</a></li>
                <li><a href="#">Недвижимость</a></li>
                <li><a href="#">Онлайн-обучение</a></li>
                <li><a href="#">Доставка еды</a></li>
                <li><a href="#">Фитнес</a></li>
              </ul>
            </div> -->
            <div class="section">
              <h5 class="footer-section-name">Контакты</h5>
              <div class="email">
                <img src="/public/components/footer/at-email.svg" alt="email icon" />
                <a class="email-link" href="mailto:hello@itrum.com">hello@itrum.com</a>
              </div>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/exceed-team-63aaab145/" target="_blank"><img src="/public/components/footer/media_social_linkedIn_icon.svg" alt="linked in link"></a>
                <a href="https://vk.com/exceed.team" target="_blank"><img src="/public/components/footer/media_social_vk_icon.svg" alt="vk link"></a>
                <a href="https://www.behance.net/exceed-team" target="_blank"><img src="/public/components/footer/media_social_behance_icon.svg" alt="behance link"></a>
                <a href="https://dribbble.com/ExceedTeam" target="_blank"><img src="/public/components/footer/media_social_dribble_icon.svg" alt="dribble link"></a>
              </div>
            </div>
          </div>
        </div>
        <!-- <a href="https://exceed-team.com/en/privacy-policy" class="footer-info link">Политика конфиденциальности</a> -->
        <div class="background-circle"></div>
      </footer>
    `;
  }
}


customElements.define('main-header', Header);
customElements.define('review-card', ReviewCard);
customElements.define('review-card-mobile', ReviewCardMobile);
customElements.define('grey-card', InfoCard);
customElements.define('cases-grid', CasesGrid);
customElements.define('team-grid', TeamCard);
customElements.define('team-slider', TeamSlider);
customElements.define('feedback-carousel', FeedbackCarousel);
customElements.define('feedback-slider', FeedbackSlider);
customElements.define('cases-carousel', CasesCarousel);
customElements.define('rewards-carousel', Rewards);
customElements.define('request-form', Request);
customElements.define('main-footer', Footer);