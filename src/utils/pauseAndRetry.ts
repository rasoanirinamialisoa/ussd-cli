import readlineSync from 'readline-sync'

const pauseAndRetry = async (): Promise<void> => {
  console.log('\nAppuyez sur une touche pour continuer...')
  readlineSync.question('')
}

export default pauseAndRetry
