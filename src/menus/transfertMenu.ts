import { getInput } from '../utils/input';

const transfertMenu = () => {
    console.clear();
    const numero = getInput('Entrer le numéro de téléphone');
    const montant = getInput('Entrer le montant');

    console.log(`
        Prise en charge des frais :
        1. Oui (5% inclus)
        2. Non (somme exacte)
    `);

    const frais = getInput('Choix');
    const description = getInput('Description du transfert');

    console.log(`
        Confirmer le transfert :
        Numéro: ${numero}
        Montant: ${montant} MGA
        Frais: ${frais === '1' ? 'Inclus (5%)' : 'Non'}
        Description: ${description}
    `);

    const code = getInput('Entrer le code secret');
    if (code === '1215') {
        console.log("Transaction réussie !");
    } else {
        console.log("Code secret incorrect.");
    }
};

export default transfertMenu;
