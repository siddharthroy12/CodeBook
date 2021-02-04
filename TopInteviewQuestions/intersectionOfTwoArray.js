// Intersection of two array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersect = {}
    if (nums1.length > nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
            intersect[nums1[i]] = false
        }

        for (let i = 0; i < nums2.length; i++) {
            if (intersect[nums2[i]] === false) {
                intersect[nums2[i]] = true
            }
        }
    } else {
        for (let i = 0; i < nums2.length; i++) {
            intersect[nums2[i]] = false
        }

        for (let i = 0; i < nums1.length; i++) {
            if (intersect[nums1[i]] === false) {
                intersect[nums1[i]] = true
            }
        }
    }
      
    let res = []
      
    for (let i in intersect) {
      if (intersect[i] === true) {
          res.push(i)
      }
    }
    return res
  };