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
            { text: "<SISTEMA> El expediente con la información secreta del Colegio, bajo el nombre código, Expediente Kurios, ha sido parcialmente recuperado.", color: "#B027F5"},
            { text: "<SISTEMA> ... *Se está recibiendo una conexión por parte del agente de Kurios, KROS.", color: "#B027F5"},
            { text: "<KROS> Bienvenido, agente _______.", color: "orange"},
            { text: "<KROS> Nuestro servidor ha sido atacado e intervenido por la organización A.N.S.", color: "orange" },
            { text: "<KROS> El administrador principal del servidor ha desaparecido. Creemos que fue secuestrado por esta malvada organización.", color: "orange" },
            { text: "<KROS> Aunque disponemos de una gran parte de información del expediente, el mismo está corrupto, y no es confiable.", color: "orange" },
            { text: "<KROS> El resto de la información, sin embargo, se encuentra principalmente en nuestro servidor. Debemos indagar en él y recuperar los fragmentos perdidos.", color: "orange"},
            { text: "<KROS> Tras el ataque, múltiples protocolos de seguridad han sido activados. No puedo acceder al servidor de forma completa desde mi ubicación actual.", color: "orange" },
            { text: "<KROS> Por lo tanto, la única persona con acceso completo al servidor, eres tú. ", color: "orange" },
            { text: "<KROS> Aunque no puedo ayudarte directamente, te ofreceré mis sugerencias mediante el uso del comando ./pista escrito en la terminal de la sesión.", color: "orange" },
            { text: "<KROS> No será una misión fácil. Sin embargo, confío en tu experiencia. Sé que eres la persona que resolverá el asunto.", color: "orange" },
            { text: "<KROS> Eres la última esperanza. Cuento contigo.", color: "orange" }, 
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
            { text: "!Has recibido un nuevo correo!", color: "white" },  
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
            { text: "<N.A.L.A> EL PASADO Y EL OCEANO SE UNEN PARA RESPONDER.", color: "blueviolet" },
        ],
        answer: "20461003",
        hint: "El codigo morse enviado previamente, para descifrarlo has de buscar a aquel que nada en los rios y mares."
    },

    5: {
        dialogs: [
            { text: "<URBZ> Vaya... No esperaba que pudieras salvar al satelite.", color: "red" },
            { text: "<URBZ> Aun asi... Por mas que te esfuerces, da igual.", color: "red" },
            { text: "SISTEMA: POETI se ha conectado.", color: "cyan" },
            { text: "<POETI> Jeremy!! Cuanto tiempo sin verte en linea! Te extrañe, me lo crees? ;) ;)", color: "cyan" },
            { text: "<KROS> Ah, si es el poetista... Te saludo por cortesia, pero he de avisarte que no hablas con Jeremy.", color: "orange" },
            { text: "<KROS> Jeremy lleva meses desaparecido.", color: "orange" },
            { text: "<POETI> Mientes, verdad? ;() ;(", color: "cyan" },
            { text: "<URBZ> Basta de reuniones felices.", color: "red" },
            { text: "<URBZ> El mundo que ustedes conocen esta a punto de terminar.", color: "red" },
            { text: "<URBZ> Kros, fuiste un adversario formidable.. Pero esto acaba aqui.", color: "red" },
            { text: "ㅤERROR: FALLA CRITICA, FALLA CRITICA", color: "red" },
            { text: "ㅤERROR: FALLA CRITICA, FALLA CRITICA", color: "red" },
            { text: "ㅤERROR: FALLA CRITICA, FALLA CRITICA", color: "red" },
            { text: "ㅤERROR: FALLA CRITICA, FALLA CRITICA", color: "red" },
            { text: "<POETI> Que esta pasando?! Estamos perdiendo todas las conexiones...", color: "cyan" },
            { text: "<KROS> Esta destruyendo todo el servidor! Debemos detenerlo...", color: "orange" },
            { text: "<AI> Protocolo de respaldo activado.", color: "white" },
            { text: "<AI>.", color: "white" },
            { text: "<AI>..", color: "white" },
            { text: "<AI>...", color: "white" },
            { text: "<AI>....", color: "white" },
            { text: "<AI> Se requiere una ultima contraseña para recuperar el expediente y evitar que el servidor se destruya.", color: "white" },
            { text: "<POETI> Quien sea que eres, ayudanos por favor!! La clave esta oculta, ya se la habia enviado a Jeremy!", color: "cyan" },
            { text: "<POETI> Revisa sus archivos viejos, solo recuerdo que era una palabra de 5 letras..", color: "cyan" },
            { text: "!Has recibido un nuevo correo!", color: "white" },    
            { text: "<KROS> Confiamos en ti.", color: "orange" },

        ],
        answer: "celda",
        hint: "Debes resolver un acrostico, las palabras ha usar se encuentran ocultas en los correos, la explicacion de que es un Acrostico se encuentra en el correo."
    },

        6: {
        dialogs: [
            { text: "<AI> Perfecto! Salvamos Kurios!!", color: "white" },
            { text: "<AIB> Maravilloso... Salvamos..", color: "#ffbbbb" },
            { text: "ㅤ<AIBZ> Es simplemente increible.", color: "#ff7c7c" },
            { text: "<ARBZ> Es posible ser tan tonto?", color: "#ff4747" },
            { text: "ㅤ<URBZ> Todo este tiempo, fui yo.", color: "red" },
            { text: "<URBZ> Me diste la clave para acceder a todo Kurios.", color: "red" },
            { text: "<KROS> Tu... como te atreves?!", color: "orange" },
            { text: "<URBZ> Crei que no caerias en un truco tan simple, Kros.", color: "red" },
            { text: "<URBZ> Mas que nadie deberias saberlo, Kurios AI siempre fue mi creacion.", color: "red" },
            { text: "<URBZ> No la tuya.", color: "red" },
            { text: "ㅤ<KROS> Infeliz... Me las vas a pagar!", color: "orange" },
            { text: "ㅤSISTEMA: <KROS> DESCONECTADO.", color: "red" },
            { text: "ㅤSISTEMA: <POETI> DESCONECTADO>", color: "red" },
            { text: samurai, color: "red" },
            { text: "<URBZ> En serio, he de agradecerte chamo.", color: "red" },
            { text: "<URBZ> La era Neo Samurai comienza.", color: "red" },
            { text: "SISTEMA: Desconectando usuario...", color: "white" },
            { text: "██ 39%", color: "white" },
            { text: "ㅤ███ 49%", color: "white" },
            { text: "████ 76%", color: "white" },
            { text: "ㅤ█████ 89%", color: "white" },
            { text: "██████ 100%", color: "white" },
            { text: "ㅤYa no tiene permisos de manipular esta terminal.", color: "white" },
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
