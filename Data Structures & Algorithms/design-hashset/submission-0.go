type MyHashSet struct {
	data []int
}

func Constructor() MyHashSet {
    return MyHashSet{data: []int{}}
}

func (this *MyHashSet) Add(key int) {
    if !this.Contains(key) {
		this.data = append(this.data, key)
	}
}

func (this *MyHashSet) Remove(key int) {
    for i, v := range this.data {
		if v == key {
			this.data = append(this.data[:i], this.data[i+1:]...)
			return
		}
	}
}

func (this *MyHashSet) Contains(key int) bool {
    for _, v := range this.data {
		if v == key {
			return true
		}
	}
	return false
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(key);
 * obj.Remove(key);
 * param_3 := obj.Contains(key);
 */
 