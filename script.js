//IMAGENS
const VD = "VD.jpg";
const Jardins = "JDJ.jpg";
const ResCos = "RESC.jpg"
const Groot = "GROOT.jpg";
const Cerv = "CERV.jpg";

// Classe Compromisso
class Compromisso {
    constructor(imagem, categoria, nomeBanda, data, horario, local) {
        this.imagem = imagem;
        this.categoria = categoria;
        this.nomeBanda = nomeBanda;
        this.data = data;
        this.horario = horario || 'A definir';
        this.local = local || 'A definir';
    }

    criarItem() {
        const item = document.createElement('div');
        item.classList.add('item');

        // Imagem da banda
        const img = document.createElement('img');
        img.src = this.imagem;
        img.alt = this.nomeBanda;
        img.classList.add('band-image');
        item.appendChild(img);

        // Categoria
        const categoria = document.createElement('div');
        categoria.textContent = this.categoria;
        categoria.classList.add('category');
        item.appendChild(categoria);

        // Nome da banda
        const nomeBanda = document.createElement('div');
        nomeBanda.textContent = this.nomeBanda;
        nomeBanda.classList.add('band-name');
        item.appendChild(nomeBanda);

        // Data
        const data = document.createElement('div');
        data.textContent = this.data;
        data.classList.add('date');
        item.appendChild(data);

        // Horário
        const horario = document.createElement('div');
        horario.textContent = this.horario;
        horario.classList.add('time');
        item.appendChild(horario);

        // Local
        const local = document.createElement('div');
        local.textContent = this.local;
        local.classList.add('location');
        item.appendChild(local);

        return item;
    }
}

// Lista de compromissos
const compromissos = [
	//new Compromisso(VD, 'Ensaio', 'Violence Division', '01/05', '21h às 23h', 'Cafofo'),
	//new Compromisso(Jardins, 'Ensaio', 'Jardins do Jack', '00/05', '20h', 'Vale dos cristais'),
	new Compromisso(Groot, 'Show', 'Ostracycle', '25/04', '21h', 'Rio das Ostras'),
	new Compromisso(ResCos, 'Show', 'Ostracycle', '26/04', '21h', 'Rio das Ostras'),
	new Compromisso(Groot, 'Show', 'Ostracycle', '27/04', '14h', 'Rio das Ostras'),
	new Compromisso(Cerv, 'Ensaio', 'Cervical', '28/04', '20h', 'Cafofo'),
	new Compromisso(Groot, 'Show', 'Marrentos', '01/05', 'A definir', 'Onde?'),
	new Compromisso(Cerv, 'Show', 'Heavy Beer', '04/05', 'A definir', 'Rio de Janeiro - Rua Ceará'),
	new Compromisso(Jardins, 'Show', 'Tropic Thunder', '09/05', 'A definir', 'Rio das Ostras'),
	new Compromisso(VD, 'Show', 'Macaé Motoclube', '17/05', 'A definir', 'Macaé'),
	new Compromisso(Groot, 'Show', 'Macaé Motoclube', '17/05', 'A definir', 'Macaé'),
	new Compromisso(Groot, 'Show', 'Rato de Ouro', '31/05', 'A definir', 'Rio das Ostras'),
	new Compromisso(ResCos, 'Show', 'Rato de Ouro', '20/06', '20h', 'Rio das Ostras'),
	new Compromisso(Groot, 'Show', 'Arcada Moto Clube', '09/08', 'A definir', '???'),
	new Compromisso(Groot, 'Show', 'Macaé Moto Week', '10/10', 'A definir', 'Macaé'),
	new Compromisso(Groot, 'Show', 'Macaé Moto Week', '11/10', 'A definir', 'Macaé'),
	new Compromisso(Groot, 'Show', 'Família Catés', '06/12', 'A definir', '???'),
];

// Função para carregar a agenda
function carregarAgenda() {
    const container = document.getElementById('agenda');
    compromissos.forEach(compromisso => {
        const item = compromisso.criarItem();
        container.appendChild(item);
    });
}

// Carregar a agenda quando a página for carregada
window.onload = carregarAgenda;