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
        { name: "Jacson Rodrigues Correia da Silva", area: "Inteligência Artificial e Estrutura de Dados", email: "jacson.silva@ufes.br", site: "jeiks.net" },
        { name: "Juliana Pinheiro Campos Pirovani", area: "Teoria da Computação", email: "juliana.campos@ufes.br", site: "jucampos.webnode.pt" },
        { name: "Larice Nogueira de Andrade", area: "Informática Básica", email: "lariceandrade@gmail.com", site: "http://lnandrade.webnode.com/" },
        { name: "Marcelo Otone Aguiar", area: "Sistemas de Informação", email: "marcelo.aguiar@ufes.br", site: "marceloaguiar.pro.br" },
        { name: "Paulo Roberto Nunes de Souza", area: "Teoria da Computação e Computação Forense", email: "paulo.souza@ufes.br", site: "paulonunes.online" },
        { name: "Rodrigo Freitas Silva", area: "Redes de Computadores", email: "rodrigo.f.silva@ufes.br", site: null },
        { name: "Simone Dornelas Costa", area: "Interação Humano-Computador e Ontologias", email: "simone.costa@ufes.br", site: null },
        { name: "Valéria Alves da Silva", area: "Arquitetura de Computadores", email: "valeria.silva@ufes.br", site: null }
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
        periodo1: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Introdução à Informática</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Vetores e Geometria Analítica</strong><small> Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Lógica Computacional I</strong><small> Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Programação I</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Introdução aos Sistemas de Informação</strong><small> Sala 03 - Prédio Ciclo Básico</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Lógica Computacional I</strong><small> Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Português Instrumental</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Introdução à Informática</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Vetores e Geometria Analítica</strong><small> Sala 03 - Prédio Ciclo Básico</small></td><td><strong>Programação I</strong><small> Lab 1 - Chiu-Chiu</small></td></tr></tbody>`,
        periodo3: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Sistemas de Apoio à Decisão</strong><small> Sala 07 - Prédio Central</small></td><td><strong>Estruturas de Dados I</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Engenharia de Software I</strong><small> Sala 07 - Prédio Central</small></td><td><strong>Computabilidade e Complexidade</strong><small> Sala 07 - Prédio Central</small></td><td><strong>Computabilidade e Complexidade</strong><small> Sala 07 - Prédio Central</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Estruturas de Dados I</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Álgebra Linear</strong><small> Sala 07 - Prédio Central</small></td><td><strong>Sistemas de Apoio à Decisão</strong><small> Sala 07 - Prédio Central</small></td><td><strong>Álgebra Linear</strong><small> Sala 07 - Prédio Central</small></td><td><strong>Engenharia de Software I</strong><small> Sala 07 - Prédio Central</small></td></tr></tbody>`,
        periodo5: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Otimização Linear</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Otimização Linear</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Banco de Dados</strong><small> Lab 3 - Chiu-Chiu</small></td><td><strong>Projeto de Sistemas de Software</strong><small> Lab 3 - Chiu-Chiu</small></td><td><strong>Interação Humano-Máquina</strong><small> Lab 3 - Chiu-Chiu</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Sistemas Operacionais</strong><small> Lab 1 - Chiu-Chiu</small></td><td><strong>Sistemas Operacionais</strong><small>Lab 1 - Chiu-Chiu</small></td><td><strong>Interação Humano-Máquina</strong><small> Lab 3 - Chiu-Chiu</small></td><td><strong>Banco de Dados</strong><small> Lab 3 - Chiu-Chiu</small></td><td><strong>Projeto de Sistemas de Software</strong><small> Lab 3 - Chiu-Chiu</small></td></tr></tbody>`,
        periodo7: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Sistemas Distribuídos</strong><small> Lab. Desenv. SW I - Reuni</small></td><td><strong>Sistemas Distribuídos</strong><small> Lab. Desenv. SW I - Reuni</small></td><td><strong>Segurança e Auditoria de Sistemas</strong><small> Lab. Desenv. SW I - Reuni</small></td><td><strong>Administração e Economia</strong><small> Lab. Desenv. SW I - Reuni</small></td><td><strong>Comércio Eletrônico</strong><small> Lab. Desenv. SW I - Reuni</small></td></tr><tr><td>20:00 às 22:00</td><td><strong>Informática e Sociedade</strong><small> Lab. Desenv. SW I - Reuni</small></td><td></td><td><strong>Comercio Eletrônico</strong><small> Lab. Desenv. SW I - Reuni</small></td><td><strong>Administração e Economia</strong><small> Lab. Desenv. SW I - Reuni</small></td><td><strong>Segurança e Auditoria de Sistemas</strong><small> Lab. Desenv. SW I - Reuni</small></td></tr></tbody>`,
        periodo9: `<tbody><tr><td>18:00 às 20:00</td><td><strong>Algoritmos Numéricos</strong><small> Sala 04 - Prédio Central</small></td><td><strong>Sistemas de Softwares Livres</strong><small> Lab. Desenv. SW 2 - Reuni</small></td><td><strong>Algoritmos Numéricos</strong><small> Sala 04 - Prédio Central</small></td><td></td><td></td></tr><tr><td>20:00 às 22:00</td><td><strong>Tópicos Especiais em Redes de Computadores I</strong><small> Lab. Desenv. SW 2 - Reuni</small></td><td><strong>Tópicos Especiais em Análise Combinatória</strong><small> Lab. Desenv. SW I - Reuni</small></td><td><strong>Tópicos Especiais em Análise Combinatória</strong><small> Lab. Desenv. SW I - Reuni</small></td><td></td><td></td></tr></tbody>`
    };

   const cardapioData = {
      segunda: `<div class="menu-grid">
        <div class="menu-card">
          <h3>Café da Manhã</h3>
          <p><strong>Pão:</strong> Pão de Hot Dog (CG)</p>
          <p><strong>Complemento:</strong> Margarina com Sal</p>
          <p><strong>Bebidas:</strong> Café, Leite Integral (CL), Suco de Graviola</p>
          <p><strong>Fruta:</strong> Banana</p>
        </div>
        <div class="menu-card">
          <h3>Almoço</h3>
          <p><strong>Entrada:</strong> Tomate com Pepino, Chuchu com Milho</p>
          <p><strong>Prato Proteico:</strong> Frango Desfiado</p>
          <p><strong>Opção:</strong> Proteína de Soja ao Molho Escabeche</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Farofa de Cebola (CL)</p>
          <p><strong>Sobremesa:</strong> Maçã</p>
          <p><strong>Suco:</strong> Manga</p>
        </div>
        <div class="menu-card">
          <h3>Jantar</h3>
          <p><strong>Entrada:</strong> Alface com Manga, Beterraba Ralada</p>
          <p><strong>Prato Proteico:</strong> Carne Moída à Caipira</p>
          <p><strong>Opção:</strong> Soja em Grãos com Legumes</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Polenta Cremosa</p>
          <p><strong>Sobremesa:</strong> Melancia</p>
          <p><strong>Suco:</strong> Abacaxi</p>
        </div>
      </div>`,
    
      terca: `<div class="menu-grid">
        <div class="menu-card">
          <h3>Café da Manhã</h3>
          <p><strong>Pão:</strong> Pão Francês (CG)</p>
          <p><strong>Complemento:</strong> Manteiga com Sal</p>
          <p><strong>Bebidas:</strong> Café, Leite Integral (CL), Suco de Manga</p>
          <p><strong>Fruta:</strong> Melancia</p>
        </div>
        <div class="menu-card">
          <h3>Almoço</h3>
          <p><strong>Entrada:</strong> Alface, Beterraba Cozida</p>
          <p><strong>Prato Proteico:</strong> Carne Moída com Legumes</p>
          <p><strong>Opção:</strong> Omelete com Salsa</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Espaguete ao Alho e Óleo (CG)</p>
          <p><strong>Sobremesa:</strong> Abacaxi / Mousse de Chocolate (CL)</p>
          <p><strong>Suco:</strong> Morango</p>
        </div>
        <div class="menu-card">
          <h3>Jantar</h3>
          <p><strong>Entrada:</strong> Acelga com Laranja, Cenoura Ralada</p>
          <p><strong>Prato Proteico:</strong> Fricassê de Frango (CL)</p>
          <p><strong>Opção:</strong> Proteína de Soja Refogada com Ervilha</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Farofa de Cenoura (CL)</p>
          <p><strong>Sobremesa:</strong> Gelatina de Cereja / Maçã</p>
          <p><strong>Suco:</strong> Caju</p>
        </div>
      </div>`,
    
      quarta: `<div class="menu-grid">
        <div class="menu-card">
          <h3>Café da Manhã</h3>
          <p><strong>Pão:</strong> Pão de Hot Dog (CG)</p>
          <p><strong>Complemento:</strong> Margarina com Sal</p>
          <p><strong>Bebidas:</strong> Café, Leite Integral (CL), Suco de Morango</p>
          <p><strong>Fruta:</strong> Melão</p>
        </div>
        <div class="menu-card">
          <h3>Almoço</h3>
          <p><strong>Entrada:</strong> Repolho Bicolor, Pepino Refrescante</p>
          <p><strong>Prato Proteico:</strong> Filé de Coxa e Sobrecoxa</p>
          <p><strong>Opção:</strong> Torta de Grão-de-Bico com Couve e Cenoura</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Polenta com Queijo (CL)</p>
          <p><strong>Sobremesa:</strong> Laranja</p>
          <p><strong>Suco:</strong> Goiaba</p>
        </div>
        <div class="menu-card">
          <h3>Jantar</h3>
          <p><strong>Entrada:</strong> Couve com Abacaxi, Rabanete com Tomate</p>
          <p><strong>Prato Proteico:</strong> Sassami ao Molho Mostarda (CL)</p>
          <p><strong>Opção:</strong> Ovos Mexidos</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Purê de Macaxeira (CL)</p>
          <p><strong>Sobremesa:</strong> Goiaba</p>
          <p><strong>Suco:</strong> Acerola</p>
        </div>
      </div>`,
    
      quinta: `<div class="menu-grid">
        <div class="menu-card">
          <h3>Café da Manhã</h3>
          <p><strong>Pão:</strong> Pão Francês (CG)</p>
          <p><strong>Complemento:</strong> Manteiga com Sal</p>
          <p><strong>Bebidas:</strong> Café, Leite Integral (CL), Suco de Acerola</p>
          <p><strong>Fruta:</strong> Laranja</p>
        </div>
        <div class="menu-card">
          <h3>Almoço</h3>
          <p><strong>Entrada:</strong> Couve com Laranja, Salpicão de Cenoura</p>
          <p><strong>Prato Proteico:</strong> Lagarto Assado</p>
          <p><strong>Opção:</strong> Hambúrguer de Soja</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Batata Rústica com Alecrim</p>
          <p><strong>Sobremesa:</strong> Cocada / Goiaba</p>
          <p><strong>Suco:</strong> Caju</p>
        </div>
        <div class="menu-card">
          <h3>Jantar</h3>
          <p><strong>Entrada:</strong> Rúcula, Tabule</p>
          <p><strong>Prato Proteico:</strong> Bife Acebolado</p>
          <p><strong>Opção:</strong> Lasanha de Berinjela (CL)</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Canjiquinha com Tomate e Vagem</p>
          <p><strong>Sobremesa:</strong> Pudim de Morango / Melão</p>
          <p><strong>Suco:</strong> Morango</p>
        </div>
      </div>`,
    
      sexta: `<div class="menu-grid">
        <div class="menu-card">
          <h3>Café da Manhã</h3>
          <p><strong>Pão:</strong> Pão de Hot Dog (CG)</p>
          <p><strong>Complemento:</strong> Margarina com Sal</p>
          <p><strong>Bebidas:</strong> Café, Leite Integral (CL), Suco de Caju</p>
          <p><strong>Fruta:</strong> Mamão</p>
        </div>
        <div class="menu-card">
          <h3>Almoço</h3>
          <p><strong>Entrada:</strong> Acelga, Grão-de-Bico</p>
          <p><strong>Prato Proteico:</strong> Copa Lombo Grelhado</p>
          <p><strong>Opção:</strong> Soja em Grãos com Legumes</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Canjiquinha Salgada</p>
          <p><strong>Sobremesa:</strong> Goiaba</p>
          <p><strong>Suco:</strong> Acerola</p>
        </div>
        <div class="menu-card">
          <h3>Jantar</h3>
          <p><strong>Entrada:</strong> Repolho Roxo, Soja em Grão ao Vinagrete</p>
          <p><strong>Prato Proteico:</strong> Pernil Assado ao Molho de Abacaxi</p>
          <p><strong>Opção:</strong> Feijão Branco com Mandioquinha e Tomate</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Berinjela à Milanesa</p>
          <p><strong>Sobremesa:</strong> Banana</p>
          <p><strong>Suco:</strong> Manga</p>
        </div>
      </div>`,
    
      sabado: `<div class="menu-grid menu-grid-single">
        <div class="menu-card">
          <h3>Almoço</h3>
          <p><strong>Entrada:</strong> Tomate com Pepino, Beterraba Ralada</p>
          <p><strong>Prato Proteico:</strong> Frango Xadrez</p>
          <p><strong>Opção:</strong> Escondidinho de Proteína de Soja</p>
          <p><strong>Acompanhamentos:</strong> Arroz, Feijão e Cenoura Sauté</p>
          <p><strong>Sobremesa:</strong> Pé de Moleque / Abacaxi</p>
          <p><strong>Suco:</strong> Uva</p>
        </div>
      </div>`
};


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
    
    function setupTabs(tabsContainerId, contentContainerId, data) {
        const tabButtons = document.querySelectorAll(`#${tabsContainerId} .tab-button`);
        const tabContentContainer = document.querySelector(`#${contentContainerId}`);

        if(tabContentContainer && tabButtons.length > 0){
            let content = '';
            for (const id in data) {
                const isActive = Object.keys(data).indexOf(id) === 0 ? 'active' : '';
                content += `<div id="${id}" class="content ${isActive}">${data[id]}</div>`;
            }
            tabContentContainer.innerHTML = content;

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
    
    function populateScheduleTabs() {
        const dataForTabs = {};
        const scheduleHead = `<thead><tr><th>Horas</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th></tr></thead>`;
        for (const periodId in scheduleData) {
            dataForTabs[periodId] = `<div class="schedule-wrapper"><table class="schedule-table">${scheduleHead}${scheduleData[periodId]}</table></div>`;
        }
        setupTabs('horarios-tabs', 'horarios-tab-content', dataForTabs);
    }
    
    function populateCardapioTabs() {
        setupTabs('cardapio-tabs', 'cardapio-tab-content', cardapioData);
    }

    // --- CHAMADA DAS FUNÇÕES ---
    setupTeachersAccordion();
    setupGradeAccordion();
    populateScheduleTabs();
    populateCardapioTabs();
});
