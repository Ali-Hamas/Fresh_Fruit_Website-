// JavaScript Logic for Hafiz Arslan Fresh Fruit Glass & Instagram Website

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Footer Year Update
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Contact / Order Form Handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const fruitItem = document.getElementById('fruit-item')?.value || 'Fresh Fruit Glass';
            const message = document.getElementById('message').value;

            // Display success message
            formStatus.className = 'text-center text-xs font-semibold p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 block';
            formStatus.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5"></i> Thank you ${name}! Opening WhatsApp to place your order for <strong>${fruitItem}</strong>...`;

            // Redirect to WhatsApp with filled message after 1 sec
            setTimeout(() => {
                const text = `Assalamu Alaikum Hafiz Arslan! My name is ${name}. I want to order: ${fruitItem}. Notes: ${message}`;
                const whatsappUrl = `https://wa.me/923454106226?text=${encodeURIComponent(text)}`;
                window.open(whatsappUrl, '_blank');
                contactForm.reset();
            }, 1000);
        });
    }
});
