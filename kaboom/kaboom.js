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

const rightWall = add([
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
    pos(25, 25),
    { value: 0 },
    z(2)
])
//


// game
function game () {
    // variables
    var time = 60;
    //

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

    // Catnip


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
        localStorage.setItem("catFood", catFood.value);
        catFood.text = "Cat food:" + localStorage.getItem("catFood");
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

    // Add dog 2s
    var addDog = setInterval(function(){
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
    }, 2000);


    // dog die when touch wall and respond again
    rightWall.onCollide("dog",(dog) => {
        destroy(dog);
    });

    // dog steal food (still have use)
    onCollide("dog","food",() => {
        destroyAll("food");
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

    function resetGame () {
        destroyAll("cat");
        destroyAll("food");
        destroyAll("dog");
        add([
            pos(100, 100),
            rect(200, 200),
            outline(1),
            area(),
            "button"
        ])
    }

    // restart game in 60s
    const timer = add([
        text("Time: "),
        pos(width()-250, 25),
        z(2)
    ])
    var timeGo = setInterval(function(){
        time = time-1;
        timer.text = "Time: " + time;
    }, 1000);

    var endGame = setTimeout(myFunction, (time*1000));
    function myFunction(){
        clearInterval(timeGo);
        clearInterval(addDog);
        destroy(timer);
        resetGame ();
    }

    // rest game when cat touch dog
    amongUsRed.onCollide("dog",() => {
        clearTimeout(endGame);
        clearInterval(timeGo);
        clearInterval(addDog);
        destroy(timer);
        resetGame ();
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






