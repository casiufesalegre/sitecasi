document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO MENU MOBILE ---
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

    // --- DADOS PARA CONTEÚDO DINÂMICO ---

    const teachersData = [
        { name: "Antonio Almeida de Barros Junior", area: "Banco de Dados", email: "antonio.barros@ufes.br", site: "antoniojr.webnobe.com.br" },
        { name: "Bruno Vilela Oliveira", area: "Engenharia de Software", email: "bruno.v.oliveira@ufes.br", site: "brunovilela.webnode.com.br" },
        { name: "Clayton Vieira Fraga Filho", area: "Engenharia de Software", email: "clayton.fraga@ufes.br", site: null },
        { name: "Dayan de Castro Bissoli", area: "Sistemas de Informação", email: "dayan.bissoli@ufes.br", site: null },
        { name: "Edmar Hell Kampke", area: "Teoria dos Grafos", email: "edmar.kampke@ufes.br", site: null },
        { name: "Geraldo Regis Mauri", area: "Pesquisa Operacional", email: "geraldo.mauri@ufes.br", site: "grmauri.pro.br" },
        { name: "Giuliano Prado de Morais Giglio", area: "Desenvolvimento Web", email: "giucontato@gmail.com", site: "www.giuliano.tec.br" },
        { name: "Helder de Amorim Mendes", area: "Redes e Comp. Distribuída", email: "helder.mendes@ufes.br", site: null },
        { name: "Jacson Rodrigues Correia da Silva", area: "Inteligência Artificial e Estrutura de Dados", email: null, site: "jeiks.net" },
        { name: "Juliana Pinheiro Campos Pirovani", area: "Teoria da Computação", email: null, site: "jucampos.webnode.pt" },
        { name: "Larice Nogueira de Andrade", area: "Informática Básica", email: null, site: "http://lnandrade.webnode.com/" },
        { name: "Marcelo Otone Aguiar", area: "Sistemas de Informação", email: "marcelo.aguiar@ufes.br", site: "marceloaguiar.pro.br" },
        { name: "Paulo Roberto Nunes de Souza", area: "Teoria da Computação e Computação Forense", email: "paulo.souza@ufes.br", site: "paulonunes.online" },
        { name: "Rodrigo Freitas Silva", area: "Redes de Computadores", email: "rodrigo.f.silva@ufes.br", site: null },
        { name: "Simone Dornelas Costa", area: "Interação Humano-Computador e Ontologias", email: null, site: null },
        { name: "Valéria Alves da Silva", area: "Arquitetura de Computadores", email: "valeria.silva@ufes.br", site: null }
    ];

    const complementaryHoursData = [
        { id: 1, activity: "Artigo completo publicado em periódico IA", afins: "100h", outras: "100h" },
        { id: 2, activity: "Artigo completo publicado em periódico IB ou NA", afins: "80h", outras: "80h" },
        { id: 3, activity: "Artigo completo publicado em periódico IC ou NB", afins: "70h", outras: "70h" },
        { id: 4, activity: "Artigo completo publicado em periódico classificado", afins: "50h", outras: "50h" },
        { id: 5, activity: "Artigo completo publicado em periódico não classificado", afins: "30h", outras: "30h" },
        { id: 6, activity: "Artigo de divulgação", afins: "15h", outras: "10h" },
        { id: 7, activity: "Artigo publicado na Internet", afins: "15h", outras: "10h" },
        { id: 8, activity: "Atualização de homepage", afins: "5h", outras: "5h" },
        { id: 9, activity: "Desenvolvimento de Software", afins: "45h", outras: "45h" },
        { id: 10, activity: "Elaboração de homepage", afins: "30h", outras: "30h" },
        { id: 11, activity: "Estágio Extracurricular (cada 60 h)", afins: "30h", outras: "15h" },
        { id: 12, activity: "Iniciação científica - CNPq", afins: "50h", outras: "30h" },
        { id: 13, activity: "Iniciação científica - PIBIC", afins: "50h", outras: "30h" },
        { id: 14, activity: "Iniciação científica - PIVIC", afins: "50h", outras: "30h" },
        { id: 15, activity: "Monitoria oficial", afins: "50h", outras: "25h" },
        { id: 16, activity: "Monitoria voluntária", afins: "30h", outras: "15h" },
        { id: 17, activity: "Organização de ações sociais", afins: "9h", outras: "9h" },
        { id: 18, activity: "Organização de atividades culturais", afins: "9h", outras: "9h" },
        { id: 19, activity: "Organização de eventos", afins: "20h", outras: "10h" },
        { id: 20, activity: "Participação em atividades culturais", afins: "3h", outras: "1,5h" },
        { id: 21, activity: "Participação em cursos – Presencial (cada 8h)", afins: "8h", outras: "4h" },
        { id: 22, activity: "Participação em cursos – Não Presencial (cada 8h)", afins: "4h", outras: "2h" },
        { id: 23, activity: "Participação em eventos (moderador)", afins: "20h", outras: "10h" },
        { id: 24, activity: "Participação em eventos (ouvinte)", afins: "10h", outras: "5h" },
        { id: 25, activity: "Participação em eventos (palestrante)", afins: "45h", outras: "30h" },
        { id: 26, activity: "Participação em Projetos de Ensino", afins: "20h", outras: "10h" },
        { id: 27, activity: "Participação em Projetos de Pesquisa", afins: "30h", outras: "15h" },
        { id: 28, activity: "Participação em Projetos ou Serviços de Extensão", afins: "30h", outras: "15h" },
        { id: 29, activity: "Participação voluntária em ações sociais (cada semestre)", afins: "50h", outras: "25h" },
        { id: 30, activity: "Representação em órgãos colegiados", afins: "20h", outras: "-" },
        { id: 31, activity: "Representação Estudantil (CA, DA e Empresa Júnior)", afins: "20h", outras: "-" },
        { id: 32, activity: "Resumo apresentado em evento", afins: "20h", outras: "10h" },
        { id: 33, activity: "Resumo expandido apresentado em evento", afins: "30h", outras: "15h" },
        { id: 34, activity: "Resumo expandido publicado em evento", afins: "15h", outras: "7h" },
        { id: 35, activity: "Resumo publicado em evento", afins: "10h", outras: "5h" },
        { id: 36, activity: "Trabalho completo apresentado em evento", afins: "45h", outras: "30h" },
        { id: 37, activity: "Trabalho completo publicado em evento", afins: "30h", outras: "15h" }
    ];

    const accordionData = {
        "1º Período": [{ name: "COM06842 – Programação I", ch: "30T / 30L", prereq: "Não possui" },{ name: "COM06847 – Introdução à Informática", ch: "30T / 30L", prereq: "Não possui" },{ name: "COM06852 – Introdução aos Sistemas de Informação", ch: "30T", prereq: "Não possui" },{ name: "COM06853 – Lógica Computacional", ch: "60T", prereq: "Não possui" },{ name: "ENG06854 – Português Instrumental", ch: "30T", prereq: "Não possui" },{ name: "MPA06840 – Vetores e Geometria Analítica", ch: "60T", prereq: "Não possui" }],
        "2º Período": [{ name: "COM06851 – Matemática Discreta", ch: "60T", prereq: "Não possui" },{ name: "COM06984 – Fundamentos de Programação Web", ch: "45T / 15L", prereq: "COM06847 - Introdução à Informática" },{ name: "COM06985 – Teoria Geral dos Sistemas", ch: "60T", prereq: "COM06852 - Introdução aos Sistemas de Informação" },{ name: "ENG06849 – Inglês Instrumental", ch: "30T", prereq: "Não possui" },{ name: "MPA06839 – Cálculo A", ch: "60T / 30E", prereq: "Não possui" }],
        "3º Período": [{ name: "COM06992 – Estruturas de Dados I", ch: "45T / 15L", prereq: "COM06842 - Programação I" },{ name: "COM10014 – Computabilidade e Complexidade", ch: "60T", prereq: "COM06851 - Matemática Discreta" },{ name: "COM10015 – Engenharia de Software", ch: "60T", prereq: "COM06842 - Programação I" },{ name: "COM10016 – Sistemas de Apoio à Decisão", ch: "60T", prereq: "COM06985 - Teoria Geral dos Sistemas" },{ name: "MPA06855 – Álgebra Linear", ch: "60T", prereq: "MPA06840 - Vetores e Geometria Analítica" }],
        "4º Período": [{ name: "COM10076 – Arquitetura de Computadores", ch: "60T", prereq: "COM06842 - Programação I" },{ name: "COM10078 – Estrutura de Dados II", ch: "45T / 15L", prereq: "COM06992 - Estruturas de Dados I" },{ name: "COM10082 – Programação II", ch: "30T / 30L", prereq: "COM06992 - Estruturas de Dados I" },{ name: "COM10275 – Engenharia de Requisitos de Software", ch: "60T", prereq: "COM10015 - Engenharia de Software" },{ name: "ENG05510 – Estatística Básica", ch: "30T / 30E", prereq: "MPA06839 - Cálculo A" }],
        "5º Período": [{ name: "COM10129 – Banco de Dados", ch: "45T / 15L", prereq: "COM10078 - Estrutura de Dados II" },{ name: "COM10131 – Otimização Linear", ch: "45T / 15L", prereq: "COM06992 - Estruturas de Dados I, MPA06855 - Álgebra Linear" },{ name: "COM10132 – Sistemas Operacionais", ch: "60T", prereq: "COM06992 - Estruturas de Dados I, COM10076 - Arquitetura de Computadores" },{ name: "COM10507 – Interface Humano-Computador", ch: "60T", prereq: "COM10275 - Engenharia de Requisitos de Software" },{ name: "COM10508 – Projeto de Sistemas de Software", ch: "60T", prereq: "COM10082 - Programação II, COM10275 - Engenharia de Requisitos de Software" }],
        "6º Período": [{ name: "COM10081 – Metodologia de Pesquisa em Informática", ch: "30T", prereq: "ENG06854 - Português Instrumental" },{ name: "COM10393 – Métodos de Otimização", ch: "60T", prereq: "COM10131 - Otimização Linear" },{ name: "COM10394 – Redes de Computadores", ch: "60T", prereq: "COM10132 - Sistemas Operacionais" },{ name: "COM10603 – Direito e Legislação", ch: "30T", prereq: "Não possui" },{ name: "COM10733 – Gerência de Projeto de Software", ch: "60T", prereq: "COM10015 - Engenharia de Software" },{ name: "COM11014 – Gerenciamento de Banco de Dados", ch: "60T", prereq: "COM10129 - Banco de Dados" }],
        "7º Período": [{ name: "CFM10426 – Administração e Economia", ch: "60T", prereq: "Não possui" },{ name: "COM06996 – Informática e Sociedade", ch: "30T", prereq: "COM06852 - Introdução aos Sistemas de Informação" },{ name: "COM10606 – Comércio Eletrônico", ch: "45T / 15L", prereq: "COM06984 - Fundamentos de Programação Web" },{ name: "COM10616 – Sistemas Distribuídos", ch: "45T / 15L", prereq: "COM10394 - Redes de Computadores" },{ name: "COM11007 – Segurança e Auditoria de Sistemas", ch: "60T", prereq: "COM06985 - Teoria Geral dos Sistemas, COM10733 - Gerência de Projeto de Software" }],
        "8º Período": [{ name: "CFM11061 – Empreendedorismo", ch: "30T", prereq: "CFM10426 - Administração e Economia" },{ name: "COM10396 – Desenvolvimento de Sistemas para WEB", ch: "30T / 30L", prereq: "COM10082 - Programação II, COM10129 - Banco de Dados" },{ name: "COM10609 – Gerenciamento e Administração de Redes", ch: "45T / 15L", prereq: "COM10394 - Redes de Computadores" },{ name: "COM11064 – Gestão de Qualidade de Software", ch: "30T / 30L", prereq: "COM10508 - Projeto de Sistemas de Software" },{ name: "COM11212 – Trabalho de Conclusão de Curso em SI I", ch: "15T / 75L", prereq: "COM10081 - Metodologia de Pesquisa em Informática, 100 créditos mínimos" }],
        "9º Período": [{ name: "COM11259 – Sistemas de Software Livre", ch: "30T", prereq: "COM10132 - Sistemas Operacionais" },{ name: "COM11261 – Trabalho de Conclusão de Curso em SI II", ch: "15T / 75L", prereq: "COM11212 - Trabalho de Conclusão de Curso em SI I" },{ name: "COM11260 – Estágio em Informática", ch: "30T / 180E", prereq: "5 períodos vencidos" }]
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

    // --- FUNÇÕES DE RENDERIZAÇÃO E EVENT LISTENERS ---

    function setupTeachersAccordion() {
        const container = document.querySelector('#teachers-accordion');
        if(container){
            let content = '';
            teachersData.forEach(teacher => {
                content += `
                    <button class="accordion-button">${teacher.name}</button>
                    <div class="accordion-panel">
                        <div class="teacher-detail">
                            <p><strong>Área:</strong> ${teacher.area}</p>
                            ${teacher.email ? `<p><strong>E-mail:</strong> <a href="mailto:${teacher.email}">${teacher.email}</a></p>` : ''}
                            ${teacher.site ? `<p><strong>Site:</strong> <a href="http://${teacher.site}" target="_blank" rel="noopener noreferrer">${teacher.site}</a></p>` : ''}
                        </div>
                    </div>`;
            });
            container.innerHTML = content;
            setupAccordion('teachers-accordion');
        }
    }
    
    function setupComplementaryHours() {
        const container = document.querySelector('#atividades-complementares .custom-table tbody');
        if(container){
            let content = '';
            complementaryHoursData.forEach(item => {
                content += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.activity}</td>
                        <td>${item.afins}</td>
                        <td>${item.outras}</td>
                    </tr>`;
            });
            container.innerHTML = content;
        }
    }

    function setupAccordion(accordionId) {
        const accordionContainer = document.querySelector(`#${accordionId}`);
        if (!accordionContainer) return;

        accordionContainer.addEventListener('click', function(event) {
            const button = event.target.closest('.accordion-button');
            if (button) {
                const isActive = button.classList.contains('active');
                
                accordionContainer.querySelectorAll('.accordion-button').forEach(otherButton => {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.style.maxHeight = null;
                });

                if (!isActive) {
                    button.classList.add('active');
                    const panel = button.nextElementSibling;
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        });
    }
    
    function setupGradeAccordion() {
        const container = document.querySelector('#grade-accordion');
        if(container){
            let content = '';
            for (const period in accordionData) {
                content += `<button class="accordion-button">${period}</button><div class="accordion-panel">`;
                accordionData[period].forEach(subject => {
                    content += `<div class="subject-detail"><h4>${subject.name}</h4><p><strong>C.H.:</strong> ${subject.ch}</p><p><strong>Pré-requisito:</strong> ${subject.prereq}</p></div>`;
                });
                content += `</div>`;
            }
            container.innerHTML = content;
            setupAccordion('grade-accordion');
        }
    }
    
    function setupTabs() {
        const tabContentContainer = document.querySelector('#horarios .tab-content');
        if(tabContentContainer){
            let content = '';
            const scheduleHead = `<thead><tr><th>Horas</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th></tr></thead>`;
            for (const periodId in scheduleData) {
                const isActive = periodId === 'periodo1' ? 'active' : '';
                content += `<div id="${periodId}" class="content ${isActive}"><div class="schedule-wrapper"><table class="schedule-table">${scheduleHead}${scheduleData[periodId]}</table></div></div>`;
            }
            tabContentContainer.innerHTML = content;

            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContentContainer.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
                    
                    button.classList.add('active');
                    const targetId = button.getAttribute('data-target');
                    const targetContent = document.getElementById(targetId);
                    if(targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });
        }
    }

    function setupTimeline() {
        const timelineContainer = document.querySelector('.timeline');
        if (timelineContainer) {
            let content = '';
            timelineData.forEach(item => {
                content += `<li><strong>${item.date}</strong><p>${item.event}</p></li>`;
            });
            timelineContainer.innerHTML = content;
        }
    }

    // --- CHAMADA DAS FUNÇÕES ---
    setupTeachersAccordion();
    setupComplementaryHours();
    setupGradeAccordion();
    setupTabs();
    setupTimeline();
});