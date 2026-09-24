const items = document.querySelectorAll(".gallery-item");

let current = 0;

function updateGallery() {
    const total = items.length;

    items.forEach((item, index) => {
        let position = index - current;

        if (position > total / 2) {
            position -= total;
        }

        if (position < -total / 2) {
            position += total;
        }

        if (position >= -5 && position <= 4) {

            if (position === 0) {
                item.style.transform =
                    "translate(-50%, -50%) scale(1) rotate(0deg)";
                item.style.opacity = "1";
                item.style.zIndex = "100";
                item.style.filter = "none";
            }

            else {
                const distance = Math.abs(position);

                const offset = position * 55;
                const scale = 0.82 - distance * 0.025;
                const rotate = position * 4;

                item.style.transform =
                    `translate(calc(-50% + ${offset}px), -50%) scale(${scale}) rotate(${rotate}deg)`;

                item.style.opacity = "1";
                item.style.zIndex = `${100 - distance}`;
                item.style.filter = "none";
            }

        } else {
            item.style.transform =
                "translate(-50%, -50%) scale(.5)";
            item.style.opacity = "0";
            item.style.zIndex = "0";
        }
    });
}

document.querySelector(".gallery-prev").addEventListener("click", () => {
    current = (current - 1 + items.length) % items.length;
    updateGallery();
});

document.querySelector(".gallery-next").addEventListener("click", () => {
    current = (current + 1) % items.length;
    updateGallery();
});

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        current = index;
        updateGallery();
    });
});

updateGallery();

let isDragging = false;
let startX = 0;
let moved = false;

const gallery = document.querySelector(".gallery");

gallery.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    moved = false;
});

gallery.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;

    if (Math.abs(diff) > 40 && !moved) {
        moved = true;

        if (diff < 0) {
            current = (current + 1) % items.length;
        } else {
            current = (current - 1 + items.length) % items.length;
        }

        updateGallery();
        startX = e.clientX;
    }
});

gallery.addEventListener("mouseup", () => {
    isDragging = false;
});

gallery.addEventListener("mouseleave", () => {
    isDragging = false;
});

let touchStartX = 0;
let touchEndX = 0;

gallery.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
}, { passive: true });

gallery.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;

    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) < 40) return;

    if (diff < 0) {
        current = (current + 1) % items.length;
    } else {
        current = (current - 1 + items.length) % items.length;
    }

    updateGallery();
});