(() => {
  const Modal = (root) => {
    const show = () => {
      root.style.display = 'block';
      document.body.style.overflow = 'hidden';
    };

    const hide = () => {
      root.style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    const init = () => {
      show(root);

      root.querySelector('.bottom-close')
        .onclick = () => hide(root);

      window.onclick = ({ target }) => {
        if (target === root) {
          hide(root);
        }
      };
    };

    return { show, hide, init };
  };

  const modalTriggers = document.querySelectorAll('.modal-trigger');
  Array.from(modalTriggers).forEach((trigger) => {
    trigger.addEventListener('click', ({ target }) => {
      const element = document.querySelector(target.dataset.modal);

      Modal(element).init();
    });
  });
})();

(() => {
    $('.sec-12__list-item').on('click', (event) => {
      if ($(event.target).hasClass('more-btn')) {
        $(event.currentTarget).find('.more-block').addClass('show');

        $(document).mouseup(function (e) {
          var container = $(".more-block");
          if (container.has(e.target).length === 0){
              container.addClass('hide');
            }
          });
      }
    });
})();
