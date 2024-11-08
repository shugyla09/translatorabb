function translate() {
    const abbreviations = {
        "КРИНЖ": "cringe (испанский стыд)",
        "ИЗИ": "easy",
        "ЗАДОНАТИТЬ": "to donate",
        "БФ": "best friend",
        "РОФЛ": "Rolling On The Floor Laughing (насмешка)",
        "ТРЕШ": "trash (про что-то очень плохое)",
        "ТОКСИК": "toxic (токсичный человек)",
        "ХЕЙТИТЬ": "to hate",
        "ФЛЕКСИТЬ": "to flex (выпендриваться)",
        "ЮЗАТЬ": "to use",
        "ЧЕКАТЬ": "to check",
        "ЧИЛИТЬ": "chill (расслабленный отдых)",
        "БАЙТИТЬ": "to bite (в точности копировать что-то чужое)",
        "КИКНУТЬ": "to kick (исключить откуда-то)",
        "ПРУФ": "proof",
        "ИМБА": "imbalance (выдающийся по характеристикам)"
    };

    const input = document.getElementById("abbreviation").value.toUpperCase(); // Пайдаланушы енгізген қысқарманы алу
    const result = abbreviations[input] || "Аударма табылмады"; // Аударма нәтижесін алу
    document.getElementById("result").textContent = '${input}: ${result};' // Нәтижені көрсету
}