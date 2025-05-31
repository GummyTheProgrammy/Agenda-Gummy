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
	//new Compromisso(VD, 'Ensaio', 'Violence Division', '17/03', '21h às 23h', 'Cafofo'),
	//new Compromisso(Jardins, 'Ensaio', 'Jardins do Jack', '20/03', '20h', 'Cafofo'),
	//new Compromisso(Cerv, 'Ensaio', 'Cervical', '27/03', '20h', 'Cafofo'),
	//new Compromisso(Groot, 'Ensaio', 'Grootescos', '27/03', '20h', 'Cafofo'),
	//new Compromisso(ResCos, 'Show', 'Rato de Ouro', '20/06', '20h', 'Rio das Ostras'),
	//JUNHO
	new Compromisso(Jardins, 'Show', 'Tropic Thunder', '07/06', '20h', 'Rio das Ostras'),
	new Compromisso(Groot, 'Show', 'Rota das Ostras', '14/06', '15h', 'Rio das Ostras'),
	new Compromisso(ResCos, 'Show', 'Feirinha do Mirante', '14/06', '19h', 'Rio das Ostras'),
	//JULHO
	new Compromisso(Groot, 'Show', 'Irmandade 1927', '05/07', 'Sem horario', 'Sem local'),
	new Compromisso(VD, 'Show', 'Cabofrio Motorrock', '10/07 à 13/07', 'Sem horario', 'Sem local'),
	new Compromisso(Cerv, 'Show', 'Hardcore', '11/07', 'Sem horário', 'Cachoeira Itapemirin'),	
	new Compromisso(Cerv, 'Show', 'Rio 100 Bandas', '12/07', 'Sem horário', 'Rio de Janeiro'),	
	new Compromisso(Groot, 'Show', 'Rato de Ouro Round 2', '31/07', 'A definir', 'Rio das Ostras'),
	new Compromisso(Groot, 'Show', 'Arcada Moto Clube', '09/08', 'A definir', '???'),
	new Compromisso(Groot, 'Show', 'Festival de Covers', '06/09', 'A definir', 'Rio das Ostras'),
	new Compromisso(Groot, 'Show', 'Perpétuos MC', '12/09', 'A definir', 'Sem local'),
	new Compromisso(Cerv, 'Show', 'Hardcore', '20/09', 'Sem horário', 'Ipatinga'),	
	new Compromisso(Cerv, 'Show', 'Hardcore', '21/09', 'Sem horário', 'Campos'),	
	new Compromisso(Groot, 'Show', 'Macaé Moto Week', '11/10', 'A definir', 'Macaé'),
	new Compromisso(VD, 'Show', 'Warlords', '14/11', 'A definir', 'Rio de Janeiro'),
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