"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  alertasOrientacion,
  datosAlumno,
  grupos,
  misionesSemanales,
  regiones,
  recompensas,
  reporteFamiliar,
  reportesDocente,
  tareasIniciales,
} from "./datos";

type Perfil = "alumno" | "docente" | "familia" | "orientacion";
type Tarea = (typeof tareasIniciales)[number];

const menus: Record<"alumno" | "docente", { id: string; nombre: string; icono: string }[]> = {
  alumno: [
    { id: "personaje", nombre: "Mi personaje", icono: "✳" },
    { id: "mundo", nombre: "Mapa del mundo", icono: "⌖" },
    { id: "tutor", nombre: "Tutor", icono: "☏" },
    { id: "misiones", nombre: "Misiones semanales", icono: "▤" },
    { id: "recompensas", nombre: "Recompensas", icono: "✦" },
  ],
  docente: [
    { id: "grupos", nombre: "Mis grupos", icono: "▦" },
    { id: "planeacion", nombre: "Planeación", icono: "▤" },
    { id: "misiones", nombre: "Misiones", icono: "✦" },
    { id: "reportes", nombre: "Reportes", icono: "▥" },
  ],
};

const nombresPerfil: Record<Perfil, string> = {
  alumno: "Alumno",
  docente: "Docente",
  familia: "Padre de familia",
  orientacion: "Orientador escolar",
};

function Encabezado({ perfil }: { perfil: Perfil }) {
  return (
    <header className="workspace-header">
      <Link className="brand" href="/"><span className="brand-mark">✳</span><span>Sistema de Evaluación<br />del Aprendizaje Real</span></Link>
      <div className="workspace-header-right">
        <span className="demo-pill"><i /> Prototipo con datos ficticios</span>
        <span className="header-divider" />
        <span className="profile-chip"><span className="profile-avatar">{perfil === "alumno" ? "C" : perfil === "docente" ? "P" : perfil === "familia" ? "M" : "O"}</span>{perfil === "alumno" ? "Chispa" : perfil === "docente" ? "Profa. Mariana" : perfil === "familia" ? "Familia Ramírez" : "Orientación"}<span className="profile-chevron">⌄</span></span>
      </div>
    </header>
  );
}

function AvisoPrivacidad() {
  return <div className="privacy-notice"><span className="privacy-icon">⌑</span><p><b>Tu privacidad importa.</b> Las conversaciones de los alumnos con el tutor no se almacenan ni se pueden consultar.</p></div>;
}

function TituloSeccion({ kicker, titulo, descripcion, children }: { kicker: string; titulo: string; descripcion?: string; children?: ReactNode }) {
  return <div className="dashboard-title-row"><div><div className="eyebrow">{kicker}</div><h1>{titulo}</h1>{descripcion && <p>{descripcion}</p>}</div>{children}</div>;
}

function Mascota({ grande = false }: { grande?: boolean }) {
  return <div className={`mascot ${grande ? "mascot-large" : ""}`} aria-label="Personaje digital Chispa" role="img"><span className="mascot-ear left" /><span className="mascot-ear right" /><span className="mascot-eye left" /><span className="mascot-eye right" /><span className="mascot-cheek left" /><span className="mascot-cheek right" /><span className="mascot-mouth" /><span className="mascot-belly" /></div>;
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`panel ${className}`}>{children}</section>;
}

function NivelMateria({ nivel, materia, progreso, color }: { nivel: number; materia: string; progreso: number; color: string }) {
  return <div className="subject-level"><div className="subject-level-label"><span>{materia}</span><span>Nv. {nivel}</span></div><div className="progress-track"><span className={color} style={{ width: `${progreso}%` }} /></div></div>;
}

