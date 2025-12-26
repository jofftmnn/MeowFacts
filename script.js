 async function getFact() {
            const factBox = document.getElementById("fact");
            factBox.innerHTML = "Loading... 😺";

            try {
                const response = await fetch("https://meowfacts.herokuapp.com/");
                const data = await response.json();
                factBox.innerHTML = data.data[0];
            } catch (error) {
                factBox.innerHTML = "Failed to fetch fact 😿";
            }
        }