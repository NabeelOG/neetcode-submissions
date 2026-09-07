func majorityElement(nums []int) []int {
	n := len(nums)
	num1, num2, cnt1, cnt2 := 0, 0, 0, 0

	for _, num := range nums {
		if cnt1>0 && num == num1 {
			cnt1++
		} else if cnt2>0 && num == num2 {
			cnt2++
		} else if cnt1 == 0 {
			num1 = num
			cnt1 = 1
		} else if cnt2 == 0 {
			num2 = num
			cnt2 = 1
		} else {
			cnt1--
			cnt2--
		}
	}

	cnt1 = 0
	cnt2 = 0
	for _, num := range nums {
		if num==num1 {
			cnt1++
		} else if num==num2 {
			cnt2++
		}
	}

	res := []int{}
	threshold := n/3

	if cnt1>threshold {
		res = append(res, num1)
	}

	if cnt2>threshold {
		res = append(res, num2)
	}

	return res
}
