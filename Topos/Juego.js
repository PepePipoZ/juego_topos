alert(
    'BIENVENIDO AL JUEGO DE PEGARLE AL TOPO!!! \n--INSTRUCCIONES--\nPuedes seleccionar entrer 3 velocidades diferentes.\nAl dar al boton "play" tendras cierto tiempo para pegarle al topo cada vez que salga de casa.\nTerminando el tiempo te dira tu puntuacion'
  );
  var btnTopo = document.getElementById("topo");
  var btnPlay = document.getElementById("play");
  var btnFacil = document.getElementById("facil");
  var btnNomal = document.getElementById("normal");
  var btnDificil = document.getElementById("dificil");
  let puntos = 0;
  let x = 450,
    y = 350;
  let cont = 0;
  let z = 1000;
  var tiempo;
  

  btnFacil.addEventListener("click", function () {
    alert("La velocidad sera facil");
    z=1500;
  });
  btnNomal.addEventListener("click", function () {
    alert("La velocidad sera normal");
    z=1000;
  });

  btnDificil.addEventListener("click", function () {
    alert("La velocidad sera dificil");
    z=600;
  });
  btnPlay.addEventListener("click", function () {
    alert("Esta por comenzar el juego");
    btnTopo.addEventListener("click", function () {
    puntos = puntos + 100;
    document.getElementById('PUNTOS2').textContent=puntos;
  });
    tiempo = setInterval(MoveTopo, z);
  });
  
  function MoveTopo() {
    let aleatorioX = Math.floor(Math.random(100) * x);
    let aleatorioY = Math.floor(Math.random(100) * x);
    btnTopo.style.top = aleatorioX + "px";
    btnTopo.style.left = aleatorioY + "px";
    cont++;
    
    if (cont == 20) {
      clearInterval(tiempo);
      alert("Se termino el tiempo, hiciste " + puntos + " puntos");
      document.getElementById('topo').style.display="none";
    }
  }