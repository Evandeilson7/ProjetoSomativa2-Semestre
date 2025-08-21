import {defineStore } from 'pinia'
export const useMainStore = defineStore ('main', {
state: () => ({
    nome: 'Evandeilson', // Nome da pessoa , variável global
    preco: 100, // Preço original, variável global
    desconto: 10, // Valor do desconto , variável global
    dataAtual: new Date().toLocaleDateString()  // Data // Data atual formatada , variável global
})
})