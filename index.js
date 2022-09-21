// API KEY : 0621e7a5b02c4c51988e56bac69f0da3

let source = "BBC"
let newsCard = document.getElementById("card");
async function getData() {
    document.getElementById("loader").style.display = "block"
    const data = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0621e7a5b02c4c51988e56bac69f0da3");
    const returnResponse = await data.json()
    return returnResponse;
}
getData().then((result) => {
    document.getElementById("loader").style.display = "none"
    document.getElementById("maincode").style.display = "block"
    let arcticles = (result.articles);
    let newsHTML = "";
    arcticles.forEach(element => {
        console.log(element["title"])
        newsDOM = `
        <div class="card" style="width: 300px;height: 450px;margin-top:20px;">
        <img src="${element["urlToImage"]}" class="card-img-top" alt="" id="img">
            <div class="card-body">
                <p class="card-title" style="font-weight: bolder;height:50px;overflow:hidden;">${element["title"]}</p>
                <hr>
                <p class="card-text" style="height:120px;overflow:hidden;">${element["description"]}</p>
                <a href="${element["url"]}" class="btn btn-primary" id="linkReadMore" target="_blank">Read more...</a>
                </div>
                </div>
                `
        newsHTML += newsDOM;
    });
    newsCard.innerHTML = newsHTML;

}).catch((error) => {
    document.getElementById("loader").style.display = "none"
    console.log(error)
})

// CodingSpace For Bussiness


let newsCard_bussiness = document.getElementById("card_bussiness");
async function getDataBussiness() {
const data = await fetch("https://newsapi.org/v2/top-headlines?sources&country=us&category=business&apiKey=0621e7a5b02c4c51988e56bac69f0da3");
    const returnResponse = await data.json()
    return returnResponse;
}
getDataBussiness().then((result) => {
        let arcticles = (result.articles);
        let bussinessNewsHTML = "";
        arcticles.forEach(element => {
            console.log(element["title"])
            let bussinessNewsDOM = `
            <div class="card animate__fadeInUp" style="width: 300px;height: 450px;margin-top:20px;">
                <img src="${element["urlToImage"]}" class="card-img-top" alt="Error!" id="img">
            <div class="card-body">
                <p class="card-title" style="font-weight: bolder;height:50px;overflow:hidden;" >${element["title"]}</p>
                <hr>
                <p class="card-text" style="height:120px;overflow:hidden;">${element["description"]}</p>
                <a href="${element["url"]}" class="btn btn-primary" id="linkReadMore" target="_blank">Read more...</a>
            </div>
        </div>
        `


        bussinessNewsHTML += bussinessNewsDOM;
    });
    newsCard_bussiness.innerHTML = bussinessNewsHTML;

}).catch((error) => {
    console.log(error)
})



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}



//  Move to top query



let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




