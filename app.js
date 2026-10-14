const questions = [
  { topic: "Escritorio", q: "¿Qué tecla abre la vista de Actividades para buscar aplicaciones y ventanas?", a: ["Alt", "Super (Windows)", "Ctrl", "Esc"], correct: 1, why: "La tecla Super abre Actividades en el escritorio GNOME de Ubuntu.", tip: "Piensa en Super como tu punto de partida: buscar, abrir apps y cambiar de espacio de trabajo." },
  { topic: "Escritorio", q: "¿Cuál es el atajo más habitual para alternar entre aplicaciones abiertas?", a: ["Ctrl + Tab", "Super + Tab", "Alt + Tab", "Ctrl + Alt + T"], correct: 2, why: "Alt + Tab muestra y recorre las aplicaciones abiertas.", tip: "Mantén Alt presionada y pulsa Tab varias veces para elegir la ventana que quieres activar." },
  { topic: "Archivos", q: "En la aplicación Archivos, ¿qué atajo muestra u oculta archivos como .bashrc?", a: ["Ctrl + H", "Ctrl + Shift + H", "Alt + H", "Ctrl + ."], correct: 0, why: "Ctrl + H alterna la visibilidad de archivos ocultos, que normalmente comienzan con un punto.", tip: "Los archivos de configuración personales suelen estar ocultos para evitar cambios accidentales." },
  { topic: "Archivos", q: "Quieres mover un archivo sin dejar una copia en su ubicación original. ¿Qué acción es apropiada?", a: ["Copiar y Pegar", "Cortar y Pegar", "Crear enlace", "Comprimir"], correct: 1, why: "Cortar y pegar traslada el elemento; copiar y pegar crea un duplicado.", tip: "Recuerda: mover cambia la ubicación; copiar conserva el original." },
  { topic: "Terminal", q: "¿Qué comando muestra el directorio de trabajo actual?", a: ["ls", "cd", "pwd", "whoami"], correct: 2, why: "pwd significa 'print working directory' y escribe la ruta de la carpeta actual.", tip: "Antes de modificar archivos, ejecuta pwd para confirmar dónde estás." },
  { topic: "Terminal", q: "¿Qué comando lista también los archivos ocultos de un directorio?", a: ["ls -a", "ls -h", "list --hidden", "show ."], correct: 0, why: "La opción -a de ls incluye las entradas que comienzan por punto.", tip: "Usa ls -la cuando además necesites permisos, propietario y fechas." },
  { topic: "Terminal", q: "¿Cuál es una forma segura de obtener ayuda sobre el comando cp?", a: ["cp --destroy", "man cp", "cp help now", "sudo cp"], correct: 1, why: "man cp abre el manual local del comando cp con opciones y ejemplos.", tip: "También puedes probar comando --help para una referencia breve." },
  { topic: "Terminal", q: "¿Qué representa ~ en la terminal?", a: ["El directorio raíz /", "El directorio temporal /tmp", "Tu directorio personal", "El directorio anterior"], correct: 2, why: "La tilde es una abreviatura de tu directorio personal, por ejemplo /home/estudiante.", tip: "cd sin argumentos también vuelve a tu directorio personal." },
  { topic: "Sistema", q: "¿Para qué se utiliza principalmente el Gestor de actualizaciones?", a: ["Eliminar usuarios", "Instalar actualizaciones de software y seguridad", "Cambiar el fondo", "Formatear discos"], correct: 1, why: "Mantiene actualizados paquetes instalados, incluidas correcciones de seguridad.", tip: "En un examen, prioriza actualizar desde herramientas oficiales en lugar de instalar archivos desconocidos." },
  { topic: "Sistema", q: "¿Qué área usarías para conectar una red Wi-Fi desde el escritorio?", a: ["Menú del sistema en la esquina superior", "Papelera", "Editor de texto", "Carpeta Documentos"], correct: 0, why: "El menú del sistema contiene los controles rápidos de red, sonido, energía y sesión.", tip: "Haz clic en los indicadores superiores para acceder a ajustes rápidos." },
  { topic: "Usuarios", q: "¿Cuál es la diferencia fundamental entre bloquear la pantalla y cerrar sesión?", a: ["No hay diferencia", "Bloquear conserva programas abiertos; cerrar sesión termina la sesión", "Cerrar sesión solo apaga el monitor", "Bloquear elimina archivos temporales"], correct: 1, why: "Al bloquear, tus aplicaciones continúan ejecutándose y se requiere autenticación para volver.", tip: "Usa Super + L antes de alejarte del equipo; cierra sesión al terminar de usar una cuenta compartida." },
  { topic: "Archivos", q: "¿Qué es la Papelera en Ubuntu?", a: ["Una copia de seguridad permanente", "Un lugar temporal para elementos eliminados que puedes restaurar o vaciar", "Una carpeta que cifra archivos", "Un registro del sistema"], correct: 1, why: "Los archivos eliminados se conservan temporalmente en la Papelera hasta que se vacía.", tip: "Vaciar la Papelera elimina esos elementos definitivamente: revisa su contenido antes." },
  { topic: "Terminal", q: "Para crear una carpeta llamada proyectos en el directorio actual, usarías:", a: ["new proyectos", "mkdir proyectos", "touch proyectos", "cd proyectos"], correct: 1, why: "mkdir significa 'make directory' y crea directorios.", tip: "Después usa cd proyectos para entrar en ella y ls para comprobar que existe." },
  { topic: "Aplicaciones", q: "¿Cuál es la forma recomendada de instalar software gráfico en Ubuntu para principiantes?", a: ["Ejecutar cualquier archivo descargado", "Usar App Center / Centro de aplicaciones", "Copiar la app a Escritorio", "Cambiar permisos de todos los archivos"], correct: 1, why: "El Centro de aplicaciones proporciona paquetes revisados e integración con el sistema.", tip: "Comprueba el origen, las reseñas y los permisos antes de instalar." },
  { topic: "Permisos", q: "Cuando un comando pide sudo, ¿qué implica?", a: ["Se ejecutará con privilegios administrativos", "Se borrará el sistema", "Se abrirá una interfaz gráfica", "Se ejecutará más rápido"], correct: 0, why: "sudo permite ejecutar una acción como administrador tras autenticarte.", tip: "Lee siempre el comando completo antes de usar sudo: concede permisos elevados, no es un prefijo rutinario." },
  { topic: "Escritorio", q: "¿Qué ventaja ofrecen los espacios de trabajo?", a: ["Aumentan la memoria física", "Organizan ventanas en áreas virtuales separadas", "Eliminan archivos duplicados", "Sustituyen las carpetas"], correct: 1, why: "Permiten separar tareas, como estudio y navegación, sin mezclar sus ventanas.", tip: "Abre Actividades para ver, crear y mover ventanas entre espacios de trabajo." },
  { topic: "Terminal", q: "¿Qué comando usarías para cambiar al directorio Documentos desde tu carpeta personal?", a: ["go Documentos", "cd Documentos", "pwd Documentos", "mkdir Documentos"], correct: 1, why: "cd cambia el directorio actual; al estar en ~, Documentos es una ruta relativa válida.", tip: "Las rutas relativas parten de tu ubicación actual; las absolutas comienzan con /." },
  { topic: "Sistema", q: "¿Cuál es una buena práctica antes de apagar el equipo?", a: ["Desconectar la corriente inmediatamente", "Guardar el trabajo y cerrar aplicaciones necesarias", "Eliminar la carpeta personal", "Cambiar la contraseña"], correct: 1, why: "Guardar evita pérdida de trabajo y cerrar aplicaciones permite que finalicen correctamente.", tip: "El menú del sistema ofrece las opciones Suspender, Reiniciar y Apagar de forma segura." }
];

