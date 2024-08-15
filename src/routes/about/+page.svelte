<script lang="ts">
    import { onMount } from 'svelte';
    import "../../styles/about.css";
    
    onMount(() => {
        let botoes = [
    { id: "btne1", tipo: "email1@example.com" },
    { id: "btne2", tipo: "email2@example.com" },
    { id: "btne3", tipo: "email3@example.com" },
    { id: "btne4", tipo: "email4@example.com" },
    { id: "btne5", tipo: "email5@example.com" },
    { id: "btng1", tipo: "github1" },
    { id: "btng2", tipo: "github2" },
    { id: "btng3", tipo: "github3" },
    { id: "btng4", tipo: "github4" },
    { id: "btng5", tipo: "github5" }
];

botoes.forEach(botao => {
    let elementoBotao = document.getElementById(botao.id) as HTMLButtonElement;
    elementoBotao.addEventListener("click", () => {
        elementoBotao.innerText = botao.tipo;
    });
});
    });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
  <title>About Us</title>
</svelte:head>

<div class="container1">
    <header>
        <div class="return">
            <a href="../../"><button class="tomenu"><i class="fas fa-sign-out-alt"></i></button></a>
        </div>
        <h1 class="pagetitle">ABOUT US</h1>
        <div class="separator"> </div>
    </header>
    <main>
        <div class="profiles">
            <div class="profile">
                <div class="avatar"></div>
                <p>JOÃO MANOEL</p>
                <button id="btne1">EMAIL</button>
                <button id="btng1">GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>GUILHERME MATHEUS</p>
                <button id="btne2">EMAIL</button>
                <button id="btng2">GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>KAUÃ JOSÉ</p>
                <button id="btne3">EMAIL</button>
                <button id="btng3">GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>RYON LIMA</p>
                <button id="btne4">EMAIL</button>
                <button id="btng4">GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>CAIO VINICIUS</p>
                <button id="btne5">EMAIL</button>
                <button id="btng5">GITHUB</button>
            </div>
        </div>
    </main>
    <footer>
        <img src="../img/logostech.png" alt="Tecnologias Utilizadas">
    </footer>
</div>
