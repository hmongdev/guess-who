//document.ready
$(ready);

//ready function
function ready() {
    appendDivs();
}

// On document load, append divs for each person in the people array (it comes from `data.js` file)
function appendDivs() {
    //appends the divs for each person

    //for loop
    for (let i = 0; i < people.length; i++) {
        //append to DOM
        $('body').append(
            `<img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"></img>`
        );
    }
}
