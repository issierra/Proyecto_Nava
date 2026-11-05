import Link from "next/link";

const roles = [
  { href: "/alumno", numero: "01", titulo: "Alumno", descripcion: "Explora tu mundo, practica y ayuda a crecer a tu personaje.", icono: "✳", color: "role-lilac" },
  { href: "/docente", numero: "02", titulo: "Docente", descripcion: "Planea actividades y acompaña el avance de tus grupos.", icono: "▤", color: "role-peach" },
  { href: "/familia", numero: "03", titulo: "Padre de familia", descripcion: "Consulta el reporte mensual y cómo apoyar desde casa.", icono: "⌂", color: "role-mint" },
  { href: "/orientacion", numero: "04", titulo: "Orientador escolar", descripcion: "Revisa alertas de acompañamiento, nunca conversaciones.", icono: "◎", color: "role-yellow" },
];

export default function SeleccionDeRol() {
  return (
    <main className="role-page">
      <header className="site-header role-header">
        <Link className="brand" href="/"><span className="brand-mark">✳</span><span>Sistema de Evaluación<br />del Aprendizaje Real</span></Link>
        <Link className="back-link" href="/">← Volver al inicio</Link>
      </header>
      <section className="role-content">
        <div className="eyebrow"><span className="eyebrow-dot" /> UN ESPACIO PARA CADA QUIEN</div>
        <h1>¿Desde dónde<br /><span>quieres comenzar?</span></h1>
        <p className="role-intro">Elige un perfil para explorar las herramientas del prototipo.</p>
        <div className="role-grid">{roles.map((role) => (
          <Link className={`role-card ${role.color}`} href={role.href} key={role.href}>
            <div className="role-card-top"><span className="role-icon">{role.icono}</span><span className="role-number">{role.numero}</span></div>
            <h2>{role.titulo}</h2><p>{role.descripcion}</p><span className="role-enter">Entrar al espacio <b aria-hidden="true">↗</b></span>
          </Link>
        ))}</div>
        <p className="demo-note"><span>ⓘ</span> Este es un prototipo de interfaz con información de ejemplo. No se guardan datos.</p>
      </section>
    </main>
  );
}
