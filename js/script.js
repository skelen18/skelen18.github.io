<<<<<<< HEAD
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    // Čtení souboru pomocí FileReader
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        // Parsování JSON logů
        const logs = JSON.parse(e.target.result);
        const chatContainer = document.getElementById('chat-container');
        chatContainer.innerHTML = ''; // Vymazání starých zpráv, pokud jsou
  
        // Procházení každého logu
        logs.forEach(log => {
          const messageDiv = document.createElement('div');
          messageDiv.classList.add('message');
  
          // Formátování času
          const timestamp = new Date(log.Timestamp).toLocaleString();
  
          // HTML struktura pro zprávu
          let messageHTML = `
            <div class="message-header">
              <span class="username">User ${log.ID}</span>
              <span class="timestamp">${timestamp}</span>
            </div>
            <div class="message-content">${log.Contents || '(Žádný text)'}</div>
          `;
  
          // Pokud existuje příloha, přidám ji do zprávy
          if (log.Attachments) {
            messageHTML += `<img src="${log.Attachments}" alt="Příloha">`;
          }
  
          // Vložení zprávy do kontejneru
          messageDiv.innerHTML = messageHTML;
          chatContainer.appendChild(messageDiv);
        });
      } catch (error) {
        alert('Chyba při načítání souboru. Ujistěte se, že je to platný JSON soubor.');
      }
    };
    reader.readAsText(file);
  });
=======
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    // Čtení souboru pomocí FileReader
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        // Parsování JSON logů
        const logs = JSON.parse(e.target.result);
        const chatContainer = document.getElementById('chat-container');
        chatContainer.innerHTML = ''; // Vymazání starých zpráv, pokud jsou
  
        // Procházení každého logu
        logs.forEach(log => {
          const messageDiv = document.createElement('div');
          messageDiv.classList.add('message');
  
          // Formátování času
          const timestamp = new Date(log.Timestamp).toLocaleString();
  
          // HTML struktura pro zprávu
          let messageHTML = `
            <div class="message-header">
              <span class="username">User ${log.ID}</span>
              <span class="timestamp">${timestamp}</span>
            </div>
            <div class="message-content">${log.Contents || '(Žádný text)'}</div>
          `;
  
          // Pokud existuje příloha, přidáme ji do zprávy
          if (log.Attachments) {
            messageHTML += `<img src="${log.Attachments}" alt="Příloha">`;
          }
  
          // Vložení zprávy do kontejneru
          messageDiv.innerHTML = messageHTML;
          chatContainer.appendChild(messageDiv);
        });
      } catch (error) {
        alert('Chyba při načítání souboru. Ujistěte se, že je to platný JSON soubor.');
      }
    };
    reader.readAsText(file);
  });
>>>>>>> e7eddb2 (Initial upload)
  