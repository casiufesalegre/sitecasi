document.addEventListener('DOMContentLoaded', function() {
    
    // Menu mobile
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links li a');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
             if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
            }
        });
    });

    // --- DADOS DINÂMICOS ---

    const accordionData = {
        "1º Período": [{ name: "COM06842 – Programação I", ch: "30T / 30L", prereq: "Não possui" },{ name: "COM06847 – Introdução à Informática", ch: "30T / 30L", prereq: "Não possui" },{ name: "COM06852 – Introdução aos Sistemas de Informação", ch: "30T", prereq: "Não possui" },{ name: "COM06853 – Lógica Computacional", ch: "60T", prereq: "Não possui" },{ name: "ENG06854 – Português Instrumental", ch: "30T", prereq: "Não possui" },{ name: "MPA06840 – Vetores e Geometria Analítica", ch: "60T", prereq: "Não possui" }],
        "2º Período": [{ name: "COM06851 – Matemática Discreta", ch: "60T", prereq: "Não possui" },{ name: "COM06984 – Fundamentos de Programação Web", ch: "45T / 15L", prereq: "COM06847 - Introdução à Informática" },{ name: "COM06985 – Teoria Geral dos Sistemas", ch: "60T", prereq: "COM06852 - Introdução aos Sistemas de Informação" },{ name: "ENG06849 – Inglês Instrumental", ch: "30T", prereq: "Não possui" },{ name: "MPA06839 – Cálculo A", ch: "60T / 30E", prereq: "Não possui" }],
        "3º Período": [{ name: "COM06992 – Estruturas de Dados I", ch: "45T / 15L", prereq: "COM06842 - Programação I" },{ name: "COM10014 – Computabilidade e Complexidade", ch: "60T", prereq: "COM06851 - Matemática Discreta" },{ name: "COM10015 – Engenharia de Software", ch: "60T", prereq: "COM06842 - Programação I" },{ name: "COM10016 – Sistemas de Apoio à Decisão", ch: "60T", prereq: "COM06985 - Teoria Geral dos Sistemas" },{ name: "MPA06855 – Álgebra Linear", ch: "60T", prereq: "MPA06840 - Vetores e Geometria Analítica" }],
        "4º Período": [{ name: "COM10076 – Arquitetura de Computadores", ch: "60T", prereq: "COM06842 - Programação I" },{ name: "COM10078 – Estrutura de Dados II", ch: "45T / 15L", prereq: "COM06992 - Estruturas de Dados I" },{ name: "COM10082 – Programação II", ch: "30T / 30L", prereq: "COM06992 - Estruturas de Dados I" },{ name: "COM10275 – Engenharia de Requisitos de Software", ch: "60T", prereq: "COM10015 - Engenharia de Software" },{ name: "ENG05510 – Estatística Básica", ch: "30T / 30E", prereq: "MPA06839 - Cálculo A" }],
        "5º Período": [{ name: "COM10129 – Banco de Dados", ch: "45T / 15L", prereq: "COM10078 - Estrutura de Dados II" },{ name: "COM10131 – Otimização Linear", ch: "45T / 15L", prereq: "COM06992 - Estruturas de Dados I, MPA06855 - Álgebra Linear" },{ name: "COM10132 – Sistemas Operacionais", ch: "60T", prereq: "COM06992 - Estruturas de Dados I, COM10076 - Arquitetura de Computadores" },{ name: "COM10507 – Interface Humano-Computador", ch: "60T", prereq: "COM10275 - Engenharia de Requisitos de Software" },{ name: "COM10508 – Projeto de Sistemas de Software", ch: "60T", prereq: "COM10082 - Programação II, COM10275 - Engenharia de Requisitos de Software" }],
        "6º Período": [{ name: "COM10081 – Metodologia de Pesquisa em Informática", ch: "30T", prereq: "ENG06854 - Português Instrumental" },{ name: "COM10393 – Métodos de Otimização", ch: "60T", prereq: "COM10131 - Otimização Linear" },{ name: "COM10394 – Redes de Computadores", ch: "60T", prereq: "COM10132 - Sistemas Operacionais" },{ name: "COM10603 – Direito e Legislação", ch: "30T", prereq: "Não possui" },{ name: "COM10733 – Gerência de Projeto de Software", ch: "60T", prereq: "COM10015 - Engenharia de Software" },{ name: "COM11014 – Gerenciamento de Banco de Dados", ch: "60T", prereq: "COM10129 - Banco de Dados" }],
        "7º Período": [{ name: "CFM10426 – Administração e Economia", ch: "60T", prereq: "Não possui" },{ name: "COM06996 – Informática e Sociedade", ch: "30T", prereq: "COM06852 - Introdução aos Sistemas de Informação" },{ name: "COM10606 – Comércio Eletrônico", ch: "45T / 15L", prereq: "COM06984 - Fundamentos de Programação Web" },{ name: "COM10616 – Sistemas Distribuídos", ch: "45T / 15L", prereq: "COM10394 - Redes de Computadores" },{ name: "COM11007 – Segurança e Auditoria de Sistemas", ch: "60T", prereq: "COM06985 - Teoria Geral dos Sistemas, COM10733 - Gerência de Projeto de Software" }],
        "8º Período": [{ name: "CFM11061 – Empreendedorismo", ch: "30T", prereq: "CFM10426 - Administração e Economia" },{ name: "COM10396 – Desenvolvimento de Sistemas para WEB", ch: "30T / 30L", prereq: "COM10082 - Programação II, COM10129 - Banco de Dados" },{ name: "COM10609 – Gerenciamento e Administração de Redes", ch: "45T / 15L", prereq: "COM10394 - Redes de Computadores" },{ name: "COM11064 – Gestão de Qualidade de Software", ch: "30T / 30L", prereq: "COM10508 - Projeto de Sistemas de Software" },{ name: "COM11212 – Trabalho de Conclusão de Curso em SI I", ch: "15T / 75L", prereq: "COM10081 - Metodologia de Pesquisa em Informática, 100 créditos mínimos" }],
        "9º Período": [{ name: "COM11259 – Sistemas de Software Livre", ch: "30T", prereq: "COM10132 - Sistemas Operacionais" },{ name: "COM11261 – Trabalho de Conclusão de Curso em SI II", ch: "15T / 75L", prereq: "COM11212 - Trabalho de Conclusão de Curso em SI I" },{ name: "COM11260 – Estágio em Informática", ch: "30T / 180E", prereq: "5 períodos vencidos" }],
    };

    const scheduleData = {
        periodo1: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Introdução à Informática</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Vetores e Geometria Analítica</strong><small>Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Lógica Computacional I</strong><small>Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Programação I</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Introdução aos Sistemas de Informação</strong><small>Sala 03 - Prédio Ciclo Básico</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Lógica Computacional I</strong><small>Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Português Instrumental</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Introdução à Informática</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Vetores e Geometria Analítica</strong><small>Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Programação I</strong><small>Lab 1 - Chiu-Chiu</small></td></tr></tbody>`,
        periodo3: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Sistemas de Apoio à Decisão</strong><small>Sala 07 - Prédio Central</small></td><td><strong>Estruturas de Dados I</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Engenharia de Software I</strong><small>Sala 07 - Prédio Central</small></td><td><strong>Computabilidade e Complexidade</strong><small>Sala 07 - Prédio Central</small></td><td><strong>Computabilidade e Complexidade</strong><small>Sala 07 - Prédio Central</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Estruturas de Dados I</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Álgebra Linear</strong><small>Sala 07 - Prédio Central</small></td><td><strong>Sistemas de Apoio à Decisão</strong><small>Sala 07 - Prédio Central</small></td><td><strong>Álgebra Linear</strong><small>Sala 07 - Prédio Central</small></td><td><strong>Engenharia de Software I</strong><small>Sala 07 - Prédio Central</small></td></tr></tbody>`,
        periodo5: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Otimização Linear</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Otimização Linear</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Banco de Dados</strong><small>Lab 3 - Chiu-Chiu</small></td><td><strong>Projeto de Sistemas de Software</strong><small>Lab 3 - Chiu-Chiu</small></td><td><strong>Interação Humano-Máquina</strong><small>Lab 3 - Chiu-Chiu</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Sistemas Operacionais</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Sistemas Operacionais</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Interação Humano-Máquina</strong><small>Lab 3 - Chiu-Chiu</small></td><td><strong>Banco de Dados</strong><small>Lab 3 - Chiu-Chiu</small></td><td><strong>Projeto de Sistemas de Software</strong><small>Lab 3 - Chiu-Chiu</small></td></tr></tbody>`,
        periodo7: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Sistemas Distribuídos</strong><small>Lab. Desenv. SW I - Reuni</small></td><td><strong>Sistemas Distribuídos</strong><small>Lab. Desenv. SW I - Reuni</small></td><td><strong>Segurança e Auditoria de Sistemas</strong><small>Lab. Desenv. SW I - Reuni</small></td><td><strong>Administração e Economia</strong><small>Lab. Desenv. SW I - Reuni</small></td><td><strong>Comércio Eletrônico</strong><small>Lab. Desenv. SW I - Reuni</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Informática e Sociedade</strong><small>Lab. Desenv. SW I - Reuni</small></td><td></td><td><strong>Comercio Eletrônico</strong><small>Lab. Desenv. SW I - Reuni</small></td><td><strong>Administração e Economia</strong><small>Lab. Desenv. SW I - Reuni</small></td><td><strong>Segurança e Auditoria de Sistemas</strong><small>Lab. Desenv. SW I - Reuni</small></td></tr></tbody>`,
        periodo9: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Algoritmos Numéricos</strong><small>Sala 04 - Prédio Central</small></td><td><strong>Sistemas de Softwares Livres</strong><small>Lab. Desenv. SW 2 - Reuni</small></td><td><strong>Algoritmos Numéricos</strong><small>Sala 04 - Prédio Central</small></td><td></td><td></td></tr><tr><td>20:00 às 22:00</td><td><strong>Tópicos Especiais em Redes de Computadores I</strong><small>Lab. Desenv. SW 2 - Reuni</small></td><td><strong>Tópicos Especiais em Análise Combinatória</strong><small>Lab. Desenv. SW I - Reuni</small></td><td><strong>Tópicos Especiais em Análise Combinatória</strong><small>Lab. Desenv. SW I - Reuni</small></td><td></td><td></td></tr></tbody>`
    };

    const timelineData = [
        { date: "22/09", event: "Início do semestre letivo" },
        { date: "22/09 a 10/10", event: "Período para solicitação de trancamento automático de curso (TMA)" },
        { date: "23/09 a 25/09", event: "Período de cancelamento de disciplina no Portal do Aluno" },
        { date: "14/10 a 20/10", event: "Período de ajuste de matrícula no Portal do Aluno - 2º escopo" },
        { date: "29/10 a 03/11", event: "Solicitação de aplicação do art. 17 (exercícios domiciliares)" }
    ];

    // --- FUNÇÕES DE RENDERIZAÇÃO ---

    const accordionContainer = document.querySelector('.accordion');
    if (accordionContainer) {
        let content = '';
        for (const period in accordionData) {
            content += `<button class="accordion-button">${period}</button><div class="accordion-panel">`;
            accordionData[period].forEach(subject => {
                content += `<div class="subject-detail"><h4>${subject.name}</h4><p><strong>C.H.:</strong> ${subject.ch}</p><p><strong>Pré-requisito:</strong> ${subject.prereq}</p></div>`;
            });
            content += `</div>`;
        }
        accordionContainer.innerHTML = content;
    }

    const tabContentContainer = document.querySelector('.tab-content');
    if(tabContentContainer){
        let content = '';
        const scheduleHead = `<thead><tr><th>Horas</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th></tr></thead>`;
        for (const periodId in scheduleData) {
            const isActive = periodId === 'periodo1' ? 'active' : '';
            content += `<div id="${periodId}" class="content ${isActive}"><div class="schedule-wrapper"><table class="schedule-table">${scheduleHead}${scheduleData[periodId]}</table></div></div>`;
        }
        tabContentContainer.innerHTML = content;
    }

    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer) {
        let content = '';
        timelineData.forEach(item => {
            content += `<li><strong>${item.date}</strong><p>${item.event}</p></li>`;
        });
        timelineContainer.innerHTML = content;
    }

    // --- INICIALIZAÇÃO DOS EVENT LISTENERS ---

    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.style.maxHeight = null;
                }
            });
            button.classList.toggle('active');
            const panel = button.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content .content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content .content').forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if(targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
