class Cell {
	// Class for each element in the grid
	constructor() {
		// the value stored by each cell
		this.value = 0
	}

	show(y, x) {
		// displays every cell and it's value at the correct position
		push()
		translate(x * (width / 4), y * (width / 4))
		if (this.value == 0) {
			fill(200)
			rect(width / 80, width / 80, width * 18 / 80, width * 18 / 80)
		} else {
			let col = map(Math.log2(this.value), 1, 11, 100, 0)
			fill(col)
			rect(width / 80, width / 80, width * 18 / 80, width * 18 / 80)
			fill(255)
			text(this.value, 45, 70)
		}
		pop()
	}
}