// Array para armazenar os alunos
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

// Seleção dos elementos
const formCadastro = document.getElementById('formCadastro');
const listaAlunos = document.getElementById('listaAlunos');

// Atualizar a lista de alunos na interface
function atualizarLista() {
    listaAlunos.innerHTML = ''; // Limpa a lista antes de renderizar

    alunos.forEach((aluno, index) => {
        const alunoDiv = document.createElement('div');
        alunoDiv.classList.add('aluno-item');
        alunoDiv.innerHTML = `
            <span>${aluno.nome} - ${aluno.curso}</span>
            <div>
                <button class="button button-editar" onclick="editarAluno(${index})">Editar</button>
                <button class="button button-excluir" onclick="removerAluno(${index})">Excluir</button>
            </div>
        `;
        listaAlunos.appendChild(alunoDiv);
    });
}

// Adicionar novo aluno
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    const novoAluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        curso: document.getElementById('curso').value,
        dataMatricula: document.getElementById('dataMatricula').value,
    };

    alunos.push(novoAluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));

    formCadastro.reset();
    atualizarLista();
});

// Editar aluno
function editarAluno(index) {
    const aluno = alunos[index];
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
    document.getElementById('curso').value = aluno.curso;
    document.getElementById('dataMatricula').value = aluno.dataMatricula;

    alunos.splice(index, 1);
    atualizarLista();
}

// Remover aluno
function removerAluno(index) {
    alunos.splice(index, 1);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    atualizarLista();
}

// Carregar a lista inicial
document.addEventListener('DOMContentLoaded', atualizarLista);