// স্ক্রল করলে নেভিগেশন বারকে গ্লোয়িং এবং ডার্ক করা
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.agency-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(6, 4, 14, 0.95)';
        nav.style.boxShadow = '0 10px 30px rgba(138, 43, 226, 0.15)';
    } else {
        nav.style.background = 'rgba(6, 4, 14, 0.5)';
        nav.style.boxShadow = 'none';
    }
});

// "Let's Talk" বাটনের ইন্টারঅ্যাকশন
const contactBtn = document.querySelector('.contact-btn');

contactBtn.addEventListener('click', () => {
    // ভিজিটরের কাছ থেকে ইমেইল চাওয়া
    const userEmail = prompt("PixelCraft Welcome to the studio! Leave your email, we'll be in touch.:");
    
    if (userEmail) {
        // ইমেইল ভ্যালিডেশন চেক (বেসিক লজিক)
        if(userEmail.includes('@') && userEmail.includes('.')) {
            alert(`Thank you! Your email (${userEmail}) has been saved. Our team will contact you shortly.`);
        } else {
            alert("Sorry, please enter a valid email address.");
        }
    }
});