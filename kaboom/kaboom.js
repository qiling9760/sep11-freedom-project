// initialize kaboom context
kaboom();
//

// load a sprite from an image
loadSprite("amongUs", "sprites/amongUsRed.jpg")
//

// Walls to not let the sprite go out of the screen
add([
    pos(0, 0),
    rect(width(), 1),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])

add([
    pos(0, height()),
    rect(width(), 1),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])

add([
    pos(0, 0),
    rect(1, height()),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])

add([
    pos(width(), 0),
    rect(1, height()),
    outline(1),
    area(),
    body({ isStatic: true }),
    "wall"
])
//


// make a score
const catFood = add([
    text("Cat food: 0"),
    pos(24, 24),
    { value: 0 },
    z(2)
])
//


// game
function game () {
    // cat
    const amongUsRed = add([
        sprite("amongUs"),
        pos(100, 400),
        area(),
        scale(0.1),
        body(),
        z(1),
        offscreen({pause:false}),
        "cat"
    ]);
    //

    // dog
    var y = rand(height());
    const amongUsOrgange = add([
        sprite("amongUs"),
        pos(0, y),
        move(0,200),
        scale(0.05),
        area(),
        body(),
        color(170, 75, 25),
        z(1),
        "dog"
    ]);
    //

    // cat food
    const amongUsGreen = add([
        sprite("amongUs"),
        pos(650, 400),
        anchor("center"),
        scale(0.1),
        area(),
        body(),
        color(120, 175, 25),
        z(1),
        "food"
    ]);
    //

    // move cat
    onKeyDown("left", () => {
            amongUsRed.move(-500, 0)
    })
    onKeyDown("a", () => {
        amongUsRed.move(-500, 0)
    })
    onKeyDown("right", () => {
            amongUsRed.move(500, 0)
    })
    onKeyDown("d", () => {
            amongUsRed.move(500, 0)
    })
    onKeyDown("up",() => {
            amongUsRed.move(0, -500)
    })
    onKeyDown("w",() => {
            amongUsRed.move(0, -500)
    })
    onKeyDown("down",() => {
            amongUsRed.move(0, 500)
    })
    onKeyDown("s",() => {
        amongUsRed.move(0, 500)
    })
    //

    // collect cat food
    amongUsRed.onCollide("food",() => {
        destroyAll("food");
        catFood.value += 1;
        catFood.text = "Cat food:" + catFood.value;
        var x = rand(width());
        var y = rand(height());
        add([
            sprite("amongUs"),
            pos(x, y),
            scale(0.1),
            area(),
            body(),
            color(120, 175, 25),
            anchor("center"),
            z(1),
            "food"
        ]);
    })
    //

    // add dog every 10 second
    // var addDog = setTimeout(myFunction, 3000);
    // function myFunction(){
    //     var y = rand(height());
    //     amongUsOrgange
    // }
    // //

    // dog die when touch wall and respond again
    onCollide("wall","dog",() => {
        destroyAll("dog");
        var y = rand(height());
        add([
            sprite("amongUs"),
            pos(0, y),
            move(0,200),
            scale(0.05),
            area(),
            body(),
            color(170, 75, 25),
            z(1),
            "dog"
        ]);
    });
    //

    // dog steal food
    onCollide("dog","food",() => {
        destroyAll("food");
        catFood.value -= 1;
        catFood.text = "Cat food:" + catFood.value;
        var x = rand(width());
        var y = rand(height());
        add([
            sprite("amongUs"),
            pos(x, y),
            scale(0.1),
            area(),
            body(),
            color(120, 175, 25),
            anchor("center"),
            z(1),
            "food"
        ]);
    })
    //

    // rest game when cat touch dog
    amongUsRed.onCollide("dog",() => {
        destroyAll("cat");
        destroyAll("food");
        destroyAll("dog");
        // clearInterval(addDog);
        add([
            pos(100, 100),
            rect(200, 200),
            outline(1),
            area(),
            "button"
        ])
    })
    //

}
game()

// restart button
onClick("button", () => [
    destroyAll("button"),
    game()
])
//






