func isValidSudoku(board [][]byte) bool {
	for row := 0; row<9; row++ {
		seen := make(map[byte]bool)
		for i := 0; i<9; i++ {
			if board[row][i] == '.' {
				continue
			}
			if seen[board[row][i]] {
				return false
			}
			seen[board[row][i]] = true
		}
	}

	for col := 0; col<9; col++ {
		seen := make(map[byte]bool)
		for i := 0; i<9; i++ {
			if board[i][col] == '.' {
				continue
			}
			if seen[board[i][col]] {
				return false
			}
			seen[board[i][col]] = true
		}
	}

	for square := 0; square<3; square++ {
		seen := make(map[byte]bool)
		for i:=0; i<3; i++ {
			for j:=0; j<3; j++ {
				row := (square/3)*3+i
				col := (square%3)*3+j
				if board[row][col] == '.' {
					continue
				}
				if seen[board[row][col]] {
					return false
				}
				seen[board[row][col]] = true
			}
		}
	}
	return true
}
