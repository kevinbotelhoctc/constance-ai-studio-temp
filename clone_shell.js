const fs = require('fs');

const homeHTML = fs.readFileSync('home.html', 'utf8');
let criarPostHTML = fs.readFileSync('criar-post.html', 'utf8');

// Extrair a sidebar do home.html
const asideMatch = homeHTML.match(/(<aside[\\s\\S]*?<\\/aside >) /);
const exactAside = asideMatch[1];

// Extrair o header do home.html
const headerMatch = homeHTML.match(/(<header[\\s\\S]*?<\\/header >) /);
const exactHeader = headerMatch[1];

// O corpo do home.html
const bodyClassMatch = homeHTML.match(/<body class="([^"]+)">/);
const homeBodyClass = bodyClassMatch[1];

// No criar-post, capturamos o conteúdo de <main> para preservar os cards intactos
const mainContentMatch = criarPostHTML.match(/<main[^>]*>([\\s\\S]*?)<\\/main >/);
const exactMainContent = mainContentMatch[1];

// O tailwind config
const tailwindConfigMatch = homeHTML.match(/(<script>\\s*tailwind\\.config[\\s\\S]*?<\\/script >) /);
let configStr = "";
if (tailwindConfigMatch) {
    configStr = tailwindConfigMatch[1];
}

// Substituir as configs do tailwind no head
criarPostHTML = criarPostHTML.replace(/<script>\\s*tailwind\\.config[\\s\\S]*?<\\/script >/, configStr);

// Construir o novo body
const newBody = `
<body class="${homeBodyClass}">
    ${exactAside}
    <div class="flex-1 ml-64 transition-all duration-300 flex flex-col min-h-screen">
        ${exactHeader}
        <main class="flex-1 w-full max-w-7xl mx-auto px-6 py-8 space-y-8">
            ${exactMainContent}
        </main>
    </div>
    <script src="nav.js"></script>
</body>`;

// Substituir do <body> ao </body>
let updatedCriarPost = criarPostHTML.replace(/<body[\\s\\S]*?<\\/body >/, newBody);

// Apenas uma injeção rápida pra certificar que o nav vai mostrar como ativo o item "Criar Post" e não "Meus Posts"
// Na string \`${exactAside}\`, todos estão apenas com padding... Mas nav.js cuida de aplicar o rosa baseado no location. Modificaremos nav.js depois se necessário.

fs.writeFileSync('criar-post.html', updatedCriarPost);
console.log('Sidebar e Header clonados via script!');