function Personaje() {
  return <>
    <TituloSeccion kicker="TU CAMINO DE APRENDIZAJE" titulo="Mi personaje" descripcion="Tu personaje crece cuando demuestras lo que aprendiste por tu cuenta." />
    <div className="student-overview">
      <Panel className="character-panel">
        <div className="character-topline"><span className="soft-label">TU COMPAÑERO DE AVENTURA</span><span className="status-pill status-green">● En crecimiento</span></div>
        <div className="character-display"><div className="character-halo"><Mascota grande /></div><div className="character-info"><span className="soft-label">NOMBRE ELEGIDO</span><h2>{datosAlumno.nombrePersonaje}</h2><p>Curiosa, valiente y lista para el siguiente reto.</p><div className="overall-level"><div><span>Nivel general</span><b>Nv. {datosAlumno.nivelGeneral}</b></div><div className="progress-track"><span className="bar-violet" style={{ width: `${datosAlumno.experienciaActual}%` }} /></div><small>{datosAlumno.experienciaActual} / {datosAlumno.experienciaSiguiente} puntos para el siguiente nivel</small></div></div></div>
        <div className="character-footnote"><span>✦</span> Solo los retos resueltos sin ayuda hacen crecer a {datosAlumno.nombrePersonaje}.</div>
      </Panel>
      <Panel className="subject-panel"><div className="panel-heading"><div><span className="soft-label">TU PROGRESO</span><h2>Nivel por materia</h2></div><span className="round-icon">↗</span></div><div className="subject-level-list">{datosAlumno.niveles.map((item) => <NivelMateria key={item.materia} {...item} />)}</div><span className="panel-footnote">El avance se actualiza al demostrar lo aprendido.</span></Panel>
    </div>
    <div className="insight-banner"><span className="insight-star">✳</span><p><b>Vas a tu ritmo, y eso está bien.</b><br />Practicar con ayuda también cuenta como parte del camino.</p><span className="insight-decoration">✦</span></div>
  </>;
}

function MapaDelMundo() {
  return <>
    <TituloSeccion kicker="EXPLORA Y PON A PRUEBA LO QUE SABES" titulo="Mapa del mundo" descripcion="Cada región guarda retos para usar tus conocimientos en situaciones nuevas." />
    <div className="world-banner"><div className="world-banner-copy"><span className="soft-label">DESTINO DE LA SEMANA</span><h2>El valle de las ideas</h2><p>Ayuda a las exploradoras a preparar su próxima expedición.</p><span className="world-banner-count">⌖ &nbsp;5 regiones por descubrir</span></div><div className="world-landscape" aria-hidden="true"><span className="mountain mountain-one" /><span className="mountain mountain-two" /><span className="world-sun" /><span className="world-path">〰</span><span className="world-flag">⚑</span></div></div>
    <div className="section-subheading"><div><h2>Regiones de aprendizaje</h2><p>Resuelve un reto para abrir nuevos caminos.</p></div><span className="map-legend"><i className="legend-dot done" /> Completado <i className="legend-dot open" /> Disponible <i className="legend-dot locked" /> Bloqueado</span></div>
    <div className="region-grid">{regiones.map((region) => <Panel key={region.materia} className="region-card"><div className="region-heading"><span className={`region-icon ${region.color}`}>{region.icono}</span><div><span className="soft-label">REGIÓN</span><h3>{region.materia}</h3></div><span className="region-arrow">↗</span></div><div className="challenge-list">{region.retos.map((reto) => <div className="challenge-row" key={reto.titulo}><span className={`challenge-state state-${reto.estado.toLowerCase()}`}>{reto.estado === "Completado" ? "✓" : reto.estado === "Disponible" ? "○" : "⌑"}</span><span>{reto.titulo}</span><span className={`challenge-status status-text-${reto.estado.toLowerCase()}`}>{reto.estado}</span></div>)}</div></Panel>)}</div>
  </>;
}

const respuestasTutor: Record<string, string> = {
  similar: "¡Claro! Imagina que una señal de 2 metros proyecta una sombra de 3 metros. Si la torre proyecta una sombra de 12 metros, ¿qué relación puedes usar para encontrar su altura? ¿Qué dato te falta?",
  error: "¡Vamos a investigar! Revisa si usaste la misma unidad para todas las medidas y si comparaste la altura con su sombra correspondiente. ¿En qué paso podría cambiar la proporción?",
  piezas: "Empecemos por partes: 1) Anota la altura y sombra de la señal. 2) Anota la sombra de la torre. 3) Dibuja dos triángulos semejantes. ¿Qué pieza te gustaría colocar primero?",
};

