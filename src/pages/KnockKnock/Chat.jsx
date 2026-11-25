import NextStep from './NextStep'
import QuestionBlock from './QuestionBlock'
import { QUESTIONS } from './questions'
import styles from './Chat.module.css'

// Le chat anonyme : la photo, les questions déjà posées et la suite
const Chat = ({ conversation, messages, onSend }) => {
  // Chaque message est la réponse à la question suivante.
  // On passe à la question suivante quand les deux ont répondu.
  const myAnswers = messages.filter((message) => message.isMine)
  const theirAnswers = messages.filter((message) => !message.isMine)
  const step = Math.min(myAnswers.length, theirAnswers.length)

  return (
    <>
      <p className={styles.intro}>
        Tu discutes avec {conversation.name}. Les prénoms se dévoilent quand la
        porte s&apos;ouvre.
      </p>
      <img
        className={styles.photo}
        src={conversation.photo}
        alt="Le logement"
      />

      <ol className={styles.list}>
        {QUESTIONS.slice(0, step + 1).map((question, index) => (
          <QuestionBlock
            key={question}
            number={index + 1}
            question={question}
            myAnswer={myAnswers[index]}
            theirAnswer={theirAnswers[index]}
            pseudo={conversation.name}
          />
        ))}
      </ol>

      <NextStep
        conversation={conversation}
        isFinished={step >= QUESTIONS.length}
        isWaiting={myAnswers.length > step}
        onSend={onSend}
      />
    </>
  )
}

export default Chat
