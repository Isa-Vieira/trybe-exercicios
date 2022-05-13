 // Teste
 const rotina = () => 'Acordando!!';
 const cafedamanha = () => 'Bora tomar café!!';
 const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result)
}
doingThings(rotina);

// Exercício 1