function Tutor() {
  const [respuesta, setRespuesta] = useState("");
  const opciones = [
    { id: "similar", texto: "Ver un ejercicio similar resuelto", icono: "▤" },
    { id: "error", texto: "Encontrar el error en una solución", icono: "⌕" },
    { id: "piezas", texto: "Armar la solución con piezas", icono: "▦" },
  ];
  return <>
    <TituloSeccion kicker="PISTAS, NO RESPUESTAS" titulo="Tu tutor" descripcion="Una conversación de práctica para ayudarte a pensar el siguiente paso." />
    <div className="tutor-layout"><Panel className="chat-panel"><div className="chat-top"><div className="tutor-avatar">✳</div><div><b>Guía de aprendizaje</b><small>Ejemplo simulado · sin inteligencia artificial real</small></div><span className="chat-safe">⌑ Privado</span></div>
      <div className="chat-messages"><div className="chat-day">EJEMPLO DE CONVERSACIÓN · NO SE GUARDA</div><div className="chat-bubble student-bubble">¿Me dices la respuesta de mi tarea? Una torre proyecta una sombra de 12 metros y una señal de 2 metros proyecta una sombra de 3.</div><div className="chat-message tutor-message"><div className="tutor-mini">✳</div><div className="chat-bubble"><b>No te daré la respuesta, pero sí puedo ayudarte a descubrirla.</b><br />¿Qué relación observas entre la altura de la señal y su sombra? Elige cómo quieres empezar:</div></div>{respuesta && <div className="chat-message tutor-message response-message"><div className="tutor-mini">✳</div><div className="chat-bubble">{respuesta}</div></div>}</div>
      <div className="tutor-options"><span className="soft-label">ELIGE UNA FORMA DE PRACTICAR</span>{opciones.map((opcion) => <button className={`tutor-option ${respuesta && respuesta === respuestasTutor[opcion.id] ? "selected-option" : ""}`} key={opcion.id} onClick={() => setRespuesta(respuestasTutor[opcion.id])}><span>{opcion.icono}</span>{opcion.texto}<b>→</b></button>)}</div>
      <div className="chat-disclaimer">⌑ &nbsp;Las conversaciones no se almacenan ni se pueden consultar.</div>
    </Panel>
    <aside className="tutor-aside"><Panel className="tutor-tip"><span className="tip-spark">✦</span><span className="soft-label">¿CÓMO TE AYUDA?</span><h3>Las buenas preguntas te hacen avanzar.</h3><p>El tutor te ofrece pistas para que construyas tu propio razonamiento, sin resolver la tarea por ti.</p></Panel><Panel className="tutor-topic"><span className="soft-label">RETO RELACIONADO</span><div className="topic-icon">∑</div><h3>La torre de vigilancia</h3><p>Matemáticas · Proporcionalidad</p><span className="topic-level">Reto disponible</span></Panel></aside></div>
  </>;
}

function MisionesAlumno() {
  return <>
    <TituloSeccion kicker="APRENDE TAMBIÉN FUERA DEL MAPA" titulo="Misiones semanales" descripcion="Actividades para observar, conversar y practicar en tu comunidad." />
    <div className="mission-list">{misionesSemanales.map((mision, index) => <Panel className="mission-card" key={mision.titulo}><span className={`mission-number mission-color-${index + 1}`}>0{index + 1}</span><div className="mission-info"><span className="soft-label">{mision.materia}</span><h2>{mision.titulo}</h2><p>Fecha de entrega: {mision.fecha}</p></div><span className="class-only"><span>⌂</span> Disponible solo en el aula</span><span className="mission-arrow">↗</span></Panel>)}</div>
    <div className="mission-reminder"><span>✦</span><p><b>Las misiones son para compartir.</b><br />Pide a tu docente que te explique la actividad en clase.</p></div>
  </>;
}

function Recompensas() {
  return <>
    <TituloSeccion kicker="CELEBRA LO QUE HAS LOGRADO" titulo="Recompensas" descripcion="Cada insignia reconoce una parte de tu camino. ¡Sigue explorando!" />
    <Panel className="group-goal"><div className="goal-art"><span>⌂</span><i>✦</i><b>✳</b></div><div className="goal-info"><span className="soft-label">META DE TODA LA CLASE</span><h2>Reparar la torre de vigilancia</h2><p>Cuando el grupo demuestre lo que sabe, encenderemos la señal para todos.</p><div className="goal-progress-row"><div className="progress-track"><span className="bar-coral" style={{ width: "80%" }} /></div><b>24 de 30 compañeros listos</b></div></div><span className="goal-badge">✦<small>EN EQUIPO</small></span></Panel>
    <div className="section-subheading reward-subheading"><div><h2>Mis recompensas desbloqueadas</h2><p>Logros individuales que ya son tuyos.</p></div><span className="reward-count">✦ &nbsp;3 insignias</span></div>
    <div className="reward-grid">{recompensas.map((reward) => <Panel className="reward-card" key={reward.titulo}><span className={`reward-icon ${reward.color}`}>{reward.icono}</span><div><span className="unlocked-label">✓ DESBLOQUEADA</span><h3>{reward.titulo}</h3><p>{reward.descripcion}</p></div></Panel>)}</div>
  </>;
}

