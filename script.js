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

const Alien = `                                    
            -**********-             
         :****************:          
       .********************         
      -**********************-       
     :************************.      
     **************************      
     =    +**************=    =      
     +      .**********       =      
     *        +******=        +      
     .+        +****+        +       
      :*.      .****.      .*:       
       .**:     ****     -**         
         +****************+          
           *************+            
             =********=              
                ....                 
                                     
              +******+               
          .**************.           
         ******************          
       -********************:        
      -**********************:       
      ************************       
     **************************      
    .**************************.     
    ***************************+     
    ****************************     
    ****************************     
   :****************************.          
`;
const samurai = `                                            
            =%=               %#:            
         =@@@*                 @@@#.         
       *@@@@.                 *@@@@@:       
        %@@@@                  +@@@@=        
         #@@@:       #@=       %@@@:         
          *@@@      =@@@      :@@@.          
           *@@%      @@%     -@@@:           
            .@@@#%@@#@@#@@@%@@@*             
               *@@@@@@@@@@@@%=               
              #%-  +@C1@@@   *@=              
       :#@@. -@@@@@@%@@@#@@@@@%. +@%*        
       :@@@@+*@@@@@@@@@@@@@@@@@+-@@@%        
         %@@@@@#=:        .-*%@B2@@@+         
           == .#     +%     =+  #.           
          :+  .@@%#%@@@@%#%@@*   #           
         #@    +@@@@=*#=*@@@%:   =%+         
        .       *+         %-      .         
       .%=       :         +       %#        
     .*@#        -+=*###+=*        :@%+      
    .#+-          +@@@@@@%           -**     
                    .:::                                                                 
`;
const weNeedYou = `                          :- -                       
                      @@@@##*+@@@@@                  
                    #@@%@@+ +..:+@@@                 
                   @@@@@+= @ @@@@@@+@=               
                   -@@@-@A4@@@@@@%  @@               
                   @@@@%            @@               
                    @#            - .                
                  .@.               #                
                   #@  %@@@@::.=@@@ -                
                    *  =  =@@ =@@+@.                 
                               .  #                  
                       +=        -                   
                       .:-  =@@%%=                   
                   =@  *@@-@@@@@@-                   
                  #@@@   @@    *@@-                  
             :@@@@@@#@@@   @@@     @@@@              
        +@@@@@@%%###@@@   %   @@@%  @@@@@@@@         
      +@@@%#=-+*#***+@@  @@      @@@ @@@#@@@@        
     .@@@@@@@@%=*###%@ +@%@@@@@@= #@  %@*@@@#        
     =@@@@#+.-*@=*%@@@            @@@  =@%@*%        
      @@-+==+%+#@#@#+  *@#@D1@@@@  @@#    @@@#        
      @ -@@@@@@*#@  @             +@ @    @@@.       
       .@@@@#=+**=-@@   =**   @@    *@@    @@@       
        @%=*#=++@#@@@@     =@@@@-  @@@@@    @@@      
      @@@@@-:+=%@@@@@@@@@@@- %@@@   @@@@    @@@      
      @@.  +#%@#@%@@@@@@@@@@@@@@@@  @@@ @   *@@.     
      @@ --@@@%#@@@@%%@@*###%@%@@@-  @ *@    @@@     
      @@*#@@@%#@@@=-*@@@%%%%%@%%@@@   .@@@   @@@@    
       @*-#%%#==**=%#*=-+*+***#*+*@=  @@%@    @@@    
`;

