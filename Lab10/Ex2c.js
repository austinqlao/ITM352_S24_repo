while(true){
    if (controller.move()===false) {
        if(Math.random > .5) {
            controller.rotate();
        }
        controller.rotate();
    }
    await sleep(200);
}