function Grupos() {
  return <>
    <TituloSeccion kicker="TU COMUNIDAD DE APRENDIZAJE" titulo="Mis grupos" descripcion="Consulta los grupos que acompañas este ciclo escolar." />
    <div className="summary-cards"><Panel><span className="summary-icon summary-lilac">▦</span><span className="soft-label">GRUPOS ACTIVOS</span><strong>3</strong><small>En este ciclo escolar</small></Panel><Panel><span className="summary-icon summary-peach">♙</span><span className="soft-label">ALUMNOS</span><strong>85</strong><small>En todos tus grupos</small></Panel><Panel><span className="summary-icon summary-mint">✦</span><span className="soft-label">MISIONES ESTA SEMANA</span><strong>4</strong><small>Programadas para tus grupos</small></Panel></div>
    <div className="section-subheading"><div><h2>Grupos asignados</h2><p>Vista general de tus estudiantes por grado.</p></div><button className="button button-outline button-small" type="button">＋ Nuevo grupo</button></div>
    <div className="group-grid">{grupos.map((grupo, index) => <Panel className="group-card" key={grupo.nombre}><div className={`group-icon group-icon-${index + 1}`}>▦</div><span className="soft-label">SECUNDARIA · CICLO 2026–2027</span><h3>{grupo.nombre}</h3><p>{grupo.materia}</p><div className="group-card-bottom"><span><b>{grupo.alumnos}</b> alumnos</span><span className="group-arrow">→</span></div></Panel>)}</div>
  </>;
}

function Planeacion() {
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);
  const [mensaje, setMensaje] = useState("");
  function agregarTarea(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nueva: Tarea = {
      materia: String(form.get("materia")),
      tema: String(form.get("tema")),
      descripcion: String(form.get("descripcion")),
      entrega: String(form.get("entrega")),
      grado: String(form.get("grado")),
    };
    setTareas((actuales) => [nueva, ...actuales]);
    setMensaje("La tarea se agregó al ejemplo de planeación.");
    event.currentTarget.reset();
  }
  return <>
    <TituloSeccion kicker="ORGANIZA EL TRABAJO DEL AULA" titulo="Planeación" descripcion="Registra tareas y mantén a la vista los próximos temas de tus grupos." />
    <div className="planning-layout"><Panel className="form-panel"><div className="panel-heading"><div><span className="soft-label">NUEVA ACTIVIDAD</span><h2>Registrar una tarea</h2></div><span className="round-icon">＋</span></div><form className="demo-form" onSubmit={agregarTarea}><label>Materia<select name="materia" defaultValue="Matemáticas" required><option>Matemáticas</option><option>Español</option><option>Ciencias</option><option>Historia</option><option>Inglés</option></select></label><label>Grado y grupo<select name="grado" defaultValue="2.º B" required><option>1.º A</option><option>2.º B</option><option>3.º A</option></select></label><label>Tema<input name="tema" placeholder="Ej. Fracciones y proporciones" required /></label><label>Descripción<textarea name="descripcion" placeholder="¿Qué aprenderán o practicarán?" rows={3} required /></label><label>Fecha de entrega<input name="entrega" type="date" required /></label><button className="button button-primary" type="submit">Agregar a la planeación <span>→</span></button>{mensaje && <p className="form-success" role="status">✓ {mensaje}</p>}</form></Panel>
    <Panel className="task-table-panel"><div className="panel-heading"><div><span className="soft-label">OCTUBRE 2026</span><h2>Tareas del mes</h2></div><span className="round-icon">▤</span></div><div className="table-scroll"><table className="data-table"><thead><tr><th>Tarea</th><th>Grupo</th><th>Entrega</th></tr></thead><tbody>{tareas.map((tarea, i) => <tr key={`${tarea.tema}-${i}`}><td><b>{tarea.tema}</b><small>{tarea.materia} · {tarea.descripcion}</small></td><td><span className="table-grade">{tarea.grado}</span></td><td>{tarea.entrega}</td></tr>)}</tbody></table></div></Panel></div>
  </>;
}

