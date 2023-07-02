






//Working on quotes api call==================>






// let quoteUrl = "https://bodybuilding-quotes1.p.rapidapi.com/random-quote";
// fetch(quoteUrl, {
// "method": "GET",
// "headers": {
// 	"x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
//     "x-rapidapi-key": "b46d90a1a5mshe27edfffcb45bb1p1e27c7jsn4edc4abafebf"
// }
// })
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res);
//     let quote = document.querySelector("#quote");
//     let value = res.quote;
//     quote.textContent = value;
// })





//Done with quotes api quotes api call==================>




// By Clicking static blog content==================>



// document.querySelector("#first-blog").addEventListener("click", ()=>{

//     window.open("https://blog.playo.co/humansofplayo-how-to-submit-a-story/" , '_blank');
// })

// document.querySelector("#sec-blog").addEventListener("click", ()=>{

//     window.open("https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/" , '_blank');

// })


// By Clicking static blog content End==================>





//Api call for Sports news content start==================>

// import appendNews from "../components/appendnews.js"
// import apiCall from "../components/apicall.js";

//    function fetchNews(){

//      //let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
//     //let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${apiKey_blog}`;
//     // let response = apiCall(bloglink);
//     // response.then((res)=>{
//     //     console.log(res.articles);
//     //     let appendlocation = document.querySelector(".dynamic-news");
//     //     appendNews(res.articles, appendlocation);

//     // })
//     // .catch((e)=>{
//     //     console.log(e);
//     // })

//     }



//Edit 
//     async function fetchNews(){
//         let apiKey_blog = "pub_2558324319f0995a011f32adcac1c2024b640";
//         let location = document.querySelector(".dynamic-news");

//         let q = document.querySelector("#search").value;
//         try {
//             let bloglink = await fetch (`https://newsdata.io/api/1/news?apikey=${apiKey_blog}&q=india`);
//             let data = await bloglink.json();
//             console.log(bloglink);
//             appendNews(bloglink.results, location);

//         } catch (error) {
//             console.log(error)
//         }
//    }

// fetchNews()







// Api call for Sports news content end==================>


//Api call for health news start==================>

// document.querySelector("#health-news").addEventListener("click", ()=>{
//     console.log("Test")

//     document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
//     document.querySelector("#sports-news").style.borderBottom = "none";
//     document.querySelector("#health-news").style.backgroundColor = "white";
//     document.querySelector("#health-news").style.borderBottom = "3px solid #548A2F"




//     let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
//     let bloglink_health = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=12&apiKey=${process.env.BLOG_API_KEY}`;

//     fetch(bloglink_health)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((res)=>{
//         let appendlocation = document.querySelector(".dynamic-news");
//         appendNews(res.articles, appendlocation);
//     })
//     .catch((e)=>{
//         console.log(e);

//     })

// })



//Api call for health news End ========================>



//If user click one sports button start ========================>

// document.querySelector("#sports-news").addEventListener("click", ()=>{

//     document.querySelector("#sports-news").style.backgroundColor = "white";
//     document.querySelector("#sports-news").style.borderBottom = "3px solid #548A2F"
//     document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
//     document.querySelector("#health-news").style.borderBottom = "none";

//     //Api work ==>
//     let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
//     let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${process.env.BLOG_API_KEY}`;
//     fetch(bloglink)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((res)=>{
//         let appendlocation = document.querySelector(".dynamic-news");
//         appendNews(res.articles, appendlocation);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })

//     fetchNews()

// })


//If user click one sports button end==========================>


//Search Feature in news api start================================>


// document.querySelector("#search").addEventListener('keypress' , (event)=>{
//     //console.log(event);
//     let value = document.querySelector("#search").value;

//     if(value == "" || value == undefined || value == null){
//         fetchNews()
//         return false;
//     }

//     if(event.key == "Enter"){


//     //code for search feature
//     //https://newsapi.org/v2/everything?q=Apple&from=2022-01-18&sortBy=popularity&apiKey=API_KEY

//     console.log("test")
//     let search_key = "b140754e118c4b63a8e580772d4446a1";
//     let search_link = `https://newsapi.org/v2/everything?q=${value}&from=2022-01-18&sortBy=popularity&pageSize=10&language=en&apiKey=${process.env.BLOG_API_KEY}`;


