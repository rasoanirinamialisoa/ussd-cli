import { navigateTo } from './navigation';

let currentPage = 1;

const renderMenu = () => {
    console.clear();
    if (currentPage === 1) {
        console.log(`
            Mvola Menu - Page 1:
            1. Acheter Crédit ou Offre Yas
            2. Transférer Argent
            #. Page suivante
            *. Page précédente
            **. Menu principal
        `);
    } else if (currentPage === 2) {
        console.log(`
            Mvola Menu - Page 2:
            3. Mavola ou Épargne
            4. Retrait d'argent
            *. Page précédente
            **. Menu principal
        `);
    }
};

const mvolaMenu = () => {
    renderMenu();
    const choice = navigateTo();

    switch (choice) {
        case '#':
            currentPage = Math.min(currentPage + 1, 2);
            mvolaMenu();
            break;
        case '*':
            currentPage = Math.max(currentPage - 1, 1);
            mvolaMenu();
            break;
        case '2':
            if (currentPage === 1) {
                require('./transfertMenu').default();
            } else {
                console.log("Option invalide !");
                mvolaMenu();
            }
            break;
        case '**':
            require('./mainMenu').default();
            break;
        default:
            console.log("Option invalide !");
            mvolaMenu();
            break;
    }
};

export default mvolaMenu;
