TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(x){
    right(45);
    forward(x);
    right(110);
    forward(x);
    right(135);
    forward(x);
}

function shape(size, angle){
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
}
// Type your function call below



shape(25, 60);
shape(25, 60);
shape(30, 60);
shape(30, 60);
shape(35, 60);
shape(35, 60);
shape(40, 60);
shape(40, 60);