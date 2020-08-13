const menu = document.querySelector('.menu'),
  menuContent = menu.querySelector('.menu_content');

function toggleMenu(burger) {
  function openAnimation(height) {
    let coin = 0;
    requestAnimationFrame(function openAnim() {
      menuContent.style.height = coin + 'px';
      
      if (coin < height) {
        coin += 30;
        requestAnimationFrame(openAnim);
      } else {
        menuContent.style.height = '';
      }
    });
  }

  function closeAnimation(height) {
    let coin = height;
    requestAnimationFrame(function closeAnim() {
      menuContent.style.height = coin + 'px';

      if (coin > 0) {
        coin -= 30;
        requestAnimationFrame(closeAnim);
      } else {
        menuContent.style.height = '';
        menuContent.style.display = '';
      }
    });
  }

  if (!burger.classList.contains('active')) {
    burger.classList.add('active');
    menuContent.style.display = 'block';
    openAnimation(menuContent.clientHeight);
  } else {
    burger.classList.remove('active');
    closeAnimation(menuContent.clientHeight);
  }
}

menu.addEventListener('click', event => {
  const target = event.target;
  
  if (target.closest('.menu_burger')) {
    toggleMenu(target.closest('.menu_burger'));
  }
});