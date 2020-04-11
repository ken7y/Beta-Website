# Java

#### handy tips in general
**Int to String:**
 <br>
String str1 = Integer.toString(a); 

**String to Int:**<br>
int i = Integer.parseInt(myString);

**Split string into array:**<br>
String[] parts = string.split("-");

**Arraylist** <br>
ArrayList<String> cars = new ArrayList<String>();
.add()
.size()
.contains()

**split int into individual numbers**
<br>
print(num % 10)
<br>
num = num / 10


**Loop through array:** <br>
for (int i = 0; i<arr.length; i++)


**HashSet contains only unique vals**
<br>
Set<Integer> unique_num = new HashSet<Integer>();
<br>
Hashset.add returns a bool so if the set contains the val, it returns false



# Questions #

### List of numbers, all contain duplicates except one number. Find that one
e.g [2,2,1] you return 1. [4,1,2,1,2] you return 4

One solution, hash table and check final key o(n) time o(n) space or XOR val ^= arr[i] or val = val ^ arr[i]

### Max Subarray 
Input [-2,1,-3,4,-1,2,1,-5,4] <br>
Output 6 <br>
[4,-1,2,1] add up to 6 <br> 
**Kadanes Algorithm**  <br>
loop through the array and check if the sum of the sub array + current value is larger than the current value. <br>
You take the largest value and store it in a variable <br> 
```
    int sum = nums[0];
    int max = nums[0];
    for (int i = 1; i < nums.length; i++ ) { 
        sum += nums[i];
        if(nums[i] > sum) { 
            sum = nums[i];
        }
        
        if(sum > max) { 
        max = sum;
        }
    }
```


### Move Zeros in Array 
Input: [0,1,0,3,12] <br> Output: [1,3,12,0,0]

**Solution 1**

Iterate through and count the zeros <br> Iterate again and add all non zeros to stack <br> popstack and add 0 to end of array


**Solution 2**
Two pointers
<br> For loop through the array but have a pointer or an "k" that doesn't increment ever loop only on values that are not 0 
You update the arr[k] to be the arr[i](loop counter) so you'll definately end up with dupes/ a messy array<br>

When the for loop finishes, everything after arr[k] is set to 0