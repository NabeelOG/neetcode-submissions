func floodFill(image [][]int, sr int, sc int, color int) [][]int {
    orig := image[sr][sc]
	if orig == color {
		return image
	}
	m, n := len(image), len(image[0])
	q := [][]int{{sr, sc}}
	image[sr][sc] = color
	dirs := [][]int{{1,0}, {-1,0}, {0,1}, {0,-1}}

	for len(q)>0 {
		cell := q[0]
		q = q[1:]
		r, c := cell[0], cell[1]
		for _, d := range dirs {
			nr, nc := r+d[0], c+d[1]
			if nr >= 0 && nc >= 0 && nr < m && nc < n && image[nr][nc] == orig {
				image[nr][nc] = color
				q = append(q, []int{nr, nc})
			}
		}
	}
	return image
}
