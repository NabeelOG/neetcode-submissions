func countPaths(grid [][]int) int {
	ROWS, COLS := len(grid), len(grid[0])

	var helper func([][]int, int, int, map[string]bool) int

	helper = func(grid [][]int, r, c int, visit map[string]bool) int {
		key := fmt.Sprintf("%d,%d", r, c)
		
		if(r<0 || c<0 || r==ROWS || c==COLS|| visit[key] || grid[r][c]==1) {
			return 0
		}

		if r==ROWS-1 && c==COLS-1 {
			return 1
		}

		visit[key] = true
		count := 0
		count += helper(grid, r+1, c, visit)
		count += helper(grid, r-1, c, visit)
		count += helper(grid, r, c+1, visit)
		count += helper(grid, r, c-1, visit)
		delete(visit, key)

		return count
	}

	return helper(grid, 0, 0, make(map[string]bool))
}
