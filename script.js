document.addEventListener("DOMContentLoaded", () => {
    // Senha padrão configurada (Pode ser alterada aqui no código)
    const ADMIN_PASSWORD = "jhonybarber@123";

    // Elementos do Modal
    const modal = document.getElementById("admin-modal");
    const btnAdminLogin = document.getElementById("btn-admin-login");
    const closeModal = document.querySelector(".close-modal");
    const btnConfirmLogin = document.getElementById("btn-confirm-login");
    const adminPasswordInput = document.getElementById("admin-password");
    const loginError = document.getElementById("login-error");

    const loginStep = document.getElementById("admin-login-step");
    const panelStep = document.getElementById("admin-panel-step");

    const btnSaveAdmin = document.getElementById("btn-save-admin");
    const btnLogoutAdmin = document.getElementById("btn-logout-admin");

    // Inputs de Redes
    const inputInstagram = document.getElementById("input-instagram");
    const inputFacebook = document.getElementById("input-facebook");
    const inputMaps = document.getElementById("input-maps");

    // Links da Página
    const linkInstagram = document.getElementById("link-instagram");
    const linkFacebook = document.getElementById("link-facebook");
    const linkMaps = document.getElementById("link-maps");
    const btnComoChegarHero = document.getElementById("btn-como-chegar-hero");
    const btnComoChegarCta = document.getElementById("btn-como-chegar-cta");

    // Serviços para Preços
    const services = [
        { id: "corte-masculino", title: "Corte Masculino Adulto" },
        { id: "corte-infantil", title: "Corte Infantil" },
        { id: "pigmentacao-barba", title: "Pigmentação de Barba" },
        { id: "micropigmentacao-sobrancelha", title: "Micropigmentação de Sobrancelha" },
        { id: "depilacao-costas", title: "Depilação das Costas" },
        { id: "remocao-nariz", title: "Remoção de Pêlos do Nariz" },
        { id: "remocao-orelhas", title: "Remoção de Pêlos das Orelhas" },
        { id: "remocao-axilas", title: "Remoção de Pêlos das Axilas" }
    ];

    // Carregar Dados Salvos do LocalStorage
    function loadData() {
        // Redes
        const savedInsta = localStorage.getItem("jb_instagram") || "https://instagram.com";
        const savedFb = localStorage.getItem("jb_facebook") || "https://facebook.com";
        const savedMaps = localStorage.getItem("jb_maps") || "https://maps.google.com";

        linkInstagram.href = savedInsta;
        linkFacebook.href = savedFb;
        linkMaps.href = savedMaps;
        btnComoChegarHero.href = savedMaps;
        btnComoChegarCta.href = savedMaps;

        inputInstagram.value = savedInsta;
        inputFacebook.value = savedFb;
        inputMaps.value = savedMaps;

        // Preços
        services.forEach(service => {
            const savedPrice = localStorage.getItem("jb_price_" + service.id);
            const card = document.querySelector(`.service-card[data-service-id="${service.id}"] .price-tag`);
            if (card) {
                card.textContent = savedPrice ? savedPrice : "Consulte valor";
            }
        });
    }

    // Renderizar Formulário de Preços no Modal
    function renderPricesForm() {
        const container = document.getElementById("prices-form-container");
        container.innerHTML = "";

        services.forEach(service => {
            const savedPrice = localStorage.getItem("jb_price_" + service.id) || "";
            const div = document.createElement("div");
            div.className = "form-group";
            div.innerHTML = `
                <label>${service.title}:</label>
                <input type="text" id="price-input-${service.id}" placeholder="Ex: R$ 35,00" value="${savedPrice}">
            `;
            container.appendChild(div);
        });
    }

    // Abrir Modal
    btnAdminLogin.addEventListener("click", () => {
        modal.style.display = "block";
        loginError.textContent = "";
        adminPasswordInput.value = "";
    });

    // Fechar Modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Confirmar Login
    btnConfirmLogin.addEventListener("click", () => {
        if (adminPasswordInput.value === ADMIN_PASSWORD) {
            loginStep.style.display = "none";
            panelStep.style.display = "block";
            renderPricesForm();
        } else {
            loginError.textContent = "Senha incorreta!";
        }
    });

    // Salvar Alterações
    btnSaveAdmin.addEventListener("click", () => {
        // Salvar Redes
        localStorage.setItem("jb_instagram", inputInstagram.value);
        localStorage.setItem("jb_facebook", inputFacebook.value);
        localStorage.setItem("jb_maps", inputMaps.value);

        // Salvar Preços
        services.forEach(service => {
            const val = document.getElementById(`price-input-${service.id}`).value;
            localStorage.setItem("jb_price_" + service.id, val);
        });

        loadData();
        alert("Alterações salvas com sucesso!");
        modal.style.display = "none";
    });

    // Logout Admin
    btnLogoutAdmin.addEventListener("click", () => {
        panelStep.style.display = "none";
        loginStep.style.display = "block";
        modal.style.display = "none";
    });

    // Inicialização
    loadData();
});
