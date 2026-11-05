# Jhony Barber | Barbearia & Cuidado Masculino

Landing page moderna e responsiva para a barbearia **Jhony Barber**, com **Painel Administrativo** integrado para controle completo dos serviços, preços e redes sociais.

## 💾 Solução para Manter Alterações Salvas Permanentes
Como sites estáticos hospedados no GitHub Pages não possuem banco de dados remoto centralizado por padrão, implementamos **3 métodos complementares**:

1. **Armazenamento Local (`localStorage`):** Qualquer alteração feita no painel admin fica salva no navegador.
2. **Exportação & Importação de Backup (`.json`):** Permite baixar e carregar um arquivo de backup com todas as suas personalizações.
3. **Exportador de Código para GitHub:** No painel admin, você pode clicar em **"Copiar Código para o script.js"**. Ao substituir o trecho inicial do `script.js` e subir para o GitHub, as alterações passam a valer **para todos os visitantes de forma definitiva**.

## 📁 Arquivos do Projeto
- `index.html` - Estrutura principal com modal administrativo.
- `style.css` - Estilos e responsividade.
- `script.js` - Lógica dos serviços, painel admin, backup e persistência de dados.
- `README.md` - Instruções do projeto.
