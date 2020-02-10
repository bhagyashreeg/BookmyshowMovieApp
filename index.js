let originalMoviesList = [
    {
        name: "War Horse",
        url: "images/War_Horse.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "LaughTon ohara",
        url: "images/LaughTon_ ohara.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "Red Cliff",
        url: "images/Red_Cliff.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "How to train your dragon ",
        url: "images/How_to_train_your_dragon_3_4.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "Mr Bean",
        url: "images/Mr_Bean.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "Family",
        url: "images/Family.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "Panda",
        url: "images/Panda.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "Frozen",
        url: "images/Frozen.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "KGF",
        url: "images/KGF.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    },
    {
        name: "HouseFull 4", 
        url: "images/Housefull.jpg",
        tag: "lepsum lepsum lepsum lepsum"
    }
];

function onInputHandler() {
    let inputValue = document.getElementById("MOVIEINPUT").value;
    var searchTerm = inputValue;
    console.log(inputValue);
    let matchedTerms = [];
    searchTerm = searchTerm.toLowerCase();
    // -----------------ans1--------------------
    matchedTerms = originalMoviesList.filter(function(i) {
        return i.name.toLowerCase().indexOf(searchTerm) > -1;
    });
    appendMovies(matchedTerms);
};