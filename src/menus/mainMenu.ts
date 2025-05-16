import { navigateTo } from './navigation';
import readlineSync from 'readline-sync';

let currentPage = 1;

const renderMenu = () => {
    console.clear();
    if (currentPage === 1) {
        console.log(`
            Menu Principal - Page 1:
            1. Mvola
            2. Rappelle moi
            0. Page suivante
        `);
    } else if (currentPage === 2) {
        console.log(`
            Menu Principal - Page 2:
            3. SOS Crédit
            4. Service Yas
            00. Page précédente
        `);
    }
};

const pauseAndReturnToMenu = async () => {
    console.log("\nAppuyez sur une touche pour revenir au menu principal...");
    readlineSync.question('');
    mainMenu();
};

const mainMenu = async () => {
    renderMenu();

    const choice = navigateTo();

    switch (choice) {
        case '0':
            if (currentPage === 1) {
                currentPage = 2;
            }
            break;
        case '00':
            if (currentPage === 2) {
                currentPage = 1;
            }
            break;
        case '1':
            if (currentPage === 1 || currentPage === 2) {
                require('./mvolaMenu').default();
                return;
            }
            break;
        case '2':
            if (currentPage === 1) {
                console.log("Service indisponible : Rappelle moi");
                await pauseAndReturnToMenu();
                return;
            }
            break;
        case '3':
            if (currentPage === 2) {
                console.log("Service indisponible : SOS Crédit");
                await pauseAndReturnToMenu();
                return;
            }
            break;
        case '4':
            if (currentPage === 2) {
                console.log("Service indisponible : Service Yas");
                await pauseAndReturnToMenu();
                return;
            }
            break;
        default:
            console.log("Option invalide !");
            break;
    }

    mainMenu();
};

export default mainMenu;
