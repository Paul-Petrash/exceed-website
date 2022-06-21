class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a href="/index.html" class="logo">
          <img src="../public/small-logo.svg" alt="logo"/>
          <p class="logo-name">Exceed Team</p>
        </a>
        <div class="navigation">
          <a class="nav-item hover-text" href="/pages/cases.html">Кейсы</a>
          <a class="nav-item hover-text" href="/pages/cases.html">Услуги</a>
          <img class="nav-burger" src="../public/menu-hamburger.svg" alt="burger"/>
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
        <img class="quote" src="./public/homepage/quote.svg" alt="quote" />
        <p class="review-text">${review}</p>
        <button class="go-clatch">На CLUTCH</button>
        <div class="card-background"></div>
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
        <img class="hover-icon" src="../public/components/infoCard/${hoverSVG}" alt="hover icon" />
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
            <img class="team-card-img" src="./public/homepage/team-1.png" alt="team pic" />
          </div>
          <div class="team-card team-card-2">
            <img class="team-card-img" src="./public/homepage/team-2.png" alt="team pic" />
          </div>
          <div class="team-card team-card-3">
            <img class="team-card-img" src="./public/homepage/team-3.png" alt="team pic" />
          </div>
          <div class="team-card team-card-4">
            <img class="team-card-img" src="./public/homepage/team-4.png" alt="team pic" />
          </div>
          <div class="team-card team-card-5">
            <img class="team-card-img" src="./public/homepage/team-5.png" alt="team pic" />
          </div>
          <div class="team-card team-card-6">
            <img class="team-card-img" src="./public/homepage/team-6.png" alt="team pic" />
          </div>
          <div class="team-card team-card-7">
            <img class="team-card-img" src="./public/homepage/team-7.png" alt="team pic" />
          </div>
          <div class="team-card team-card-8">
            <img class="team-card-img" src="./public/homepage/team-8.png" alt="team pic" />
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
          <img class="reward" src="./public/homepage/rewards/nexmo.png" alt="nexmo" />
          <img class="reward" src="./public/homepage/rewards/stripe.png" alt="stripe" />
          <img class="reward" src="./public/homepage/rewards/google-devs.png" alt="google developers" />
          <img class="reward" src="./public/homepage/rewards/mongoDB.png" alt="mongoDB" />
          <img class="reward" src="./public/homepage/rewards/stripe.png" alt="stripe" />
          <img class="reward" src="./public/homepage/rewards/google-devs.png" alt="google developers" />
          <img class="reward" src="./public/homepage/rewards/mongoDB.png" alt="mongoDB" />
        </div>
      </div>
    `;
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
            <input class="form-field" type="text" placeholder="Имя*" />
            <input class="form-field" type="text" placeholder="Телефон" />
          </div>
          <input class="form-field" type="email" placeholder="Электронная почта*" />
          <textarea class="form-field textarea">О проекте</textarea>
          <div class="tags-list">
            <div class="tag clickable">CRM</div>
            <div class="tag tag-pressed clickable">Мобильное приложение</div>
            <div class="tag clickable">Сайт</div>
            <div class="tag clickable">Интернет-магазин</div>
            <div class="tag clickable">Landing-page</div>
            <div class="tag clickable">Редизайн</div>
            <div class="tag clickable">MVP</div>
            <div class="tag clickable">Расширение команды</div>
            <div class="tag clickable">Другое</div>
          </div>
          <input type="file" id="img-upload" style="display:none"/>
          <label for="img-upload">
            <div class="attach-file">
              <img src="./public/homepage/Paperclip.svg" alt="attach file" />
              <p>Прикрепите документ</p>
            </div>
          </label>
          <button id="send-request">Отправить</button>
          <p class="politics">Отправкой этого сообщения вы подтверждаете прочтение и согласие c <a href="#">Политикой конфиденциальности</a></p>
        </div>
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
              <img src="../public/small-logo.svg" alt="logo"/>
              <p class="logo-name">Exceed Team</p>
            </div>
            <p class="footer-info">©Exceed Team 2016-2022<br/>Все права защищены</p>
          </div>
          <div class="footer-right">
            <div class="section">
              <h5 class="footer-section-name">Компания</h5>
              <ul class="footer-section-list">
                <li><a href="#">Портфолио</a></li>
                <li><a href="#">Команда</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>
            <div class="section">
              <h5 class="footer-section-name">Отрасли</h5>
              <ul class="footer-section-list">
                <li><a href="#">Медицина</a></li>
                <li><a href="#">Недвижимость</a></li>
                <li><a href="#">Онлайн-обучение</a></li>
                <li><a href="#">Доставка еды</a></li>
                <li><a href="#">Фитнес</a></li>
              </ul>
            </div>
            <div class="section">
              <h5 class="footer-section-name">Контакты</h5>
              <div class="email">
                <img src="./public/components/footer/at-email.svg" alt="email icon" />
                <a class="email-link" href="mailto:hello@exceed-team.com">hello@exceed-team.com</a>
              </div>
              <div class="social-links">
                <a href="#"><img src="./public/components/footer/media_social_linkedIn_icon.svg" alt="linked in link"></a>
                <a href="#"><img src="./public/components/footer/media_social_vk_icon.svg" alt="vk link"></a>
                <a href="#"><img src="./public/components/footer/media_social_behance_icon.svg" alt="behance link"></a>
                <a href="#"><img src="./public/components/footer/media_social_dribble_icon.svg" alt="dribble link"></a>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="footer-info link">Политика конфиденциальности</a>
        <div class="background-circle"></div>
      </footer>
    `;
  }
}


customElements.define('main-header', Header);
customElements.define('review-card', ReviewCard);
customElements.define('grey-card', InfoCard);
customElements.define('team-grid', TeamCard);
customElements.define('rewards-carousel', Rewards);
customElements.define('request-form', Request);
customElements.define('main-footer', Footer);