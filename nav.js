/**
 * Constance AI Studio — Navigation Controller
 * Handles all page navigation for the static prototype.
 */
(function () {
    'use strict';

    const page = location.pathname.split('/').pop() || 'index.html';

    // ── Navigation Maps ──
    const NAV = {
        // Franchisee sidebar icons → pages
        franchisee: {
            home: 'home.html',
            auto_awesome: 'criar-post.html',
            account_circle: 'perfil.html',
        },
        // Admin sidebar icons → pages
        admin: {
            assignment: 'admin.html',
            groups: '#',
            logout: 'index.html',
        },
    };

    // Detect page type
    const isAdmin = ['admin.html', 'revisao.html'].includes(page);
    const isAuth = ['index.html', 'solicitar-acesso.html', 'aguardando.html'].includes(page);
    const isFranchisee = !isAdmin && !isAuth;

    // ── Wire sidebar links ──
    if (!isAuth) {
        const sidebarLinks = document.querySelectorAll('aside a, aside button');
        const navMap = isAdmin ? NAV.admin : NAV.franchisee;

        sidebarLinks.forEach(function (el) {
            const icon = el.querySelector('.material-symbols-outlined');
            if (!icon) return;
            const iconName = icon.textContent.trim();

            // Map icon to destination
            let dest = null;

            if (isAdmin) {
                if (iconName === 'assignment') dest = 'admin.html';
                else if (iconName === 'groups') dest = '#';
                else if (iconName === 'logout') dest = 'index.html';
                else if (iconName === 'analytics') dest = '#';
            } else {
                if (iconName === 'home') dest = 'home.html';
                else if (iconName === 'auto_awesome') dest = 'criar-post.html';
                else if (iconName === 'account_circle') dest = 'perfil.html';
                else if (iconName === 'visibility') dest = 'preview.html';
                else if (iconName === 'logout') dest = 'index.html';
                else if (iconName === 'analytics') dest = '#';
                else if (iconName === 'calendar_month') dest = '#';
                else if (iconName === 'settings') dest = '#';
            }

            if (dest && dest !== '#') {
                el.style.cursor = 'pointer';
                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = dest;
                });
                if (el.tagName === 'A') el.href = dest;
            }

            // Aplicar estilo de aba ATIVA dinamicamente
            let isActive = false;
            if (page === 'home.html' && dest === 'home.html') isActive = true;
            if (page === 'criar-post.html' && dest === 'criar-post.html') isActive = true;
            if (page === 'preview.html' && dest === 'preview.html') isActive = true;
            if (page === 'perfil.html' && dest === 'perfil.html') isActive = true;

            if (isActive) {
                // Adiciona visual rosa marcado
                el.classList.remove('text-slate-400', 'hover:bg-primary/5', 'hover:text-primary');
                el.classList.add('bg-primary/10', 'text-primary');
                icon.classList.add('font-fill');
            } else {
                // Remove visual rosa e deixa cinza
                el.classList.remove('bg-primary/10', 'text-primary');
                if (dest !== 'index.html') {
                    // Cuidado pra não mexer em ícones sem link
                    el.classList.add('text-slate-400', 'hover:bg-primary/5', 'hover:text-primary');
                    icon.classList.remove('font-fill');
                }
            }
        });
    }

    // ── Login page ──
    if (page === 'index.html' || page === '') {
        // "Entrar" button → home.html
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                window.location.href = 'home.html';
            });
        }
        const enterBtn = document.querySelector('button[type="submit"]');
        if (enterBtn) {
            enterBtn.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'home.html';
            });
        }

        // "Solicitar acesso" link
        document.querySelectorAll('a').forEach(function (a) {
            if (a.textContent.trim().toLowerCase().includes('solicitar acesso')) {
                a.href = 'solicitar-acesso.html';
            }
        });

        // Add admin access link
        const disclaimer = document.querySelector('body > div:first-child') || document.querySelector('.w-full.max-w-\\[420px\\]');
        if (disclaimer) {
            const adminLink = document.createElement('a');
            adminLink.href = 'admin.html';
            adminLink.textContent = 'Acesso Admin';
            adminLink.className = 'fixed bottom-4 right-4 text-xs text-slate-300 hover:text-primary transition-colors opacity-50 hover:opacity-100';
            document.body.appendChild(adminLink);
        }
    }

    // ── Solicitar Acesso page ──
    if (page === 'solicitar-acesso.html') {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                window.location.href = 'aguardando.html';
            });
        }
        const submitBtn = document.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'aguardando.html';
            });
        }
        // "Fazer login" link
        document.querySelectorAll('a').forEach(function (a) {
            if (a.textContent.trim().toLowerCase().includes('fazer login') || a.textContent.trim().toLowerCase().includes('tenho acesso')) {
                a.href = 'index.html';
            }
        });
    }

    // ── Aguardando Aprovação page ──
    if (page === 'aguardando.html') {
        document.querySelectorAll('a').forEach(function (a) {
            if (a.textContent.trim().toLowerCase().includes('voltar') || a.textContent.trim().toLowerCase().includes('login')) {
                a.href = 'index.html';
            }
        });
    }

    // ── Criar Post page ──
    if (page === 'criar-post.html') {
        // "Gerar Post" button
        document.querySelectorAll('button').forEach(function (btn) {
            if (btn.textContent.trim().toLowerCase().includes('gerar post')) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = 'preview.html';
                });
            }
        });
    }

    // ── Preview page ──
    if (page === 'preview.html') {
        document.querySelectorAll('button').forEach(function (btn) {
            const text = btn.textContent.trim().toLowerCase();
            if (text.includes('enviar para aprovação') || text.includes('aprovação')) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = 'home.html';
                });
            }
            if (text.includes('gerar novamente')) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = 'criar-post.html';
                });
            }
        });
    }

    // ── Perfil page ──
    if (page === 'perfil.html') {
        document.querySelectorAll('button').forEach(function (btn) {
            if (btn.textContent.trim().toLowerCase().includes('sair')) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = 'index.html';
                });
            }
        });
    }

    // ── Admin page ──
    if (page === 'admin.html') {
        // Each queue card links to revisao.html
        const cards = document.querySelectorAll('main .bg-white, main .dark\\:bg-slate-800');
        cards.forEach(function (card) {
            if (card.querySelector('.material-symbols-outlined') &&
                (card.textContent.includes('Pendente') || card.textContent.includes('Constance'))) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', function () {
                    window.location.href = 'revisao.html';
                });
            }
        });

        // Chevron buttons
        document.querySelectorAll('button').forEach(function (btn) {
            const icon = btn.querySelector('.material-symbols-outlined');
            if (icon && icon.textContent.trim() === 'chevron_right') {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = 'revisao.html';
                });
            }
        });
    }

    // ── Revisão Admin page ──
    if (page === 'revisao.html') {
        // "Voltar para a Fila" link
        document.querySelectorAll('a').forEach(function (a) {
            if (a.textContent.trim().toLowerCase().includes('voltar')) {
                a.href = 'admin.html';
            }
        });

        // Approve/Reject → back to admin
        document.querySelectorAll('button').forEach(function (btn) {
            const text = btn.textContent.trim().toLowerCase();
            if (text.includes('aprovar') || text.includes('recusar')) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.location.href = 'admin.html';
                });
            }
        });
    }

    // ── Home page – "Ver Detalhes" and logout ──
    if (page === 'home.html') {
        // Logout button at bottom of sidebar
        document.querySelectorAll('aside button').forEach(function (btn) {
            const icon = btn.querySelector('.material-symbols-outlined');
            if (icon && icon.textContent.trim() === 'logout') {
                btn.addEventListener('click', function () {
                    window.location.href = 'index.html';
                });
            }
        });
    }

})();
