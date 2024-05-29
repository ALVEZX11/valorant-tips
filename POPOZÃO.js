document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("main");

    function createTipsSection(title, imageUrl, videoUrls) {
        const section = document.createElement("section");
        section.classList.add("card");

        const titleElement = document.createElement("h2");
        titleElement.textContent = title;
        section.appendChild(titleElement);

        const image = document.createElement("img");
        image.src = imageUrl;
        section.appendChild(image);

        videoUrls.forEach(videoUrl => {
            const video = document.createElement("video");
            const source = document.createElement("source");
            source.src = videoUrl;
            source.type = "video/mp4";
            video.appendChild(source);
            video.controls = true;
            section.appendChild(video);
        });

        main.appendChild(section);
    }

    // Adicionando seções de dicas
    createTipsSection("FRTT DICAS", "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/frttt.png", [
        "https://www.youtube.com/watch?v=pG_8jJ8dq1k",
        "https://www.youtube.com/watch?v=za-eeZiJrQo",
        "https://www.youtube.com/watch?v=C2W6K2EHJfE",
        "https://www.youtube.com/watch?v=_kLM5hK-aYQ"
    ]);

    createTipsSection("DICAS QCK1", "https://i.pinimg.com/736x/d0/d4/c0/d0d4c095033c296ad3fa5b68a466f27b.jpg", [
        "https://www.youtube.com/watch?v=DWTw15IqlLg",
        "https://www.youtube.com/watch?v=bodgBZxI9zM"
    ]);

    createTipsSection("DICAS TTEUW", "https://cdn.ome.lt/PF4xOiu0sbaY4jJW_D8KK7ICdSM=/1200x630/smart/extras/conteudos/tteuw.jpg", [
        "https://www.youtube.com/watch?v=U9cfHh3JSqg",
        "https://www.youtube.com/watch?v=tnbr4FKNvxs",
        "https://www.youtube.com/watch?v=kmFBNV_LCk4",
        "https://www.youtube.com/watch?v=Zyp1W1zOO_c",
        "https://www.youtube.com/watch?v=RgA_u9fZ_MI"
    ]);
});
