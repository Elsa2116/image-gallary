document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const closeModal = document.querySelector('.close');

    let currentIndex = 0;

    // Open Modal
    const openModal = (index) => {
        currentIndex = index;
        const item = galleryItems[index];
        const imgSrc = item.querySelector('img').src;
        const captionText = item.querySelector('.caption').textContent;

        modalImage.src = imgSrc;
        modalCaption.textContent = captionText;
        modal.style.display = 'flex';
    };

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Navigate Images
    const showImage = (index) => {
        if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        openModal(currentIndex);
    };

    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    // Open Modal on Click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    // Close Modal on Outside Click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