function MisionesDocente() {
  const [mensaje, setMensaje] = useState("");
  const [misionActual, setMisionActual] = useState("");
  function programarMision(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setMisionActual(`${String(form.get("mision"))} · ${String(form.get("grado"))}`);
    setMensaje("La misión quedó programada en este prototipo.");
    event.currentTarget.reset();
  }
  return <>
    <TituloSeccion kicker="INVITA A APLICAR LO APRENDIDO" titulo="Misiones semanales" descripcion="Programa un reto para que un grado explore, observe y ponga en práctica sus ideas." />
    <div className="mission-builder"><Panel className="form-panel"><div className="panel-heading"><div><span className="soft-label">DISEÑA UN RETO</span><h2>Programar misión semanal</h2></div><span className="round-icon">✦</span></div><form className="demo-form" onSubmit={programarMision}><label>Grado<select name="grado" defaultValue="1.º" required><option>1.º</option><option>2.º</option><option>3.º</option></select></label><label>Materia<select name="materia" defaultValue="Ciencias" required><option>Matemáticas</option><option>Español</option><option>Ciencias</option><option>Historia</option><option>Inglés</option></select></label><label>Nombre de la misión<input name="mision" placeholder="Ej. Explora las sombras de tu patio" required /></label><label>Descripción<textarea name="descripcion" rows={3} placeholder="¿Qué reto de aplicación resolverá el grupo?" required /></label><label>Fecha de inicio<input name="inicio" type="date" required /></label><button className="button button-primary" type="submit">Programar misión <span>→</span></button>{mensaje && <p className="form-success" role="status">✓ {mensaje}</p>}</form></Panel>
    <aside className="mission-preview"><Panel className="preview-card"><div className="preview-illustration">✦<span>⌖</span>✳</div><span className="soft-label">MISIÓN DE LA SEMANA</span><h3>{misionActual || "Un reto conecta lo aprendido con el mundo real."}</h3><p>Disponible solo en el aula. Las misiones semanales no incluyen acceso al tutor.</p><span className="preview-pill">⌂ &nbsp;Acompañamiento docente</span></Panel><div className="info-note"><span>ⓘ</span><p>Las misiones son espacios de aplicación acompañada, no actividades con respuestas automáticas.</p></div></aside></div>
  </>;
}

function ReportesDocente() {
  const barras = [
    { nombre: "Matemáticas", porcentaje: 76, color: "bar-violet" },
    { nombre: "Español", porcentaje: 84, color: "bar-coral" },
    { nombre: "Ciencias", porcentaje: 62, color: "bar-green" },
    { nombre: "Historia", porcentaje: 58, color: "bar-yellow" },
    { nombre: "Inglés", porcentaje: 70, color: "bar-blue" },
  ];
  return <>
    <TituloSeccion kicker="OBSERVA EL PROCESO, NO SOLO EL RESULTADO" titulo="Reportes del grupo" descripcion="Señales de aprendizaje para orientar tus siguientes decisiones de aula.">
      <button className="button button-outline button-small" type="button">↓ Descargar reporte</button>
    </TituloSeccion>
    <AvisoPrivacidad />
    <div className="report-summary"><Panel><span className="soft-label">APRENDIZAJE AUTÓNOMO</span><strong>68%</strong><small>Demuestra el tema sin ayuda</small><div className="summary-mini-track"><span className="bar-violet" style={{ width: "68%" }} /></div></Panel><Panel><span className="soft-label">APRENDIZAJE ASISTIDO</span><strong>23%</strong><small>Avanza con pistas o guía</small><div className="summary-mini-track"><span className="bar-coral" style={{ width: "23%" }} /></div></Panel><Panel><span className="soft-label">ILUSIÓN DETECTADA</span><strong>9%</strong><small>Conviene volver a comprobar</small><div className="summary-mini-track"><span className="bar-yellow" style={{ width: "9%" }} /></div></Panel></div>
    <Panel className="report-chart-panel"><div className="panel-heading"><div><span className="soft-label">2.º B · 31 ALUMNOS</span><h2>Aprendizaje autónomo por materia</h2></div><span className="chart-period">Este mes⌄</span></div><div className="chart-area"><div className="chart-y-labels"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div className="chart-bars">{barras.map((barra) => <div className="chart-bar-column" key={barra.nombre}><div className="chart-bar-rail"><span className={barra.color} style={{ height: `${barra.porcentaje}%` }} /></div><b>{barra.porcentaje}%</b><small>{barra.nombre}</small></div>)}</div></div></Panel>
    <Panel className="report-table-panel"><div className="panel-heading"><div><span className="soft-label">MUESTRA DE EJEMPLO</span><h2>Señales por alumno y materia</h2></div><span className="table-grade">6 registros</span></div><p className="table-caption">Los datos describen avances por tema, no calificaciones finales.</p><div className="table-scroll"><table className="data-table report-table"><thead><tr><th>Alumno</th><th>Materia</th><th>Aprendizaje autónomo</th><th>Aprendizaje asistido</th><th>Ilusión detectada</th></tr></thead><tbody>{reportesDocente.map((fila) => <tr key={`${fila.alumno}-${fila.materia}`}><td><b>{fila.alumno}</b></td><td>{fila.materia}</td><td><Estado estado={fila.autonomo} /></td><td><Estado estado={fila.asistido} /></td><td><Estado estado={fila.ilusion} /></td></tr>)}</tbody></table></div><div className="table-legend"><Estado estado="Consolidado" /> Dominio demostrado <Estado estado="En avance" /> Con guía <Estado estado="Revisar" /> Requiere observar</div></Panel>
  </>;
}

