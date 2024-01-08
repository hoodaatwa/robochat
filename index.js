   function generateResponse() {

      const inputText = document.getElementById('textInput').value;

      const conversationContainer = document.getElementById('conversationContainer');



      // Display user message

      const userMessageSpan = document.createElement('span');

      userMessageSpan.className = 'userMessage';

      userMessageSpan.textContent = `${inputText}`;

      conversationContainer.appendChild(userMessageSpan);

      conversationContainer.appendChild(document.createElement('br'));



      // Send request to Robomatic AI API

      const url = 'https://robomatic-ai.p.rapidapi.com/api';

      const options = {

        method: 'POST',

        headers: {

          'content-type': 'application/x-www-form-urlencoded',

          'X-RapidAPI-Key': 'f6d359abd9msh0d72112f80f8236p1cdd07jsncc0c270b44c5',

          'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'

        },

        body: new URLSearchParams({

          in: inputText,

          op: 'in',

          cbot: '1',

          SessionID: 'RapidAPI1',

          cbid: '1',

          key: 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP',

          ChatSource: 'RapidAPI',

          duration: '1'

        })

      };



      fetch(url, options)

        .then(response => response.json())

        .then(data => {

          // Display bot message

          const botMessageSpan = document.createElement('span');

          botMessageSpan.className = 'botMessage';

          botMessageSpan.textContent = `${data.out}`;

          conversationContainer.appendChild(botMessageSpan);

          conversationContainer.appendChild(document.createElement('br'));



          // Clear the input field

          document.getElementById('textInput').value = '';

        })

        .catch(error => console.error('Error:', error));

    }
