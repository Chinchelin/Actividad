window.professionalAlert = Swal.mixin({
    background: 'transparent',
    color: 'var(--dorado-oscuro)',
    width: '420px',
    padding: '0',
    customClass: {
        popup: 'professional-popup-card',
    },
    showConfirmButton: false,
    showCancelButton: false,
    buttonsStyling: false,
    backdrop: `rgba(0,0,0,0.7)`
});

$(document).on('click', '.btn-eliminar', function (e) {
    e.preventDefault();
    const form = $(this).closest('form');
    window.professionalAlert.fire({
        html: `
            <div class="professional-popup-card-header">
                <span class="professional-popup-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </span>
                <div class="professional-popup-card-title">Confirmar eliminación</div>
            </div>
            <div class="professional-popup-card-body">
                <div class="professional-popup-card-text">
                    ¿Está seguro de eliminar este elemento?<br>
                    <span style="color:#888;font-size:0.95rem;">Esta acción no puede deshacerse</span>
                </div>
                <div class="professional-popup-card-btns">
                    <button class="professional-popup-card-btn professional-popup-card-btn-cancel" id="btn-cancelar-eliminar">Cancelar</button>
                    <button class="professional-popup-card-btn" id="btn-confirmar-eliminar">Eliminar</button>
                </div>
            </div>
        `
    });

    $(document).off('click', '#btn-confirmar-eliminar').on('click', '#btn-confirmar-eliminar', function () {
        form.submit();
        Swal.close();
    });

    $(document).off('click', '#btn-cancelar-eliminar').on('click', '#btn-cancelar-eliminar', function () {
        Swal.close();
    });
});
