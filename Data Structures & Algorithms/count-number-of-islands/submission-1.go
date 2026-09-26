func numIslands(grid [][]byte) int {
    ROWS, COLS := len(grid), len(grid[0])
	island := 0
	dirs := [][]int{{1,0},{-1,0},{0,1},{0,-1}}

	var dfs func(r, c int)

	dfs = func(r, c int) {
		if r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c]=='0' {
			return
		}
		grid[r][c] = '0'
		for _, d := range dirs {
			dfs(r+d[0], c+d[1])
		}
	}

	for r := 0; r<ROWS; r++ {
		for c := 0; c<COLS; c++ {
			if grid[r][c]=='1' {
				dfs(r, c)
				island++
			}
		}
	}
	return island
}
