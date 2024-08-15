function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    } else {
        return '#'.repeat(cc.length - 4) + cc.slice(-4);
    }
}


console.log(maskify(1524255859555))