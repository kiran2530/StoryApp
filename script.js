// let url1 = "https://shortstories-api.onrender.com/stories" // Stories array...
let url1 = "https://shortstories-api.onrender.com/"

async function getData() {
    let res = await fetch(url1)
    let k;
    console.log(res.status)
    k = res.json()
    return k;
}
const a = async()=> {
    let r = await getData();
    let data = r
    // console.log(data)
    let inHTML = ``;

        // console.log(data[i])
        let title = data.title ;
        let story = data.story ;
        let moral = data.moral ;
        inHTML += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title" style="text-align: center;"><b>${title}</b></h5>
                    <p class="card-text" id="storyDescription">${story}</p>
                    <p class="card-text"><h6><b>Moral :</b></h6> ${moral}</p>
                    </div>
                </div>
                </div>
            </div>
        `

    let storyInHTML = document.getElementById("story");
    storyInHTML.innerHTML = inHTML ;    
}

a();

speechbtn = document.getElementById("listen-btn");

function textToSpeech(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    utternance.pitch = 1;
    utternance.rate = 0.8;
    utternance.volume = 1;
    speechSynthesis.speak(utternance);
}

speechbtn.addEventListener("click", e=> {
     e.preventDefault();
     console.log(e);
    if(speechbtn.value === "listen") {
        speechbtn.value = "stop";
        speechbtn.innerHTML = `<b>Stop</b>`;
        const text = document.getElementById("storyDescription");
        console.log("kiran");
        if(text.innerHTML.story !== "") {
            textToSpeech(text.innerText);
        }
    }
    else if(speechbtn.value === "stop") {
        speechbtn.value = "listen";
        speechbtn.innerHTML = `<b>Listen Story</b>`;
        speechSynthesis.cancel();
    }
})

let nextbtn = document.getElementById("next-btn");
nextbtn.addEventListener("click", e=> {
    e.preventDefault();
    speechSynthesis.cancel();
    window.location.reload();
})