const state = JSON.parse(localStorage.getItem("ubuntuExamProgress") || '{"answers":{},"streak":0,"bestStreak":0}');
let current = 0;
let selectedTopic = "Todos";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function save() { localStorage.setItem("ubuntuExamProgress", JSON.stringify(state)); }
function visibleQuestions() { return selectedTopic === "Todos" ? questions : questions.filter((q) => q.topic === selectedTopic); }
function topicNames() { return ["Todos", ...new Set(questions.map((q) => q.topic))]; }
function resultFor(index) { return state.answers[index]; }
function stats() {
  const entries = Object.values(state.answers);
  return { answered: entries.length, correct: entries.filter(Boolean).length };
}
function renderTopics() {
  $("#topic-list").innerHTML = topicNames().map((topic) => {
    const items = topic === "Todos" ? questions : questions.filter((q) => q.topic === topic);
    const completed = items.filter((q) => Object.hasOwn(state.answers, questions.indexOf(q))).length;
    return `<button class="topic-button ${selectedTopic === topic ? "active" : ""}" data-topic="${topic}">${topic}<span>${completed}/${items.length}</span></button>`;
  }).join("");
  $$(".topic-button").forEach((button) => button.addEventListener("click", () => { selectedTopic = button.dataset.topic; current = 0; renderQuiz(); renderTopics(); }));
}
function renderQuiz() {
  const set = visibleQuestions();
  if (current >= set.length) current = 0;
  const question = set[current];
  const absoluteIndex = questions.indexOf(question);
  const answered = Object.hasOwn(state.answers, absoluteIndex);
  $("#question-topic").textContent = question.topic.toUpperCase();
  $("#question-number").textContent = `Pregunta ${current + 1} de ${set.length}`;
  $("#quiz-progress").style.width = `${((current + 1) / set.length) * 100}%`;
  $("#question-text").textContent = question.q;
  $("#options").innerHTML = question.a.map((option, index) => {
    let classes = "option";
    if (answered && index === question.correct) classes += " correct";
    if (answered && index !== question.correct && state.answers[absoluteIndex] === false && window.lastAnswer === index) classes += " incorrect";
    return `<button class="${classes}" data-answer="${index}" ${answered ? "disabled" : ""}><span class="option-letter">${"ABCD"[index]}</span><span>${option}</span></button>`;
  }).join("");
  const feedback = $("#feedback");
  feedback.className = "feedback hidden";
  $("#next-question").classList.add("hidden");
  if (answered) showFeedback(question, state.answers[absoluteIndex]);
  $$(".option").forEach((button) => button.addEventListener("click", () => answerQuestion(question, absoluteIndex, Number(button.dataset.answer))));
  updateCounts();
}
function answerQuestion(question, index, answer) {
  const correct = answer === question.correct;
  window.lastAnswer = answer;
  state.answers[index] = correct;
  state.streak = correct ? state.streak + 1 : 0;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  save();
  renderQuiz();
  showFeedback(question, correct);
  renderTopics();
}
function showFeedback(question, correct) {
  const feedback = $("#feedback");
  feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
  feedback.innerHTML = `<strong>${correct ? "¡Correcto! Buen razonamiento." : "Aún no. Úsalo para reforzar el concepto."}</strong><p>${question.why}</p><p class="tip"><b>Tip de examen:</b> ${question.tip}</p>`;
  $("#next-question").classList.remove("hidden");
}
function updateCounts() {
  const { answered, correct } = stats();
  $("#correct-count").textContent = correct;
  $("#answered-count").textContent = answered;
}
function renderProgress() {
  const { answered, correct } = stats();
  $("#metric-answered").textContent = answered;
  $("#metric-accuracy").textContent = answered ? `${Math.round((correct / answered) * 100)}%` : "—";
  $("#metric-streak").textContent = state.bestStreak;
  $("#topic-progress").innerHTML = topicNames().slice(1).map((topic) => {
    const items = questions.filter((q) => q.topic === topic);
    const wins = items.filter((q) => state.answers[questions.indexOf(q)]).length;
    const progress = (wins / items.length) * 100;
    return `<div class="topic-progress-row"><b>${topic}</b><div class="progress-track"><div style="width:${progress}%"></div></div><span>${wins}/${items.length}</span></div>`;
  }).join("");
}
function showScreen(name) {
  $$(".screen").forEach((screen) => screen.classList.toggle("active", screen.id === name));
  $$(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.screen === name));
  if (name === "progress") renderProgress();
  if (name === "practice") { renderTopics(); renderQuiz(); }
}
function openApp(app) { $$(".window").forEach((win) => win.classList.add("hidden")); $(`#${app}-window`).classList.remove("hidden"); if (app === "terminal") $("#terminal-input").focus(); }
const commands = {
  help: "Comandos disponibles: help, pwd, ls, ls -a, whoami, cd, mkdir proyectos, clear.",
  pwd: "/home/estudiante",
  ls: "Documentos  Descargas  Imágenes  notas-examen.txt",
  "ls -a": ".  ..  .bashrc  .config  Documentos  Descargas  Imágenes  notas-examen.txt",
  whoami: "estudiante",
  "cd": "Ahora estás en: /home/estudiante",
  "mkdir proyectos": "Directorio creado: proyectos",
};

