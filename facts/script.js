// change the facts because theyre poopoo!!!!!111!!11!11!!!1!!!!1!111!!!!!1!1!!!!

var facts = [
  `The Shrek movie is vaguely based on the picture book "Shrek!", written by William Steig and published in 1990. Rights for the book were purchased by Steven Spielberg in 1991.`,
  `Shrek was originally going to be traditionally animated, as in 2D drawings.`,
//`Shrek was brought to DreamWorks in 1994`,
  `Movie development started in 1995, after DreamWorks bought the rights from Steven Speilberg`,
  `Chris Farley was going to play Shrek, but he died in 1997 before he finished recording his parts.`,
  `Shrek was going to be motion capture, where actors have sensors that turn their movement into 3D animation, but it didn't work out.`, 
//`Pacific Data Images (bought in 2000 by Dreamworks) did the animation`,
  `The Shrek movie premiered at Mann Village Theatre in Westwood, Los Angeles, California.`,
  `Mike Myers not only voices Shrek, but one of the blind mice too.`,
  `The old woman that owned Donkey was Kathleen Freeman's last role before she died.`,
  `Nicolas Cage turned down the Shrek role because of "how children are going to see [him]". What a loser.`,
  `Shrek's swamp was inspired by a magnolia plantation in Charleston, South Carolina.`,
  `Mike Myers actually has a Canadian accent, but for Shrek's voice he faked a Scottish one.`,
  `An earlier voice actor for Princess Fiona, Janeane Garofalo, was fired. Nobody knows why...`,
  `When people failed their work in one project, most notably The Prince of Egypt, they were "shreked", sent to work on Shrek. Despite Shrek's superiority, this was also referred to as going to the Gulag.`,
  `Goldilocks and Sleeping Beauty were originally going to be in the movie.`,
];

function newFact() {
  let n = Math.random() * facts.length;
  n = Math.floor(n);
  document.getElementById('factText').innerText = facts[n];
};

newFact();