function Estado({ estado }: { estado: string }) {
  const tipo = estado === "Consolidado" ? "good" : estado === "En avance" ? "progress" : estado === "Revisar" || estado === "Atención" ? "attention" : estado === "Sin señales" ? "neutral" : "start";
  return <span className={`table-status status-${tipo}`}><i />{estado}</span>;
}

function EspacioDocente({ seccion }: { seccion: string }) {
  if (seccion === "planeacion") return <Planeacion />;
  if (seccion === "misiones") return <MisionesDocente />;
  if (seccion === "reportes") return <ReportesDocente />;
  return <Grupos />;
}

function EspacioAlumno({ seccion }: { seccion: string }) {
  if (seccion === "mundo") return <MapaDelMundo />;
  if (seccion === "tutor") return <Tutor />;
  if (seccion === "misiones") return <MisionesAlumno />;
  if (seccion === "recompensas") return <Recompensas />;
  return <Personaje />;
}

function EspacioFamilia() {
  return <>
    <TituloSeccion kicker="REPORTE MENSUAL · OCTUBRE 2026" titulo="El avance de Sofía" descripcion="Una guía sencilla para conversar sobre sus aprendizajes y acompañar sus próximos pasos." />
    <div className="family-report-banner"><div className="family-report-avatar">S</div><div><span className="soft-label">REPORTE DE EJEMPLO · 2.º DE SECUNDARIA</span><h2>Un mes de descubrimientos</h2><p>Sofía completó retos en las cinco materias. Aquí puedes ver qué está practicando.</p></div><span className="report-month-badge">OCT<br /><b>2026</b></span></div>
    <AvisoPrivacidad />
    <div className="plain-language-key"><span className="soft-label">¿CÓMO LEER ESTE REPORTE?</span><div><Estado estado="Consolidado" /><p>Lo resolvió por su cuenta.</p></div><div><Estado estado="En avance" /><p>Va avanzando con pistas o guía.</p></div><div><Estado estado="Atención" /><p>Conviene practicarlo y volver a comprobar.</p></div></div>
    <div className="parent-subject-list">{reporteFamiliar.map((materia) => <Panel className="parent-subject-card" key={materia.materia}><div className="parent-subject-heading"><span className={`subject-round ${materia.color}`}>{materia.materia.slice(0, 1)}</span><div><span className="soft-label">AVANCE POR MATERIA</span><h2>{materia.materia}</h2></div><span className="parent-subject-arrow">⌄</span></div><div className="parent-status-grid"><div><span className="soft-label">APRENDIZAJE AUTÓNOMO</span><Estado estado={materia.autonomo} /><p>{materia.explicacionAutonomo}</p></div><div><span className="soft-label">APRENDIZAJE ASISTIDO</span><Estado estado={materia.asistido} /><p>{materia.explicacionAsistido}</p></div><div><span className="soft-label">ILUSIÓN DETECTADA</span><Estado estado={materia.ilusion} /><p>{materia.explicacionIlusion}</p></div></div><div className="reinforce-row"><span className="soft-label">TEMAS A REFORZAR</span><div>{materia.reforzar.map((tema) => <span className="topic-chip" key={tema}>{tema}</span>)}</div></div></Panel>)}</div>
    <p className="no-conversations"><span>⌑</span> Este reporte no incluye conversaciones ni respuestas del tutor. Solo muestra señales de avance por materia.</p>
  </>;
}

