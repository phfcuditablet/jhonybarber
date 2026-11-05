// Dados Padrão de Textos e Conteúdo da Landing Page
const defaultSiteData = {
    logoTitle: 'JHONY BARBER',
    logoSub: 'J B • HOMENS TAMBÉM SE CUIDAM',
    heroBadge: 'HOMENS TAMBÉM SE CUIDAM',
    heroTitle: 'Cuidados de alta qualidade com a atenção e o carinho que você merece',
    heroDesc: 'No Jhony Barber, unimos simplicidade, ambiente acolhedor e técnicas especializadas para renovar seu visual e sua autoestima.',
    heroBtnWa: 'Agende pelo WhatsApp',
    heroBtnMaps: 'Como Chegar',

    teamSubtitle: 'NOSSOS TALENTOS',
    teamTitle: 'Nossa Equipe de Barbeiros',
    teamDesc: 'Profissionais altamente capacitados e com anos de estrada para garantir o seu melhor estilo.',
    team: [
        {
            name: 'Jhony Silva',
            role: 'MASTER BARBER & FUNDADOR',
            exp: 'Mais de 12 anos de experiência especialista em cortes clássicos, degradês modernos e barba na toalha quente.',
            photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            instagram: 'https://instagram.com'
        },
        {
            name: 'Alex Grinfield',
            role: 'BARBEIRO ESPECIALISTA',
            exp: '8 anos de carreira focado em cortes infantis, pigmentação de barba e acabamentos ultra precisos.',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
            instagram: 'https://instagram.com'
        },
        {
            name: 'Lucas Richmond',
            role: 'VISAGISTA & DESIGNER',
            exp: '6 anos renovando visuais com técnicas avançadas de visagismo masculino e alinhamento de sobrancelha.',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
            instagram: 'https://instagram.com'
        },
        {
            name: 'Carlos Swanson',
            role: 'BARBEIRO SENIOR',
            exp: '10 anos no mercado mestre em tratamentos capilares masculinos, selagem e química de pigmentação.',
            photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
            instagram: 'https://instagram.com'
        }
    ],

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

// Garante que a equipe nunca fique vazia se o objeto for antigo
if (!siteData.team || siteData.team.length === 0) {
    siteData.team = defaultSiteData.team;
    siteData.teamSubtitle = defaultSiteData.teamSubtitle;
    siteData.teamTitle = defaultSiteData.teamTitle;
    siteData.teamDesc = defaultSiteData.teamDesc;
}

// Renderizar Landing Page Pública
function renderPublicPage() {
    if (!document.getElementById('display-logo-title')) return;

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

    setEl('display-team-subtitle', siteData.teamSubtitle);
    setEl('display-team-title', siteData.teamTitle);
    setEl('display-team-desc', siteData.teamDesc);

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

    // Renderizar Barbeiros
    const teamContainer = document.getElementById('team-grid-container');
    if (teamContainer && siteData.team) {
        teamContainer.innerHTML = '';
        siteData.team.forEach(member => {
            const card = document.createElement('div');
            card.className = 'team-card';
            card.innerHTML = `
                <div class="team-avatar-box">
                    <img src="${member.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}" alt="${member.name}" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'">
                </div>
                <div class="team-info">
                    <h3 class="team-name">${member.name}</h3>
                    <span class="team-role">${member.role}</span>
                    <p class="team-exp">${member.exp}</p>
                    <div class="team-socials">
                        ${member.instagram ? `<a href="${member.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>` : ''}
                    </div>
                </div>
            `;
            teamContainer.appendChild(card);
        });
    }

    // WhatsApp e Redes
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

    // Renderizar Serviços
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

// Carregar Painel Admin
function loadAdminPageData() {
    if (!document.getElementById('edit-logo-title')) return;

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

    setVal('edit-team-subtitle', siteData.teamSubtitle);
    setVal('edit-team-title', siteData.teamTitle);
    setVal('edit-team-desc', siteData.teamDesc);

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

    renderAdminTeamList();
    renderAdminServicesList();
}

// Compressão de Imagens enviadas para não estourar a memória do navegador
function compressImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const MAX_WIDTH = 400;
            const MAX_HEIGHT = 400;
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
            callback(compressedBase64);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Renderizar Gerenciador da Equipe no Admin
function renderAdminTeamList() {
    const listContainer = document.getElementById('admin-team-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    siteData.team.forEach((member, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'team-admin-card';
        itemDiv.innerHTML = `
            <div class="team-admin-left">
                <img src="${member.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}" class="team-admin-preview" id="img-preview-${index}" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'">
                <label class="btn-upload-photo">
                    <i class="fas fa-camera"></i> Escolher Foto
                    <input type="file" class="admin-t-file-input" data-idx="${index}" accept="image/*" style="display:none;">
                </label>
            </div>
            <div class="team-admin-inputs">
                <div class="row-inputs">
                    <input type="text" class="admin-t-name form-control" value="${member.name}" placeholder="Nome do Barbeiro" style="flex: 2;">
                    <input type="text" class="admin-t-role form-control" value="${member.role}" placeholder="Cargo / Especialidade" style="flex: 2;">
                </div>
                <div class="row-inputs">
                    <input type="text" class="admin-t-photo form-control" value="${member.photo}" placeholder="URL da Foto ou imagens/nome-da-foto.jpg" style="flex: 3;" data-idx="${index}">
                    <input type="text" class="admin-t-instagram form-control" value="${member.instagram || ''}" placeholder="Instagram (URL)" style="flex: 2;">
                </div>
                <textarea class="admin-t-exp form-control" placeholder="Descrição do tempo de experiência na carreira...">${member.exp}</textarea>
                <div class="action-bar-item">
                    <button type="button" class="btn-item-save btn-single-team-save" data-idx="${index}">
                        <i class="fas fa-floppy-disk"></i> Salvar Barbeiro
                    </button>
                    <button type="button" class="btn-item-del btn-del-team" data-index="${index}">
                        <i class="fas fa-trash-can"></i> Excluir
                    </button>
                </div>
            </div>
        `;
        listContainer.appendChild(itemDiv);
    });

    // Upload de Imagem local com compressão
    document.querySelectorAll('.admin-t-file-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = e.target.getAttribute('data-idx');
            const file = e.target.files[0];
            if (file) {
                compressImage(file, (base64Img) => {
                    const urlInput = document.querySelectorAll('.admin-t-photo')[idx];
                    const imgPreview = document.getElementById(`img-preview-${idx}`);
                    if (urlInput) urlInput.value = base64Img;
                    if (imgPreview) imgPreview.src = base64Img;
                });
            }
        });
    });

    // Atualização do preview ao digitar URL ou caminho local
    document.querySelectorAll('.admin-t-photo').forEach(input => {
        input.addEventListener('input', (e) => {
            const idx = e.target.getAttribute('data-idx');
            const imgEl = document.getElementById(`img-preview-${idx}`);
            if (imgEl) imgEl.src = e.target.value || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
        });
    });

    // Botão Salvar Individual do Barbeiro
    document.querySelectorAll('.btn-single-team-save').forEach(btn => {
        btn.addEventListener('click', () => {
            siteData = getUpdatedDataFromAdminPage();
            try {
                localStorage.setItem('jhony_site_data', JSON.stringify(siteData));
                alert('Barbeiro salvo com sucesso no navegador!');
            } catch(e) {
                alert('Foto muito pesada para salvar no LocalStorage do navegador. Recomendamos colocar a imagem na pasta imagens/ e indicar o caminho imagens/nome.jpg');
            }
        });
    });

    // Botão Excluir Barbeiro
    document.querySelectorAll('.btn-del-team').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.currentTarget.getAttribute('data-index');
            if (confirm('Deseja realmente excluir este profissional?')) {
                siteData.team.splice(idx, 1);
                renderAdminTeamList();
            }
        });
    });
}

function renderAdminServicesList() {
    const listContainer = document.getElementById('admin-services-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    siteData.services.forEach((service, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'background: var(--bg-primary); padding: 15px; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--border-color);';
        itemDiv.innerHTML = `
            <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <input type="text" class="admin-s-title form-control" value="${service.title}" placeholder="Nome do Serviço" style="flex: 2;">
                <input type="text" class="admin-s-price form-control" value="${service.price}" placeholder="Preço (ex: R$ 50,00 ou Consulte valor)" style="flex: 1;">
            </div>
            <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <input type="text" class="admin-s-desc form-control" value="${service.desc}" placeholder="Descrição detalhada do serviço" style="flex: 3;">
                <input type="text" class="admin-s-icon form-control" value="${service.icon || 'fas fa-cut'}" placeholder="Classe do Ícone FontAwesome" style="flex: 1;">
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button type="button" class="btn-item-save btn-single-service-save" style="font-size: 0.8rem; padding: 6px 12px;">
                    <i class="fas fa-floppy-disk"></i> Salvar Serviço
                </button>
                <button type="button" class="btn-item-del btn-del-service" data-index="${index}" style="font-size: 0.8rem; padding: 6px 12px;">
                    <i class="fas fa-trash-can"></i> Excluir
                </button>
            </div>
        `;
        listContainer.appendChild(itemDiv);
    });

    document.querySelectorAll('.btn-single-service-save').forEach(btn => {
        btn.addEventListener('click', () => {
            siteData = getUpdatedDataFromAdminPage();
            localStorage.setItem('jhony_site_data', JSON.stringify(siteData));
            alert('Serviço salvo com sucesso!');
        });
    });

    document.querySelectorAll('.btn-del-service').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.currentTarget.getAttribute('data-index');
            if (confirm('Deseja excluir este serviço?')) {
                siteData.services.splice(idx, 1);
                renderAdminServicesList();
            }
        });
    });
}

// Coletar Dados do Admin
function getUpdatedDataFromAdminPage() {
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : '';

    const tNames = document.querySelectorAll('.admin-t-name');
    const tRoles = document.querySelectorAll('.admin-t-role');
    const tPhotos = document.querySelectorAll('.admin-t-photo');
    const tExps = document.querySelectorAll('.admin-t-exp');
    const tInstas = document.querySelectorAll('.admin-t-instagram');

    const updatedTeam = [];
    for (let i = 0; i < tNames.length; i++) {
        updatedTeam.push({
            name: tNames[i].value,
            role: tRoles[i].value,
            photo: tPhotos[i].value,
            exp: tExps[i].value,
            instagram: tInstas[i].value
        });
    }

    const sTitles = document.querySelectorAll('.admin-s-title');
    const sPrices = document.querySelectorAll('.admin-s-price');
    const sDescs = document.querySelectorAll('.admin-s-desc');
    const sIcons = document.querySelectorAll('.admin-s-icon');

    const updatedServices = [];
    for (let i = 0; i < sTitles.length; i++) {
        updatedServices.push({
            title: sTitles[i].value,
            price: sPrices[i].value,
            desc: sDescs[i].value,
            icon: sIcons[i].value
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

        teamSubtitle: getVal('edit-team-subtitle'),
        teamTitle: getVal('edit-team-title'),
        teamDesc: getVal('edit-team-desc'),
        team: updatedTeam,

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

// FUNÇÃO DEFINITIVA: GERAR O .ZIP COM TODOS OS ARQUIVOS DO SITE DIRETO NO NAVEGADOR
async function generateUpdatedZipPackage() {
    siteData = getUpdatedDataFromAdminPage();
    try {
        localStorage.setItem('jhony_site_data', JSON.stringify(siteData));
    } catch(e) {
        console.warn('LocalStorage excedido, ignorando erro local para geração do zip...');
    }

    if (typeof JSZip === 'undefined') {
        alert('Carregando biblioteca de ZIP. Por favor tente novamente em alguns segundos.');
        return;
    }

    const zip = new JSZip();

    // 1. Gerar o script.js dinâmico contendo o defaultSiteData atualizado com todos os barbeiros e fotos!
    const updatedScriptContent = `// Dados Padrão de Textos e Conteúdo da Landing Page
const defaultSiteData = ${JSON.stringify(siteData, null, 4)};

// Carregar dados salvos no localStorage ou usar os padrões
let siteData = JSON.parse(localStorage.getItem('jhony_site_data')) || defaultSiteData;

if (!siteData.team || siteData.team.length === 0) {
    siteData.team = defaultSiteData.team;
    siteData.teamSubtitle = defaultSiteData.teamSubtitle;
    siteData.teamTitle = defaultSiteData.teamTitle;
    siteData.teamDesc = defaultSiteData.teamDesc;
}

// Renderizar Landing Page Pública
function renderPublicPage() {
    if (!document.getElementById('display-logo-title')) return;

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

    setEl('display-team-subtitle', siteData.teamSubtitle);
    setEl('display-team-title', siteData.teamTitle);
    setEl('display-team-desc', siteData.teamDesc);

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

    // Renderizar Barbeiros
    const teamContainer = document.getElementById('team-grid-container');
    if (teamContainer && siteData.team) {
        teamContainer.innerHTML = '';
        siteData.team.forEach(member => {
            const card = document.createElement('div');
            card.className = 'team-card';
            card.innerHTML = \`
                <div class="team-avatar-box">
                    <img src="\${member.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}" alt="\${member.name}" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'">
                </div>
                <div class="team-info">
                    <h3 class="team-name">\${member.name}</h3>
                    <span class="team-role">\${member.role}</span>
                    <p class="team-exp">\${member.exp}</p>
                    <div class="team-socials">
                        \${member.instagram ? \`<a href="\${member.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>\` : ''}
                    </div>
                </div>
            \`;
            teamContainer.appendChild(card);
        });
    }

    // WhatsApp e Redes
    const waNumber = siteData.whatsappRaw || '5563984257185';
    const waUrl = \`https://wa.me/\${waNumber}?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20barbearia.\`;
    
    if (document.getElementById('btn-hero-whatsapp')) document.getElementById('btn-hero-whatsapp').href = waUrl;
    if (document.getElementById('btn-cta-whatsapp')) document.getElementById('btn-cta-whatsapp').href = waUrl;
    if (document.getElementById('link-whatsapp-footer')) document.getElementById('link-whatsapp-footer').href = \`https://wa.me/\${waNumber}\`;

    if (document.getElementById('link-instagram')) document.getElementById('link-instagram').href = siteData.socials.instagram;
    if (document.getElementById('link-facebook')) document.getElementById('link-facebook').href = siteData.socials.facebook;
    if (document.getElementById('link-maps')) document.getElementById('link-maps').href = siteData.socials.maps;
    if (document.getElementById('btn-como-chegar-hero')) document.getElementById('btn-como-chegar-hero').href = siteData.socials.maps;
    if (document.getElementById('btn-como-chegar-cta')) document.getElementById('btn-como-chegar-cta').href = siteData.socials.maps;

    // Renderizar Serviços
    const servicesContainer = document.getElementById('services-grid-container');
    if (servicesContainer) {
        servicesContainer.innerHTML = '';
        siteData.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';

            const isConsulteValor = service.price.trim().toLowerCase() === 'consulte valor';
            let priceElementHtml = '';

            if (isConsulteValor) {
                const whatsappMsg = encodeURIComponent(\`Olá! Gostaria de consultar o valor do serviço: \${service.title}.\`);
                priceElementHtml = \`<a class="price-tag price-tag-link" href="https://wa.me/\${waNumber}?text=\${whatsappMsg}" target="_blank"><i class="fab fa-whatsapp"></i> Consulte valor</a>\`;
            } else {
                priceElementHtml = \`<span class="price-tag">\${service.price}</span>\`;
            }

            card.innerHTML = \`
                <div class="service-icon"><i class="\${service.icon || 'fas fa-cut'}"></i></div>
                <h3>\${service.title}</h3>
                <p>\${service.desc}</p>
                \${priceElementHtml}
            \`;
            servicesContainer.appendChild(card);
        });
    }
}

// Carregar Painel Admin
function loadAdminPageData() {
    if (!document.getElementById('edit-logo-title')) return;

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

    setVal('edit-team-subtitle', siteData.teamSubtitle);
    setVal('edit-team-title', siteData.teamTitle);
    setVal('edit-team-desc', siteData.teamDesc);

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

    renderAdminTeamList();
    renderAdminServicesList();
}

// Compressão de Imagens enviadas
function compressImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const MAX_WIDTH = 400;
            const MAX_HEIGHT = 400;
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
            callback(compressedBase64);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Renderizar Gerenciador da Equipe no Admin
function renderAdminTeamList() {
    const listContainer = document.getElementById('admin-team-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    siteData.team.forEach((member, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'team-admin-card';
        itemDiv.innerHTML = \`
            <div class="team-admin-left">
                <img src="\${member.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}" class="team-admin-preview" id="img-preview-\${index}" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'">
                <label class="btn-upload-photo">
                    <i class="fas fa-camera"></i> Escolher Foto
                    <input type="file" class="admin-t-file-input" data-idx="\${index}" accept="image/*" style="display:none;">
                </label>
            </div>
            <div class="team-admin-inputs">
                <div class="row-inputs">
                    <input type="text" class="admin-t-name form-control" value="\${member.name}" placeholder="Nome do Barbeiro" style="flex: 2;">
                    <input type="text" class="admin-t-role form-control" value="\${member.role}" placeholder="Cargo / Especialidade" style="flex: 2;">
                </div>
                <div class="row-inputs">
                    <input type="text" class="admin-t-photo form-control" value="\${member.photo}" placeholder="URL da Foto ou imagens/nome-da-foto.jpg" style="flex: 3;" data-idx="\${index}">
                    <input type="text" class="admin-t-instagram form-control" value="\${member.instagram || ''}" placeholder="Instagram (URL)" style="flex: 2;">
                </div>
                <textarea class="admin-t-exp form-control" placeholder="Descrição do tempo de experiência na carreira...">\${member.exp}</textarea>
                <div class="action-bar-item">
                    <button type="button" class="btn-item-save btn-single-team-save" data-idx="\${index}">
                        <i class="fas fa-floppy-disk"></i> Salvar Barbeiro
                    </button>
                    <button type="button" class="btn-item-del btn-del-team" data-index="\${index}">
                        <i class="fas fa-trash-can"></i> Excluir
                    </button>
                </div>
            </div>
        \`;
        listContainer.appendChild(itemDiv);
    });

    document.querySelectorAll('.admin-t-file-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = e.target.getAttribute('data-idx');
            const file = e.target.files[0];
            if (file) {
                compressImage(file, (base64Img) => {
                    const urlInput = document.querySelectorAll('.admin-t-photo')[idx];
                    const imgPreview = document.getElementById(\`img-preview-\${idx}\`);
                    if (urlInput) urlInput.value = base64Img;
                    if (imgPreview) imgPreview.src = base64Img;
                });
            }
        });
    });

    document.querySelectorAll('.admin-t-photo').forEach(input => {
        input.addEventListener('input', (e) => {
            const idx = e.target.getAttribute('data-idx');
            const imgEl = document.getElementById(\`img-preview-\${idx}\`);
            if (imgEl) imgEl.src = e.target.value || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
        });
    });

    document.querySelectorAll('.btn-single-team-save').forEach(btn => {
        btn.addEventListener('click', () => {
            siteData = getUpdatedDataFromAdminPage();
            try {
                localStorage.setItem('jhony_site_data', JSON.stringify(siteData));
                alert('Barbeiro salvo com sucesso no navegador!');
            } catch(e) {
                alert('Foto muito pesada para salvar no LocalStorage do navegador. Recomendamos indicar o caminho imagens/nome.jpg');
            }
        });
    });

    document.querySelectorAll('.btn-del-team').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.currentTarget.getAttribute('data-index');
            if (confirm('Deseja realmente excluir este profissional?')) {
                siteData.team.splice(idx, 1);
                renderAdminTeamList();
            }
        });
    });
}

function renderAdminServicesList() {
    const listContainer = document.getElementById('admin-services-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    siteData.services.forEach((service, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'background: var(--bg-primary); padding: 15px; border-radius: 8px; margin-bottom: 12px; border: 1px solid var(--border-color);';
        itemDiv.innerHTML = \`
            <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <input type="text" class="admin-s-title form-control" value="\${service.title}" placeholder="Nome do Serviço" style="flex: 2;">
                <input type="text" class="admin-s-price form-control" value="\${service.price}" placeholder="Preço (ex: R$ 50,00 ou Consulte valor)" style="flex: 1;">
            </div>
            <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <input type="text" class="admin-s-desc form-control" value="\${service.desc}" placeholder="Descrição detalhada do serviço" style="flex: 3;">
                <input type="text" class="admin-s-icon form-control" value="\${service.icon || 'fas fa-cut'}" placeholder="Classe do Ícone FontAwesome" style="flex: 1;">
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button type="button" class="btn-item-save btn-single-service-save" style="font-size: 0.8rem; padding: 6px 12px;">
                    <i class="fas fa-floppy-disk"></i> Salvar Serviço
                </button>
                <button type="button" class="btn-item-del btn-del-service" data-index="\${index}" style="font-size: 0.8rem; padding: 6px 12px;">
                    <i class="fas fa-trash-can"></i> Excluir
                </button>
            </div>
        \`;
        listContainer.appendChild(itemDiv);
    });

    document.querySelectorAll('.btn-single-service-save').forEach(btn => {
        btn.addEventListener('click', () => {
            siteData = getUpdatedDataFromAdminPage();
            localStorage.setItem('jhony_site_data', JSON.stringify(siteData));
            alert('Serviço salvo com sucesso!');
        });
    });

    document.querySelectorAll('.btn-del-service').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.currentTarget.getAttribute('data-index');
            if (confirm('Deseja excluir este serviço?')) {
                siteData.services.splice(idx, 1);
                renderAdminServicesList();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPublicPage();

    const addTeamHandler = () => {
        siteData.team.push({
            name: 'Novo Barbeiro',
            role: 'BARBEIRO PROFISSIONAL',
            exp: 'Experiência e especialidade na carreira.',
            photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            instagram: 'https://instagram.com'
        });
        renderAdminTeamList();
    };

    if (document.getElementById('btn-add-team-member')) document.getElementById('btn-add-team-member').addEventListener('click', addTeamHandler);
    if (document.getElementById('btn-add-team-member-bottom')) document.getElementById('btn-add-team-member-bottom').addEventListener('click', addTeamHandler);

    if (document.getElementById('btn-add-new-service')) {
        document.getElementById('btn-add-new-service').addEventListener('click', () => {
            siteData.services.push({
                title: 'Novo Serviço',
                desc: 'Descrição do novo serviço.',
                price: 'Consulte valor',
                icon: 'fas fa-cut'
            });
            renderAdminServicesList();
        });
    }

    // Botão Salvar que gera o ZIP completo
    if (document.getElementById('btn-save-admin-page')) {
        document.getElementById('btn-save-admin-page').addEventListener('click', () => {
            generateUpdatedZipPackage();
        });
    }

    if (document.getElementById('btn-export-json')) {
        document.getElementById('btn-export-json').addEventListener('click', () => {
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
                    if (importedData.team && importedData.services) {
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

    if (document.getElementById('btn-export-code')) {
        document.getElementById('btn-export-code').addEventListener('click', () => {
            const currentData = getUpdatedDataFromAdminPage();
            const jsSnippet = \`const defaultSiteData = \${JSON.stringify(currentData, null, 4)};\`;
            navigator.clipboard.writeText(jsSnippet).then(() => {
                alert('Código copiado com sucesso!');
            }).catch(() => {
                alert('Erro ao copiar código.');
            });
        });
    }
});
`;

    // 2. Incluir index.html, admin.html e style.css diretamente no arquivo .ZIP
    const indexHtmlContent = document.documentElement.outerHTML ? document.documentElement.outerHTML : '';
    
    // Obter o HTML original do index.html via fetch se possível ou criar réplica idêntica
    let indexHtmlSource = "";
    try {
        const resp = await fetch('index.html');
        indexHtmlSource = await resp.text();
    } catch(e) {
        indexHtmlSource = `<!DOCTYPE html>` + document.documentElement.outerHTML;
    }

    let adminHtmlSource = "";
    try {
        const resp2 = await fetch('admin.html');
        adminHtmlSource = await resp2.text();
    } catch(e) {
        adminHtmlSource = `<!DOCTYPE html>` + document.documentElement.outerHTML;
    }

    let cssSource = "";
    try {
        const resp3 = await fetch('style.css');
        cssSource = await resp3.text();
    } catch(e) {
        cssSource = "/* CSS da Barbearia */";
    }

    zip.file("index.html", indexHtmlSource);
    zip.file("admin.html", adminHtmlSource);
    zip.file("style.css", cssSource);
    zip.file("script.js", updatedScriptContent);

    // Criar pasta de imagens no ZIP com README explicativo e Base64 salvas
    const imgFolder = zip.folder("imagens");
    imgFolder.file("LEAME.txt", "Pasta para fotos dos barbeiros (ex: barbeiro1.jpg).");

    // Adicionar fotos carregadas via Base64 se houver
    if (siteData.team) {
        siteData.team.forEach((member, i) => {
            if (member.photo && member.photo.startsWith('data:image')) {
                const parts = member.photo.split(',');
                const mimeMatch = parts[0].match(/:(.*?);/);
                const mime = mimeMatch ? mimeMatch[1] : 'image/jpeg';
                const ext = mime.split('/')[1] || 'jpg';
                const base64Data = parts[1];
                const fileName = `barbeiro_${i + 1}.${ext}`;
                imgFolder.file(fileName, base64Data, {base64: true});
                
                // Atualizar referência no script.js do zip para o arquivo físico!
                member.photo = `imagens/${fileName}`;
            }
        });
    }

    // Baixar o arquivo .ZIP automaticamente no computador
    zip.generateAsync({type: "blob"}).then(function(content) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(content);
        a.download = "jhony_barber_site_atualizado.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        alert('PACOTE .ZIP ATUALIZADO GERADO COM SUCESSO!\n\nAgora basta descompactar e substituir os arquivos no seu computador / GitHub!');
    });
}
