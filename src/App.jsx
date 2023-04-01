import './App.css'
import { Card } from './components/Card'
import { HappyBirthday } from './components/HappyBirthday';
import { Letter } from './components/Letter'

const cards = [
  {
    title: "Primeira coisa: perdão.",
    text: "Quero pedir perdão por ter sido egoísta. O amor não deve ser egoísta, mas o meu foi. Tive medo de me machucar e acabei te negligenciando e te magoando nesse processo. Quando me disse que me deixaria, mesmo que eu soubesse que era para o seu melhor, tive medo e tentei “me proteger”, pois tu és minha confidente e melhor amiga, tive medo de me sentir sozinha, medo de não conseguir sem você do meu lado. Peço perdão, meu amor."
  },
  {
    title: "Segunda coisa: obrigada.",
    text: "Sempre tem essa parte em minhas cartas e nunca deixará de ter, pois sei que tu é um presente de Deus em minha vida e nunca deixarei de agradecer. Agradeço por ser paciente, ser compreensiva (mesmo em sua dor), agradeço por ser a MELHOR CONSELHEIRA DO UNIVERSO, agradeço por ser parte da minha família e por ser uma das pessoas que está ajudando a construir meu caráter. Obrigada por existir, Son Son!"
  },
  {
    title: "Terceira coisa: desejos.",
    text: "Eu sei que quem faz os desejos é a aniversariante, porém quero listar alguns dos meus: Eu desejo que possamos fazer tudo o que já planejamos juntas, as viagens, as comidas, as experiências e tudo o que esse mundo tem reservado para nós. Eu desejo que não importa aonde formos, que sempre nos lembraremos uma da outra e nunca deixemos de nos falar. Eu desejo que tu conquiste tudo o que deseja e merece. Eu desejo que sejas saudável e plena. Eu desejo e rogo a Deus que Ele permita sua estadia na minha vida por muuuuuuuuito tempo."
  }
];

function App() {
  return (
    <div className="App">
      {/* letter */}
      <main className="container">
        <Letter />
        <section id="cards">
          {
            cards.map((card) => {
             return (
              <Card 
                title={card.title}
                text={card.text}
              />
             );
            })
          }
        </section>
        <HappyBirthday />
      </main>
    </div>
  )
}

export default App
