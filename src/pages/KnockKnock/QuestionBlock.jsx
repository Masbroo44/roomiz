import styles from './QuestionBlock.module.css'

// Une question et les réponses déjà données (chacune peut manquer)
const QuestionBlock = ({ number, question, myAnswer, theirAnswer, pseudo }) => {
  return (
    <li className={styles.block}>
      <p className={styles.question}>
        Question {number} · {question}
      </p>
      {theirAnswer && (
        <p className={styles.bubble}>
          <span className={styles.author}>{pseudo}</span>
          {theirAnswer.text}
        </p>
      )}
      {myAnswer && (
        <p className={`${styles.bubble} ${styles.mine}`}>
          <span className={styles.author}>Toi</span>
          {myAnswer.text}
        </p>
      )}
    </li>
  )
}

export default QuestionBlock
