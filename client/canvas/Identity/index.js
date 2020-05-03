import React from "react";
import FlexCanvas from "react-flexcanvas";

export default class IdentityCanvas extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="page-description">
          <p>
            Antes de preencher este <strong>Canvas Identidade</strong>,
            certifique-se de ter preenchido os{" "}
            <strong>Canvas Eleitoral e Persona</strong>.
          </p>
          <p>
            Os itens{" "}
            <strong>Candidata, Princípios, Causas e Compromissos</strong> são a
            base para completar este documento.
          </p>
        </div>
        <FlexCanvas>
          <FlexCanvas.Row>
            <FlexCanvas.Item
              title="Linguagem e tom de voz"
              grow="2"
              color="yellow"
            >
              <FlexCanvas.Field
                title="Singular ou plural"
                tip="Sua comunicação vai usar “Eu faço/sou” ou “Nós fazemos/somos”?"
              />
              <FlexCanvas.Field
                grow="2.5"
                title="Característica 1"
                tip="Qual será a característica principal da comunicação da candidata? Ela é despojada? Humorada? Combativa? Intelectual? Amorosa? E como essa característica se materializa na sua forma de comunicar? É uma pessoa humorada que faz piadas leves ou sarcásticas? É combativa em todos os momentos ou só sobre questões chave?"
              />
              <FlexCanvas.Field
                grow="2"
                title="Característica 2"
                tip="Qual a característica secundária da comunicação da candidata? Siga o mesmo exemplo acima."
              />
              <FlexCanvas.Field
                title="Propósito"
                grow="2"
                tip="O que você espera causar (emocional ou psicológico) nas pessoas? Como você espera que essa Persona se sinta ou faça assim que ela tiver contato com sua campanha?"
              />
              <FlexCanvas.Field
                title="Símbolos e ícones"
                tip="Quais são os símbolos, ícones e imagens que você entende que representam a sua campanha?"
              />
              <FlexCanvas.Field
                title="Cores"
                tip="Quais são as cores que você acredita que transmitem a identidade da sua campanha?"
              />
            </FlexCanvas.Item>
            <FlexCanvas.Item title="Mensagem-chave" grow="2" color="blue">
              <FlexCanvas.Field
                title="Mensagem-chave 1"
                tip="Desenvolva uma frase utilizando informações presentes no Canvas de Planejamento (Candidata, Princípios, Causa e Compromissos), no Canvas de Público (Motivação, Objetivos, Frustrações, Preocupações) e também utilizando os elementos de linguagem e tom deste Canvas. De forma resumida, faça o seguinte exercício: O que é realmente importante para a pessoa/Persona e como a sua história e conhecimento podem influenciar essa questão. Ajuste o tom que melhor funcione para dialogar com essa Persona."
              />
              <FlexCanvas.Field
                title="Mensagem chave 2"
                tip="Desenvolva uma segunda frase utilizando informações presentes no Canvas de Planejamento (Candidata, Princípios, Causa e Compromissos), no Canvas de Público (Motivação, Objetivos, Frustrações, Preocupações) e também utilizando os elementos de linguagem e tom deste Canvas. De forma resumida, faça o seguinte exercício: O que é realmente importante para a pessoa/Persona e como a sua história e conhecimento podem influenciar essa questão. Ajuste o tom que melhor funcione para dialogar com essa Persona."
              />
            </FlexCanvas.Item>
            <FlexCanvas.Item
              title="Canal de veiculação ou produtos"
              tip="Como essa mensagem vai chegar até a Persona? Onde essa Persona vai ter contato com a mensagem? Utilize as informações do item “O que faz”, no Canvas de Persona, para ajudar a pensar em formas, normais ou criativas, de fazer essa mensagem chegar até essa pessoa. Idealmente liste três canais e produtos e no máximo cinco."
              color="green"
            ></FlexCanvas.Item>
          </FlexCanvas.Row>
        </FlexCanvas>
      </div>
    );
  }
}
