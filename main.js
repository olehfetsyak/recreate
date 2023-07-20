window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrolled);

    if (scrolled >= 15) {
        document.getElementById('nav-bar').style.backgroundColor = 'rgb(36, 38, 38)';
    } else {
        document.getElementById('nav-bar').style.backgroundColor = 'transparent';
    };
});

//The button to activate the element that changes to the big screen
let details = document.getElementById('details');
let closeDetails = document.getElementById('close-details');

let detailsToggle = true;

function detailbtn() {
    details = document.getElementById('details').addEventListener('click', () => {
        details = document.getElementById('details').style.color = 'white';
        details = document.getElementById('details').style.width = '90vw';
        details = document.getElementById('details').style.height = '150vh';

        details = document.getElementById('details').style.top = '-35vh';
        details = document.getElementById('details').style.left = '1.6vw';
        details = document.getElementById('details').style.borderRadius = '0%';
        details = document.getElementById('details').style.zIndex = '200';
        details = document.getElementById('details').style.cursor = 'auto';
        closeDetails = document.getElementById('close-details').innerHTML = 'x';
        closeDetails = document.getElementById('close-details').style.color = 'white';
        closeDetails = document.getElementById('close-details').style.width = '3vw';
        closeDetails = document.getElementById('close-details').style.height = '4vh';
        closeDetails = document.getElementById('close-details').style.top = '-34vh';
        closeDetails = document.getElementById('close-details').style.left = '87vw';
        closeDetails = document.getElementById('close-details').style.zIndex = '500';
        closeDetails = document.getElementById('close-details').style.position = 'absolute';

        details = document.getElementById('details').style.border = '2px solid transparent';
        details = document.getElementById('details').style.backgroundColor = 'orange';
        details = document.getElementById('details').style.position = 'absolute';
    });
    closeDetails = document.getElementById('close-details').addEventListener('click', () => {
        details = document.getElementById('details').style.color = 'white';
        details = document.getElementById('details').style.width = '7.5vw';
        details = document.getElementById('details').style.height = '6vh';

        details = document.getElementById('details').style.top = '-4.9vh';
        details = document.getElementById('details').style.left = '0vw';
        details = document.getElementById('details').style.borderRadius = '5%';
        details = document.getElementById('details').style.zIndex = '0';
        details = document.getElementById('details').style.cursor = 'pointer';
        closeDetails = document.getElementById('close-details').innerHTML = '';
        closeDetails = document.getElementById('close-details').style.color = 'transparent';
        closeDetails = document.getElementById('close-details').style.width = '0vw';
        closeDetails = document.getElementById('close-details').style.height = '0vh';
        closeDetails = document.getElementById('close-details').style.zIndex = '500';
        closeDetails = document.getElementById('close-details').style.position = '';

        details = document.getElementById('details').style.border = '2px solid white';
        details = document.getElementById('details').style.backgroundColor = 'transparent';
        details = document.getElementById('details').style.position = 'relative';
    });
};
detailbtn();
/*details = document.getElementById('details').addEventListener("click", () => {
    function checkButton() {
        if (detailsToggle === true) {
            details = document.getElementById('details').style.color = 'white';
            details = document.getElementById('details').style.width = '90vw';
            details = document.getElementById('details').style.height = '150vh';

            details = document.getElementById('details').style.top = '-35vh';
            details = document.getElementById('details').style.left = '1.6vw';
            details = document.getElementById('details').style.borderRadius = '0%';
            details = document.getElementById('details').style.zIndex = '200';

            details = document.getElementById('details').style.border = '2px solid black';
            details = document.getElementById('details').style.backgroundColor = 'black';
            details = document.getElementById('details').style.position = 'absolute';
            /*
            position: relative;
            top: -5vh;
            border: 2px solid white;
            background-color: transparent;
            color: white;
            border-radius: 5%;
            padding: 10px;
            font-size: 0.9vw;
            width: 7.5vw;
            height: 6vh;
            font-family: sans-serif;
            */
            /*console.log('The button has been clicked');
            detailsToggle = false;
        } else if (detailsToggle === false) {
            details = document.getElementById('details').style.color = 'white';
            details = document.getElementById('details').style.width = '7.5vw';
            details = document.getElementById('details').style.height = '6vh';

            details = document.getElementById('details').style.top = '-4.9vh';
            details = document.getElementById('details').style.left = '0vw';
            details = document.getElementById('details').style.borderRadius = '5%';
            details = document.getElementById('details').style.zIndex = '0';

            details = document.getElementById('details').style.border = '2px solid white';
            details = document.getElementById('details').style.backgroundColor = 'transparent';
            details = document.getElementById('details').style.position = 'relative';

            console.log('The button is not clicked');
            detailsToggle = true;
        }
    }
    checkButton();
});*/