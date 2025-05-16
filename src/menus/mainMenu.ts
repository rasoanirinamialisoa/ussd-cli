import { navigateTo } from './navigation'
import pauseAndRetry from '../utils/pauseAndRetry'
import mvolaMenu from './mvolaMenu'

let currentPage = 1

const renderMenu = (): void => {
    console.clear()
    if (currentPage === 1) {
        console.log(`
      Menu Principal - Page 1:
      1. Mvola
      2. Rappelle moi
      0. Page suivante
    `)
    } else if (currentPage === 2) {
        console.log(`
      Menu Principal - Page 2:
      3. SOS Crédit
      4. Service Yas
      00. Page précédente
    `)
    }
}

const mainMenu = async (): Promise<void> => {
    renderMenu()
    const choice = navigateTo()

    switch (choice) {
        case '0':
            if (currentPage === 1) currentPage = 2
            break
        case '00':
            if (currentPage === 2) currentPage = 1
            break
        case '1':
            await mvolaMenu()
            return
        case '2':
            if (currentPage === 1) {
                console.log('Service indisponible : Rappelle moi')
                await pauseAndRetry()
                return
            }
            break
        case '3':
            if (currentPage === 2) {
                console.log('Service indisponible : SOS Crédit')
                await pauseAndRetry()
                return
            }
            break
        case '4':
            if (currentPage === 2) {
                console.log('Service indisponible : Service Yas')
                await pauseAndRetry()
                return
            }
            break
        default:
            console.log('Option invalide !')
            await pauseAndRetry()
            break
    }

    await mainMenu()
}

export default mainMenu
