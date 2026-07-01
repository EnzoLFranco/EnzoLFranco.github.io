document.addEventListener("DOMContentLoaded", function () {
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll reveal
    var fadeElems = document.querySelectorAll(".fade-in");
    var observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElems.forEach(function (elem) {
        observer.observe(elem);
    });

    // Typewriter effect on the hero "whoami" output
    var heroLine = document.querySelector("[data-typewriter]");
    if (heroLine && !prefersReduced) {
        var fullText = heroLine.textContent;
        heroLine.textContent = "";
        heroLine.classList.add("typing");
        var i = 0;
        var type = function () {
            if (i <= fullText.length) {
                heroLine.textContent = fullText.slice(0, i);
                i++;
                setTimeout(type, 45);
            } else {
                heroLine.classList.remove("typing");
            }
        };
        setTimeout(type, 300);
    }
});
