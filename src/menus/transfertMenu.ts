import { getInput } from '../utils/input'

const transfertMenu = async (): Promise<void> => {
    console.clear()
    const numero = await getInput('Entrer le numéro de téléphone')
    const montant = await getInput('Entrer le montant')

    console.log(`
    Prise en charge des frais :
    1. Oui (5% inclus)
    2. Non (somme exacte)
  `)

    const frais = await getInput('Choix')
    const description = await getInput('Description du transfert')

    console.log(`
    Confirmer le transfert :
    Numéro: ${numero}
    Montant: ${montant} MGA
    Frais: ${frais === '1' ? 'Inclus (5%)' : 'Non'}
    Description: ${description}
  `)

    const code = await getInput('Entrer le code secret')
    if (code === '1215') {
        console.log('Transaction réussie !')
    } else {
        console.log('Code secret incorrect.')
    }
}

export default transfertMenu
