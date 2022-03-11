const panels = document.querySelectorAll('.panel');

function cambiarAbierto() {
    this.classList.toggle('open');
}

function cambiarActivo(e) {
    if ( e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach( panel => panel.addEventListener('click', cambiarAbierto))
panels.forEach( panel=> panel.addEventListener('transitionend', cambiarActivo))