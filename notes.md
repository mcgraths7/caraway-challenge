Notes on Challenge 1

1. I initially tried making the animation using pseudo elements, but transitioning the pseudo element created a new stacking context, so it kept going in front of the button.

2. I ended up just using two separate absolutely positioned spans inside of a button tag and transitioning them when hovering over the button.
