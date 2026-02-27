const history = document.getElementById('history');
const input = document.getElementById('user-input');

let currentLevel = 1;
let isTyping = false;

// 1. Definir ASCII fuera para evitar errores de sintaxis
const ART_WELCOME = `
   ____  ____  ____  ____  ____ 
  (_  _)( ___)(  _ \(  _ \(  _ )
    )(   )__)  )   / ) __/ ) __/
   (__) (____)(_)\_)(__)  (__)  
`;

// 2. Base de datos de la historia
const story = {
    1: {
        dialogs: [
            ART_WELCOME,
            "SISTEMA: Conexión establecida...",
            "IA: Bienvenido, Operador Aaram.",
            "PUZZLE 1: Cuanto más le quitas, más grande se hace. ¿Qué es?"
        ],
        solution: "un agujero",
        hint: "Piensa en el suelo o en una tela."
    },
    2: {
        dialogs: [
            "IA: Correcto. Accediendo al núcleo...",
            "PUZZLE 2: ¿Qué número sigue en esta serie? 1, 1, 2, 3, 5, 8..."
        ],
        solution: "13",
        hint: "Suma los dos números anteriores (Sucesión de Fibonacci)."
    }
    // Puedes ir añadiendo más aquí siguiendo la misma estructura
};

// 3. Función de escritura con manejo de errores
async function typeEffect(text) {
    if (!text) return;
    isTyping = true;
    input.disabled = true;
    
    const div = document.createElement('div');
    div.className = 'line';
    
    // Si detectamos que es ASCII (muchos símbolos), usamos estilo pre
    if (text.includes('_') || text.includes('/') || text.includes('@')) {
        div.style.whiteSpace = "pre";
        div.style.fontFamily = "monospace";
    }
    
    history.appendChild(div);
    
    for (let i = 0; i < text.length; i++) {
        // Soporte para saltos de línea
        if (text[i] === '\n') {
            div.innerHTML += '<br>';
        } else {
            div.innerHTML += text[i];
        }
        history.scrollTop = history.scrollHeight;
        await new Promise(res => setTimeout(res, 15)); 
    }
    
    isTyping = false;
    input.disabled = false;
    input.focus();
}

async function playLevel(levelNum) {
    const data = story[levelNum];
    if (!data) return;

    for (const line of data.dialogs) {
        await typeEffect(line);
        await new Promise(res => setTimeout(res, 500));
    }
}

// 4. Escuchar el teclado
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !isTyping) {
        const val = input.value.toLowerCase().trim();
        
        // Mostrar lo que el usuario escribió
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `<span style="color:white">> ${input.value}</span>`;
        history.appendChild(userDiv);

        if (val === 'pista') {
            typeEffect("PISTA: " + story[currentLevel].hint);
        } else if (val === story[currentLevel].solution) {
            currentLevel++;
            if (story[currentLevel]) {
                playLevel(currentLevel);
            } else {
                typeEffect("SISTEMA DESBLOQUEADO. ADIÓS, USUARIO.");
            }
        } else {
            typeEffect("ERROR: Acceso denegado.");
        }
        
        input.value = '';
    }
});

// Arrancar el juego manualmente al cargar
window.onload = () => {
    playLevel(1);

};
