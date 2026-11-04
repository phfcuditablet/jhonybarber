document.addEventListener('DOMContentLoaded', () => {
    const defaultServices = [
        { id: 'corte-masculino', title: 'Corte Masculino Adulto', desc: 'Tesoura ou máquina, perfeitamente alinhado com o seu estilo e formato de rosto.', price: 'Consulte valor', icon: 'fas fa-cut' },
        { id: 'corte-infantil', title: 'Corte Infantil', desc: 'Atendimento paciente e carinhoso para garantir a melhor experiência para os pequenos.', price: 'Consulte valor', icon: 'fas fa-child' },
        { id: 'pigmentacao-barba', title: 'Pigmentação de Barba', desc: 'Cobertura de falhas e realce impecável do contorno para uma barba marcante.', price: 'Consulte valor', icon: 'fas fa-user-ninja' },
        { id: 'micropigmentacao-sobrancelha', title: 'Micropigmentação de Sobrancelha', desc: 'Design natural para valorizar o olhar masculino com simetria e sutileza.', price: 'Consulte valor', icon: 'fas fa-eye' },
        { id: 'depilacao-costas', title: 'Depilação das Costas', desc: 'Remoção eficiente de pêlos para maior conforto, bem-estar e higiene.', price: 'Consulte valor', icon: 'fas fa-spa' },
        { id: 'remocao-nariz', title: 'Remoção de Pêlos do Nariz', desc: 'Higiene prática e acabamento preciso sem desconforto.', price: 'Consulte valor', icon: 'fas fa-air-freshener' },
        { id: 'remocao-orelhas', title: 'Remoção de Pêlos das Orelhas', desc: 'Procedimento rápido e cuidadoso para um visual limpo e bem cuidado.', price: 'Consulte valor', icon: 'fas fa-deaf' },
        { id: 'remocao-axilas', title: 'Remoção de Pêlos das Axilas', desc: 'Cuidado e higiene essenciais para a sua rotina no dia a dia.', price: 'Consulte valor', icon: 'fas fa-hand-holding-heart' }
    ];

    const defaultSocials = {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        maps: 'https://maps.google.com'
    };

    let services = JSON.parse(localStorage.getItem('jhony_services')) || defaultServices;
    let socials = JSON.parse(localStorage.getItem('jhony_socials')) || defaultSocials;

    function renderServices() {
        const container = document.getElementById('services-grid-container');
        if (!container) return;

        container.innerHTML = '';
        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <div class="service-icon"><i class="${service.icon || 'fas fa-cut'}"></i></div>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <span class="price-tag">${service.price}</span>
            `;
            container.appendChild(card);
        });
    }

    function renderSocials() {
        if (document.getElementById('link-instagram')) document.getElementById('link-instagram').href = socials.instagram;
        if (document.getElementById('link-facebook')) document.getElementById('link-facebook').href = socials.facebook;
        if (document.getElementById('link-maps')) document.getElementById('link-maps').href = socials.maps;
        if (document.getElementById('btn-como-chegar-hero')) document.getElementById('btn-como-chegar-hero').href = socials.maps;
        if (document.getElementById('btn-como-chegar-cta')) document.getElementById('btn-como-chegar-cta').href = socials.maps;
    }

    renderServices();
    renderSocials();

    const modal = document.getElementById('admin-modal');
    const btnAdminLogin = document.getElementById('btn-admin-login');
    const closeModal = document.querySelector('.close-modal');
    const loginStep = document.getElementById('admin-login-step');
    const panelStep = document.getElementById('admin-panel-step');
    const btnConfirmLogin = document.getElementById('btn-confirm-login');
    const passwordInput = document.getElementById('admin-password');
    const loginError = document.getElementById('login-error');
    const btnLogout = document.getElementById('btn-logout-admin');
    const btnSaveAdmin = document.getElementById('btn-save-admin');

    if (btnAdminLogin) {
        btnAdminLogin.addEventListener('click', () => {
            modal.style.display = 'flex';
            loginStep.style.display = 'block';
            panelStep.style.display = 'none';
            passwordInput.value = '';
            loginError.textContent = '';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    const ADMIN_PASSWORD = 'jhonybarber@123';

    if (btnConfirmLogin) {
        btnConfirmLogin.addEventListener('click', () => {
            if (passwordInput.value === ADMIN_PASSWORD) {
                loginStep.style.display = 'none';
                panelStep.style.display = 'block';
                loadAdminPanelData();
            } else {
                loginError.textContent = 'Senha incorreta!';
            }
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            panelStep.style.display = 'none';
            loginStep.style.display = 'block';
        });
    }

    function loadAdminPanelData() {
        document.getElementById('input-instagram').value = socials.instagram;
        document.getElementById('input-facebook').value = socials.facebook;
        document.getElementById('input-maps').value = socials.maps;
        renderAdminServicesList();
    }

    function renderAdminServicesList() {
        const listContainer = document.getElementById('admin-services-list');
        if (!listContainer) return;

        listContainer.innerHTML = '';
        services.forEach((service, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.style.cssText = 'background: var(--bg-primary); padding: 12px; border-radius: 6px; margin-bottom: 10px; border: 1px solid var(--border-color);';
            itemDiv.innerHTML = `
                <div style="display: flex; gap: 10px; margin-bottom: 8px;">
                    <input type="text" class="admin-s-title" value="${service.title}" placeholder="Título" style="flex: 2; padding: 6px; background: var(--bg-card); border: 1px solid var(--border-color); color: white; border-radius: 4px;">
                    <input type="text" class="admin-s-price" value="${service.price}" placeholder="Preço" style="flex: 1; padding: 6px; background: var(--bg-card); border: 1px solid var(--border-color); color: white; border-radius: 4px;">
                </div>
                <div style="display: flex; gap: 10px;">
                    <input type="text" class="admin-s-desc" value="${service.desc}" placeholder="Descrição" style="flex: 3; padding: 6px; background: var(--bg-card); border: 1px solid var(--border-color); color: white; border-radius: 4px;">
                    <input type="text" class="admin-s-icon" value="${service.icon || 'fas fa-cut'}" placeholder="Ícone" style="flex: 1; padding: 6px; background: var(--bg-card); border: 1px solid var(--border-color); color: white; border-radius: 4px;">
                    <button type="button" class="btn-del-service" data-index="${index}" style="background: #ff5555; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;"><i class="fas fa-trash"></i></button>
                </div>
            `;
            listContainer.appendChild(itemDiv);
        });

        document.querySelectorAll('.btn-del-service').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.currentTarget.getAttribute('data-index');
                services.splice(idx, 1);
                renderAdminServicesList();
            });
        });
    }

    const btnAddNewService = document.getElementById('btn-add-new-service');
    if (btnAddNewService) {
        btnAddNewService.addEventListener('click', () => {
            services.push({
                title: 'Novo Serviço',
                desc: 'Descrição detalhada do serviço.',
                price: 'R$ 00,00',
                icon: 'fas fa-cut'
            });
            renderAdminServicesList();
        });
    }

    if (btnSaveAdmin) {
        btnSaveAdmin.addEventListener('click', () => {
            socials.instagram = document.getElementById('input-instagram').value;
            socials.facebook = document.getElementById('input-facebook').value;
            socials.maps = document.getElementById('input-maps').value;

            const titleInputs = document.querySelectorAll('.admin-s-title');
            const priceInputs = document.querySelectorAll('.admin-s-price');
            const descInputs = document.querySelectorAll('.admin-s-desc');
            const iconInputs = document.querySelectorAll('.admin-s-icon');

            const updatedServices = [];
            for (let i = 0; i < titleInputs.length; i++) {
                updatedServices.push({
                    title: titleInputs[i].value,
                    price: priceInputs[i].value,
                    desc: descInputs[i].value,
                    icon: iconInputs[i].value
                });
            }

            services = updatedServices;

            localStorage.setItem('jhony_services', JSON.stringify(services));
            localStorage.setItem('jhony_socials', JSON.stringify(socials));

            renderServices();
            renderSocials();

            alert('Alterações salvas com sucesso!');
            modal.style.display = 'none';
        });
    }
});
