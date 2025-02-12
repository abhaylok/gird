document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".film-single").forEach(function (post) {
        let scriptTag = post.querySelector("script#post-metadata");
        if (scriptTag) {
            try {
                let metadata = JSON.parse(scriptTag.textContent.trim());

                let ratingElement = post.querySelector(".film-rating");
                let durationElement = post.querySelector(".film-duration");
                let imgElement = post.querySelector(".film-img");
                let actorElement = post.querySelector(".actor a");

                if (metadata.starRating && ratingElement) {
                    ratingElement.textContent = metadata.starRating + "★";
                }
                if (metadata.movieDuration && durationElement) {
                    durationElement.textContent = metadata.movieDuration;
                }
                if (metadata.thumbnailUrl && imgElement) {
                    imgElement.src = metadata.thumbnailUrl;
                }
                if (metadata.actorName && actorElement) {
                    actorElement.textContent = metadata.actorName;
                    actorElement.href = "https://hd4ushub.blogspot.com/search/label/" + encodeURIComponent(metadata.actorLabel);
                }
            } catch (error) {
                console.error("Error parsing metadata: ", error);
            }
        }
    });
});
