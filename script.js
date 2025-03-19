document.addEventListener("DOMContentLoaded", function () {
    // 🌟 ナビゲーションメニューのトグル
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("#navMenu");
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // 🌟 スライドショー
    let index = 0;
    const slides = document.querySelectorAll(".slides img");
    const totalSlides = slides.length;

    if (totalSlides > 0) {
        const slideshow = document.querySelector(".slideshow");
        slideshow.style.position = "relative";
        slideshow.style.width = "100vw";  
        slideshow.style.height = "400px"; 
        slideshow.style.overflow = "hidden";
        slideshow.style.display = "flex";
        slideshow.style.justifyContent = "center";
        slideshow.style.alignItems = "center";
        slideshow.style.left = "0";
        slideshow.style.backgroundImage = "url('images/background-blur.jpg')";
        slideshow.style.backgroundSize = "cover";
        slideshow.style.backgroundPosition = "center";
        slideshow.style.backgroundRepeat = "no-repeat";

        // スライド画像のスタイル
        slides.forEach((img, i) => {
            img.style.position = "absolute";
            img.style.opacity = i === 0 ? "1" : "0";
            img.style.transition = "opacity 1s ease-in-out";
            img.style.left = "50%";
            img.style.top = "50%";
            img.style.transform = "translate(-50%, -50%)";
            img.style.width = "80%";
            img.style.maxWidth = "1000px";
            img.style.height = "auto";
            img.style.objectFit = "cover";
            img.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
            img.style.zIndex = "10";
        });

        function showSlide() {
            slides.forEach((img) => img.style.opacity = "0");
            slides[index].style.opacity = "1";
            index = (index + 1) % totalSlides;
        }

        setInterval(showSlide, 3000); // 3秒ごとにスライド切り替え
    }

    // 🌟 NEWSのスクロール
    const newsList = document.querySelector(".news ul");
    if (newsList) {
        newsList.style.overflowY = "auto";
        newsList.style.maxHeight = "150px";
    }

    // 🌟 カスタムカーソル
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, input, textarea, .news ul").forEach(element => {
        element.addEventListener("mouseenter", () => cursor.style.backgroundColor = "#c3a2ff");
        element.addEventListener("mouseleave", () => cursor.style.backgroundColor = "#66ccff");
    });

    // 🌟 レビューのスクロール
    const reviewContainer = document.querySelector(".review-container");
    if (reviewContainer) {
        let scrollSpeed = 3;
        let scrollInterval;
        let isHovering = false;

        function startScrolling() {
            if (isHovering) {
                scrollInterval = setInterval(() => {
                    reviewContainer.scrollLeft += scrollSpeed;
                    if (reviewContainer.scrollLeft >= reviewContainer.scrollWidth - reviewContainer.clientWidth) {
                        reviewContainer.scrollLeft = 0;
                    }
                }, 30);
            }
        }

        function stopScrolling() {
            clearInterval(scrollInterval);
        }

        if (window.innerWidth > 768) {
            reviewContainer.addEventListener("mouseenter", function () {
                isHovering = true;
                startScrolling();
            });

            reviewContainer.addEventListener("mouseleave", function () {
                isHovering = false;
                stopScrolling();
            });
        }
    }

    // 🌟 花のアニメーション
    const flowerItems = document.querySelectorAll(".flower-item");
    function checkScroll() {
        flowerItems.forEach((item) => {
            if (item.getBoundingClientRect().top < window.innerHeight * 0.8) {
                item.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// 🌟 花びらが舞うアニメーション（`DOMContentLoaded` の外で実行）
function createPetal() {
    const petal = document.createElement("img");  
    petal.src = "images/petal.png";  
    petal.classList.add("flower-petal");
    petal.style.left = Math.random() * window.innerWidth + "px";
    const size = Math.random() * 80 + 40 + "px";  
    petal.style.width = size;
    petal.style.height = "auto";  
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 8000);
}
setInterval(createPetal, 300);








