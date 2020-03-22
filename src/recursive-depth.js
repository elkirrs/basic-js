module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                depth = Math.max(this.calculateDepth(element), depth);
            }
        });
        return ++depth;
    }
};