//     fetch(search_link)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((res)=>{
//         let appendlocation = document.querySelector(".dynamic-news");
//         appendNews(res.articles, appendlocation);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })

//     console.log("Test")

//     }

// });










//Search Feature in news api End================================>

import appendNews from "../components/appendnews.js"

let apiKey_blog = "ddfff2ceaa66469896693c35ecc60747";
let location = document.querySelector(".dynamic-news");


document.getElementById("search").addEventListener("keyup", () => {
    debounce(debouncefetch);
});



let id;
let debounce = (deb) => {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        deb();
    }, 400);
};

let Page = 1;
let totalpages;



var next = document.getElementById("next")
next.addEventListener("click", Next)

var previous = document.getElementById("previous")
previous.addEventListener("click", Previous)


let fetchSport = async () => {
    try {
        if (Page == 1) {
            previous.disabled = true;
        } else {
            previous.disabled = false;
        }

        if (Page == totalpages) {
            next.disabled = true;
        } else {
            next.disabled = false;
        }

        let response = await fetch(
            `https://newsapi.org/v2/everything?q=Sports&sortBy=popularity&page=${Page}&pageSize=6&language=en&apiKey=${apiKey_blog}`
        );

        let data = await response.json();
        totalpages = Math.ceil(data.length / 5);
        document.getElementById("pagecount").textContent = Page;

        appendNews(data.articles, location);
    } catch (error) {
        console.log(error);
        var errorElement = document.createElement("h1");
        errorElement.textContent = "Result Not Found!";
        location.append(errorElement);
    }
};
fetchSport()


async function debouncefetch() {
    let q = document.getElementById("search").value;
    try {
        if (Page == 1) {
            previous.disabled = true;
        } else {
            previous.disabled = false;
        }

        if (Page == totalpages) {
            next.disabled = true;
        } else {
            next.disabled = false;
        }

        let response = await fetch(
            `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&page=${Page}&pageSize=6&language=en&apiKey=${apiKey_blog}`
        );

        let data = await response.json();
        totalpages = Math.ceil(data.length / 5);
        document.getElementById("pagecount").textContent = Page;

        appendNews(data.articles, location);
    } catch (error) {
        console.log(error);
        var errorElement = document.createElement("h1");
        errorElement.textContent = "Result Not Found!";
        location.append(errorElement);
    }
};

document.getElementById("health").addEventListener("click", fetchHealth)
document.getElementById("sports").addEventListener("click", fetchSport)


function Previous() {
    if (Page == 1) {
        return;
    }
    Page--;
    debouncefetch();
    fetchSport()
    // fetchHealth()
    // F_Cricket_News()
    // F_Football_News()
    // F_Tennies_News()
}

function Next() {
    if (Page == totalpages) {
        return;
    }
    Page++;
    debouncefetch();
    fetchSport()
    // fetchHealth()
    // F_Cricket_News()
    // F_Football_News()
    // F_Tennies_News()
}



// async function fetchNews() {

//     try {
//         let bloglink = await fetch(`https://newsapi.org/v2/everything?q=sports&sortBy=popularity&page=${Page}&pageSize=5&language=en&apiKey=${apiKey_blog}`);
//         let data = await bloglink.json();
//         console.log(data.articles);

//         appendNews(data.articles);

//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchNews()










async function fetchHealth() {
    let q = document.getElementById("search").value;
    try {
        if (Page == 1) {
            previous.disabled = true;
        } else {
            previous.disabled = false;
        }

        if (Page == totalpages) {
            next.disabled = true;   
        } else {
            next.disabled = false;
        }

        let response = await fetch(
            `https://newsapi.org/v2/everything?q=Health&sortBy=popularity&page=${Page}&pageSize=6&language=en&apiKey=${apiKey_blog}`
        );

        let data = await response.json();
        totalpages = Math.ceil(data.length / 5);
        document.getElementById("pagecount").textContent = Page;

        appendNews(data.articles, location);
    } catch (error) {
        console.log(error);
        var errorElement = document.createElement("h1");
        errorElement.textContent = "Result Not Found!";
        location.append(errorElement);
    }
};


