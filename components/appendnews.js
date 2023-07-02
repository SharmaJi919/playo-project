

function appendNews(data,location) {

    location.innerHTML = "";

    data.map((el) => {

        //Destructuring of object to get value
        let { title, description, urlToImage, url, source } = el;
        // let { title, description, url, urlToImage, publishedAt } = el;
        // if (title == null || description == null || image_url == null || source_id == null) {
        //     return false;
        // }

        //Creating elements
        let mainDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let d1 = document.createElement("div")
        let dateDiv = document.createElement("div");
        let titleDiv = document.createElement("h3");
        let descriptionDiv = document.createElement("div");

        //Set all value
        img.src = urlToImage;
        titleDiv.textContent = title;
        descriptionDiv.textContent = description;
        dateDiv.textContent = source.name;


        //Append Properly
        imgDiv.append(img);
        d1.append(dateDiv, titleDiv, descriptionDiv)
        mainDiv.append(imgDiv, d1);
        location.append(mainDiv);

        //Go to the news url 
        mainDiv.addEventListener("click", () => {
            window.open(url, '_blank');
        })

    })
}

    export default appendNews