$$(".nav-button").forEach((button) => button.addEventListener("click", () => showScreen(button.dataset.screen)));
$$("[data-go-practice]").forEach((button) => button.addEventListener("click", () => showScreen("practice")));
$$("[data-app]").forEach((button) => button.addEventListener("click", () => openApp(button.dataset.app)));
$$(".close-window").forEach((button) => button.addEventListener("click", () => button.closest(".window").classList.add("hidden")));
$("#theme-toggle").addEventListener("click", () => document.body.classList.toggle("dark"));
$("#terminal-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#terminal-input");
  const command = input.value.trim();
  const output = $("#terminal-output");
  output.textContent += `\nestudiante@ubuntu:~$ ${command}\n`;
  if (command === "clear") output.textContent = "";
  else output.textContent += `${commands[command] || (command ? `bash: ${command}: command not found\nTip: escribe help para los comandos simulados.` : "")}\n`;
  input.value = ""; output.scrollTop = output.scrollHeight;
});
$("#next-question").addEventListener("click", () => { current = (current + 1) % visibleQuestions().length; renderQuiz(); });
$("#reset-progress").addEventListener("click", () => { if (confirm("¿Reiniciar todas tus respuestas y métricas?")) { state.answers = {}; state.streak = 0; state.bestStreak = 0; save(); renderTopics(); renderQuiz(); } });
setInterval(() => { $("#clock").textContent = new Intl.DateTimeFormat("es-ES", { hour: "2-digit", minute: "2-digit", weekday: "short" }).format(new Date()); }, 1000);
$("#clock").textContent = new Intl.DateTimeFormat("es-ES", { hour: "2-digit", minute: "2-digit", weekday: "short" }).format(new Date());
renderTopics(); renderQuiz();
