document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const closeModal = document.getElementById("closeModal");
    const parentContainer = document.querySelector(".AV-SliderHomeHero-module--Text");

    parentContainer.addEventListener("click", function (e) {
        const videoLink = e.target.closest("[data-video-popup-link]");
        if (videoLink) {
            e.preventDefault();
            const videoUrl = videoLink.getAttribute("data-video-popup-link");
            const videoId = getVideoIdFromUrl(videoUrl);
            const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
            youtubeIframe.src = videoEmbedUrl;
            modal.style.display = "block";
        }
    });

    closeModal.addEventListener("click", function () {
        youtubeIframe.src = "";
        modal.style.display = "none";
    });

    modal.addEventListener("click", function () {
        youtubeIframe.src = "";
        modal.style.display = "none";
    });

    function getVideoIdFromUrl(url) {
        const match = /(?:\?v=|\/embed\/|\/watch\?v=|\/youtu.be\/|\/v\/|\/e\/|^v=|^e=)([0-9A-Za-z_-]{11})/.exec(url);
        return match ? match[1] : null;
    }
});