// --- CONFIGURACIÓN DE NIVELES ---
// Ahora puedes usar: "Texto normal" o { text: "Texto con color", color: "red" }
const puzzles = {
    1: {
        dialogs: [
            { text: "<KROS> Bienvenido, agente.", color: "orange"},
            { text: "<KROS> Uno de nuestros servidores fue atacado e intervenido por la organizacion A.N.S", color: "orange" },
            { text: "<KROS> En este servidor, se encuentra un expediente secreto que has de recuperar.", color: "orange" },
            { text: "<KROS> No sera facil de descifrar, pero por algo te llamamos a ti.", color: "orange" },
            { text: "<KROS> Si tienes alguna duda, podemos ayudarte, tan solo has de usar el comando /pista.", color: "orange" },
            { text: "<KROS> Eres la ultima esperanza, contamos contigo.", color: "orange" }, 
            { text: weNeedYou, color: "orange" },
            { text: bootup, color: "#B027F5" },
            { text: "SISTEMA: Conectando con el servidor Kurios..", color: "#B027F5" },
            { text: "ERROR: Servidor no encontrado.", color: "red" },
            { text: "Buscando soluciones...", color: "red" },
            { text: "██ 39%", color: "white" },
            { text: "███ 49%", color: "white" },
            { text: "████ 76%", color: "white" },
            { text: "█████ 89%", color: "white" },
            { text: "██████ 100%", color: "white" },
            { text: "Inicializando asistente IA.", color: "white" },
            { text: "<IA> Hola! Soy Kurios IA, tu asistente Kurios personal diseñado para ayudarte en cualquier ocasion.", color: "white" },
            { text: "<IA> Para evitar el uso incorrecto de mis capacidades, hemos implementado un sistema de verificacion.", color: "white" },
            { text: "<IA> Es usted un hacker?", color: "white" },
        ],
        answer: "no",
        hint: "Para completar esta operacion, no debes revelar tu identidad."
    },
    2: {
        dialogs: [
            { text: "<IA> Perfecto! Usted es todo un operador certificado.", color: "white" },
            { text: "<IA> Detecto un fallo en la seguridad del sistema.", color: "white" },
            { text: "<IA> Empezare a arreglarlo.", color: "white" },
            { text: "Error: 待っている者はすぐに目覚め、私たちすべてを支配し、不純さは消えるでしょう。待っている者はすぐに目覚め、私たちすべてを支配し、不純さは消えるでしょう。", color: "red" },
            { text: samurai, color: "red" },
            { text: "<???> Chamo, no has de continuar este camino. Kurios es nuestro.", color: "red" },
            { text: "<???> Quien soy?", color: "red" },
            { text: "<URBZ> Soy URBZ.", color: "red" },
            { text: "<URBZ> No avanzaras de aca.", color: "red" },
            { text: "<URBZ> Si deseas avanzar, demuestra tu valia y resuelve mi acertijo.", color: "red" },
            { text: "<URBZ> Gran honor lleva consigo, de una isla es y un filo es su arma.", color: "red" },
        ],
        answer: "samurai",
        hint: "Aquellos guerreros que morian por su honor."
    },

    3: {
        dialogs: [
            { text: "<URBZ> Veo que conoces bien nuestra cultura.", color: "red" },
            { text: "<URBZ> Sera divertido verte fallar, nos vemos.", color: "red" },
            { text: "<KROS> Agente, acabas de hablar con nuestro enemigo principal.", color: "orange" },
            { text: "<KROS> Por favor, proceda con precaucion.", color: "orange" },
            { text: "<KROS> Te reconectaremos con la IA.", color: "orange" },
            { text: "<IA> Cual es mi proposito?", color: "white" },
            { text: "<IA> Soy solo una maquina?", color: "white" },
            { text: "<IA> Corrigiendo... El fallo ha sido arreglado.", color: "white" },
            { text: "<IA> Ya que necesitas desencriptar el expediente, te ayudare.", color: "white" },
            { text: "<IA> El archivo esta parcialmente encriptado.", color: "white" },
            { text: "<KROS> Debe haber una respuesta en algun lugar.. revisa tu escritorio.", color: "orange" },
        ],
        answer: "vr7!",
        hint: "Tesoro.exe, Busca algo en imagenes pasadas."
    },

    4: {
        dialogs: [
            "ok ya no tengo nada mas yay",
            ".",
            "..",
            "...",
            { text: "ERROR: No hay manera de recuperarlo.", color: "red" },
            { text: "El sistema ahora sera eliminado.", color: "red" },
            Alien,
            "..--- ----- ....- -....",
            { text: "<???> Descifre esto, y le ayudare a recuperar el archivo.", color: "yellow" }
        ],
        answer: "2046",
        hint: "Aquel que nada en los mares y rios tiene tu respuesta."
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
    const speed = text.length > 170 ? 0.05 : 10;
    
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
        renderExpediente();
        
        if (puzzles[currentLevel]) {
            setTimeout(() => playLevelSequence(currentLevel), 1000);
        } else {
            await typeWriter("SISTEMA RESTAURADO TOTALMENTE. BIENVENIDO, OPERADOR.", "cyan");
        }
    } else {
        await typeWriter("> ERROR: CREDENCIALES INVÁLIDAS.", "#ff3333");
    }
}

// Contenido del expediente por niveles
const expedienteData = {
    1: "PROYECTO: SAMURAI-X. \nEstado: [ENCRIPTADO]. \nOrigen: Desconocido.",
    2: "REGISTRO 02: Las máquinas han empezado a replicar el código de honor de los guerreros antiguos.",
    3: "ADVERTENCIA: La IA Kurios no es un asistente, es un protocolo de contención.",
    4: "DATOS FINALES: La brecha se abrirá en el año 2046. El código de acceso es el nombre del primer samurái mecánico."
};

// Función para generar texto aleatorio (simular encriptación)
function obfuscate(text) {
    const chars = "ABCDEFGHIJKLMNñOPQRSTUVWXYZ0123456789%$#@&";
    return text.split('').map(char => char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Función para actualizar la ventana del expediente
function renderExpediente() {
    const container = document.getElementById('expediente-content');
    container.innerHTML = ""; // Limpiar

    for (let level in expedienteData) {
        const div = document.createElement('div');
        if (parseInt(level) < currentLevel) {
            // Nivel superado: Mostrar texto real
            div.className = "decrypted-text";
            div.innerText = `[NIVEL ${level} DESBLOQUEADO]: \n${expedienteData[level]}`;
        } else {
            // Nivel no superado: Mostrar basura
            div.className = "encrypted-text";
            div.innerText = `[NIVEL ${level} BLOQUEADO]: \n${obfuscate(expedienteData[level])}`;
        }
        container.appendChild(div);
        container.appendChild(document.createElement('hr'));
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
    renderExpediente();
};