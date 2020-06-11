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

**Split string to array of chars to sort** <br>
char[] cArray = str.toCharArray();
<br> Arrays.sort(cArray)


**Create a Hashmap** <Br>
HashMap<String, List<String>> capitals = new HashMap<String, List<String>>();
<br>
hash_map.values() will give all the values


**Instead of splitting a string into an array**<br>
    stringName.charAt(i) where you for loop with i


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


### Move Zeros to end of Array 
Input: [0,1,0,3,12] <br> Output: [1,3,12,0,0]

**Solution 1**

Iterate through and count the zeros <br> Iterate again and add all non zeros to stack <br> popstack and add 0 to end of array


**Solution 2**
Two pointers
<br> For loop through the array but have a pointer or an "k" that doesn't increment ever loop only on values that are not 0 
You update the arr[k] to be the arr[i](loop counter) so you'll definately end up with dupes/ a messy array<br>

When the for loop finishes, everything after arr[k] is set to 0

<br>
## Best time to buy stocks / valley peaks in array 

input [7,1,5,3,6,4] 
<br> output 7 
<br> Buy 1 sell 5 (+4) Buy 3 sell 6

Mathematically speaking <br>
**TotalProfit = ∑(Height(Peak) - Height(Valley))**

```
    public int maxProfit(int[] prices) {
        int i = 0;
        int valley = prices[0];
        int peak = prices[0];
        int maxprofit = 0;
        int maxlen = prices.length - 1;
        
        while(i < maxlen) {
            while(i < maxlen && prices[i] >= prices[i+1]) { 
                i++;
            }
            // assume peak is index 0 then move until next val is less than index

            valley = prices[i];
            //set the valley to the low val


            //iterate through and find peak 
            while(i < maxlen && prices[i] <= prices[i+1]) { 
                i++;            
            }

            peak=prices[i];
            //add peak 
            maxprofit += peak - valley; 
        } 
        
        return maxprofit;
```


## Group Anagrams ## 

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
<br> 
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```
        HashMap<String, List<String>> capitals = new HashMap<String, List<String>>();
        List<List<String>> listS = new ArrayList<>();
        
        //Create the data structures


        for(String str: strs){
            char[] cArray = str.toCharArray();
            Arrays.sort(cArray);
            String sorted = new String(cArray);
            
            // loop through and sort the strings individually


            if(!capitals.containsKey(sorted)) {
                capitals.put(sorted, new ArrayList<>());
            }

            // create new list for inputs that don't exist
            // add to list
            capitals.get(sorted).add(str);
        }
        
        listS.addAll(capitals.values());
        return listS;

```



## Given two strings, one large string and a small string, check if small is a subsequence of the larger ##

**So ace is a subseq of abcde but no aec**
```
int index = 0;
for (int i =; i <t.length(); i++) {
    if (t.charAt(i) == s.charAt(index)){
        index++;
    }

    if (index >= s.length()) {
        return true;
    }
}
return false; 

```






# Below to be deleted #


```
    for (int i = L; i < R + 1; ++i)  
    { 

        HashSet<Integer> s = new HashSet<>(); 
    
        while (n > 0)  
        { 
            int d = n % 10; 
    
            // if the digit is present  
            // more than once in the  
            // number  
            if (s.contains(d)) 
            { 
                // return 0 if the number  
                // has repeated digit  
                n = -1;
                continue;
            } 
            s.add(d); 
            n = n / 10; 
        } 
        
        if (n > = 0 ) {
            answer = answer + 1
        }
        https://www.geeksforgeeks.org/total-numbers-no-repeated-digits-range/
    } 
```
<br>

## longest increasing subsequence ## 
```
public class Solution {

    public int lengthOfLIS(int[] nums) {
        return lengthofLIS(nums, Integer.MIN_VALUE, 0);
    }

    public int lengthofLIS(int[] nums, int prev, int curpos) {
        if (curpos == nums.length) {
            return 0;
        }
        int taken = 0;
        if (nums[curpos] > prev) {
            taken = 1 + lengthofLIS(nums, nums[curpos], curpos + 1);
        }
        int nottaken = lengthofLIS(nums, prev, curpos + 1);
        return Math.max(taken, nottaken);
    }
}
```


<br><br>
## nearly sorted algorithm ##
```
/* Function to sort an array using insertion sort*/
static void insertionSort(int A[], int size)  
{  
int i, key, j;  
for (i = 1; i < size; i++)  
{  
    key = A[i];  
    j = i-1;  
  
    /* Move elements of A[0..i-1], that are greater than key, to one  
        position ahead of their current position.  
        This loop will run at most k times */
    while (j >= 0 && A[j] > key)  
    {  
        A[j+1] = A[j];  
        j = j-1;  
    }  
    A[j+1] = key;  
}  
}  
https://www.geeksforgeeks.org/nearly-sorted-algorithm/
```