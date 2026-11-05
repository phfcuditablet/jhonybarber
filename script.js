document.addEventListener('DOMContentLoaded', () => {
    // Serviços padrão com a tabela de preços oficial
    const defaultServices = [
        { id: 'corte-masculino', title: 'Corte Masculino Adulto', desc: 'Tesoura ou máquina, perfeitamente alinhado com o seu estilo e formato de rosto.', price: 'R$ 48,00', icon: 'fas fa-cut' },
        { id: 'corte-navalhado', title: 'Corte Navalhado', desc: 'Acabamento ultra preciso e degradê liso feito na navalha.', price: 'R$ 50,00', icon: 'fas fa-cut' },
        { id: 'corte-social', title: 'Corte Social', desc: 'Corte clássico e alinhado, ideal para o dia a dia e ambientes formais.', price: 'R$ 50,00', icon: 'fas fa-user-tie' },
        { id: 'barba', title: 'Barba', desc: 'Modelagem, alinhamento e toalha quente para uma barba impecável.', price: 'R$ 45,00', icon: 'fas fa-user-ninja' },
        { id: 'corte-e-barba', title: 'Corte e Barba', desc: 'Combo completo para renovar o visual do cabelo e da barba com desconto.', price: 'R$ 80,00', icon: 'fas fa-scissors' },
        { id: 'corte-infantil', title: 'Corte Infantil', desc: 'Atendimento paciente e carinhoso para garantir a melhor experiência para os pequenos.', price: 'Consulte valor', icon: 'fas fa-child' },
        { id: 'sobrancelha-navalha', title: 'Sobrancelha Navalha', desc: 'Design e limpeza rápida das sobrancelhas feita na navalha.', price: 'R$ 25,00', icon: 'fas fa-eye' },
        { id: 'sobrancelha-cera', title: 'Sobrancelha Cera', desc: 'Remoção e modelagem de alta precisão duradoura com cera especial.', price: 'R$ 30,00', icon: 'fas fa-spa' },
        { id: 'micropigmentacao-sobrancelha', title: 'Micropigmentação de Sobrancelha', desc: 'Design natural para valorizar o olhar masculino com simetria e sutileza.', price: 'Consulte valor', icon: 'fas fa-eye' },
        { id: 'pigmento-cabelo', title: 'Pigmento Cabelo', desc: 'Cobertura de fios brancos e realce do degradê no cabelo.', price: 'R$ 50,00', icon: 'fas fa-paint-brush' },
        { id: 'pigmentacao-barba', title: 'Pigmentação de Barba', desc: 'Cobertura de falhas e realce impecável do contorno para uma barba marcante.', price: 'R$ 45,00', icon: 'fas fa-user-ninja' },
        { id: 'selagem', title: 'Selagem', desc: 'Tratamento de alinhamento e redução de volume para cabelos masculinos.', price: 'R$ 90,00', icon: 'fas fa-pump-soap' },
        { id: 'selagem-e-corte', title: 'Selagem e Corte', desc: 'Tratamento completo de selagem junto com alinhamento do corte.', price: 'R$ 120,00', icon: 'fas fa-cut' },
        { id: 'remocao-nariz-orelha', title: 'Remoção de Pêlo Nariz ou Orelha', desc: 'Higiene prática e remoção precisa sem desconforto.', price: 'R$ 30,00', icon: 'fas fa-air-freshener' },
        { id: 'remocao-axilas', title: 'Remoção de Pêlos das Axilas', desc: 'Cuidado e higiene essenciais para a sua rotina no dia a dia.', price: 'R$ 40,00', icon: 'fas fa-hand-holding-heart' },
        { id: 'depilacao-costas', title: 'Depilação das Costas', desc: 'Remoção eficiente de pêlos para maior conforto, bem-estar e higiene.', price: 'Consulte valor', icon: 'fas fa-spa' }
    ];

    const defaultSocials = {
        instagram: 'https://www.instagram.com/jhony.barberoficial/',
        facebook: 'https://www.facebook.com/joao.dearaujosantosfilho.9',
        maps: 'https://www.google.com/maps/place/Barbearia+Jhony+Cortes/@-10.183176,-48.3494322,2247m/data=!3m1!1e3!4m6!3m5!1s0x9324cb704dc6c957:0xe6b0c77380e2f4d9!8m2!3d-10.183176!4d-48.339905!16s%2Fg%2F11yv6cbq8_?entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D'
    };

    // Carregar do localStorage ou utilizar os padrões
    let services = JSON.parse(localStorage.getItem('jhony_services')) || defaultServices;
    let socials = JSON.parse(localStorage.getItem('jhony_socials')) || defaultSocials;

    function renderServices() {
        const container = document.getElementById('services-grid-container');
        if (!container) return;

        container.innerHTML = '';
        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            
            // Verificar se o preço é 'Consulte valor' (ignorando maiúsculas/minúsculas)
            const isConsulteValor = service.price.trim().toLowerCase() === 'consulte valor';
            
            let priceElementHtml = '';
            if (isConsulteValor) {
                const whatsappMsg = encodeURIComponent(`Olá! Gostaria de consultar o valor do serviço: ${service.title}.`);
                priceElementHtml = `<a class="btn btn-whatsapp btn-large price-tag-link" href="https://wa.me/5563984257185?text=${whatsappMsg}" target="_blank"><i class="fab fa-whatsapp"></i> Consulte valor</a>`;
            } else {
                priceElementHtml = `<span class="price-tag">${service.price}</span>`;
            }

            card.innerHTML = `
                <div class="service-icon"><i class="${service.icon || 'fas fa-cut'}"></i></div>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                ${priceElementHtml}
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

    // Gerenciamento do Modal Admin
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

    const ADMIN_PASSWORD = 'Maite@1409';

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
                price: 'Consulte valor',
                icon: 'fas fa-cut'
            });
            renderAdminServicesList();
        });
    }

    // Coletar dados dos campos editados
    function getUpdatedDataFromPanel() {
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

        const updatedSocials = {
            instagram: document.getElementById('input-instagram').value,
            facebook: document.getElementById('input-facebook').value,
            maps: document.getElementById('input-maps').value
        };

        return { updatedServices, updatedSocials };
    }

    // Botão Salvar (localStorage no navegador)
    if (btnSaveAdmin) {
        btnSaveAdmin.addEventListener('click', () => {
            const { updatedServices, updatedSocials } = getUpdatedDataFromPanel();
            services = updatedServices;
            socials = updatedSocials;

            localStorage.setItem('jhony_services', JSON.stringify(services));
            localStorage.setItem('jhony_socials', JSON.stringify(socials));

            renderServices();
            renderSocials();

            alert('Alterações salvas no seu navegador!');
            modal.style.display = 'none';
        });
    }

    // 1. Exportar Backup (.json)
    const btnExportJson = document.getElementById('btn-export-json');
    if (btnExportJson) {
        btnExportJson.addEventListener('click', () => {
            const { updatedServices, updatedSocials } = getUpdatedDataFromPanel();
            const dataToExport = {
                services: updatedServices,
                socials: updatedSocials
            };

            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "jhony_barber_backup.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        });
    }

    // 2. Importar Backup (.json)
    const btnImportTrigger = document.getElementById('btn-import-trigger');
    const inputImportJson = document.getElementById('input-import-json');

    if (btnImportTrigger && inputImportJson) {
        btnImportTrigger.addEventListener('click', () => {
            inputImportJson.click();
        });

        inputImportJson.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    if (importedData.services && importedData.socials) {
                        services = importedData.services;
                        socials = importedData.socials;

                        localStorage.setItem('jhony_services', JSON.stringify(services));
                        localStorage.setItem('jhony_socials', JSON.stringify(socials));

                        renderServices();
                        renderSocials();
                        loadAdminPanelData();

                        alert('Backup importado com sucesso!');
                    } else {
                        alert('Formato de arquivo JSON inválido.');
                    }
                } catch (err) {
                    alert('Erro ao ler arquivo JSON.');
                }
            };
            reader.readAsText(file);
        });
    }

    // 3. Copiar Código para Fixar no script.js no GitHub
    const btnExportCode = document.getElementById('btn-export-code');
    if (btnExportCode) {
        btnExportCode.addEventListener('click', () => {
            const { updatedServices, updatedSocials } = getUpdatedDataFromPanel();
            const jsSnippet = `const defaultServices = ${JSON.stringify(updatedServices, null, 4)};

const defaultSocials = ${JSON.stringify(updatedSocials, null, 4)};`;
            
            navigator.clipboard.writeText(jsSnippet).then(() => {
                alert('Código copiado! Abra o script.js no seu computador/GitHub e substitua o bloco defaultServices inicial.');
            }).catch(() => {
                alert('Não foi possível copiar automaticamente.');
            });
        });
    }
});
