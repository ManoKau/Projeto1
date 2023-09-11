let currentImageIndex = 0;
    const images = ['imagens1/arvore1.jfif', 'imagens1/arvore2.jfif', 'imagens1/arvore3.jfif', 'imagens1/arvores.jfif', 'imagens1/céu.jfif',
    'imagens1/céu1.jfif', 'imagens1/coelho.jfif', 'imagens1/porco.jpeg', 'imagens1/galinhas.jfif', 'imagens1/borboleta.jfif'];

    function openModal(imageSrc) {
        const modal = document.getElementById('myModal');
        const modalImage = document.getElementById('modalImage');

        currentImageIndex = images.indexOf(imageSrc);

        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }

    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentImageIndex];
    }

    const modal = document.getElementById('myModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
