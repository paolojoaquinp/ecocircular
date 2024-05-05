'use client';
import Image from "next/image";
import styles from "./page.module.css";
import PrimaryButton from "./components/PrimaryButton";
import ElevatedButton from "./components/ElevatedButton";
import { FaWhatsapp } from "react-icons/fa";
import ButtonPrimary from "./components/PrimaryButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <div className={styles.header__logo}>
          <img src="/assets/images/logo-ecocircular.jpeg" alt="Logo" width="100" height="100" />
          <h3>&nbsp;&nbsp;Economia Circular Inteligente</h3>
        </div>
        <div className={styles.actions__container}>
          <button>
            Iniciar Sesion
          </button>
          <button>
            Registrarse
          </button>
        </div>
      </header>
      <div className={styles.description}>
        <div className={styles.description__box}>
            <p>
              Ùnete a la <span>Industria Circular</span>
            </p>
            <div className={styles.actions__box}>
              <img src="/assets/images/example-photo-trash-container-ai.png" alt="Arrow Down" />
            </div>
        </div>
        <img src="/assets/images/grafica-home-user.png" alt="Grafica Home User" />
      </div>

        <h4>Encuentra tus puntos de acopio municipales</h4>
      <section className={styles.section__info__custom}>
        <div className={styles.card__info}>

          <img src="/assets/images/image-ecocircular-1.jpeg" alt="Punto de Acopio" />
        </div>
      </section>
      <h4>Reduccion Impactos ambiental</h4>
      <section className={styles.section__info}>
        <div className={styles.impact__card}>
          <p>Tipos de contenedores</p>
          <p>
          Contenedor amarillo: Residuos reciclables<br/>
          Contenedor verde: Residuos orgánicos<br/>
          Contenedor Negro: Residuos no aprovechables
          </p>
          <img src="/assets/images/image-ecocircular-2.jpeg" alt="Impacto Ambiental" />
        </div>
        <div className={styles.impact__card}>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D421533297317293%26set%3Da.131422802995012&width=500&show_text=true&appId=3794056480707064&height=552" width="500" height="552" scrolling="no"   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </section>
      <h4>Proyecciones Basadas en el Peor escenario</h4>
      <section className={styles.section__info}>
        <div className={styles.impact__card}>
          <p>Cambios de Impacto</p>
          <div className={styles.impact__icon}></div>
          <p>2000</p>
          <p>Usuarios</p>
        </div>
        <div className={styles.impact__card}>
          <p>Peor escenario proyectado</p>
          <div className={styles.impact__icon}></div>
          <p>2000</p>
          <p>Usuarios</p>
        </div>
      </section>
      <footer>
        <div className={styles.footer__info__container}>

          <div className={styles.footer__group}>
            <img src="/assets/images/logo-ecocircular.jpeg" alt="Logo" width="100" height="100" />
            
          </div>
          <div className={styles.footer__group}>
            <p className={styles.group__title}>Nosotros</p>
            <p>Quienes Somos</p>
            <p>Proyectos</p>
            <p>Blog</p>
          </div>
          <div className={styles.footer__group}>
            <p className={styles.group__title}>Informacion</p>
            <p>Quienes Somos</p>
            <p>Proyectos</p>
            <p>Blog</p>
          </div>
          <div className={styles.footer__group}>
            <p className={styles.group__title}>Mi cuenta</p>
            <p>Quienes Somos</p>
            <p>Proyectos</p>
            <p>Blog</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.addtional__info__container}>
            <p>@2024 Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
      <ElevatedButton onClick={() => {
          window.open('https://api.whatsapp.com/send?phone=59168098112&text=Hola%20me%20gustaria%20saber%20mas%20sobre%20sus%20productos')
        }}>
        <FaWhatsapp size={30} />
      </ElevatedButton>
    </main>
  );
}
