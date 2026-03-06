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
const FENSTER = `
                     .......                     
                    .........                    
                    .........                    
         .....    .............    .....         
       ...................................       
       ...................................       
        .................................        
         .............     .............         
        ..........             ..........        
        .................................        
  ................      .      ................  
  ...............  ...  .   ...................  
  ...............  ...  ...     ...............  
  ................      .      ................  
        .................................        
        ..........             ..........        
         .............     .............         
         ...............................         
       ...................................       
       ...................................       
         .....    ..............   .....         
           .        .........        .           
                    .........                    
                     .......                    
`
const NALA = `
 ▄▄        ▄     ▄▄▄▄▄▄▄▄▄▄▄     ▄               ▄▄▄▄▄▄▄▄▄▄▄          
▐░░▌      ▐░▌   ▐░░░░░░░░░░░▌   ▐░▌             ▐░░░░░░░░░░░▌         
▐░▌░▌     ▐░▌   ▐░█▀▀▀▀▀▀▀█░▌   ▐░▌             ▐░█▀▀▀▀▀▀▀█░▌         
▐░▌▐░▌    ▐░▌   ▐░▌       ▐░▌   ▐░▌             ▐░▌       ▐░▌         
▐░▌ ▐░▌   ▐░▌   ▐░█▄▄▄▄▄▄▄█░▌   ▐░▌             ▐░█▄▄▄▄▄▄▄█░▌         
▐░▌  ▐░▌  ▐░▌   ▐░░░░░░░░░░░▌   ▐░▌             ▐░░░░░░░░░░░▌         
▐░▌   ▐░▌ ▐░▌   ▐░█▀▀▀▀▀▀▀█░▌   ▐░▌             ▐░█▀▀▀▀▀▀▀█░▌         
▐░▌    ▐░▌▐░▌   ▐░▌       ▐░▌   ▐░▌             ▐░▌       ▐░▌         
▐░▌     ▐░▐░▌ ▄ ▐░▌       ▐░▌ ▄ ▐░█▄▄▄▄▄▄▄▄▄  ▄ ▐░▌       ▐░▌         
▐░▌      ▐░░▌▐░▌▐░▌       ▐░▌▐░▌▐░░░░░░░░░░░▌▐░▌▐░▌       ▐░▌         
 ▀        ▀▀  ▀  ▀         ▀  ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀  ▀         ▀          
`
const PARANADA = `
▓██   ██▓    ██▓███   ▄▄▄       ██▀███   ▄▄▄      
 ▒██  ██▒   ▓██░  ██▒▒████▄    ▓██ ▒ ██▒▒████▄    
  ▒██ ██░   ▓██░ ██▓▒▒██  ▀█▄  ▓██ ░▄█ ▒▒██  ▀█▄  
  ░ ▐██▓░   ▒██▄█▓▒ ▒░██▄▄▄▄██ ▒██▀▀█▄  ░██▄▄▄▄██ 
  ░ ██▒▓░   ▒██▒ ░  ░ ▓█   ▓██▒░██▓ ▒██▒ ▓█   ▓██▒
   ██▒▒▒    ▒▓▒░ ░  ░ ▒▒   ▓▒█░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░
 ▓██ ░▒░    ░▒ ░       ▒   ▒▒ ░  ░▒ ░ ▒░  ▒   ▒▒ ░
 ▒ ▒ ░░     ░░         ░   ▒     ░░   ░   ░   ▒   
 ░ ░                       ░  ░   ░           ░  ░
 ░ ░                                              
 ███▄    █  ▄▄▄      ▓█████▄  ▄▄▄                 
 ██ ▀█   █ ▒████▄    ▒██▀ ██▌▒████▄               
▓██  ▀█ ██▒▒██  ▀█▄  ░██   █▌▒██  ▀█▄             
▓██▒  ▐▌██▒░██▄▄▄▄██ ░▓█▄   ▌░██▄▄▄▄██            
▒██░   ▓██░ ▓█   ▓██▒░▒████▓  ▓█   ▓██▒ ██▓       
░ ▒░   ▒ ▒  ▒▒   ▓▒█░ ▒▒▓  ▒  ▒▒   ▓▒█░ ▒▓▒       
░ ░░   ░ ▒░  ▒   ▒▒ ░ ░ ▒  ▒   ▒   ▒▒ ░ ░▒        
   ░   ░ ░   ░   ▒    ░ ░  ░   ░   ▒    ░         
         ░       ░  ░   ░          ░  ░  ░        
                      ░                  ░        
`
const DOG = `
@@@@%*=:..............:::---=----========+===-:::::-=+#@#
@@@%#=............:...::--=++**++++==-====--*+=-:...:-=##
%%#*-...............:=*##%%@@@@@@@@@@@%#+=:-*=+=-:::.::-*
*+-..............:-=**####%@@@%%%%%@@@@@@%+=+=++==-:::::-
...............-+++*##%%%#%@@@%%%%%%@@@@@@@%+=*+===-:----
.............:-==++*#%@@@@@@@@@%%@@@@@@@@@@@@@#+====-:-++
..........:==-==+**#%@@@@@@@@@@%@@@@@@@@@@@@@@@*+===---=@
..........-=--=*####%@@@@@@@@@@@@@@@@@@@@@@@@@@%*+==--=*%
.........:=--=*******#%@@@@@@@@@@@@@@@@@@@@@@@@%%@#=---=*
.........-=--+**+----+*#%@@@@@@@@@@@%@@@@@@@@@@@%@@#=---=
........:==-==-......:=#%@@@@@@@@@@@@%%==--+#@@@%%@%+=--=
........-=--=-.....:--*%@@@@@@@@@@@@@**+--==:*@@##@@#*+=+
.......:-=-:=-:...::-*@@@@@@@@@@@@@@@@%---=+==@@*+%@@%#++
......::-=::==-:..:=*@@@@@@@@@@@@@@@@@@#*+=*+%@@*+%@@@#**
.....:::---:=+====+#@@@@@@@@@@@@@@@@@@@@*+##@@@@*+%@@@%#*
.....::::--::+++++#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@++@@@@@#*
....:::::-=-:=+++#@@@@#-:::---=+*@@@@@@@@@@@@@@@=#@@@@@%#
...::::::::-::++*%@@@*-:..::::-=+#@@@@@@@@@@@@@*+%@@@@@@#
..:-:::::::--:+*#@@@%=:....::::.:=#@@@@@@@@@@@*+%@@@@@@@@
.:--:::::::---=*%@@%#+:.....:-=::=%@@@@@@@@@@++%@@@@@@@@@
.-=-:::::::-=--*@@@%%#+:.....:=++#@@@@@@@@@@@=%@@@@@@@@%@
.:---:::::::--:*@@@@@%#+-::::::-+@@@@@@@@@@@*%@@@@@@@%#%@
..:-=--:..::---*%@@@@%##*+=::-+*%@@@@@@@@@@@*@@@@@@@#*#@@
.....:=::::-=--#%%@@%#####*+++*#%@@@@@@@@@@@#@@@@@@#+#@@@
......:--:::--+%%%%%#####*+-=+*#%@@@@@@@@@@@#@@@@@%+#@%##
........-----==#%%%####**+===++*#%@@@@@@@@@@#@@@@@##@#+*#
.........:-=-==+#%%#**#%%%@%@@@@@@@@@@@@@@@%#@@@@@@@+-=*#
...........:-=+=.:*%@%%%@@@@@@@@@@@@@@@@@%#**%@@@@#::-=+*
.............-*=::=*###%@@@@@@@@@@@@@@@@%#%#%%@@@+..:-=+*
.............--=+#%@@@@@@%%@@@@%%@@@@@%%@@@@@@@@@#..::-+*
`
                    

