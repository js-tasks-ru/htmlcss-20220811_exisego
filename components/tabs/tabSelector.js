const TAB_CLASS = {
    SIMPLE: 'preview__inner_simple',
    COMPLEX: 'preview__inner_complex',
};

const selectTab = (type) => {
    const cards = document.getElementsByClassName('card');
    for (const card of cards) {
        card.style.display = card.classList.contains(TAB_CLASS[type]) ? 'flex' : 'none';
    }
};

const resetTabs = () => {
    const cards = document.getElementsByClassName('card');
    for (const card of cards) {
        card.style.display = 'flex';
    }
}
