// Grab the name

let searchbox = document.querySelector("input");

let btn = document.querySelector("#submit");

searchbox.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        tellPersonality();
    }
});

btn.addEventListener('click', () => {
    tellPersonality();
});

let programmer = "Sushan";

let niceStuff = Array(
    "Good Person",
    "Disiplined",
    "Good Programmer",
    "Genius",
);

let lalooStuff = Array(
    "Stupid",
    "Lalooo",
    "Shitty",
    "Cry Baby",
    "Dumb",
);

function tellPersonality() {
    let name = searchbox.value.split(" ")[0];
    let personality = getPersonality(name);
    render(name, personality);
    searchbox.value = "";
}

function getPersonality(name) {
    // Check if the name is of programmer
    if (name.toLowerCase().startsWith(programmer.toLowerCase())) {
        // If True Select the nice stuff
        return selectRandom(niceStuff);
    } else {
        // If False Select the laloo stuff
        return selectRandom(lalooStuff);
    }
}

function selectRandom(arr) {
    let r = Math.floor(Math.random() * 100);
    let reqIndex = r % arr.length;
    return arr[reqIndex];
}

// Display the results
function render(name, personality) {
    // <div class="results">
    //     <header>The Personality <span>God</span> Says :</header>
    //     <h2 id="saying">"Sushan is Genius"</h1>
    // </div>

    let results = document.querySelector(".results");

    let header = document.createElement("header");
    header.innerHTML = "The Personality <span>God</span> Says :";

    let h2 = document.createElement("h2");
    h2.id = "saying";
    h2.innerHTML = name + " is " + personality;

    results.innerHTML = "";

    results.appendChild(header);
    results.appendChild(h2);
}