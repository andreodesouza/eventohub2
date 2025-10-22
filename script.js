const eventos = [
    {id:1, nome: "Santa Ceia", inscritos: 0, subscribed:false},
    {id:2, nome: "Festa da Roça", inscritos: 0, subscribed:false},
    {id:3, nome: "Mulheres de Atitude", inscritos: 0, subscribed:false},
    {id:4, nome: "Festa Kids", inscritos: 0, subscribed:false},
];

function renderizarEventos() {
   const container = document.getElementById("eventos");
   container.innerHTML= "";
   eventos.forEach(ev => {
        const div = document.createElement("div");
        div.className = "evento";
        div.innerHTML = `
            <h3>${ev.nome}</h3>
      <p>Inscritos: <span class="contador" id="contador-${ev.id}">${ev.inscritos}</span></p>
      <button id="btn-${ev.id}" class="${ev.subscribed ? "inscrito" : "nao-inscrito"}">${ev.subscribed ? "Cancelar inscrição" : "Inscrever-se"}</button>
    `;
    container.appendChild(div);
    document.getElementById(`btn-${ev.id}`).addEventListener("click", () => toggleInscricao(ev.id));
  });
}

function toggleInscricao(id) {
  const ev = eventos.find(e => e.id===id);
  ev.subscribed = !ev.subscribed;
  ev.inscritos += ev.subscribed ? 1 : -1;
  const btn = document.getElementById(`btn-${id}`);
  btn.textContent = ev.subscribed ? "Cancelar inscrição" : "Inscrever-se";
  btn.className = ev.subscribed ? "inscrito" : "nao-inscrito";
  document.getElementById(`contador-${id}`).textContent = ev.inscritos;
}

renderizarEventos();
        
        
    
