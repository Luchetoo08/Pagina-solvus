document.addEventListener('DOMContentLoaded', () => {
    console.log('Solvus landing page loaded');

    // Add simple hover effect logic or analytics here if needed
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // For now, just log the click. In a real app, this would route or open modals.
            console.log(`Clicked: ${e.target.textContent}`);
        });
    });
});
