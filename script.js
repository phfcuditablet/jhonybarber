// Dados Padrão de Textos e Conteúdo da Landing Page
const defaultSiteData = {
    logoTitle: 'JHONY BARBER',
    logoSub: 'J B • HOMENS TAMBÉM SE CUIDAM',
    heroBadge: 'HOMENS TAMBÉM SE CUIDAM',
    heroTitle: 'Cuidados de alta qualidade com a atenção e o carinho que você merece',
    heroDesc: 'No Jhony Barber, unimos simplicidade, ambiente acolhedor e técnicas especializadas para renovar seu visual e sua autoestima.',
    heroBtnWa: 'Agende pelo WhatsApp',
    heroBtnMaps: 'Como Chegar',
    aboutSubtitle: 'CONHEÇA NOSSO ESPAÇO',
    aboutTitle: 'Um espaço feito pensando no seu bem-estar',
    aboutP1: 'No Jhony Barber, acreditamos que cada detalhe importa. Desde a nossa decoração acolhedora até o atendimento atencioso, cada corte e procedimento é feito com muito carinho e dedicação.',
    aboutP2: 'Aqui você não vem apenas para cortar o cabelo ou fazer a barba — vem para relaxar, se sentir em casa e renovar a sua melhor versão.',
    aboutFeat1: 'Atendimento Atencioso',
    aboutFeat2: 'Ambiente Acolhedor',
    aboutFeat3: 'Excelência em Cada Detalhe',
    servicesSubtitle: 'O QUE OFERECEMOS',
    servicesTitle: 'Nossos Serviços',
    servicesDesc: 'Confira nossos cuidados masculinos e infantis preparados especialmente para você.',
    ctaTitle: 'Pronto para renovar o visual?',
    ctaDesc: 'Agende seu horário agora mesmo de forma simples e rápida pelo WhatsApp.',
    ctaBtnWa: 'AGENDAR JÁ O SEU HORÁRIO',
    ctaBtnMaps: 'COMO CHEGAR',
    footerTitle: 'JHONY BARBER',
    footerSub: 'Homens também se cuidam.',
    footerPhone: '(63) 98425-7185',
    whatsappRaw: '5563984257185',
    footerHours: 'Segunda a Sábado',
    socials: {
        instagram: 'https://www.instagram.com/jhony.barberoficial/',
        facebook: 'https://www.facebook.com/joao.dearaujosantosfilho.9',
        maps: 'https://www.google.com/maps/place/Barbearia+Jhony+Cortes/@-10.183176,-48.3494322,2247m/data=!3m1!1e3!4m6!3m5!1s0x9324cb704dc6c957:0xe6b0c77380e2f4d9!8m2!3d-10.183176!4d-48.339905!16s%2Fg%2F11yv6cbq8_?entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D'
    },
    services: [
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
    ]
};

// Carregar dados salvos no localStorage ou usar os padrões
let siteData = JSON.parse(localStorage.getItem('jhony_site_data')) || defaultSiteData;

