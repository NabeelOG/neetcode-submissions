func maxAreaOfIsland(grid [][]int) int {
    ROWS, COLS := len(grid), len(grid[0])
	max := 0
	directions := [][]int{{1,0}, {-1,0}, {0, 1}, {0, -1}}

	var dfs func(r, c int) int

	dfs = func(r, c int) int {
		if r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c]==0 {
			return 0
		}
		grid[r][c] = 0
		area := 1
		for _, d := range directions {
			area += dfs(r+d[0], c+d[1])
		}
		return area
	}


	for r := 0; r<ROWS; r++ {
		for c := 0; c<COLS; c++ {
			if grid[r][c] == 1 {
				res := dfs(r, c)
				max = maximum(max, res) 
			}
		}
	}
	return max
}

func maximum(a, b int) int {
	if a > b {
		return a
	}
	return b
}