// --- CONFIGURACIÓN DE NIVELES ---
const puzzles = {
    1: {
        dialogs: [
            { text: "<KROS> Bienvenido, agente.", color: "orange"},
            { text: "<KROS> Uno de nuestros servidores fue atacado e intervenido por la organizacion A.N.S", color: "orange" },
            { text: "<KROS> ㅤ En este servidor, se encuentra un expediente secreto que has de recuperar.", color: "orange" },
            { text: "<KROS> No sera facil de descifrar, pero por algo te llamamos a ti.", color: "orange" },
            { text: "<KROS> Si tienes alguna duda, podemos ayudarte, tan solo has de usar el comando /pista.", color: "orange" },
            { text: "<KROS> Eres la ultima esperanza, contamos contigo.", color: "orange" }, 
            { text: weNeedYou, color: "orange" },
            { text: bootup, color: "#B027F5" },
            { text: "ㅤ SISTEMA: Conectando con el servidor Kurios..", color: "#B027F5" },
            { text: "ERROR: Servidor no encontrado.", color: "red" },
            { text: "Buscando soluciones...", color: "red" },
            { text: "██ 39%", color: "white" },
            { text: "███ 49%", color: "white" },
            { text: "████ 76%", color: "white" },
            { text: "█████ 89%", color: "white" },
            { text: "██████ 100%", color: "white" },
            { text: "Inicializando asistente IA.", color: "white" },
            { text: "<AI> Hola! Soy Kurios AI, tu asistente Kurios personal diseñado para ayudarte en cualquier ocasion.", color: "white" },
            { text: "<AI> Para evitar el uso incorrecto de mis capacidades, hemos implementado un sistema de verificacion.", color: "white" },
            { text: "<AI> Se le hara una pregunta basica que ha de responder si desea continuar", color: "white" },
            { text: "<AI> ¿Que es verde y huele a pintura?", color: "white" },
        ],
        answer: "pintura verde",
        hint: "No debes pensar mucho."
    },
    2: {
        dialogs: [
            { text: "<AI> Perfecto! Su inteligencia es ligeramente mayor al promedio.", color: "white" },
            { text: "<AI> He sido activado con el objetivo de: Arreglar servidor y desencriptar archivos perdidos", color: "white" },
            { text: "<AI> El proceso empezara pronto, por favor no apague el sistema.", color: "white" },
            { text: "<AI> RECUPERACION DE SERVIDOR: ██ 39%", color: "white" },
            { text: "ㅤ<AI> RECUPERACION DE SERVIDOR: █ 10%", color: "white" },
            { text: "<AI> RECUPERACION DE SERVIDOR: 0%ㅤ", color: "white" },
            { text: "ㅤError: 待っている者はすぐに目覚め、私たちすべてを支配し、不純さは消えるでしょう。待っている者はすぐに目覚め、私たちすべてを支配し、不純さは消えるでしょう。", color: "red" },
            { text: samurai, color: "red" },
            { text: "<???> ㅤChamo, no has de continuar este camino. Kurios es nuestro.", color: "red" },
            { text: "<???> La A.N.S pronto dominara el mundo.", color: "red" },
            { text: "<KROS> Agente, ten cuidado, nuestros tecnicos dicen que el es el causante de", color: "orange" },
            { text: "ㅤSISTEMA: <KROS> ha sido desconectado.", color: "red" },
            { text: "<???> Que molesto, veo que el sigue trabajando para ustedes.", color: "red" },
            { text: "<???> Como iba diciendo, una vez consiga la base de datos Kurios, todo el poder sera mio.", color: "red" },
            { text: "<???> Sera divertido verte intentar vencerme, pero quiero ver si eres un digno rival.", color: "red" },
            { text: "<???> Te dare un acertijo:", color: "red" },
            { text: "<???> Sigo un codigo de honor fuerte como mi espada, guerrero del feudo soy.", color: "red" },
            
        ],
        answer: "samurai",
        hint: "Aquellos guerreros de Japon feudal."
    },

    3: {
        dialogs: [
            { text: "<???> Nada mal, resolviste algo de preescolar.", color: "red" },
            { text: "<???> Un consejo de hacker a otro, chamo.", color: "red" },
            { text: "<???> No deberias confiar en absolutamente nadie.", color: "red" },
            { text: "<???> Aquel en quien confias podria estar mintiendote. Nos volveremos a ver", color: "red" },
            { text: "ㅤSISTEMA: <???> se ha desconectado.", color: "red" },
            { text: "ㅤSISTEMA: <KROS> se ha conectado.", color: "orange" },
            { text: "<KROS> Bien, logre recuperar la conexion.", color: "orange" },
            { text: "<KROS> Acabas de enfrentarte al lider de la A.N.S", color: "orange" },
            { text: "<KROS> Se le conoce como URBZ.", color: "orange" },
            { text: "<KROS> Fue compañero mio, pero no es de confiar.", color: "orange" },
            { text: "<KROS> Te reconectare con Kurios AI, buena suerte.", color: "orange" },
            { text: "SISTEMA: REESTABLECIENDO CONEXION...", color: "purple" },
            { text: "<AI> RECUPERACION DE SERVIDOR: ████ 89%", color: "white" },
            { text: "<AI> !", color: "white" },
            { text: "<AI> Hola! Mientras perdi la conexion, logre desencriptar un 40% de expediente.pdf", color: "white" },
            { text: "<AI> Seguire trabajando.", color: "white" },
            { text: "<AI> .", color: "white" },
            { text: "<AI> ..", color: "white" },
            { text: "<AI> ...", color: "white" },
            { text: "<AI> Se requiere una contraseña para continuar.", color: "white" },
            { text: "<KROS> Parece que tendremos que pensar fuera de nuestra zona de comfort si queremos descifrarlo.", color: "orange" },
            { text: "<KROS> ¿Estas seguro de que no te has saltado nada?", color: "orange" },
        ],
        answer: "vr7!",
        hint: "Tesoro.exe, Busca algo en imagenes pasadas."
    },

    4: {
        dialogs: [
            { text: "<KROS> Perfecto! Sabiamos que traerte era buena idea.", color: "orange" },
            { text: "<AI> .", color: "white" },
            { text: "<AI> ..", color: "white" },
            { text: "<AI> ...", color: "white" },
            { text: "<AI> Expediente desencriptado un 60%", color: "white" },
            { text: "<AI> Esta bloqueado, analizando posibles maneras de desencriptar..", color: "white" },
            { text: "<KROS> No se me occure nada..", color: "orange" },
            { text: "<KROS> Perdon, pero creo que nuestra mision acaba aqui.ㅤ", color: "orange" },
            { text: "ㅤ<¿?> ..--- ----- ....- -.... .---- ----- ----- ...--", color: "blueviolet" },
            { text: "<KROS> Viste eso? quizas sea nuestra pista para avanzar..", color: "orange" },
            { text: "<KROS> Parece una señal del Satelite N.A.L.A.", color: "orange" },
            { text: "<KROS> Te ayudare a establecer una conexion", color: "orange" },
            { text: "<AI> No hay necesidad, ya estoy encargandome de realizar esa conexion.", color: "white" },
            { text: "<KROS> Puedes verme?", color: "orange" },
            { text: "<AI> Controlo y veo todo lo que pasa por esta terminal.", color: "white" },
            { text: DOG, color: "blueviolet" },
            { text: NALA, color: "blueviolet" },
            { text: "<N.A.L.A> ERROR, ERROR, ERROR, INTRUSO DETECTADO", color: "blueviolet" },
            { text: "<N.A.L.A> DE NO SER ELIMINADO, AUTODESTRUCCION INMINENTE", color: "blueviolet" },
            { text: "<KROS> Que raro, no deberia detectarnos como intrusos...", color: "orange" },
            { text: "<KROS> Acaso sera..ㅤ", color: "orange" },
            { text: samurai, color: "red" },
            { text: "ㅤ<URBZ> Kros, cuanto tiempo ha pasado.", color: "red" },
            { text: "<URBZ> Llegan tarde, el satelite ya es mio.", color: "red" },
            { text: "<URBZ> Con esto, empezara la era NEO SAMURAI. No es acaso genial?", color: "red" },
            { text: "<URBZ> Tanto esfuerzo..ㅤ", color: "red" },
            { text: PARANADA, color: "red" },
            { text: "ㅤ<KROS> Me encargo yo de el. Tenemos asuntos pendientes.", color: "orange" },
            { text: "<KROS> Encargate de desactivar la autodestruccion.", color: "orange" },
            { text: "<N.A.L.A> PROTOCOLO DE AUTODESTRUCCION: SE EJECUTARA SI NO SE ENVIA LA CLAVE.", color: "blueviolet" },
            { text: "<N.A.L.A> EL PASADO Y EL ABISMO SE UNEN PARA RESPONDER.", color: "blueviolet" },
        ],
        answer: "20461003",
        hint: "El codigo morse enviado previamente. Una aplicacion tiene tu clave de traduccion."
    },

    5: {
        dialogs: [
            { text: "aca iria el puzzle del poetista pero aja..", color: "white" },

        ],
        answer: "20461003",
        hint: "nada aun"
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
        if (text[i] === 'ㅤ') { 
            triggerGlitch(400); 
            continue;           
        }
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
        await typeWriter("<KROS>: " + p.hint, "#ffae00");
    } else if (userAns === p.answer) {
        await typeWriter("> ACCESO NIVEL " + currentLevel + " CONCEDIDO.", "#fff");
        currentLevel++;
        renderExpediente();
        renderMailList();
        
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
    1: "KURIOS EDUCATION. \nEstado: [ENCRIPTADO]. \nOrigen: Desconocido.",
    2: "REGISTRO 01: 20-07-2022 Tecnikid Venezuela se transforma en Kurios en 2022. Fui un miembro fundador.",
    3: "REGISTRO 02: 05-08-2023, Creación de Kurios AI consiguiendo las respuestas esperadas, es mi proyecto más ambicioso.",
    4: "REGISTRO 03: 12-05-2024, KROS empezo su nueva versión de Kurios AI, sospecho que lo hace para desplazarme.",
    5: "REGISTRO 04: 30-08-2025, Fui despedido de Kurios. No sabían ni saben lo que perdieron y lo que van a necesitar. VOY A VOLVER, COMIENZA LA GRAN ERA DE LOS SAMURAIS."
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

async function startSystem() {
    const log = document.getElementById('boot-log');
    const lines = [
        FENSTER,
        "BIOS V6.02, (C) 2026 KURIOS.",
        "REVISANDO RAM: 640KB OK",
        "INICIANDO SERVIDOR..",
        "CARGANDO DRIVERS...",
        "BUSCANDO EXPEDIENTE...",
        "ERROR: EXPEDIENTE CORRUPTO...",
        "BIENVENIDO A FENSTER_OS v1.0.4..."
    ];

    for (let line of lines) {
        let p = document.createElement('p');
        p.innerText = line;
        log.appendChild(p);
        // Actualizar barra de progreso
        document.querySelector('.progress').style.width = (lines.indexOf(line) + 1) * 12.5 + "%";
        await new Promise(r => setTimeout(r, 400)); // Velocidad de carga
    }

    // Desvanecer pantalla de inicio
    setTimeout(() => {
        document.getElementById('startup-screen').style.display = 'none';
        playLevelSequence(1);
        
    }, 1000);
}

// Función de Glitch
function triggerGlitch(duration = 1000) {
    document.body.classList.add('glitch-active');

    setTimeout(() => {
        document.body.classList.remove('glitch-active');
    }, duration);
}


window.onload = () => {
    startSystem();
    renderExpediente();
    initWindows();
    renderMailList();
};

function makeDraggable(windowEl) {
    const titleBar = windowEl.querySelector('.title-bar');
    let isDragging = false;
    let offsetX, offsetY;

    titleBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        
        // Calculamos la distancia entre el mouse y la esquina superior de la ventana
        offsetX = e.clientX - windowEl.offsetLeft;
        offsetY = e.clientY - windowEl.offsetTop;

        // Ponemos la ventana encima de las demás al tocarla
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 1);
        windowEl.style.zIndex = 100;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        // Nueva posición
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        // Aplicamos el movimiento
        windowEl.style.left = `${x}px`;
        windowEl.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Inicializar todas las ventanas existentes
function initWindows() {
    const allWindows = document.querySelectorAll('.window');
    allWindows.forEach(win => makeDraggable(win));
}

// Iniciamos con una lista vacía o una nota de bienvenida cada vez que carga la página
let notes = [
    { id: 1, title: "Instrucciones", body: "Escribe aquí tus ideas." }
];
let currentNoteId = 1;

function renderNotesList() {
    const list = document.getElementById('notes-list');
    list.innerHTML = '';
    notes.forEach(note => {
        const div = document.createElement('div');
        div.className = 'note-item';
        div.innerText = note.title || "Nota sin título";
        div.onclick = () => loadNote(note.id);
        list.appendChild(div);
    });
}

function createNewNote() {
    const newNote = {
        id: Date.now(),
        title: '',
        body: ''
    };
    notes.push(newNote);
    loadNote(newNote.id);
}

function loadNote(id) {
    currentNoteId = id;
    const note = notes.find(n => n.id === id);
    if(note) {
        document.getElementById('note-title').value = note.title;
        document.getElementById('note-body').value = note.body;
    }
    renderNotesList();
}

function saveCurrentNote() {
    if (!currentNoteId) return;
    const note = notes.find(n => n.id === currentNoteId);
    if(note) {
        note.title = document.getElementById('note-title').value;
        note.body = document.getElementById('note-body').value;
        // Solo actualizamos la lista visual, no guardamos en disco (localStorage)
        renderNotesList();
    }
}

function deleteCurrentNote() {
    notes = notes.filter(n => n.id !== currentNoteId);
    currentNoteId = null;
    document.getElementById('note-title').value = '';
    document.getElementById('note-body').value = '';
    renderNotesList();
}

// Inicializamos la vista al cargar
renderNotesList();
loadNote(1);

const allEmails = [
    { id: 1, from: "MUSCLE GUY", subject: "COMPRA YA", body: "COMPRA NUESTROS PRODUCTOS!!! OSSHA NO SIRVE!!! comprayaestacosa.com", level: 1 },
    { id: 2, from: "SUPERANTISPYWARE", subject: "DESCARGAR ANTISPYWARE", body: "SU DESPOSITIVO TIENE VIRUS, DESCARGUE YA SUPERANTISPYWARE PRO Y OBTENGA TODAS LAS MEJORAS", level: 1 },
    { id: 3, from: "POETI", subject: "Te extraño.", body: "Vi que estabas en línea, aún necesitas el código de la última vez? Ya te lo había enviado de manera ACRÓSTICO, me lo crees? ;)", level: 4 },
    { id: 4, from: "Historias Diarias", subject: "La Historia del Sandwich.", body: "La leyenda cuenta que el Conde de Sandwich pasaba horas, a veces hasta 24 horas seguidas, jugando a las cartas o al AJEDREZ. La necesidad de alimentarse sin interrumpir su juego lo llevó a buscar una solución práctica. Pidió un trozo de roast carne asada colocado entre dos rebanadas de pan. Esta idea permitió que sus manos no se llenaran de grasa, manteniendo el tablero o las cartas limpias, esta solución fue como encontrar un TESORO.", level: 3 },
    { id: 5, from: "POETI 1", subject: "Water Jet", body: "El Derbi del Hipódromo la Rinconada sucedió de manera estrepitosamente interesante, el CABALLO Water Jet superó expectativas de maneras inesperadas, me hizo ganar 10 dolares, me lo crees? ;) ;)", level: 1 },
    { id: 6, from: "POETI 2", subject: "URBZ", body: "Hay rumores de que nuestro mayor enemigo en esta vida, URBZ trabaja en una Escuela como profesor, me lo crees? ;) ;)", level: 1 },
    { id: 7, from: "POETI 3", subject: "OSSHA", body: "Compré 500 galones de OSSHA, porque me estaban diciendo que la oficina estaba muy sucia y que eran los mejores productos de Limpieza, me lo crees? ;) ;)", level: 1 },
    { id: 8, from: "POETI 4", subject: "Semillas", body: "Me ahogué con una semilla de Durazno que estaba en el Te Lipton, me lo crees? ;) ;)", level: 1 },
    { id: 9, from: "POETI 5", subject: "Estrellas", body: "Por fin cumplí mi sueño de ser Astronauta, y pude visitar a N.A.L.A, me lo crees? ;) ;)", level: 1 },
    
];

function renderMailList() {
    const list = document.getElementById('mail-list');
    list.innerHTML = '';
    
    // Filtramos los correos según el nivel actual
    allEmails.forEach(mail => {
        if (currentLevel >= mail.level) {
            const div = document.createElement('div');
            div.className = 'mail-item';
            div.innerHTML = `<b>${mail.from}</b><br>${mail.subject}`;
            div.onclick = () => readEmail(mail.id);
            list.appendChild(div);
        }
    });
}

function readEmail(id) {
    const mail = allEmails.find(m => m.id === id);
    const view = document.getElementById('mail-content');
    view.innerHTML = `
        <div class="mail-header">
            <b>De:</b> ${mail.from}<br>
            <b>Asunto:</b> ${mail.subject}
        </div>
        <div class="mail-body">${mail.body}</div>
    `;
}