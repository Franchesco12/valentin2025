import { useEffect } from "react";
import Swal from "sweetalert2";
import "./styles.css"; // Asegúrate de tener estilos románticos en tu CSS

let neCounter = 0;
const neMessages = [
    "😡 ¿Cómo que neeee?",
    "😠 Deja de poner ne XD",
    "😤 Dios mieee ya no pongas neeee",
    "😭 Esto ya no me está gustando",
    "😫 Muchos neeee",
    "😱 Dios mío, desaparecerá esta opción"
];

function handleNeClick() {
    if (neCounter < neMessages.length) {
        Swal.fire({
            title: "💔 Oh no...",
            text: neMessages[neCounter],
            icon: "warning",
            background: "#ffdde1", // Color romántico
            confirmButtonColor: "#ff4d6d", // Color rosado fuerte
            confirmButtonText: "Regresar 💘",
            customClass: {
                popup: "custom-popup"
            }
        });
        neCounter++;
    } else {
        document.getElementById("neButton").style.display = "none";
    }
}

function handleSiClick() {
    Swal.fire({
        title: "💖 ¡Síiii! 💖",
        text: "Me alegro mucho de que hayas aceptado ser mi San Valentín mi Mireyaaaa 🥰❤!!! Te amo muchooo ❤!!",
        icon: "success",
        background: "#ffe4e1", // Rosa claro
        confirmButtonColor: "#ff4d6d",
        confirmButtonText: "¡Yo también te amo! 💞",
        customClass: {
            popup: "custom-popup"
        }
    });
}

function createHearts() {
    const container = document.querySelector(".hearts-container");
    
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${3 + Math.random() * 2}s`;
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function App() {
    useEffect(() => {
        const interval = setInterval(createHearts, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hearts-container"></div>
            <div className="container">
                <h1 className="question">¿Quieres ser mi San Valentín mi Mireyaaaa? 😍❤️</h1>
                <button className="yes-button" onClick={handleSiClick}>Sí 💖</button>
                <button id="neButton" className="no-button" onClick={handleNeClick}>Ne 💔</button>
            </div>
        </>
    );
}

export default App;
