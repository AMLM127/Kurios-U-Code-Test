const history = document.getElementById('history');
const input = document.getElementById('user-input');

let currentLevel = 1;
let isTyping = false;

// --- SECCIÓN DE ARTE ASCII ---
const bootup = `
 ▄    ▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░▌  ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌ ▐░▌ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌▐░▌  ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌          
▐░▌░▌   ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ 
▐░░▌    ▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌
▐░▌░▌   ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀      ▐░▌     ▐░▌       ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌
▐░▌▐░▌  ▐░▌       ▐░▌▐░▌     ▐░▌       ▐░▌     ▐░▌       ▐░▌          ▐░▌
▐░▌ ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌  ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌
▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀    ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀                                                                 
                                                                  
`;

const ART_SUCCESS = `
    __________
   /          \\
  |  SUCCESS   |
   \\__________/
`;

// --- CONFIGURACIÓN DE NIVELES ---
// Ahora puedes usar: "Texto normal" o { text: "Texto con color", color: "red" }
const puzzles = {
    1: {
        dialogs: [
            "Bienvenido a esta experiencia interactiva.",
            "Tienes la tarea de recuperar un expediente corrupto, has de resolver acertijos para hacerlo",
            "De dudar de la respuesta, el sistema es capaz de ayudarte con el comando /pista",  
            { text: bootup, color: "#B027F5" },
            { text: "SISTEMA: Conectando con el servidor Kurios..", color: "#B027F5" },
            { text: "ERROR: Servidor no encontrado.", color: "red" },
            { text: "Intentando cargar respaldo...", color: "red" },
            { text: ".", color: "red" },
            { text: "..", color: "red" },
            { text: "...", color: "red" },
            { text: "Inicializando asistente IA.", color: "#B027F5" },
            "<IA> Usted ha activado a Kurios IA, su herramienta de reparacion.",
            "<IA> Solo para confirmar, es usted un hacker?"
        ],
        answer: "no",
        hint: "Has de responder con tu verdad."
    },
    2: {
        dialogs: [
            "<IA> Perfecto!",
            "<IA> Revisare ahora que esta fallando, por favor espere.",
            { text: "ERROR: Creemos que quizas si eres un hacker", color: "red" },
            { text: "Para confirmar tu identidad, responda con cuantos objetos usted vea usualmente.", color: "red" },
        ],
        answer: "4",
        hint: "El escritorio tiene tus respuestas."
    },

};

function openWindow(id) {
    document.getElementById(id).style.display = 'block';
}

function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
}

// Función Typewriter con Soporte de Color y Auto-Scroll
async function typeWriter(text, color = "#00ff41") {
    isTyping = true;
    input.disabled = true;
    
    const line = document.createElement('div');
    line.style.marginBottom = "10px";
    line.style.color = color;
    line.style.whiteSpace = "pre-wrap"; 
    line.style.fontFamily = "monospace";
    history.appendChild(line);
    
    // Si es ASCII o texto largo, va volando (0.5ms), si es corto va normal (25ms)
    const speed = text.length > 500 ? 0.5 : 25;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n') {
            line.innerHTML += '<br>';
        } else {
            line.innerHTML += text[i];
        }
        
        // Mantener el scroll al fondo mientras escribe
        history.scrollTop = history.scrollHeight;
        await new Promise(r => setTimeout(r, speed));
    }
    
    // Asegurar scroll al final de la línea
    history.scrollTop = history.scrollHeight;
    
    isTyping = false;
    input.disabled = false;
    input.focus();
}

// Función para manejar la secuencia de diálogos (Soporta objetos con color)
async function playLevelSequence(levelNum) {
    const p = puzzles[levelNum];
    if (!p) return;

    for (const line of p.dialogs) {
        // Si la línea es un objeto {text, color}, lo usamos. Si no, usamos verde por defecto.
        if (typeof line === 'object') {
            await typeWriter(line.text, line.color);
        } else {
            await typeWriter(line);
        }
        await new Promise(r => setTimeout(r, 600)); 
    }
}

async function handleInput(val) {
    const p = puzzles[currentLevel];
    const userAns = val.toLowerCase().trim();

    if (userAns === '/pista') {
        await typeWriter("SISTEMA: " + p.hint, "#ffae00");
    } else if (userAns === p.answer) {
        await typeWriter("> ACCESO NIVEL " + currentLevel + " CONCEDIDO.", "#fff");
        currentLevel++;
        
        if (puzzles[currentLevel]) {
            setTimeout(() => playLevelSequence(currentLevel), 1000);
        } else {
            await typeWriter("SISTEMA RESTAURADO TOTALMENTE. BIENVENIDO, OPERADOR.", "cyan");
        }
    } else {
        await typeWriter("> ERROR: CREDENCIALES INVÁLIDAS.", "#ff3333");
    }
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !isTyping) {
        const val = input.value;
        const line = document.createElement('div');
        line.innerHTML = `<span style="color:white">> ${val}</span>`;
        history.appendChild(line);
        
        handleInput(val);
        input.value = '';
    }
});

window.onload = () => {
    playLevelSequence(1);
};