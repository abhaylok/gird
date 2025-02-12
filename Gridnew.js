document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".film-single").forEach(function (post) {
        let metadata = post.querySelector(".movie-data");

        if (metadata) {
            let rating = metadata.querySelector(".starRating")?.textContent.trim();
            let duration = metadata.querySelector(".movieDuration")?.textContent.trim();
            let actor = metadata.querySelector(".actorName")?.textContent.trim();
            let actorLabel = metadata.querySelector(".actorName")?.getAttribute("data-actor");

            if (rating) post.querySelector(".film-rating").textContent = rating + "★";
            if (duration) post.querySelector(".film-duration").textContent = duration;
            if (actor && actorLabel) {
                let actorElement = post.querySelector(".actor a");
                actorElement.textContent = actor;
                actorElement.href = "https://hd4ushub.blogspot.com/search/label/" + encodeURIComponent(actorLabel);
            }
        }
    });
});
