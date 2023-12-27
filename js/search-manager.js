function initialize() {
    const SEARCH_INPUT = document.getElementById('search');
    const SEARCH_TOGGLE = document.getElementById('len'); // Asegúrate de que este es el ID correcto de tu botón de búsqueda.
    window.originalBodyHtml = document.body.innerHTML; // Guardar el contenido original del cuerpo

    if (SEARCH_INPUT) {
        SEARCH_INPUT.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevenir la recarga de la página
                liveSearch();
            }
        });
    }

    if (SEARCH_TOGGLE) {
        SEARCH_TOGGLE.addEventListener('click', toggleSearch);
    }

    // Evento para cerrar el menú y terminar la búsqueda al hacer clic fuera del campo de búsqueda.
    document.addEventListener('click', function(event) {
        const LEN_MENU = document.getElementById('len-menu');
        const isClickInsideSearch = SEARCH_TOGGLE.contains(event.target) || SEARCH_INPUT.contains(event.target);

        if (LEN_MENU && !isClickInsideSearch && LEN_MENU.style.visibility === 'visible') {
            LEN_MENU.style.visibility = 'hidden';
            removeHighlights();
        }
    });
}

function toggleSearch(event) {
    const LEN_MENU = document.getElementById('len-menu');
    if (LEN_MENU) {
        LEN_MENU.style.visibility = (LEN_MENU.style.visibility === 'visible') ? 'hidden' : 'visible';
        if (LEN_MENU.style.visibility === 'visible') {
            document.getElementById('search').focus();
        } else {
            removeHighlights();
        }
        event.stopPropagation(); // Prevenir que el evento se propague al documento.
    }
}

function liveSearch() {
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.trim().toLowerCase();

    // Elimina los resaltados anteriores.
    removeHighlights();

    if (searchValue !== '') {
        // Encuentra todos los nodos de texto en el documento.
        const textNodes = findTextNodes(document.body);
        textNodes.forEach(node => {
            highlightText(node, searchValue);
        });
    }
}

function removeHighlights() {
    const highlights = document.querySelectorAll('span.highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize(); // Combina los nodos de texto adyacentes si es posible.
    });
}

function findTextNodes(element) {
    let textNodes = [];
    walkTheDOM(element, function(node) {
        if (node.nodeType === 3) { // Node.TEXT_NODE
            textNodes.push(node);
        }
    });
    return textNodes;
}

function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

function highlightText(node, searchValue) {
    const nodeValue = node.nodeValue;
    const searchRegExp = new RegExp(searchValue, 'gi');
    
    if (nodeValue.match(searchRegExp)) {
        const matches = nodeValue.match(searchRegExp);
        const parent = node.parentNode;
        const docFragment = document.createDocumentFragment();
        
        let start = 0;
        matches.forEach(match => {
            const indexOfMatch = nodeValue.indexOf(match, start);
            const beforeMatch = document.createTextNode(nodeValue.slice(start, indexOfMatch));
            const highlightedMatch = document.createElement('span');
            highlightedMatch.className = 'highlight';
            highlightedMatch.textContent = match;

            docFragment.appendChild(beforeMatch);
            docFragment.appendChild(highlightedMatch);

            start = indexOfMatch + match.length;
        });

        // Agregar el texto restante después de la última coincidencia
        const afterLastMatch = document.createTextNode(nodeValue.slice(start));
        docFragment.appendChild(afterLastMatch);

        // Reemplazar el nodo original con el fragmento de documento que contiene el texto resaltado
        parent.replaceChild(docFragment, node);
    }
}

// Añadir estilos para la clase 'highlight'.
const css = `.highlight { background-color: yellow; }`;
const style = document.createElement('style');
document.head.appendChild(style);
style.appendChild(document.createTextNode(css));

// Inicializar todo al cargar la página.
window.onload = initialize;
