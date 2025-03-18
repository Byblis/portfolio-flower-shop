// 🌟 ナビゲーションメニューのトグル
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}

// 🌟 スライドショー
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slides img");
    const totalSlides = slides.length;

    if (totalSlides === 0) {
        console.error("スライドが見つかりません！");
        return;
    }

    // 🎨 スライドショーの親要素（背景ぼかし）
    const slideshow = document.querySelector(".slideshow");
    slideshow.style.position = "relative";
    slideshow.style.width = "100vw";  // 画面の横幅いっぱい
    slideshow.style.height = "400px"; // 高さは固定
    slideshow.style.overflow = "hidden";
    slideshow.style.display = "flex";
    slideshow.style.justifyContent = "center";
    slideshow.style.alignItems = "center";
    slideshow.style.left = "0";
    slideshow.style.backgroundImage = "url('images/background-blur.jpg')"; // 背景画像
    slideshow.style.backgroundSize = "cover";
    slideshow.style.backgroundPosition = "center";
    slideshow.style.backgroundRepeat = "no-repeat";

    // スライド画像のスタイル
    slides.forEach((img, i) => {
        img.style.position = "absolute";
        img.style.opacity = i === 0 ? "1" : "0"; // 最初の画像だけ表示
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
        slides.forEach((img) => {
            img.style.opacity = "0";
        });
        slides[index].style.opacity = "1";
        index = (index + 1) % totalSlides;
    }

    setInterval(showSlide, 3000); // 3秒ごとにスライド切り替え
});

// 🌟 花びらが舞うアニメーション
document.addEventListener("DOMContentLoaded", function () {
    function createPetal() {
        const petal = document.createElement("img");  
        petal.src = "images/petal.png";  
        petal.classList.add("flower-petal");

        // ランダムな横位置
        petal.style.left = Math.random() * window.innerWidth + "px";

        // 🌸 花びらのサイズをランダムに（80px〜200px）
        const size = Math.random() * 80 + 40 + "px";  
        petal.style.width = size;
        petal.style.height = "auto";  

        console.log("🌸 画像URL:", petal.src);  // 画像のパスを確認

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 8000);
    }

    // 0.3秒ごとに花びらを生成
    setInterval(createPetal, 300);
});

document.addEventListener("DOMContentLoaded", function () {
    const newsList = document.querySelector(".news ul");
    if (newsList) {
        newsList.style.overflowY = "auto";  // 縦スクロールを有効化
        newsList.style.maxHeight = "150px"; // 必要に応じて高さを調整
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const reviewContainer = document.querySelector(".review-container");
    let scrollAmount = 0;
    let isHovering = false;
    let scrollSpeed = 3; // スクロールの速さ（調整可能）
    let scrollInterval;

    function startScrolling() {
        if (isHovering) {
            scrollInterval = setInterval(() => {
                reviewContainer.scrollLeft += scrollSpeed;

                // 右端まで行ったら最初に戻る
                if (reviewContainer.scrollLeft >= reviewContainer.scrollWidth - reviewContainer.clientWidth) {
                    reviewContainer.scrollLeft = 0;
                }
            }, 30); // 30msごとにスクロール（遅めに設定）
        }
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    // マウスが乗ったらスクロール開始
    reviewContainer.addEventListener("mouseenter", function () {
        isHovering = true;
        startScrolling();
    });

    // マウスが外れたらスクロール停止
    reviewContainer.addEventListener("mouseleave", function () {
        isHovering = false;
        stopScrolling();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // ホバー時に色を変える
    document.querySelectorAll("a, button, input, textarea, .news ul").forEach(element => {
        element.addEventListener("mouseenter", () => {
            cursor.style.backgroundColor = "#c3a2ff"; // 薄紫
        });
        element.addEventListener("mouseleave", () => {
            cursor.style.backgroundColor = "#66ccff"; // 元の水色に戻す
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const flowerItems = document.querySelectorAll(".flower-item");

    function checkScroll() {
        flowerItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (itemTop < windowHeight * 0.8) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});    








 






