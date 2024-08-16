// Fungsi untuk membuka tab
function openTab(evt, tabName) {
    var i, tabContent, tabButton;

    // Sembunyikan semua tab konten
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Hapus kelas "active" dari semua tab tombol
    tabButton = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }

    // Tampilkan tab konten saat ini dan tambahkan kelas "active" ke tombol yang diklik
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// JavaScript untuk menampilkan header saat scroll ke atas
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Saat scroll ke bawah, sembunyikan header
        header.classList.add('hidden');
    } else {
        // Saat scroll ke atas, tampilkan header
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// JavaScript untuk menggeser galeri testimonial dan menempatkannya di tengah saat dimuat
document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const rentalGallery = document.querySelector('.rental-gallery');
    const rentalItems = document.querySelectorAll('.rental-item');

    // Fungsi untuk memusatkan item yang dipilih
    function centerItem(index) {
        const itemWidth = rentalItems[0].offsetWidth;
        const galleryWidth = rentalGallery.clientWidth;
        const scrollPosition = (rentalItems[index].offsetLeft + (itemWidth / 2)) - (galleryWidth / 2);
        rentalGallery.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    // Pusatkan item pertama saat halaman dimuat
    const initialIndex = Math.floor(rentalItems.length / 2); // Cari index di tengah
    centerItem(initialIndex);

    leftArrow.addEventListener('click', function() {
        const visibleItems = Math.floor(rentalGallery.clientWidth / rentalItems[0].offsetWidth);
        const firstVisibleIndex = Math.max(0, Math.floor(rentalGallery.scrollLeft / rentalItems[0].offsetWidth));
        const newIndex = Math.max(0, firstVisibleIndex - visibleItems);
        centerItem(newIndex);
    });

    rightArrow.addEventListener('click', function() {
        const visibleItems = Math.floor(rentalGallery.clientWidth / rentalItems[0].offsetWidth);
        const firstVisibleIndex = Math.floor(rentalGallery.scrollLeft / rentalItems[0].offsetWidth);
        const newIndex = Math.min(rentalItems.length - 1, firstVisibleIndex + visibleItems);
        centerItem(newIndex);
    });
});

// Fungsi untuk membuka modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Menambahkan event listener untuk klik pada feature-item1
document.querySelector('.features-item1').addEventListener('click', function() {
    openModal('featureModal1');
});

// Menambahkan event listener untuk klik pada feature-item2
document.querySelector('.features-item2').addEventListener('click', function() {
    openModal('featureModal2');
});

// Menambahkan event listener untuk klik pada feature-item3
document.querySelector('.features-item3').addEventListener('click', function() {
    openModal('featureModal3');
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Menutup modal jika pengguna mengklik di luar konten modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
