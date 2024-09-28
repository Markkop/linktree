<script>
  import { onMount } from 'svelte';

  let qrCodeActive = false;
  let starsContainer;

  function toggleQRMode() {
    qrCodeActive = !qrCodeActive;
    if (qrCodeActive) {
      history.pushState(null, "", window.location.pathname + "?mode=qrcode");
      starsContainer.classList.add("inactive");
    } else {
      history.pushState(null, "", window.location.pathname);
      starsContainer.classList.remove("inactive");
    }
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("mode") === "qrcode") {
      qrCodeActive = true;
      starsContainer = document.getElementById("starsContainer");
      starsContainer.classList.add("inactive");
    }
  });
</script>

<div id="content" class:inactive={qrCodeActive}>
  <img
    src="https://avatars.githubusercontent.com/u/16388408?v=4"
    alt="Profile Picture"
    class="w-24 h-24 rounded-full mx-auto my-10 cursor-pointer"
    id="profilePic"
    on:click={toggleQRMode}
  />

  <div id="userName" class="text-white text-base font-bold text-center w-full">
    Marcelo "Mark" Kopmann
  </div>

  <div id="links" class="max-w-3xl mx-auto my-7 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    <a class="link" href="https://github.com/markkop" target="_blank">
      <i class="fab fa-github">&nbsp;</i>Github
    </a>
    <a class="link" href="https://www.linkedin.com/in/marcelo-kopmann" target="_blank">
      <i class="fab fa-linkedin">&nbsp;</i>Linkedin
    </a>
    <a class="link" href="https://bsky.app/profile/markkop.dev" target="_blank">
      <i class="fab fa-bluesky">&nbsp;</i>Bluesky
    </a>
    <a class="link" href="https://twitter.com/heymarkkop" target="_blank">
      <i class="fab fa-twitter">&nbsp;</i>Twitter
    </a>
    <a class="link" href="https://dev.to/heymarkkop" target="_blank">
      <i class="fab fa-dev">&nbsp;</i>Blog
    </a>
    <a class="link" href="https://talks.markkop.dev" target="_blank">
      <i class="fas fa-folder-open">&nbsp;</i>Talks
    </a>
  </div>
</div>

<div id="qrCode" class:active={qrCodeActive} on:click={toggleQRMode}>
  <img
    src="https://cdn.qrcode-ai.com/qrcode/173b74914b615b0976bc7b595126fb08-1727393474115.png"
    alt="QR Code"
    class="max-w-full max-h-full"
  />
</div>

<style>
  .link {
    @apply bg-transparent text-white border-2 border-white rounded-lg text-base text-center block p-2.5 no-underline hover:bg-white hover:text-blue-900 active:bg-white active:text-blue-900 transition-colors;
  }

  #qrCode {
    @apply fixed inset-0 flex items-center justify-center bg-[#f8f2f1] opacity-0 pointer-events-none z-10;
  }

  #qrCode.active {
    @apply opacity-100 pointer-events-auto;
  }

  #content.inactive {
    @apply opacity-0 pointer-events-none;
  }

  #content, #qrCode {
    @apply transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full;
  }

  :global(.animated-background.inactive) {
    opacity: 0;
    pointer-events: none;
  }
</style>
