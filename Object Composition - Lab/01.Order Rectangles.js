function solve(matrix){
    for (let i = 0; i < matrix.length; i++){
        matrix[i] = {
            width:matrix[i][0],
            heigth: matrix[i][1],
            area: (function() {
                return matrix[i][0] * matrix[i][1];
            }()),
            comapareTo: function (other) {
                let diff = other.area - this.area;
                return diff || other.width - this.width;
            }
        }
    }
}