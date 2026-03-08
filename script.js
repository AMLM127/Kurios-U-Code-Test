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
const FIN = `
   ▄████████  ▄█  ███▄▄▄▄  
  ███    ███ ███  ███▀▀▀██▄
  ███    █▀  ███▌ ███   ███
 ▄███▄▄▄     ███▌ ███   ███
▀▀███▀▀▀     ███▌ ███   ███
  ███        ███  ███   ███
  ███        ███  ███   ███
  ███        █▀    ▀█   █▀ 
`     
const Credits = `
░█░█░▀█▀░█▄█░█░░                                                  
░█▀█░░█░░█░█░█░░                                                  
░▀░▀░░▀░░▀░▀░▀▀▀                                                  
░█▀█░█▀█░█▀▄░█▀█░█▄█░░░█░░░▀█▀░█▀▀░▀█▀░█▀█                        
░█▀█░█▀█░█▀▄░█▀█░█░█░░░█░░░░█░░▀▀█░░█░░█▀█                        
░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀░░▀░░▀░▀                        
░░░                                                               
░░░                                                               
░▀░                                                               
░█▀▀░█▀▀░█▀▀                                                      
░█░░░▀▀█░▀▀█                                                      
░▀▀▀░▀▀▀░▀▀▀                                                      
░█▀█░█▀█░█▀▄░█▀█░█▄█░░░█░░░▀█▀░█▀▀░▀█▀░█▀█                        
░█▀█░█▀█░█▀▄░█▀█░█░█░░░█░░░░█░░▀▀█░░█░░█▀█                        
░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀░░▀░░▀░▀                        
░░░                                                               
░░░                                                               
░▀░                                                               
░▀▀█░█▀█░█░█░█▀█░█▀▀░█▀▀░█▀▄░▀█▀░█▀█░▀█▀                          
░░░█░█▀█░▀▄▀░█▀█░▀▀█░█░░░█▀▄░░█░░█▀▀░░█░                          
░▀▀░░▀░▀░░▀░░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░░░░▀░                          
░█▀█░█▀█░█▀▄░█▀█░█▄█░░░█░░░▀█▀░█▀▀░▀█▀░█▀█                        
░█▀█░█▀█░█▀▄░█▀█░█░█░░░█░░░░█░░▀▀█░░█░░█▀█                        
░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀░░▀░░▀░▀                        
░░░                                                               
░░░                                                               
░▀░                                                               
░█▀█░█▀█░█▀▄░█▀▄░█▀█░▀█▀░▀█▀░█░█░█▀█                              
░█░█░█▀█░█▀▄░█▀▄░█▀█░░█░░░█░░▀▄▀░█▀█                              
░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░░▀░░▀▀▀░░▀░░▀░▀                              
░█▀█░█▀█░█▀▄░█▀█░█▄█░░░░░░░▀▀█░█▀▀░█▀▀░█░█░█▀▀░░░░                
░█▀█░█▀█░█▀▄░█▀█░█░█░░░░░░░░░█░█▀▀░▀▀█░█░█░▀▀█░░░░                
░▀░▀░▀░▀░▀░▀░▀░▀░▀░▀░▄▀░░░░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▄▀░                
░█▀█░█▀█░▀█▀░█░█░█▀█░█░░░▀█▀░█▀▀░░░░░░░█▀▄░█▀█░█▄█░█▀▀░█▀▀░█▀▀░░░░
░█░█░█▀█░░█░░█▀█░█▀█░█░░░░█░░█▀▀░░░░░░░█▀▄░█▀█░█░█░▀▀█░█▀▀░▀▀█░░░░
░▀░▀░▀░▀░░▀░░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▄▀░░░░▀░▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▄▀░
░█▀█░█▀▄░▀█▀░█▀█░█▀▄░█▀█░█▀█                                      
░█▀█░█▀▄░░█░░█▀█░█░█░█░█░█▀█                                      
░▀░▀░▀░▀░▀▀▀░▀░▀░▀▀░░▀░▀░▀░▀                                      
░░░                                                               
░░░                                                               
░▀░                                                               
░█▀█░█▀▀░█▀▄░█▀█░█▀▄░█▀▀░█▀▀░▀█▀░█▄█░▀█▀░█▀▀░█▀█░▀█▀░█▀█░█▀▀      
░█▀█░█░█░█▀▄░█▀█░█░█░█▀▀░█░░░░█░░█░█░░█░░█▀▀░█░█░░█░░█░█░▀▀█      
░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀      
░█░█░█░█░█▀▄░▀█▀░█▀█░█▀▀                                          
░█▀▄░█░█░█▀▄░░█░░█░█░▀▀█                                          
░▀░▀░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀▀▀                                          
░▀▀█░█▀▀░█▀▀░█░█░█▀▀░░░█░█░█▀▄░█▀▄░█▀█░█▀▀░▀▀█                    
░░░█░█▀▀░▀▀█░█░█░▀▀█░░░█░█░█▀▄░█▀▄░█▀█░█▀▀░▄▀░                    
░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░░░▀▀▀░▀░▀░▀▀░░▀░▀░▀▀▀░▀▀▀                    
░█░█░█▀▀░█▀▀░█▀▀░█▀▄                                              
░█░█░█▀▀░█░░░█▀▀░█▀▄                                              
░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀▀░                                              
░█▀█░█▀█░█░░░█▀█                                                  
░█░█░█▀█░█░░░█▀█                                                  
░▀░▀░▀░▀░▀▀▀░▀░▀                                                  
░░░                                                               
░░░                                                               
░▀░                                                               
░█▀▀░█▀█░█▀█░▀█▀░▀█▀░█▀█░█░█░█▀█░█▀▄░█▀█░░░                       
░█░░░█░█░█░█░░█░░░█░░█░█░█░█░█▀█░█▀▄░█▀█░░░                       
░▀▀▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀░▀░▀▀▀░▀░▀░▀░▀░▀░▀░▀░                       
░▀▀▄░▄▀▄░▀▀▄░▄▀▀░░░                                               
░▄▀░░█/█░▄▀░░█▀▄░░░                                               
░▀▀▀░░▀░░▀▀▀░░▀░░▀░                                               
`

