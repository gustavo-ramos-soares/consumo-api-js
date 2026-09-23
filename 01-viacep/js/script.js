"use strict";

const campoCep = document.getElementById('cep');

campoCep.addEventListener('blur', consultaCep);


async function consultaCep() {

    // ENTRADA
    let cep = document.getElementById('cep').value;

    let url = `https://viacep.com.br/ws/${cep}/json/`;


    // CONSUMO DA API
    const resposta = await fetch(url);

    const dados = await resposta.json();


    // SAÍDA
    let endereco = document.getElementById('endereco');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');


    endereco.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;
}