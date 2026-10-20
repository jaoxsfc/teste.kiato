"use strict";

// Edite os links de cada unidade abaixo.
// Para ativar um botão pendente, substitua null pelo endereço entre aspas.
const unitChannelLinks = {
  fernandopolis: {
    name: "Fernandópolis",
    rodizio: "https://www.kiatosushibar.com.br/experiencia-kiato-unid1",
    alacarte: "https://www.kiatosushibar.com.br/cardapio-unid1",
    instagram: "https://www.instagram.com/kiatosushibar.fernandopolis/",
    facebook: "https://www.facebook.com/profile.php?id=100095199920755",
    whatsapp: "https://cutt.ly/YtvYudd",
  },
  "rio-preto": {
    name: "São José do Rio Preto",
    rodizio: "https://www.kiatosushibar.com.br/experiencia-kiato-unid2",
    alacarte: "https://www.kiatosushibar.com.br/cardapio-unid2",
    instagram: "https://www.instagram.com/kiatosushibar.sjriopreto/",
    facebook: "https://www.facebook.com/profile.php?id=61551837407990",
    whatsapp: "https://api.whatsapp.com/send?phone=5517996587864",
  },
  votuporanga: {
    name: "Votuporanga",
    rodizio: null,
    alacarte: null,
    instagram: "https://www.instagram.com/kiatosushibar.votuporanga/",
    facebook: "https://www.facebook.com/kiatosushibar.votuporanga",
    whatsapp: null,
  },
};

const unitChannelDefinitions = [
  {
    key: "rodizio",
    label: "Rodízio",
    description: "cardápio do rodízio",
    icon: '<circle cx="12" cy="12" r="6"/><path d="M3 3v6c0 2 3 2 3 0V3M4.5 3v18M21 3c-2 3-2 6 0 8v10M21 3v8"/>',
  },
  {
    key: "alacarte",
    label: "À la carte",
    description: "cardápio à la carte",
    icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/>',
  },
  {
    key: "instagram",
    label: "Instagram",
    description: "Instagram",
    icon: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',
  },
  {
    key: "facebook",
    label: "Facebook",
    description: "Facebook",
    icon: '<path d="M14 21v-8h3l.5-3H14V8c0-1 .5-2 2-2h1.5V3.2C17 3.1 16.1 3 15 3c-3 0-5 1.8-5 5v2H7v3h3v8" fill="currentColor" stroke="none"/>',
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    description: "WhatsApp",
    icon: '<path d="m3 21 1.6-5A9 9 0 1 1 8 20l-5 1Z"/><path d="M8 7c-.6 0-1 1-1 1.8 0 2.7 3.8 6.5 6.5 7 .8.2 2.5-.5 2.5-1.4v-.7l-2-1-1 1c-1.5-.7-2.8-2-3.5-3.5l1-1-1-2.2H8Z"/>',
  },
];

document.querySelectorAll("[data-unit-channels]").forEach((container) => {
  const unit = unitChannelLinks[container.dataset.unitChannels];
  if (!unit) return;

  const buttons = unitChannelDefinitions.map((channel) => {
    const destination = unit[channel.key];
    const button = document.createElement(destination ? "a" : "span");
    button.className = "unit-channel";

    if (destination) {
      button.href = destination;
      button.target = "_blank";
      button.rel = "noopener noreferrer";
      button.setAttribute("aria-label", `Abrir ${channel.description} do Kiato ${unit.name} (abre em nova aba)`);
    } else {
      button.classList.add("is-pending");
      button.setAttribute("role", "link");
      button.setAttribute("aria-disabled", "true");
      button.setAttribute("aria-label", `${channel.label} do Kiato ${unit.name}: link ainda não disponível`);
      button.title = "Link ainda não disponível";
    }

    const icon = document.createElement("span");
    icon.className = "unit-channel-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${channel.icon}</svg>`;

    const label = document.createElement("span");
    label.className = "unit-channel-label";
    label.textContent = channel.label;
    button.append(icon, label);
    return button;
  });

  container.replaceChildren(...buttons);
});
