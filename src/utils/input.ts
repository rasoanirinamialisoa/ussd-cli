import readlineSync from 'readline-sync';

export const getInput = (message: string): string => {
    return readlineSync.question(`${message}: `);
};
