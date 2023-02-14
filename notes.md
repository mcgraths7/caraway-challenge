Notes on Challenge 1

1. I initially tried making the animation using pseudo elements, but transitioning the pseudo element created a new stacking context, so it kept going in front of the button. I ended up just having two spans inside the button which I translated on hover, which worked out nicely.

2. For the background, I just chose a nice shade of blue to show the white offset. I wanted to use the same bg color as the 2nd challenge, but it was hard to discern the white against the light background.

3. I ended up just using two separate absolutely positioned spans inside of a button tag and transitioning them when hovering over the button.

Notes on Challenge 2

1. I had some trouble getting the exact spacing, but I was trying to avoid using absolute values for anything besides the overall size of the card

Notes on Challenge 3

1. The structure of the response from AllBirds was not very conducive to some of the requirements for this challenge:

a. All of the variant data was stored in the title, so the optional challenge for a style selector was not possible, at least not without significant lift. I think what I could have done would be to iterate through the products in each category and group them, similar to the reduce function I used to group the products into categories in the first place.

2. It might be a knowledge gap on my part, but I wasn't able to remove the event listener from the imageRef that was powering the hover effect. I couldn't figure out how to find out whether it was getting cleaned up properly, as removing the listener threw an error (imageRef was null in the return statement from useEffect).

General notes:

1. I only really added React Helmet and React Spinners, as Helmet is pretty standard in the industry and setting document.title in an effect hook is a fairly ugly implementation in my opinion. Spinners was added because the time investment for a nice spinner effect was not worth the required effort it would take when the challenge was more focused on the actual content.

2. There are probably some date libraries out there that could solve a few of the problems I wrote manual solutions for, but Moment.js is no longer maintained, and they were rather simple problems to solve, so I did not see a reason to reach for any of them. Additionally, the same can be said for Lodash. I think Lodash is a fantastic resource and it removes a lot of pain from working with iterables, but I didn't see a reason to reach for it in this case.

3. The recommended time for the challenge was 2-4 hours. I didn't want to go too far over the time limit, so I wanted to put some additional notes about things I could have done but might have taken more time:

a. Spend more time fine tuning spacing and typography - To me, this is a try it until it feels right sort of thing, which designers have probably spent far more time mastering than I have. If there was a figma document to work off of, this would definitely look a lot closer to the image than it does.

b. Invest more time into designing my fetch request to be more resilient. I suspect in production we would be using something like Apollo or Gatsby's GraphQL API which exposes data, errors, and loading states out of the box, all of which would improve the resiliency and reliability of the requests.

c. Spend more time getting the whole thing to "fit" in with the rest of the site. Components look out of place when just dropped onto a blank canvas, so this seems more like a storybook implementation than an actual production ready component.

d. Improve reusability across the board. A lot of values are hard coded, but the challenge mentioned not to worry about responsiveness. I did include a little bit in my grid layout with auto-fill, which I think is a really powerful tool, but I do think some components should be able to slot in more easily into different places. The Animated Button for example is hard coded in size, and might benefit from something like a size or color property which would let the developer share behavior, but customize the look for different scenarios.
