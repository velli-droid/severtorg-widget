function initMailWidget() {
    const widgetEl = document.querySelector('.js-widget');

    if (!widgetEl) return;

    const widgetBtn = widgetEl.querySelector('.js-widget-btn');

    if (!widgetBtn) return;

    widgetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        widgetEl.classList.add('active');
    });

    const widgetClose = widgetEl.querySelector('.js-widget-close');

    widgetClose.addEventListener('click', function(e) {
        e.preventDefault();
        widgetEl.classList.remove('active');
    });

    document.addEventListener('click', function(e) {
        if (e.path.indexOf(widgetEl) < 0) widgetEl.classList.remove('active');
    })
}

initMailWidget();