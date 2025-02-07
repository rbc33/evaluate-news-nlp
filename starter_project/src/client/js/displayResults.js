const displayResults = (data) => {
    // Clear previous results
    const formResults = document.getElementById('results');

    formResults.innerHTML = '';

    for (const key in data) {
        if (key === 'sentiment_scores') {
            formResults.innerHTML += `<ul>${key}:</ul>`;
            for (const j in data[key]) {
                const score = data[key][j]; // Access the score for each sentiment
                formResults.innerHTML += `<li>   ${j}: ${score}</li>`;
            }
        } else {
            const value = data[key];
            formResults.innerHTML += `<p>${key}: ${value}</p>`;
        }
    }
}

export { displayResults }