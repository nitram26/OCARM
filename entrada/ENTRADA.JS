
    //  VIENEN CON ALEGRÍA SEÑOR 
const tonos = {
  "D": `
D
Vienen con alegría Señor,

               D7
cantando Vienen con alegría Señor,

G         A            F#m     Bm
los que caminan por la vida, Señor

 G        A      D
sembrando tu paz y amor

D                       A
Vienen trayendo la esperanza

                  D
a un mundo cargado de ansiedad,

                     A
un mundo que busca y que no alcanza

                D      
caminos de amor y de amistad.
  `,
  "C": `
C
Vienen con alegría Señor,
               C7
cantando Vienen con alegría Señor,
F         G            Em     Am
los que caminan por la vida, Señor

 F        G      C
sembrando tu paz y amor

C                       G
Vienen trayendo la esperanza
                  C
a un mundo cargado de ansiedad,
                     G
un mundo que busca y que no alcanza
                C      
caminos de amor y de amistad.
  `,
  "E": `
E
Vienen con alegría Señor,
               E7
cantando Vienen con alegría Señor,
A         B            G#m     C#m
los que caminan por la vida, Señor

 A        B      E
sembrando tu paz y amor

E                       B
Vienen trayendo la esperanza
                  E
a un mundo cargado de ansiedad,
                     B
un mundo que busca y que no alcanza
                E      
caminos de amor y de amistad.
  `,
  "F": `
F
Vienen con alegría Señor,
               F7
cantando Vienen con alegría Señor,
B♭        C            Am      Dm
los que caminan por la vida, Señor

 B♭       C      F
sembrando tu paz y amor

F                       C
Vienen trayendo la esperanza
                  F
a un mundo cargado de ansiedad,
                     C
un mundo que busca y que no alcanza
                F      
caminos de amor y de amistad.
  `,
  "G":`
G
Vienen con alegría Señor,
               G7
cantando Vienen con alegría Señor,
C         D            Bm      Em
los que caminan por la vida, Señor

 C        D      G
sembrando tu paz y amor

G                       D
Vienen trayendo la esperanza
                  G
a un mundo cargado de ansiedad,
                     D
un mundo que busca y que no alcanza
                G      
caminos de amor y de amistad.
  `,
  "A": `
A
Vienen con alegría Señor,
               A7
cantando Vienen con alegría Señor,
D         E            C#m     F#m
los que caminan por la vida, Señor

 D        E      A
sembrando tu paz y amor

A                       E
Vienen trayendo la esperanza
                  A
a un mundo cargado de ansiedad,
                     E
un mundo que busca y que no alcanza
                A      QUISIERA QUE ME EXPLIQUES CUAL ES LA LOGICA DE TRANSPONER TONOS
caminos de amor y de amistad.
  `,
};

///////////////////////////////////////////////////////////////////////////
 // Función para estilizar los acordes
 function estilizarAcordes(texto) {
  return texto.replace(/([A-G][#b]?m?7?\+?°?)/g, '<span class="acorde">$1</span>');
}

// Mostrar la letra en el tono inicial
document.getElementById('letra').innerHTML = estilizarAcordes(tonos["D"]);

// Cambia la letra de la canción según el tono seleccionado
document.getElementById('tono').addEventListener('change', function() {
  const tonoSeleccionado = this.value;
  document.getElementById('letra').innerHTML = estilizarAcordes(tonos[tonoSeleccionado]);
});


