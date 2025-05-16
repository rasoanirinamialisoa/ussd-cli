import { navigateTo } from './navigation'
import mainMenu from './mainMenu'

let currentPage = 1

const renderMenu = (): void => {
  console.clear()
  if (currentPage === 1) {
    console.log(`
      Mvola Menu - Page 1:
      1. Acheter Crédit ou Offre Yas
      2. Transférer Argent
      #. Page suivante
      *. Page précédente
      **. Menu principal
    `)
  } else if (currentPage === 2) {
    console.log(`
      Mvola Menu - Page 2:
      3. Mavola ou Épargne
      4. Retrait d'argent
      *. Page précédente
      **. Menu principal
    `)
  }
}

const mvolaMenu = async (): Promise<void> => {
  renderMenu()
  const choice = navigateTo()

  switch (choice) {
    case '#':
      currentPage = Math.min(currentPage + 1, 2)
      break
    case '*':
      currentPage = Math.max(currentPage - 1, 1)
      break
    case '2':
      if (currentPage === 1) {
        console.log('Transfert Argent - service à implémenter')
      } else {
        console.log('Option invalide !')
      }
      break
    case '**':
      await mainMenu()
      return
    default:
      console.log('Option invalide !')
      break
  }

  await mvolaMenu()
}

export default mvolaMenu
