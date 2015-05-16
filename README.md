# Google CSE Arrows
Add "previous" and "next" arrows to your Google CSE search navigation.

Automatically adds "Previous" and "Next" links to your Google Custom Search Engine (CSE) search results.
When using Custom Search Element API version 2. For version 1 there is a better solution, but the version 1 API is
deprecated by Google.

The script is small and easy to use: just add to your page with an existing Google CSE version 2 search element. 

It should work fine with any of the various Google CSE layouts and options.

Requires jQuery (any recent version).

The "Previous" and "Next" arrows are given class names of "gsc-cursor-prev" and "gsc-cursor-next", so you can use
CSS to style them as you like.

## How it Works
Uses the Mutation Observer API to watch a key Google CSE DOM element for changes. Once the element is changed, the
Observer is activated and can add "Previous" and "Next" arrows, as appropriate.


