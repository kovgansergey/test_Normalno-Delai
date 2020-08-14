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

function activateMenu(target) {
  target.children[0].classList.add('active');
  target.children[1].style.display = 'block';
}

function deActivateMenu(target) {
  target.children[0].classList.remove('active');
  target.children[1].style.display = '';
}

menu.addEventListener('click', event => {
  const target = event.target;
  
  if (target.closest('.menu_burger')) {
    toggleMenu(target.closest('.menu_burger'));
  }
});

menu.addEventListener('mouseover', event => {
  const target = event.target;

  if (target.closest('.menu_links_wrap')) {
    activateMenu(target.closest('.menu_links_wrap'));
  }

  if (target.classList.contains('menu_link') && window.innerWidth > 991) {
    target.classList.add('active');
  }
});

menu.addEventListener('mouseout', event => {
  const target = event.target;

  if (target.closest('.menu_links_wrap')) {
    deActivateMenu(target.closest('.menu_links_wrap'));
  }

  if (target.classList.contains('menu_link')) {
    target.classList.remove('active');
  }
});