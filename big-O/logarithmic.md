## Big-O Notation of *O(log(n))*

**O(log(n))** can be described as the runtime of an algorthm that is logarithmic in nature. The size of the problem decreases by half evertime it is run. 

### Example
Binary Search is a great representation of this.

```golang
func binarySearch(needle int, list []int) bool {
 
    low := 0
    high := len(list) - 1
 
    for low <= high{
        median := (low + high) / 2
 
        if list[median] < needle {
            low = median + 1
        }else{
            high = median - 1
        }
    } 
    if low == len(list) || list[low] != needle {
        return false
    }
    return true
}
```