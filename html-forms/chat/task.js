let chatWidgetSide = document.querySelector('.chat-widget__side-text');
let chatWidget = document.querySelector('.chat-widget');
let chatWidgetInput = document.getElementById('chat-widget__input');
let chatWidgetMessages = document.querySelector('.chat-widget__messages');
let chatWidgetContainer = document.querySelector('.chat-widget__messages-container');

function addActiveClassWidget() {
    chatWidget.classList.toggle('chat-widget_active');
}

chatWidgetSide.addEventListener('click', addActiveClassWidget);
chatWidgetInput.addEventListener('keydown', sendMessage);

let bot = [
  "Вы кто такие",
  "Я вас не звал!",
  "Идите...",
  "Ни кого тут нет",
  ]

function sendMessage(e) {
    if (e.key === 'Enter' && chatWidgetInput.value != '') {
        let time = new Date().toLocaleTimeString().slice(0, -3);
            chatWidgetMessages.innerHTML+=`
        <div class="message message_client">
          <div class="message__time">${time}</div>
      <div class="message__text">${chatWidgetInput.value}</div>
        </div>
      `;
      chatWidgetMessages.innerHTML+=`
          <div class="message">
            <div class="message__time">${time}</div>
        <div class="message__text">${bot[Math.floor(Math.random() * bot.length)]}</div>
          </div>
        `;
        chatWidgetInput.value = "";
        chatWidgetContainer.scrollTop = chatWidgetContainer.scrollHeight;
    }
}