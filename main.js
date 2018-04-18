// Get the modal
var modalOne = document.getElementById('modal-one');
var modalTwo = document.getElementById('modal-two');
var modalThree = document.getElementById('modal-three');
var danceRevolutionGif = document.getElementById('dance-dance-revolution-gif');
var ntuMapsJpg = document.getElementById('ntu-maps-jpg');
var foodAwesomeJpg = document.getElementById('food-awesome-jpg');
// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("close")[1];
var spanThree = document.getElementsByClassName("close")[2];
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  // columnWidth: '30%'
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});
danceRevolutionGif.onclick = function(){
  modalOne.style.display = "block";
};
ntuMapsJpg.onclick = function(){
  modalTwo.style.display = "block";
};
foodAwesomeJpg.onclick = function(){
  modalThree.style.display = "block";
};
spanOne.onclick = function() {
    modalOne.style.display = "none";

};
spanTwo.onclick = function() {
    modalTwo.style.display = "none";

};
spanThree.onclick = function() {
    modalThree.style.display = "none";

};

window.onclick = function(event) {
    if (event.target == modalOne) {
        modalOne.style.display = "none";
    }
    if (event.target == modalTwo) {
        modalTwo.style.display = "none";
    }
    if (event.target == modalThree) {
        modalThree.style.display = "none";
    }
}