// Função para atualizar os elementos da landing page pública
function renderPublicPage() {
    if (!document.getElementById('display-logo-title')) return; // Se não estiver na index, ignora

    const setEl = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setEl('display-logo-title', siteData.logoTitle);
    setEl('display-logo-sub', siteData.logoSub);
    setEl('display-hero-badge', siteData.heroBadge);
    setEl('display-hero-title', siteData.heroTitle);
    setEl('display-hero-desc', siteData.heroDesc);
    setEl('display-hero-btn-wa', siteData.heroBtnWa);
    setEl('display-hero-btn-maps', siteData.heroBtnMaps);

    setEl('display-about-subtitle', siteData.aboutSubtitle);
    setEl('display-about-title', siteData.aboutTitle);
    setEl('display-about-p1', siteData.aboutP1);
    setEl('display-about-p2', siteData.aboutP2);
    setEl('display-feat-1', siteData.aboutFeat1);
    setEl('display-feat-2', siteData.aboutFeat2);
    setEl('display-feat-3', siteData.aboutFeat3);

    setEl('display-services-subtitle', siteData.servicesSubtitle);
    setEl('display-services-title', siteData.servicesTitle);
    setEl('display-services-desc', siteData.servicesDesc);

    setEl('display-cta-title', siteData.ctaTitle);
    setEl('display-cta-desc', siteData.ctaDesc);
    setEl('display-cta-btn-wa', siteData.ctaBtnWa);
    setEl('display-cta-btn-maps', siteData.ctaBtnMaps);

    setEl('display-footer-title', siteData.footerTitle);
    setEl('display-footer-sub', siteData.footerSub);
    setEl('display-footer-phone', siteData.footerPhone);
    setEl('display-footer-hours', siteData.footerHours);

    // Atualizar links dinâmicos de WhatsApp e Redes Sociais
    const waNumber = siteData.whatsappRaw || '5563984257185';
    const waUrl = `https://wa.me/${waNumber}?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20barbearia.`;
    
    if (document.getElementById('btn-hero-whatsapp')) document.getElementById('btn-hero-whatsapp').href = waUrl;
    if (document.getElementById('btn-cta-whatsapp')) document.getElementById('btn-cta-whatsapp').href = waUrl;
    if (document.getElementById('link-whatsapp-footer')) document.getElementById('link-whatsapp-footer').href = `https://wa.me/${waNumber}`;

    if (document.getElementById('link-instagram')) document.getElementById('link-instagram').href = siteData.socials.instagram;
    if (document.getElementById('link-facebook')) document.getElementById('link-facebook').href = siteData.socials.facebook;
    if (document.getElementById('link-maps')) document.getElementById('link-maps').href = siteData.socials.maps;
    if (document.getElementById('btn-como-chegar-hero')) document.getElementById('btn-como-chegar-hero').href = siteData.socials.maps;
    if (document.getElementById('btn-como-chegar-cta')) document.getElementById('btn-como-chegar-cta').href = siteData.socials.maps;

    // Renderizar Serviços na página principal
    const servicesContainer = document.getElementById('services-grid-container');
    if (servicesContainer) {
        servicesContainer.innerHTML = '';
        siteData.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';

            const isConsulteValor = service.price.trim().toLowerCase() === 'consulte valor';
            let priceElementHtml = '';

            if (isConsulteValor) {
                const whatsappMsg = encodeURIComponent(`Olá! Gostaria de consultar o valor do serviço: ${service.title}.`);
                priceElementHtml = `<a class="price-tag price-tag-link" href="https://wa.me/${waNumber}?text=${whatsappMsg}" target="_blank"><i class="fab fa-whatsapp"></i> Consulte valor</a>`;
            } else {
                priceElementHtml = `<span class="price-tag">${service.price}</span>`;
            }

            card.innerHTML = `
                <div class="service-icon"><i class="${service.icon || 'fas fa-cut'}"></i></div>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                ${priceElementHtml}
            `;
            servicesContainer.appendChild(card);
        });
    }
}

// Carregar formulários e gerenciar edição no Painel Administrativo (`admin.html`)
function loadAdminPageData() {
    if (!document.getElementById('edit-logo-title')) return; // Se não estiver na admin.html, ignora

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val || '';
    };

    setVal('edit-logo-title', siteData.logoTitle);
    setVal('edit-logo-sub', siteData.logoSub);
    setVal('edit-hero-badge', siteData.heroBadge);
    setVal('edit-hero-title', siteData.heroTitle);
    setVal('edit-hero-desc', siteData.heroDesc);
    setVal('edit-hero-btn-wa', siteData.heroBtnWa);
    setVal('edit-hero-btn-maps', siteData.heroBtnMaps);

    setVal('edit-about-subtitle', siteData.aboutSubtitle);
    setVal('edit-about-title', siteData.aboutTitle);
    setVal('edit-about-p1', siteData.aboutP1);
    setVal('edit-about-p2', siteData.aboutP2);
    setVal('edit-feat-1', siteData.aboutFeat1);
    setVal('edit-feat-2', siteData.aboutFeat2);
    setVal('edit-feat-3', siteData.aboutFeat3);

    setVal('edit-services-subtitle', siteData.servicesSubtitle);
    setVal('edit-services-title', siteData.servicesTitle);
    setVal('edit-services-desc', siteData.servicesDesc);

    setVal('edit-cta-title', siteData.ctaTitle);
    setVal('edit-cta-desc', siteData.ctaDesc);
    setVal('edit-cta-btn-wa', siteData.ctaBtnWa);

    setVal('edit-footer-phone', siteData.footerPhone);
    setVal('edit-whatsapp-raw', siteData.whatsappRaw);
    setVal('edit-footer-hours', siteData.footerHours);
    setVal('edit-instagram', siteData.socials.instagram);
    setVal('edit-facebook', siteData.socials.facebook);
    setVal('edit-maps', siteData.socials.maps);

    renderAdminServicesList();
}

function renderAdminServicesList() {
    const listContainer = document.getElementById('admin-services-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    siteData.services.forEach((service, index) => {
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
            siteData.services.splice(idx, 1);
            renderAdminServicesList();
        });
    });
}

