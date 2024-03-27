while(true){
    if (controller.move()===false) {
        if(Math.random > .5) {
            controller.right();
        } else {
            controller.left();
        }
    }
    await sleep(200);
}