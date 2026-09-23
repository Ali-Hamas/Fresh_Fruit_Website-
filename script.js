// Professional Interactive Logic & WhatsApp Order Builder

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Menu Toggle
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

    // 2. Dynamic Year Update
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Custom WhatsApp Order & Price Form Builder
    const whatsappForm = document.getElementById('whatsapp-order-form');
    const formStatus = document.getElementById('form-status');

    if (whatsappForm && formStatus) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Extract Form Values
            const name = document.getElementById('cust-name').value.trim();
            const phone = document.getElementById('cust-phone').value.trim();
            const item = document.getElementById('fruit-select').value;
            const quantity = document.getElementById('quantity-select').value;
            const customNotes = document.getElementById('custom-notes').value.trim();

            // Format WhatsApp Message Body
            let whatsappText = `Assalamu Alaikum Hafiz Arslan!\n\n`;
            whatsappText += `🥤 *FRESH FRUIT ORDER & PRICE INQUIRY*\n`;
            whatsappText += `━━━━━━━━━━━━━━━━━━━━━\n`;
            whatsappText += `👤 *Customer Name:* ${name}\n`;
            whatsappText += `📞 *Customer Phone:* ${phone}\n`;
            whatsappText += `🍓 *Requested Item:* ${item}\n`;
            whatsappText += `🥛 *Quantity:* ${quantity}\n`;
            
            if (customNotes) {
                whatsappText += `📝 *Customer Needs & Price Inquiry:* ${customNotes}\n`;
            } else {
                whatsappText += `📝 *Inquiry:* Please let me know the price and delivery options for this order.\n`;
            }
            
            whatsappText += `━━━━━━━━━━━━━━━━━━━━━\n`;
            whatsappText += `✨ *Sent via Hafiz Arslan Official Website*`;

            // Display Feedback Alert Banner
            formStatus.className = 'text-center text-xs sm:text-sm font-bold p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 block shadow-lg';
            formStatus.innerHTML = `<i class="fa-solid fa-circle-check text-lg mr-2"></i> Thank you ${name}! Opening WhatsApp to ask price & send your order to <strong>0345 4106226</strong>...`;

            // Redirect to WhatsApp Hotline 0345 4106226 after 1 sec
            setTimeout(() => {
                const targetNumber = '923454106226';
                const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(whatsappText)}`;
                window.open(whatsappUrl, '_blank');
                whatsappForm.reset();
            }, 1000);
        });
    }
});
