let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(" "); // split story into array of single words
console.log(storyWords); // check array
console.log('Number of words is ' + storyWords.length); // check number of words

const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word)); // filter out unnecessaryWords
console.log('New number of words after filter is ' + betterWords.length); // check new number of words

// determine number of sentences by looking at each word increment sentence counter if there is punctuation on the word
let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

console.log('Number of sentences is ' + sentences); // check number of sentences

// recreate sentence without unnecessaryWords
console.log(betterWords.join(' '))
