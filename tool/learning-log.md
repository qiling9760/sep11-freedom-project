# Tool Learning Log

## Tool: **Kaboom**

## Project: **Collect Cat Food**

---

### X/X/XX:
- To set up Kaboom, copy the starter code for Kaboom in the `<script>` section.
``` JS
<script src="https://unpkg.com/kaboom@3000.0.1/dist/kaboom.js"></script>
<script>
// initialize kaboom context
kaboom();
</scirpt>
```

- Load a sprite from an image. The `amongUsRed` is the sprite name, the `sprites/amongUsRed.jpg` is the sprite image.
``` JS
loadSprite("amongUsRed", "sprites/amongUsRed.jpg");
```

- Make a variable for the sprite and give it properties.
- `add()` assemble a game object from a list of components.
- `sprite()` which sprite will this variable will be.
- `pos`() where this sprite show up. What goes inside the parenthesis is the `x-coordinate` and `y-coordinate`.
- `scale()` change the size of the variale.
- `"amongUs"` is a tag, it describe the behaviors for a group of objects. Multiple variables can have the same tag. A variable can have multiple tags. (I think it is like a class in CSS).
``` JS
const amongUsRed = add([
    sprite("amongUsRed"),
    pos(80, 40),
    scale(0.1),
    "amongUs"
)];
```
- `destory()` removes the game object. What goes inside the parenthesis is the game object name/variable. `destory(amongUsRed)`.
- `destoryAll()` removes all game object if nothing is specify in the parenthesis. If a tag is specify, then it removes all variables with that tag. `destoryAll("amongUs")`.
- `rotate()` rotate the variable. What goes inside the parenthesis is the degree. `0-360`.
- `color(#,#,#)` change the color of the variable, use `RGB`, `color(R, G, B)`.


### X/X/XX:
* Text


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
