export function decideCorrectImage() {
    // determine which image is the real person based on which one is sourced from the real-person api
    // 0 is left image, 1 is right image
    return 0
}

export function points(x) {
    return x === decideCorrectImage() ? true : false;
}
