// Додаємо обробники подій на всі кнопки з класом 'btn'
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      flipCard(btn);
    });
  });
  
  // Функція для перевертання картки
  function flipCard(btn) {
    const parentNodeId = 'parent-id';
    const toggleClassId = 'toggle-class';
    const parentId = btn.getAttribute(parentNodeId);
    const toggleId = btn.getAttribute(toggleClassId);
  
    if (parentId && toggleId) {
      const card = document.getElementById(parentId);
      if (card) {
        card.classList.toggle(toggleId);
      } else {
        console.log('Card not found');
      }
    } else {
      console.log('parentId and/or toggleId not found');
    }
  }