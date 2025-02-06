

//abrir y cerrar el chat
const chatea = document.getElementById("chatea");
const abreChatBot = document.getElementById("abreChat");
const mensajeBienveni = document.getElementById("mensajeBienv");

function chatear(){
  if(chatea.style.display ==='none'){
    chatea.style.display = 'block';
    abreChatBot.style.display ='none';
    mensajeBienveni.style.display ='none';
  }else{
    chatea.style.display ='none';
    abreChatBot.style.display = 'block';
  }
};

abreChatBot.addEventListener('click',chatear());

//crear mensaje de bienvenida

function mensajeBienvenida(){
  const texto = document.getElementById('mensajeBienv');

  const titulo = document.createElement('p');
  titulo.innerHTML = 'Hola, cuéntame <br> ¿cómo puedo ayudarte?';

  texto.appendChild(titulo);
};


setTimeout(mensajeBienvenida, 5000);

//configuracion del chat



document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.getElementById("chat-container");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    
    //Simples respuestas automáticas del chatbot

    const responses = [
      {regex: /(hola|buenos días|buenas tardes)/g, respuesta:"¡Hola! ¿Cómo puedo ayudarte hoy?"},
      {regex: /(chao|hasta luego|no|eso es todo|ok|chao|gracias)/g, respuesta:"¡Hasta luego! ¡Que tengas un buen día!"},
      {regex: /(Terapia Fisica)/g, respuesta:"La terapia física integral se adapta a las necesidades específicas de cada paciente, ya sea para rehabilitación tras una lesión, tratamiento de enfermedades crónicas (como artritis o hernias de disco) o simplemente para mejorar el bienestar general."},
      {regex: /(Terapia Manual)/g, respuesta:"Tiene como objetivo principal aliviar el dolor, mejorar la movilidad, corregir desequilibrios musculares y restaurar el movimiento natural de las articulaciones y los tejidos blandos."},
      {regex: /(Terapia de Agentes Fisicos)/g, respuesta:"Estos agentes actúan sobre los tejidos y sistemas del cuerpo para aliviar el dolor, reducir la inflamación, mejorar la circulación, promover la regeneración de tejidos y restaurar la función física."},
      {regex: /(Ejercicios terapéuticos)/g, respuesta:"Los ejercicios terapéuticos son movimientos planificados y personalizados que se realizan con el objetivo de mejorar la fuerza, flexibilidad, equilibrio, coordinación y movilidad."},
      {regex: /(Rehabilitación Neurológica)/g, respuesta:"Tiene como objetivo mejorar la calidad de vida, recuperar habilidades motoras, sensoriales y cognitivas, y maximizar la funcionalidad e independencia del paciente."},
      {regex: /(quiero|necesito|quisiera|me gustaría|tengo|por favor|ayuda|cita|terapia|agendar|programar|averiguar)/g, respuesta:"con mucho gusto, registra tus datos en el formulario y en brevedad nos comunicaremos contigo."},
    ]



    // Función para agregar mensajes al chat
    const addMessage = (message, sender) => {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", sender);
      messageDiv.textContent = message;
      chatContainer.appendChild(messageDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight; // Desplazar hacia abajo
    };
  
    // Función para manejar el envío de mensajes
    const handleSend = () => {
      const message = userInput.value.trim().toLowerCase();
      if(message === "") return;
      addMessage(message, "user");
      for(const{ regex,respuesta} of responses){
        if (regex.test(message)) {
          setTimeout(() => addMessage(respuesta, "bot"), 500); // Respuesta del bot
          userInput.value = ""; // Limpiar el input
          return;
      }
      }
      setTimeout(()=> addMessage('Lo siento, no entiendo eso.'),500);
      userInput.value = "";
    };
 
    // Evento al hacer clic en el botón "Enviar"
    sendBtn.addEventListener("click", handleSend);
  
    // Evento para enviar al presionar "Enter"
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSend();
      }
    });
  });
 
