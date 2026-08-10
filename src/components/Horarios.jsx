import React, { useState } from 'react';
import '../styles/Horarios.css';

const scheduleData = {
  periodo1: [
    { hour: "18:00 às 20:00", days: ["Introdução aos Sistemas de Informação - Sl 03 - Ciclo Básico", "Vetores e Geometria Analítica - Sl 01 - Eng. Alimentos", "Introdução à Informática Lab 1 e 2 -  ChiChiu", "Vetores e Geometria Analítica - Sl 01 - Eng. Alimentos", "Programação I - Lab 1 e 3 -  ChiChiu" ] },
    { hour: "20:00 às 22:00", days: ["Introdução à Informática - Lab 1 e 2 -  ChiChiu", "Português Instrumental - Sl 03 - Ciclo Básico", "Programação I - Lab 1 e 3 -  ChiChiu", "Lógica Computacional I - Sl 03 - Ciclo Básico", "Lógica Computacional I - Sl 03 - Ciclo Básico"] }
  ],
  periodo3: [
    { hour: "18:00 às 20:00", days: ["Sistemas de Apoio à Decisão - Sl 01 - Eng. Alimentos", "Estruturas de Dados I - Lab 1 e 2 -  ChiChiu", "Engenharia de Software - Sl 01 - Eng. Alimentos", "Estruturas de Dados I - Lab 1 e 2 -  ChiChiu", "Computabilidade e Complexidade - Sl 03 - Ciclo Básico"] },
    { hour: "20:00 às 22:00", days: ["Álgebra Linear - Sl 01 - Eng. Alimentos", "Sistemas de Apoio à Decisão - Sl 01 - Eng. Alimentos", "Computabilidade e Complexidade - Sl 03 - Ciclo Básico", "Álgebra Linear - Sl 01 - Eng. Alimentos", "Engenharia de Software - Sl 01 - Eng. Alimentos"] }
  ],
  periodo5: [
    { hour: "18:00 às 20:00", days: ["Otimização Linear - Lab 3 -  ChiChiu", "Banco de Dados - Sl 03 - Ciclo Básico", "Otimização Linear - Lab 3 -  ChiChiu", "Projeto de Sistemas de Software - Lab 3 -  ChiChiu", "Sistemas Operacionais - Sl 01 - Eng. Alimentos"] },
    { hour: "20:00 às 22:00", days: ["Banco de Dados - Sl 03 - Ciclo Básico", "Projeto de Sistemas de Software - Lab 3 -  ChiChiu", "Sistemas Operacionais - Sl 01 - Eng. Alimentos", "Interface Humano-Computador - Lab 1 e 2 -  ChiChiu", "Interface Humano-Computador - Lab 1 e 2 -  ChiChiu"] }
  ],
  periodo7: [
    { hour: "18:00 às 20:00", days: ["Informática e Sociedade - Sl 07 - Prédio Central / Lab 1 - ChiChiu", "Segurança e Auditoria de Sistemas - Lab 2 e 3 -  ChiChiu", "Sistemas Distribuídos - Sl 07 - Prédio Central / Lab 3 - ChiChiu", "Administração e Economia - Sl 07 - Prédio Central", "Segurança e Auditoria de Sistemas - Lab 2 e 3 -  ChiChiu"] },
    { hour: "20:00 às 22:00", days: ["Comércio Eletrônico - Lab 2 e 3 -  ChiChiu", "Tópicos Esp. Inf. II - Lab I - Reuni", "Comércio Eletrônico - Lab 2 e 3 -  ChiChiu", "Administração e Economia - Sl 07 - Prédio Central", "Sistemas Distribuídos - Sl 07 - Prédio Central / Lab 1 - ChiChiu"] }
  ],
  periodo9: [
    { hour: "18:00 às 20:00", days: ["Algoritmos Numéricos - Sl 11 - Prédio Central", "Sistemas de Software Live - Lab I - Reuni", "Algoritmos Numéricos - Sl 11 - Prédio Central", "Tópicos Esp. Inf. II - Lab 2 - Reuni", ""] },
    { hour: "20:00 às 22:00", days: ["", "", "Tópicos Esp. Inf. II - Lab 2 - Reuni", "", ""] }
  ]
};

export default function Horarios() {
  const [activeTab, setActiveTab] = useState("periodo2");

  return (
    <section id="horarios">
      <div className="container">
        <h2>Horários do Semestre</h2>
        <p className="section-subtitle">Selecione o período acadêmico para mapear as grades horárias das disciplinas.</p>
        
        <div className="tabs">
          {["periodo1", "periodo3", "periodo5", "periodo7", "periodo9"].map((p) => (
            <button 
              key={p}
              className={`tab-button ${activeTab === p ? 'active' : ''}`}
              onClick={() => setActiveTab(p)}
            >
              {p.replace("periodo", "")}º Período
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="schedule-wrapper">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Horário</th>
                  <th>Segunda</th>
                  <th>Terça</th>
                  <th>Quarta</th>
                  <th>Quinta</th>
                  <th>Sexta</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData[activeTab] ? (
                  scheduleData[activeTab].map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.hour}</td>
                      {row.days.map((day, dIdx) => (
                        <td key={dIdx}>
                          {day ? (
                            <>
                              <strong>{day.split(' (')[0]}</strong>
                              <small>{day.split(' (')[1]?.replace(')', '')}</small>
                            </>
                          ) : ""}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                      Nenhum horário cadastrado para este período.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}