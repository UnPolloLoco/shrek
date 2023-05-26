// change the facts because theyre poopoo!!!!!111!!11!11!!!1!!!!1!111!!!!!1!1!!!!

var facts = [
  `From the picture book Shrek! (1990) by William Steig (before DreamWorks was founded)`,
  `Rights for the book were purchased by Steven Spielberg in 1991`,
  `The movie was originally going to be traditionally animated (2D)`,
  `Shrek was brought to DreamWorks in 1994`,
  `Development started in 1995, after DreamWorks bought the rights from Steven Speilberg`,
  `Chris Farley was going to play Shrek, but he died in 1997 before he finished recording`,
  `Shrek was going to be motion capture, but it didn't work out`,
  `Pacific Data Images (bought in 2000 by Dreamworks) did the animation`,
  `Premiered at Mann Village Theatre in Westwood, Los Angeles, California`,
  `Mike Myers plays Shrek and one of the blind mice`,
  `The Old Woman that owned Donkey was Kathleen Freeman's last role before she died`,
  `Nicolas Cage turned down the Shrek role because of "...how children are going to see you..."`,
  `Shrek's swamp was inspired by a magnolia plantation in Charleston, South Carolina`,
  `Mike Myers actually has a Canadian accent, but for Shrek's voice he faked a Scottish one`,
  `An earlier voice actor for Princess Fiona, Janeane Garofalo, was fired and never told why`,
];

function newFact() {
  let n = Math.random() * facts.length;
  n = Math.floor(n);
  document.getElementById('factText').innerText = facts[n];
};
