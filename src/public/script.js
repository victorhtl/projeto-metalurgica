function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return date.toLocaleDateString('pt-BR');
}

async function fetchData(url, elementId, type) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = data.map(item => {
            if (type === 'tickets') {
                return `
                    <li>
                        <div>
                            <strong>${formatCurrency(item.value)}</strong> - ${formatDate(item.date)}<br>
                            <small>Cód. ${item.barcode}</small>
                        </div>
                        <div>
                            <button class="copy-btn" onclick="copyToClipboard('${item.barcode}')">Copiar</button>
                            <button onclick="deleteItem('${url}/${item.id}', '${elementId}', '${type}')">Excluir</button>
                        </div>
                    </li>
                `;
            } else {
                return `
                    <li>
                        <div>
                            <strong>${formatCurrency(item.value)}</strong> - ${item.short_description}
                        </div>
                        <div>
                            <button class="details-btn" onclick="window.location.href='/budget/${item.id}'">Detalhes</button>
                            <button onclick="deleteItem('${url}/${item.id}', '${elementId}', '${type}')">Excluir</button>
                        </div>
                    </li>
                `;
            }
        }).join('');
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

async function deleteItem(url, elementId, type) {
    try {
        await fetch(url, { method: 'DELETE' });
        fetchData(`/${type}`, elementId, type);
    } catch (error) {
        console.error("Erro ao deletar item:", error);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Código de barras copiado!");
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}

fetchData('/tickets', 'ticket-list', 'tickets');
fetchData('/budgets', 'budget-list', 'budgets');