 const specialDays = {
    "2024-09-15": {
        message: "Dia de la independencia!",
        image: "salvador.jpg"
    },
    "2024-10-1": {
        message: "Dia del niño!",
        image: "maxresdefault.jpg"
    },
    "2024-05-10": {
        message: "Dia de la madre!",
        image: "Día-de-la-Madre-2.jpg"
    },
    "2024-06-17": {
        message: "Dia del padre!",
        image: "hgythgyt.jpg"
    },
    "2024-06-22": {
        message: "Dia del maestro!",
        image: "maestro.png"
    },
    "2024-12-25": {
        message: "Navidad!",
        image: "navidad.jpg"
    },
    "2024-09-12": {
        message: "Dia del programador!",
        image: "programador.jpeg"
    },
    "2024-05-03": {
        message: "Dia de la cruz!",
        image: "cruzday.jpg"
    },
    "2024-03-24": {
        message: "Semana santa!",
        image: "holyweeek.jpg"
    },
    "2024-03-22": {
        message: "Dayris Birthday",
        image: "fofada.jpg"
    },
};

function checkDate() {
    const dateInput = document.getElementById("dateInput");
    const date = dateInput.value;
    const result = document.getElementById("result");
    const image = document.getElementById("image");

    if (specialDays[date]) {
        result.innerHTML = specialDays[date].message;
        image.src = specialDays[date].image;
        image.style.display = "block";
    } else {
        result.innerHTML = "Welcome!";
        image.style.display = "none";
    }
}