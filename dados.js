// ============================================================
// DADOS PADRÃO DO SITE (textos, equipe, serviços)
// Este arquivo é atualizado automaticamente pelo botão
// "Salvar e Gerar .ZIP Completo" do painel admin.
// ============================================================
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
