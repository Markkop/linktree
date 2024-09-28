<script>
  import '../app.css';
  import '../stars.css';
</script>

<svelte:head>
  <title>Mark Kop | Linktree</title>
  <link rel="icon" href="https://avatars.githubusercontent.com/u/16388408?v=4" type="image/x-icon" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.6.0/css/all.css" />
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="animated-background" id="starsContainer">
  <div id="stars1"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
</div>

<slot />

<style>
  @import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");

  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Karla', sans-serif;
    background: radial-gradient(ellipse at bottom, #223344 0%, #090a0f 100%);
    opacity: 0;
    animation: 1s ease-out 0.3s 1 transitionAnimation;
    animation-fill-mode: forwards;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 0;
    color-scheme: dark;
    color: #ffffff;
  }

  :global(html) {
    color-scheme: dark;
  }

  .animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @keyframes transitionAnimation {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Add the rest of your global styles here */
</style>