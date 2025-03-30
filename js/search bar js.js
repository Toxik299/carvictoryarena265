// Function to handle the search
function searchParts(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get user input
    let carModel = document.getElementById("car-model").value.trim().toLowerCase();
    let spareType = document.getElementById("spare-type").value.trim().toLowerCase();

    // Sample database (You can replace this with a real backend API)
    const sparePartsDatabase = [
        { car: "toyota", type: "brake pads", price: "$25.99", image: "https://via.placeholder.com/150" },
        { car: "honda", type: "oil filter", price: "$15.99", image: "https://via.placeholder.com/150" },
        { car: "ford", type: "car battery", price: "$89.99", image: "https://via.placeholder.com/150" },
        { car: "toyota", type: "headlights", price: "$49.99", image: "https://via.placeholder.com/150" },
        { car: "nissan", type: "engine oil", price: "$19.99", image: "https://via.placeholder.com/150" }
    ];

    // Filter results based on user input
    let results = sparePartsDatabase.filter(part => 
        part.car.includes(carModel) && part.type.includes(spareType)
    );

    // Display results
    let resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (results.length > 0) {
        results.forEach(part => {
            let resultItem = `
                <div class="card m-2" style="width: 18rem;">
                    <img src="${part.image}" class="card-img-top" alt="${part.type}">
                    <div class="card-body">
                        <h5 class="card-title">${part.type}</h5>
                        <p class="card-text">${part.car.toUpperCase()} - ${part.price}</p>
                        <button class="btn btn-dark">Buy Now</button>
                    </div>
                </div>
            `;
            resultsContainer.innerHTML += resultItem;
        });
    } else {
        resultsContainer.innerHTML = `<p class="text-danger">No matching spare parts found.</p>`;
    }
}
