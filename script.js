const tabs = document.querySelectorAll('.tab');
let currentTab;
let i;


function toggleActive(e) {
    currentTab = e.currentTarget;

    currentTab.classList.toggle('active');

    const panel = currentTab.nextElementSibling;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
   
    tabs.forEach(tab => {
        if (tab === currentTab) return;
        tab.classList.remove('active');
        tab.nextElementSibling.style.maxHeight = null;
    })
}



tabs.forEach(tab => tab.addEventListener('click', toggleActive));