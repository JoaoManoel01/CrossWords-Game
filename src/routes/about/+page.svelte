<script lang="ts">
    import "./about.css";
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
  <title>About Us</title>
</svelte:head>

<div class="container">
    <header>
        <h1>ABOUT US</h1>
    </header>
    <main>
        <div class="profiles">
            <div class="profile">
                <div class="avatar"></div>
                <p>JOÃO MANOEL</p>
                <button>EMAIL</button>
                <button>GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>GUILHERME MATHEUS</p>
                <button>EMAIL</button>
                <button>GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>KAUÃ JOSÉ</p>
                <button>EMAIL</button>
                <button>GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>RYON LIMA</p>
                <button>EMAIL</button>
                <button>GITHUB</button>
            </div>
            <div class="profile">
                <div class="avatar"></div>
                <p>CAIO VINICIUS</p>
                <button>EMAIL</button>
                <button>GITHUB</button>
            </div>
        </div>
    </main>
    <footer>
        <img src="/static/img/Svelte.png" alt="sv">
    </footer>
</div>