// Coletar todos os dados editados no painel Admin
function getUpdatedDataFromAdminPage() {
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : '';

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

    return {
        logoTitle: getVal('edit-logo-title'),
        logoSub: getVal('edit-logo-sub'),
        heroBadge: getVal('edit-hero-badge'),
        heroTitle: getVal('edit-hero-title'),
        heroDesc: getVal('edit-hero-desc'),
        heroBtnWa: getVal('edit-hero-btn-wa'),
        heroBtnMaps: getVal('edit-hero-btn-maps'),
        aboutSubtitle: getVal('edit-about-subtitle'),
        aboutTitle: getVal('edit-about-title'),
        aboutP1: getVal('edit-about-p1'),
        aboutP2: getVal('edit-about-p2'),
        aboutFeat1: getVal('edit-feat-1'),
        aboutFeat2: getVal('edit-feat-2'),
        aboutFeat3: getVal('edit-feat-3'),
        servicesSubtitle: getVal('edit-services-subtitle'),
        servicesTitle: getVal('edit-services-title'),
        servicesDesc: getVal('edit-services-desc'),
        ctaTitle: getVal('edit-cta-title'),
        ctaDesc: getVal('edit-cta-desc'),
        ctaBtnWa: getVal('edit-cta-btn-wa'),
        ctaBtnMaps: 'COMO CHEGAR',
        footerTitle: getVal('edit-logo-title'),
        footerSub: getVal('edit-logo-sub'),
        footerPhone: getVal('edit-footer-phone'),
        whatsappRaw: getVal('edit-whatsapp-raw'),
        footerHours: getVal('edit-footer-hours'),
        socials: {
            instagram: getVal('edit-instagram'),
            facebook: getVal('edit-facebook'),
            maps: getVal('edit-maps')
        },
        services: updatedServices
    };
}

document.addEventListener('DOMContentLoaded', () => {
    renderPublicPage();

    // Eventos do Painel Admin (`admin.html`)
    const btnAddNewService = document.getElementById('btn-add-new-service');
    if (btnAddNewService) {
        btnAddNewService.addEventListener('click', () => {
            siteData.services.push({
                title: 'Novo Serviço',
                desc: 'Descrição do serviço.',
                price: 'Consulte valor',
                icon: 'fas fa-cut'
            });
            renderAdminServicesList();
        });
    }

    const btnSaveAdminPage = document.getElementById('btn-save-admin-page');
    if (btnSaveAdminPage) {
        btnSaveAdminPage.addEventListener('click', () => {
            siteData = getUpdatedDataFromAdminPage();
            localStorage.setItem('jhony_site_data', JSON.stringify(siteData));
            alert('Alterações salvas com sucesso no seu navegador!');
        });
    }

    // Exportação de Backup JSON
    const btnExportJson = document.getElementById('btn-export-json');
    if (btnExportJson) {
        btnExportJson.addEventListener('click', () => {
            const dataToExport = getUpdatedDataFromAdminPage();
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "jhony_barber_site_backup.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        });
    }

    // Importação de Backup JSON
    const btnImportTrigger = document.getElementById('btn-import-trigger');
    const inputImportJson = document.getElementById('input-import-json');
    if (btnImportTrigger && inputImportJson) {
        btnImportTrigger.addEventListener('click', () => inputImportJson.click());
        inputImportJson.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    if (importedData.services && importedData.socials) {
                        siteData = importedData;
                        localStorage.setItem('jhony_site_data', JSON.stringify(siteData));
                        loadAdminPageData();
                        alert('Backup importado com sucesso!');
                    } else {
                        alert('Arquivo JSON com estrutura inválida.');
                    }
                } catch (err) {
                    alert('Erro ao carregar arquivo de backup.');
                }
            };
            reader.readAsText(file);
        });
    }

    // Gerador do trecho do `script.js` para atualizar o repositório no GitHub
    const btnExportCode = document.getElementById('btn-export-code');
    if (btnExportCode) {
        btnExportCode.addEventListener('click', () => {
            const currentData = getUpdatedDataFromAdminPage();
            const jsSnippet = `const defaultSiteData = ${JSON.stringify(currentData, null, 4)};`;
            navigator.clipboard.writeText(jsSnippet).then(() => {
                alert('Código copiado com sucesso! Abra o script.js no computador/GitHub e substitua o bloco defaultSiteData inicial.');
            }).catch(() => {
                alert('Erro ao copiar código para a área de transferência.');
            });
        });
    }
});