function EspacioOrientacion() {
  return <>
    <TituloSeccion kicker="ACOMPAÑAMIENTO OPORTUNO" titulo="Alertas escolares" descripcion="Señales generales para orientar el acompañamiento. No incluyen conversaciones ni respuestas del tutor." />
    <div className="orientation-summary"><Panel><span className="summary-icon summary-peach">◎</span><span className="soft-label">ALERTAS ACTIVAS</span><strong>3</strong><small>Requieren revisión profesional</small></Panel><Panel><span className="summary-icon summary-lilac">◷</span><span className="soft-label">ACTUALIZACIÓN</span><strong className="date-summary">15 oct</strong><small>Información de ejemplo</small></Panel><Panel><span className="summary-icon summary-mint">⌑</span><span className="soft-label">PRIVACIDAD</span><strong className="private-summary">Protegida</strong><small>Sin acceso a conversaciones</small></Panel></div>
    <AvisoPrivacidad />
    <Panel className="alerts-panel"><div className="panel-heading"><div><span className="soft-label">SEGUIMIENTO SUGERIDO</span><h2>Alertas recientes</h2></div><span className="table-grade">3 alertas</span></div><div className="table-scroll"><table className="data-table alert-table"><thead><tr><th>Alumno</th><th>Categoría del riesgo</th><th>Nivel de urgencia</th><th>Fecha</th><th>Detalle</th></tr></thead><tbody>{alertasOrientacion.map((alerta) => <tr key={alerta.alumno}><td><b>{alerta.alumno}</b></td><td>{alerta.categoria}</td><td><span className={`urgency urgency-${alerta.urgencia.toLowerCase()}`}><i />{alerta.urgencia}</span></td><td>{alerta.fecha}</td><td>{alerta.detalle}</td></tr>)}</tbody></table></div><div className="alert-caution">ⓘ &nbsp;Estas señales son orientativas y no sustituyen una valoración profesional ni muestran conversaciones.</div></Panel>
    <div className="orienter-guidance"><span>✦</span><p><b>Una alerta es una invitación a acercarse.</b><br />Consulta al equipo docente y sigue los protocolos de acompañamiento de tu institución.</p></div>
  </>;
}

export function EspacioInstitucional({ perfil }: { perfil: Perfil }) {
  const esPrincipal = perfil === "alumno" || perfil === "docente";
  const [seccion, setSeccion] = useState(perfil === "alumno" ? "personaje" : "grupos");
  const contenido = perfil === "alumno" ? <EspacioAlumno seccion={seccion} /> : perfil === "docente" ? <EspacioDocente seccion={seccion} /> : perfil === "familia" ? <EspacioFamilia /> : <EspacioOrientacion />;
  return <>
    <Encabezado perfil={perfil} />
    <div className={`workspace-layout ${esPrincipal ? "" : "workspace-layout-simple"}`}>
      {esPrincipal && <aside className="sidebar"><Link href="/roles" className="sidebar-back">← <span>Cambiar de perfil</span></Link><span className="sidebar-label">MI ESPACIO</span><div className="sidebar-menu">{menus[perfil].map((item) => <button className={`sidebar-item ${seccion === item.id ? "active" : ""}`} key={item.id} onClick={() => setSeccion(item.id)}><span className="sidebar-icon">{item.icono}</span>{item.nombre}{seccion === item.id && <span className="sidebar-active-mark" />}</button>)}</div><div className="sidebar-bottom"><div className="sidebar-mini-mascot"><Mascota /></div><span><b>{perfil === "alumno" ? "¡Sigue explorando!" : "Un paso a la vez"}</b><small>{perfil === "alumno" ? "Tu mundo te espera." : "Cada avance cuenta."}</small></span></div></aside>}
      <main className="dashboard-main"><div className="dashboard-content">{contenido}<footer className="dashboard-footer"><span>Prototipo educativo · Información ficticia</span><span>Secundaria · 1.º a 3.º</span></footer></div></main>
    </div>
  </>;
}

export function PerfilPage({ perfil }: { perfil: Perfil }) {
  return <div className="institutional-page"><EspacioInstitucional perfil={perfil} /></div>;
}

export function NombrePerfil({ perfil }: { perfil: Perfil }) {
  return <>{nombresPerfil[perfil]}</>;
}
