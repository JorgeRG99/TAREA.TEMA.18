import logo from "./images/logo.svg";
import mainsec from "./images/main-sec.webp";
import palm from "./images/card1.webp";
import palm2 from "./images/card2.webp";
import palm3 from "./images/card3.webp";
import aboutsecimg from "./images/about-sec.webp";
import worksecimg from "./images/work-sec.webp";
import whasticon from "./images/whatsapp_icon.png";
import "./App.css";

function App() {
  window.addEventListener("scroll", reveal);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 100;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      }
    }
  }
  reveal();
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="box-title">
            <h1 className="company-name">Palmer</h1>
          </div>
          <div className="box-logo">
            <img
              src={logo}
              className="logo"
              title="Palmer Camp logo"
              alt="White and transparen palm tree"
              width="100%"
              height="auto"
            />
          </div>
          <div className="box-title">
            <h1 className="company-name">Camp</h1>
          </div>
        </nav>
      </header>
      <main>
        <section className="main-sec">
          <div className="main-image-left">
            <img
              src={mainsec}
              className="main-sec-img"
              title="Palm tree leaf"
              alt="Palm tree leaf, envolving the page title"
              width="100%"
              height="auto"
            />
          </div>
          <div className="page-title-box">
            <h1>Titulo</h1>
            <h1>-</h1>
            <h1>Campo de Níjar</h1>
          </div>
          <div className="main-image-right">
            <img
              src={mainsec}
              className="main-sec-img"
              title="Palm tree leaf"
              alt="Palm tree leaf, envolving the page title"
              width="auto"
              height="auto"
            />
          </div>
        </section>
        <section className="first-sec">
          <h2 className="box-sec-title reveal">CERTIFICACIÓN ECOLOGICA</h2>
          <div className="card-box">
            <div className="card reveal">
              <img
                src={palm}
                className="card-image"
                title="Palm trees farm"
                alt="Palm trees growth"
                width="auto"
                height="auto"
              />
              <div className="card-text">
                <h3 className="card-title reveal">BIO FARM</h3>
                <div className="card-separator reveal"></div>
                <p className="reveal">
                  Creemos que la naturaleza tiene su propia belleza y, por lo
                  tanto, cultivamos palmeras sin podar para mantener su aspecto
                  auténtico y natural.
                </p>
              </div>
            </div>
            <div className="card reveal middlecard-separator">
              <img
                src={palm2}
                className="card-image"
                title="Not pruned palm tree"
                alt="Not pruned palm tree growth"
                width="auto"
                height="auto"
              />
              <div className="card-text">
                <h3 className="card-title reveal">GROWTH</h3>
                <div className="card-separator reveal"></div>
                <p className="reveal">
                  Criadas respetando el medio ambiente en una finca con
                  certificación ecológica, dentro del parque natural Cabo de
                  Gata-Níjar.
                </p>
              </div>
            </div>
            <div className="card reveal">
              <img
                src={palm3}
                className="card-image"
                title="Pruned palm"
                alt="Pruned palm tree, final product"
                width="100%"
                height="auto"
              />
              <div className="card-text">
                <h3 className="card-title reveal">FINAL PRODUCT</h3>
                <div className="card-separator reveal"></div>
                <p className="reveal">
                  Palmeras elegantes y saludables, ideales para paisajes y
                  jardines, agrega un toque de elegancia y belleza natural a tu
                  hogar o negocio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec work-color">
          <div className="sec-box work-text-box-width">
            <h2 className="sec-title work-color reveal">TRABAJO</h2>
            <p className="reveal">
              Nuestros principales productos son la Trachycarpus Fortunei y la
              Livistona Chinensis ambas cultivadas con execelentes cuidados y la
              mayor atención.
            </p>
            <p className="reveal">
              La Trachycarpus fortunei es una hermosa palmera que se caracteriza
              por ser una de los tipos más resitentes al frío, estas pueden
              llegar asobrevivir por debajod e los 20ºC. Se reconoce por su
              tallo cubierto de una capa de pelo y por sus hojas alargadas y
              juntas en plamas en forma de abanico. Comunmente es conocida como
              palmera excelsa.
            </p>
            <p className="reveal">
              La Livistona chinensis, nativa de asia, esta palmera puede
              utilizarse como palmera de interior o de exterior. Aunque prefire
              la luz solar, puede crecer perfectamente en ambientes de
              semisombra. Es muy utilizada por la amplitud de sus hojas
              palmeadas que pueden alcanzar más de 30 centímetros de ancho. A la
              Livistona chinensis también se le conoce comúnmente como palmera
              de abanico chino.
            </p>
          </div>
          <div className="image-box-width">
            <img
              src={worksecimg}
              className="sec-image"
              title="Work section palm tree"
              alt="Palm tree work section image"
              width="100%"
              height="auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
