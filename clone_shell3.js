const fs = require('fs');
try {
    const homeHTML = fs.readFileSync('home.html', 'utf8');
    let criarPostHTML = fs.readFileSync('criar-post.html', 'utf8');

    const asideMatch = homeHTML.match(/(<aside[\s\S]*?<\/aside>)/);
    if (!asideMatch) throw new Error("aside não encontrado em home");
    const exactAside = asideMatch[1];

    const headerMatch = homeHTML.match(/(<header[\s\S]*?<\/header>)/);
    if (!headerMatch) throw new Error("header não encontrado em home");
    const exactHeader = headerMatch[1];

    const bodyClassMatch = homeHTML.match(/<body[^>]*class="([^"]+)"[^>]*>/);
    if (!bodyClassMatch) throw new Error("body class não encontrado em home");
    const homeBodyClass = bodyClassMatch[1];

    const mainContentMatch = criarPostHTML.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    if (!mainContentMatch) throw new Error("main tag não encontrada em criar-post");
    const exactMainContent = mainContentMatch[1];

    const newBody = `<body class="${homeBodyClass}">
    ${exactAside}
    <div class="flex-1 ml-64 transition-all duration-300 flex flex-col min-h-screen">
        ${exactHeader}
        <main class="w-full max-w-7xl mx-auto px-6 py-8 space-y-8">
            ${exactMainContent}
        </main>
    </div>
    <script src="nav.js"></script>
</body>`;

    let updatedCriarPost = criarPostHTML.replace(/<body[\s\S]*?<\/body>/, newBody);

    fs.writeFileSync('criar-post.html', updatedCriarPost);
    console.log('Successfully injected exact sidebar and header!');
} catch (e) {
    console.error(e);
}