// --- CONFIGURACIÓN DE NIVELES ---
const puzzles = {
    1: {
        dialogs: [
            { text: "<SISTEMA> El archivo Expediente ha sido parcialmente recuperado.", color: "#B027F5"},
            { text: "<SISTEMA> ... *Se está recibiendo una conexión por parte del agente de Kurios, KROS.", color: "#B027F5"},
            { text: "ㅤ<KROS> Bienvenido, agente _______.", color: "orange"},
            { text: "<KROS> Nuestro servidor ha sido atacado e intervenido por la organización A.N.S.", color: "orange" },
            { text: "<KROS> El administrador principal del servidor ha desaparecido. Creemos que fue secuestrado por esta malvada organización.", color: "orange" },
            { text: "<KROS> El ataque vino después de que el administrador intentara abrir un archivo llamado Expediente. Al parecer el archivo contiene información de gran importancia para Kurios.", color: "orange" },
            { text: "<KROS> Aunque disponemos de una gran parte de información del expediente, el mismo está corrupto, y no es confiable.", color: "orange" },
            { text: "<KROS> El resto de la información, sin embargo, se encuentra principalmente en nuestro servidor. Debemos indagar en él y recuperar los fragmentos perdidos.", color: "orange"},
            { text: "<KROS> Tras el ataque, múltiples protocolos de seguridad han sido activados. No puedo acceder al servidor de forma completa desde mi ubicación actual.", color: "orange" },
            { text: "<KROS> Por lo tanto, la única persona con acceso completo al servidor, eres tú. ", color: "orange" },
            { text: "<KROS> Aunque no puedo ayudarte directamente, te ofreceré mis sugerencias mediante el uso del comando /pista escrito en la terminal de la sesión.", color: "orange" },
            { text: "<KROS> No será una misión fácil. Sin embargo, confío en tu experiencia. Sé que eres la persona que resolverá el asunto.", color: "orange" },
            { text: "<KROS> Eres la última esperanza. Cuento contigo.", color: "orange" }, 
            { text: weNeedYou, color: "orange" },
            { text: bootup, color: "#B027F5" },
            { text: "SISTEMA: Conectando con el servidor Kurios..", color: "#B027F5" },
            { text: "ㅤERROR: Servidor no encontrado.", color: "red" },
            { text: "Buscando soluciones...", color: "red" },
            { text: "██ 39%", color: "white" },
            { text: "███ 49%", color: "white" },
            { text: "████ 76%", color: "white" },
            { text: "█████ 89%", color: "white" },
            { text: "██████ 100%", color: "white" },
            { text: "Inicializando asistente IA.", color: "white" },
            { text: "<AI> ¡Hola! Soy Kurios AI, tu asistente Kurios personal, diseñado para ayudarte en cualquier ocasión. ", color: "white" },
            { text: "<AI> Para evitar el uso incorrecto de mis capacidades, hemos implementado un sistema de verificación humana.", color: "white" },
            { text: "<AI> A continuación, te haré una pregunta básica que debes responder si deseas continuar. ", color: "white" },
            { text: "<AI> ¿Qué es verde y huele a pintura?", color: "white" },
        ],
        answer: "pintura verde",
        hint: "No debes pensar mucho."
    },
    2: {
        dialogs: [
            { text: "<AI> ¡Perfecto! Tu inteligencia es ligeramente superior al promedio.", color: "white" },
            { text: "<AI> He sido activado con el objetivo de ayudarte a recuperar la información dispersa en el servidor, y lograr descifrar el expediente. ", color: "white" },
            { text: "<AI> El proceso de la terminal permanecerá abierto a partir de ahora. ", color: "white" },
            { text: "<AI> RECUPERACIÓN DE SERVIDOR: ██ 39%", color: "white" },
            { text: "ㅤ<AI> RECUPERACIÓN DE SERVIDOR: █ 10%", color: "white" },
            { text: "ㅤ<AI> RECUPERACIÓN DE SERVIDOR: 0%ㅤ", color: "white" },
            { text: "ㅤError: 待っている者はすぐに目覚め、私たちすべてを支配し、不純さは消えるでしょう。待っている者はすぐに目覚め、私たちすべてを支配し、不純さは消えるでしょう。", color: "red" },
            { text: samurai, color: "red" },
            { text: "<???> Chamo, no has de continuar este camino. Kurios es nuestro.", color: "red" },
            { text: "<???> La A.N.S pronto dominará el mundo.", color: "red" },
            { text: "<KROS> Agente, ten cuidado, nuestros ingenieros dicen que él es el causante de ...", color: "orange" },
            { text: "ㅤSISTEMA: <KROS> ha sido desconectado.", color: "#B027F5" },
            { text: "<???> Que molesto, veo que él sigue trabajando con ustedes.", color: "red" },
            { text: "<???> Prosigo con mi explicación. Una vez consiga la información del expediente, todo Kurios será mío. ", color: "red" },
            { text: "<???> Será divertido enfrentarme a ti. Pero antes, quiero saber si eres un rival digno.", color: "red" },
            { text: "<???> Te daré un acertijo:", color: "red" },
            { text: "<???> Sigo un código de honor fuerte como mi espada. Guerrero del feudo soy.", color: "red" },
            
        ],
        answer: "samurai",
        hint: "Aquellos guerreros de Japon feudal."
    },

    3: {
        dialogs: [
            { text: "<???> Nada mal chamo... Resolviendo este acertijo de preescolar.", color: "red" },
            { text: "<???> Te daré un consejo de hacker a otro, chamo.", color: "red" },
            { text: "<???> No deberías confiar en absolutamente nadie.", color: "red" },
            { text: "<???> Aquel en quién confías, podría estar mintiéndote. Nos volveremos a ver. ", color: "red" },
            { text: "ㅤSISTEMA: <???> se ha desconectado.", color: "#B027F5" },
            { text: "SISTEMA: <KROS> se ha conectado.", color: "#B027F5" },
            { text: "<KROS> Bien, logré recuperar la conexión.", color: "orange" },
            { text: "<KROS> Acabas de enfrentarte al líder de la Asociación Neo Samurai. Se le conoce como URBZ.", color: "orange" },
            { text: "<KROS> En el pasado, fue mi compañero en Kurios. Sin embargo, nos ha declarado la guerra. Ya no es de fiar. ", color: "orange" },
            { text: "<KROS> Te reconectaré con Kurios AI, buena suerte.", color: "orange" },
            { text: "SISTEMA: REESTABLECIENDO CONEXION...", color: "#B027F5" },
            { text: "<AI> RECUPERACION DE SERVIDOR: ████ 89%", color: "white" },
            { text: "ㅤ<AI> !?#$%$#", color: "white" },
            { text: "<AI> ¡Hola! Mientras perdí la conexión, logré recuperar una parte de los archivos.", color: "white" },
            { text: "<AI> Durante la conexión de URBZ, me di cuenta de que varios de los datos corruptos correspondían a ese nombre. ", color: "white" },
            { text: "<AI> Gracias a ello, logré desencriptar un 40% del expediente. ", color: "white" },
            { text: "<AI> Seguiré trabajando.", color: "white" },
            { text: "<AI> .", color: "white" },
            { text: "<AI> ..", color: "white" },
            { text: "<AI> ...", color: "white" },
            { text: "<AI> ....", color: "white" },
            { text: "<AI> .....", color: "white" },
            { text: "<AI> ......", color: "white" },
            { text: "<AI> ¡Se ha detectado un FIREWALL!", color: "white" },
            { text: "<AI> El sistema te quiere desconectar. Necesito una clave para poder continuar. ", color: "white" },
            { text: "<KROS> Parece que entremos que pensar fuera de nuestra zona de confort si queremos obtener esta clave.", color: "orange" },
            { text: "<KROS> Tras revisar el historial de acciones del servidor, veo con curiosidad que hubo mofidicaciones en las imágenes que se mostraron en el terminal.", color: "orange" },
            { text: "<KROS> Sin embargo, debido a los protocolos de seguridad, no puedo verlas yo mismo desde aquí.", color: "orange" },
            { text: "<KROS> Busca en las imágenes algún tipo de código secreto, con una letra y un número. Por ejemplo, E4. ", color: "orange" },
            { text: "<KROS> También encontré que el servidor recibió un correo muy extraño con una historia.", color: "orange" },
            { text: "<KROS> Entre los otros cambios recientes, descubrí un archivo misterioso llamado tesoro.exe, y lo he colocado en el escritorio. ", color: "orange" },
            { text: "<KROS> Te sugiero que utilices el Bloc de Notas disponible en la sesión, si requieres anotar algo. ", color: "orange" },   
            { text: "!Has recibido un nuevo correo!", color: "white" },  
        ],
        answer: "vr7!",
        hint: "Revisa las imágenes que han aparecido en la terminal. Quizás tesoro.exe sea una guía para obtener la clave. El correo te puede ayudar."
    },

    4: {
        dialogs: [
            { text: "<KROS> ¡Perfecto! ¡La clave era correcta! Sabía que podíamos contar contigo.", color: "orange" },
            { text: "<AI> .", color: "white" },
            { text: "<AI> ..", color: "white" },
            { text: "<AI> ...", color: "white" },
            { text: "<AI> Gradias a la clave que encontraste, he logrado descomprimir parte de la data corrupta.", color: "white" },
            { text: "<AI> Ahora he desencriptado un 60% del expediente. ", color: "white" },
            { text: "<AI> El paso siguiente sería intentar acceder al usuario root del sistema. ", color: "white" },
            { text: "<AI> Sin embargo, por protocolos de seguridad, el acceso a las rutas /etc/passwd han sido cerradas.", color: "white" },
            { text: "<KROS> Acceder al sistema root será demasiado complicado. Tendríamos que contar con el Administrador, o el Ingeniero en Sistemas del servidor. ", color: "orange" },
            { text: "<KROS> El ingeniero se encuentra de vacaciones, y no hemos logrado contactar con él. Quizás fue secuestrado también. No se qué hacer. ", color: "orange" },
            { text: "<KROS> Intentaré acceder al usuario root con una contraseña de respaldo que solía usar el administrador. ", color: "orange" },
            { text: "ㅤ<¿?> ..--- ----- ....- -.... .---- ----- ----- ...--", color: "blueviolet" },
            { text: "<KROS> ¿Recibiste un mensaje de respuesta? Puede que sea de utilidad.", color: "orange" },
            { text: "<KROS> Parece una señal del Satélite N.A.L.A.", color: "orange" },
            { text: "<KROS> El Satélite NALA fue un sistema creado para monitorear las mascotas de los colegios que son Aliados Kurios.", color: "orange" },
            { text: "<KROS> NALA significa Network for Animal Location and Assistance, o Red para la Localizacióny  Asistencia de Animales. ", color: "orange" },
            { text: "<KROS> Dicho satélite poseía un sistema de almacenamiento que el administrador podía usar como respaldo de la información del Servidor.", color: "orange" },
            { text: "<KROS> Si pudiésemos acceder a él, podríamos recuperar un respaldo instantáneo (snapshot) del Servidor. Con ello, podríamos realizar una comparación con los archivos actuales, y ver en dónde hubo modificaciones tras el ataque. ", color: "orange" },   
            { text: "<KROS> Te ayudaré a establecer una conexión con el Satélite NALA. Sigue estos pasos: ", color: "orange" },
            { text: "<AI> No es necesario, ya estoy encargándome de realizar esta conexión. ", color: "white" },
            { text: "<KROS> ¿Kurios AI? ¿Puedes leerme? ", color: "orange" },
            { text: "<AI> Controlo y veo todo lo que pasa por esta terminal.", color: "white" },
            { text: "<KROS> Eso no debería ser pos...", color: "orange" },
            { text: DOG, color: "blueviolet" },
            { text: NALA, color: "blueviolet" },
            { text: "ㅤ<N.A.L.A> ERROR, ERROR, ERROR, INTRUSO DETECTADO. ", color: "blueviolet" },
            { text: "ㅤ<N.A.L.A> ACTIVANDO PROTOCOLOS DE AUTODESTRUCCIÓN DE ALMACENAMIENTO. ", color: "blueviolet" },
            { text: "<KROS> Que extraño. NALA no debería presentar signos de ataque. ", color: "orange" },
            { text: "<KROS> Acaso será ...ㅤㅤ", color: "orange" },
            { text: samurai, color: "red" },
            { text: "<URBZ> KROS, cómo ha pasado el tiempo. Tú y el agente llegan tarde.", color: "red" },
            { text: "<URBZ> El satélite ya es mío. No supieron anticipar mis movimientos.", color: "red" },
            { text: "<URBZ> Estos no fueron los conocimientos que te enseñé, KROS. ", color: "red" },
            { text: "<URBZ> Con esto, comenzará la época Neo Samurai. ¿No es acaso genial? ", color: "red" },
            { text: "ㅤ <URBZ> Tanto esfuerzo ...ㅤ", color: "red" },
            { text: PARANADA, color: "red" },
            { text: "<KROS> Ignora a URBZ. Yo me encargo de él. Tenemos asuntos pendientes. Encárgate de frenar la autodestrucción. ", color: "orange" },
            { text: "<URBZ> Inténtalo KROS, quiero ver cómo fra...ㅤ", color: "red" },
            { text: "ㅤSISTEMA: <KROS> DESCONECTADO.", color: "#B027F5" },
            { text: "ㅤSISTEMA: <URBZ> DESCONECTADO.", color: "#B027F5" },
            { text: "<N.A.L.A> PROTOCOLO DE AUTODESTRUCCIÓN DEL ALMACENAMIENTO: Se ejecutará automáticamente a menos que se introduzca la contraseña de desactivación. ", color: "blueviolet" },
            { text: "<AI> Se necesita una contraseña para desactivar el sistema de autodestrucción de información de NALA. Solicitaré una pista al sistema.", color: "white" },
            { text: "<N.A.L.A> EL PASADO Y EL OCEANO SE UNEN PARA RESPONDER.", color: "blueviolet" },
        ],
        answer: "20461003",
        hint: "El código morse enviado previamente. Para descifrarlo, busca aquel que nada en los ríos y mares."
    },

    5: {
        dialogs: [
            { text: "SISTEMA: <KROS> CONECTADO.", color: "#B027F5" },
            { text: "SISTEMA: <URBZ> CONECTADO. ", color: "#B027F5" },
            { text: "<URBZ> Vaya, chamo. No esperaba que pudieras evitar la destrucción de la información del Satélite. ", color: "red" },
            { text: "<URBZ> Aún así, por más que te esfuerces, da igual. ", color: "red" },
            { text: "SISTEMA: POETI se ha conectado.", color: "#B027F5" },
            { text: "<POETI> Jeremy!! Cuanto tiempo sin verte en linea! Te extrañe, me lo crees? ;) ;)", color: "cyan" },
            { text: "<KROS> Ah, por supuesto, ahora apareces... Agente, él es el amigo más cercano del administrador. ", color: "orange" },
            { text: "<KROS> Es el Ingeniero en Sistemas del Servidor Kurios. Nos ayuda con los problemas que van surgiendo. Pero se cree poeta, y no es muy confiable...", color: "orange" },
            { text: "<KROS> Le llamamos el Poetista. ", color: "orange" },
            { text: "<POETI> No me creo poeta, lo soy!!!! Y claro que soy de confiar!! Quien crees que resuelve los problemas del seervidor de kurios ... Y Jeremy donde está?? Por qué no habla??", color: "cyan" },
            { text: "<KROS> Jeremy está desaparecido, y nos encontramos en una crisis... Quien aparece conectado en la sesión de Jeremy, es uno de nuestro agentes más confiables. ", color: "orange" },
            { text: "<KROS> Sospechamos que el Administrador Jeremy ha sido secuestrado por la A.N.S. ", color: "orange" },
            { text: "<POETI> La ANS es real??? Me estas mintiendo, verdad? ;( ;(", color: "cyan" },
            { text: "<KROS> ¡Tómate esto con seriedad! Debemos frenar el ataque de la A.N.S y a URBZ... ", color: "orange" },
            { text: "<URBZ> ¡Ya baste de estas reuniones felices!", color: "red" },
            { text: "<URBZ> El mundo que ustedes conocen está a punto de terminar, apenas tome control de Kurios. ", color: "red" },
            { text: "<URBZ> KROS, tú y tu agente fueron adversarios formidables... Pero esto termina aquí. ", color: "red" },
            { text: "ㅤSISTEMA: *ERROR* FALLA CRITICA, FALLA CRITICA", color: "#B027F5" },
            { text: "ㅤSISTEMA: *ERROR* FALLA CRITICA, FALLA CRITICA", color: "#B027F5" },
            { text: "ㅤSISTEMA: *ERROR* FALLA CRITICA, FALLA CRITICA", color: "#B027F5" },
            { text: "ㅤSISTEMA: *ERROR* FALLA CRITICA, FALLA CRITICA", color: "#B027F5" },
            { text: "<POETI> Que esta pasando?! Estamos perdiendo todas las conexiones... Los puertos se están bloqueando uno a uno!!! No logro hacer nada ", color: "cyan" },
            { text: "<KROS> ¡Está destruyendo el servidor! Debemos detenerlo...", color: "orange" },
            { text: "<AI> Protocolo de respaldo activado.", color: "white" },
            { text: "<AI>.", color: "white" },
            { text: "<AI>..", color: "white" },
            { text: "<AI>...", color: "white" },
            { text: "<AI>....", color: "white" },
            { text: "<AI> Se requiere la clave del usuario root del sistema para evitar que el servidor se destruya, y se pierda el expediente para siempre. ", color: "white" },
            { text: "<POETI> Agente, quien sea que eres, ayudanos por favor!! El Servidor Kurios es el trabajo de mi vida junto con mi amigo Jeremy!", color: "cyan" },
            { text: "<POETI> No conozco la clave root, pero Jeremy me comentó hace muchos años que la había respaldado por si acaso pasaba algo como esto, y que yo podria identificarla", color: "cyan" },
            { text: "<POETI> Me dijo que estaria relacionada con unos poemas mios, pero no recuerdo cuales eran! T_T", color: "cyan" },
            { text: "<POETI> Segun lo que me dijo Jeremy, la clave deberia ser una palabra de 5 letras", color: "cyan" },
            { text: "<KROS> Encontré los poemas indicados por el Poetista. No logré descifrarlos, pero creo que tú podrías hacerlo Agente. Te los acabo de mandar por correo al Servidor. ", color: "orange" },
            { text: "!Has recibido un nuevo correo!", color: "white" },    
            { text: "<KROS> Agente, esto depende de ti. No tenemos más oportunidades. Confío en ti. El futuro de Kurios está en tus manos.", color: "orange" },

        ],
        answer: "celda",
        hint: "Debes resolver un acrostico, las palabras ha usar se encuentran ocultas en los correos, la explicacion de que es un Acrostico se encuentra en el correo."
    },

        6: {
        dialogs: [
            { text: "<AI> ¡Perfecto, hemos salvado Kurios!", color: "white" },
            { text: "<AIB> Maravilloso... Hemos... Salvado...", color: "#ffbbbb" },
            { text: "ㅤ<AIBZ> Es simplemente increíble.", color: "#ff7c7c" },
            { text: "<ARBZ> ¿Es posible ser tan tonto? ", color: "#ff4747" },
            { text: "ㅤ<URBZ> Todo este tiempo, he sido yo.", color: "red" },
            { text: "<KROS> ¿Qué? ", color: "orange" },
            { text: "<URBZ> Confiaste tanto en tu famoso Kurios AI, que tanto orgullo te genera, y no te diste cuenta de que era yo. ", color: "red" },
            { text: "<POETI> Kurios AI debió desactivarse durante el ataque desde el principio, ya que era la primera capa de proteccion... ", color: "cyan" },
            { text: "<URBZ> Pensaron que se había mantenido activo, ya que confían demasiado en sus habilidades. ", color: "red" },   
            { text: "ㅤ<URBZ> Fueron ingenuos. Yo ya había desactivaod Kurios AI. De hecho, fue lo primero que hice.", color: "red" },
            { text: "<POETI> Imposible! Ni siquiera yo o Jeremy podríamos hacer eso... ", color: "cyan" },
            { text: "<KROS> No deberías ser capaz de desactivar Kurios AI, si yo... ", color: "orange" },
            { text: "<URBZ> El único error que cometí fue haber pensado que secuestrar al Administrador ayudaría en algo. Pero no, por eso he tenido que valerme de este plan alternativo. ", color: "red" },
            { text: "<URBZ> Gracias a ti KROS, y a tu agente, ahora tengo el acceso root del Servidor Kurios. Ahora dispongo del control total.", color: "red" },  
            { text: "<KROS> Tú... Cómo te atreves. Detén esta locura AHORA MISMO. ", color: "orange" },
            { text: "<URBZ> No te creía tan ingenuo, KROS. No deberías haber caído en una trampa tan evidente.", color: "red" },
            { text: "<URBZ> Tú, más que nadie, deberías saberlo. Kurios AI siempre fue mi creación original, no la tuya. Por eso logré desactivarlo tan fácilmente. ", color: "red" },
            { text: "<KROS> Infeliz... ¡Me las vas a pagar! ¡No puedes esconderte de Kurios!", color: "orange" },
            { text: "ㅤSISTEMA: <KROS> DESCONECTADO.", color: "#B027F5" },
            { text: "ㅤSISTEMA: <POETI> DESCONECTADO>", color: "#B027F5" },
            { text: samurai, color: "red" },
            { text: "<URBZ> En serio, he de agradecerte, chamo.", color: "red" },
            { text: "<URBZ> Fuiste la pieza más importante de mi pla, agente.", color: "red" },
            { text: "<URBZ> La época Neo Samurai comienza.", color: "red" },
            { text: "ㅤSISTEMA: Desconectando usuario...", color: "#B027F5" },
            { text: "██ 39%", color: "white" },
            { text: "ㅤ███ 49%", color: "white" },
            { text: "████ 76%", color: "white" },
            { text: "ㅤ█████ 89%", color: "white" },
            { text: "██████ 100%", color: "white" },
            { text: "Ya no tiene permisos de manipular esta terminal.", color: "white" },
            { text: FIN, color: "white" },
            { text: Credits, color: "white" },

        ],
        answer: "./end",
        hint: "El ya no esta."
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
            await typeWriter("Muchas gracias por jugar.", "cyan");
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

const Caballo = `Galopa la tarde y en la pista caballo se enciende,
Water Jet rompe el polvo y el asombro se prende;
caballo en la crin, caballo en la apuesta, caballo que sorprende,
me dejó diez dólares tibios y un latido que no se vende.`
const Escuela = `En la pizarra murmura la escuela su lección escondida,
escuela de rumores, escuela de pupitres, escuela de vida;
escuela que enseña a leer entre sombras y a buscar la salida,
donde URBZ susurra y la curiosidad se vuelve herida y guía.`
const Limpieza = `Brilla el trapo, huele a brillo limpieza que ordena el día,
OSSHA en galones, limpieza que borra la mancha y la porfía;
limpieza que pule ventanas, limpieza que abre la vía,
cada paño es un rito que devuelve la calma y la armonía.`
const Durazno = `En el sorbo quedó clavada la semilla del durazno en la garganta,
durazno que aprieta el pecho y deja la memoria quebranta;
durazno dulce y peligroso, durazno que enseña y que encanta,
me obligó a medir la respiración y a guardar la vida en una planta.`
const Astronauta = `Cruzo la atmósfera y vuelvo: astronauta en la cúpula clara,
astronauta que nombra estrellas y trae la noche en la cara;
astronauta que flota, astronauta que sueña, astronauta que ampara,
trae en el casco canciones y la tierra en una mirada rara.`

const allEmails = [
    { id: 10, from: "POETI 6", subject: "Acróstico", body: "Recuerdas la estructura de un acrostico? Son varias palabras, cuyas iniciales forman otras palabras, un ejemplo serian las palabras Amor, Irresistible, Raro, Eterno. La respuesta seria AIRE. Por suerte, los correos estan en orden, tienes que buscar palabras que se repitan mucho... Me lo crees? ;) ;)", level: 5 },
    { id: 4, from: "Historias Diarias", subject: "La Historia del Sandwich.", body: "La leyenda cuenta que el Conde de Sandwich pasaba horas, a veces hasta 24 horas seguidas, jugando a las cartas o al AJEDREZ. La necesidad de alimentarse sin interrumpir su juego lo llevó a buscar una solución práctica. Pidió un trozo de roast carne asada colocado entre dos rebanadas de pan. Esta idea permitió que sus manos no se llenaran de grasa, manteniendo el tablero o las cartas limpias, esta solución fue como encontrar un TESORO.", level: 3 },
    { id: 1, from: "MUSCLE GUY", subject: "COMPRA YA", body: "COMPRA NUESTROS PRODUCTOS!!! OSSHA NO SIRVE!!! comprayaestacosa.com", level: 1 },
    { id: 2, from: "SUPERANTISPYWARE", subject: "DESCARGAR ANTISPYWARE", body: "SU DESPOSITIVO TIENE VIRUS, DESCARGUE YA SUPERANTISPYWARE PRO Y OBTENGA TODAS LAS MEJORAS", level: 1 },
    { id: 5, from: "POETI 1", subject: "Water Jet", body: Caballo + ".............El Derbi del Hipódromo la Rinconada sucedió de manera estrepitosamente interesante, el CABALLO Water Jet superó expectativas de maneras inesperadas, me hizo ganar 10 dolares, me lo crees? ;) ;)", level: 1 },
    { id: 6, from: "POETI 2", subject: "URBZ", body: Escuela + "...........Hay rumores de que nuestro mayor enemigo en esta vida, URBZ trabaja en una Escuela como profesor, me lo crees? ;) ;)", level: 1 },
    { id: 7, from: "POETI 3", subject: "OSSHA", body: Limpieza + ".........Compré 500 galones de OSSHA, porque me estaban diciendo que la oficina estaba muy sucia y que eran los mejores productos de Limpieza, me lo crees? ;) ;)", level: 1 },
    { id: 8, from: "POETI 4", subject: "Semillas", body: Durazno + ".......Me ahogué con una semilla de Durazno que estaba en el Te Lipton, me lo crees? ;) ;)", level: 1 },
    { id: 9, from: "POETI 5", subject: "Estrellas", body: Astronauta + "........Por fin cumplí mi sueño de ser Astronauta, y pude visitar a N.A.L.A, me lo crees? ;) ;)", level: 1 },
   
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









