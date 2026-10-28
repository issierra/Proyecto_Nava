import Link from "next/link";

const preguntas = [
  {
    pregunta: "¿Cómo funciona el tutor?",
    respuesta:
      "Te acompaña con pistas y estrategias para que pienses por tu cuenta. Puede mostrarte un ejercicio parecido, ayudarte a encontrar un error o armar una solución paso a paso, pero no resuelve tu tarea por ti.",
  },
  {
    pregunta: "¿Por qué no se almacenan las conversaciones?",
    respuesta:
      "La privacidad es primero. En este prototipo, las conversaciones son simuladas y no se guardan ni pueden ser consultadas por docentes, familias u orientadores.",
  },
  {
    pregunta: "¿Qué es la ilusión de aprendizaje?",
    respuesta:
      "Es cuando parece que ya dominamos un tema porque seguimos una explicación o copiamos una respuesta, pero todavía nos cuesta resolver un reto sin ayuda. El sistema distingue ese apoyo del aprendizaje autónomo.",
  },
];

export default function Inicio() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Inicio">
          <span className="brand-mark">✳</span>
          <span>Sistema de Evaluación<br />del Aprendizaje Real</span>
        </Link>
        <nav className="top-nav" aria-label="Navegación principal">
          <a href="#docentes">Docentes</a>
          <a href="#familias">Familias</a>
          <a href="#preguntas">Preguntas frecuentes</a>
        </nav>
        <Link className="button button-small button-outline" href="/roles">Ingresar <span aria-hidden="true">↗</span></Link>
      </header>

      <section className="hero landing-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> APRENDER DE VERDAD, A TU RITMO</div>
          <h1>Crecer es poder<br /><span>hacerlo por ti.</span></h1>
          <p className="hero-lead">
            Un espacio para que estudiantes de secundaria descubran lo que saben, practiquen lo que están aprendiendo y avancen con confianza.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/roles">Explorar el prototipo <span aria-hidden="true">→</span></Link>
            <a className="text-link" href="#como-funciona">Conoce cómo funciona <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof"><span className="avatar-dots"><i>✦</i><i>●</i><i>✳</i></span><span>Un avance que se construye<br />con cada reto resuelto.</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustración de un personaje digital y su mundo de aprendizaje" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="floating-note note-top"><span className="note-icon">✦</span><span><b>¡Un nuevo logro!</b><small>Reto completado</small></span></div>
          <div className="planet planet-back" />
          <div className="mascot mascot-large"><span className="mascot-ear left" /><span className="mascot-ear right" /><span className="mascot-eye left" /><span className="mascot-eye right" /><span className="mascot-cheek left" /><span className="mascot-cheek right" /><span className="mascot-mouth" /><span className="mascot-belly" /></div>
          <div className="planet planet-front" />
          <div className="floating-note note-bottom"><span className="streak-icon">↗</span><span><b>Aprendizaje autónomo</b><small>Tu personaje sigue creciendo</small></span></div>
          <span className="sparkle sparkle-a">✦</span><span className="sparkle sparkle-b">✧</span><span className="sparkle sparkle-c">✦</span>
          <div className="art-caption">Cada reto cuenta <span>✳</span></div>
        </div>
      </section>

      <section className="principle-strip" id="como-funciona">
        <div><span className="principle-number">01</span><p><b>Aprende a tu manera</b><br />Explora temas y prueba distintas estrategias.</p></div>
        <div><span className="principle-number">02</span><p><b>Demuestra lo que sabes</b><br />Resuelve retos de aplicación sin ayuda.</p></div>
        <div><span className="principle-number">03</span><p><b>Crece con cada logro</b><br />Tu personaje refleja tu aprendizaje real.</p></div>
      </section>

      <section className="audience-section landing-wrap" id="docentes">
        <div className="section-heading">
          <div><div className="eyebrow">PARA QUIENES ENSEÑAN</div><h2>Más claridad para<br />acompañar cada avance.</h2></div>
          <p>Herramientas para planear, observar el proceso y enfocar la enseñanza donde más se necesita.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-lilac"><div className="feature-icon">▤</div><span className="feature-tag">01 / ORGANIZA</span><h3>Planeación con propósito</h3><p>Registra tareas por materia, tema y fecha para dar continuidad a lo que pasa en el aula.</p><span className="feature-decoration">▱</span></article>
          <article className="feature-card feature-peach"><div className="feature-icon">✦</div><span className="feature-tag">02 / ACTIVA</span><h3>Misiones semanales</h3><p>Propón retos de aplicación para que cada grupo ponga en práctica lo aprendido.</p><span className="feature-decoration">↗</span></article>
          <article className="feature-card feature-mint"><div className="feature-icon">◎</div><span className="feature-tag">03 / COMPRENDE</span><h3>Evaluación diagnóstica</h3><p>Distingue lo que cada estudiante resuelve con autonomía y dónde requiere acompañamiento.</p><span className="feature-decoration">◌</span></article>
          <article className="feature-card feature-yellow"><div className="feature-icon">▥</div><span className="feature-tag">04 / ACOMPAÑA</span><h3>Reportes accionables</h3><p>Consulta tendencias del grupo sin acceder a las conversaciones privadas del tutor.</p><span className="feature-decoration">▥</span></article>
        </div>
      </section>

      <section className="family-band" id="familias">
        <div className="family-inner landing-wrap">
          <div className="family-illustration" aria-hidden="true"><div className="sun-shape" /><div className="family-figure figure-one">●<span /></div><div className="family-figure figure-two">●<span /></div><div className="family-figure figure-three">●<span /></div><div className="family-ground" /><span className="family-star">✦</span></div>
          <div className="family-copy"><div className="eyebrow">PARA LAS FAMILIAS</div><h2>Entender su avance<br />también es acompañar.</h2><p>Un reporte mensual sencillo para conversar sobre lo que tu hija o hijo ya domina y los temas que puede seguir reforzando.</p>
            <div className="family-points"><div><span>↗</span><p><b>Avance por materia</b><small>Una mirada clara a cada área.</small></p></div><div><span>＋</span><p><b>Temas para reforzar</b><small>Ideas para apoyar desde casa.</small></p></div></div>
            <Link className="button button-dark" href="/roles">Conocer el espacio familiar <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="faq-section landing-wrap" id="preguntas">
        <div className="faq-intro"><div className="eyebrow">PARA EMPEZAR</div><h2>Preguntas<br />frecuentes</h2><p>Un sistema transparente para aprender con tranquilidad.</p></div>
        <div className="faq-list">{preguntas.map((item) => <details key={item.pregunta}><summary>{item.pregunta}<span aria-hidden="true">＋</span></summary><p>{item.respuesta}</p></details>)}</div>
      </section>

      <section className="closing-cta">
        <span className="cta-spark">✳</span><div className="eyebrow">TU SIGUIENTE PASO EMPIEZA AQUÍ</div><h2>¿Listos para aprender<br />con más confianza?</h2><p>Explora el prototipo desde el rol que quieras conocer.</p><Link className="button button-white" href="/roles">Elegir mi espacio <span aria-hidden="true">→</span></Link>
      </section>
      <footer className="site-footer"><Link className="brand" href="/"><span className="brand-mark">✳</span><span>Sistema de Evaluación<br />del Aprendizaje Real</span></Link><p>Prototipo educativo · Datos ficticios · Sin conversaciones almacenadas</p><span>Secundaria · 1.º a 3.º</span></footer>
      <p className="project-credit"> Proyecto final de la materia Ingeniería de Software | Elias Israel Sierra Rangel | 225361628</p>
    </main>
  );
}
