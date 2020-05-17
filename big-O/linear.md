## Big-O Notation of *O(n)*

**O(n)** can be described as an alorithm that runs linearly. In other terms, it grows linear in proportion to the size of the input. A for loop is a great example of a linear run time.

> Note: Mapping over an array, filtering, cloning, or running a for each on an array is considered to be **O(n)** runtime

### Example

```golang
func print(array){
    for _, i in range array {
        fmt.printf("Item: %s", i)
    }
}
```