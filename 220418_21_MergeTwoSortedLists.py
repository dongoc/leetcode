# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        
        pointer = ListNode()
        result = pointer
        
        while (list1 and list2):
            if list1.val < list2.val:
                pointer.next = list1 
                list1 = list1.next
            else:
                pointer.next = list2
                list2 = list2.next
                
            pointer = pointer.next
                
        # 나머지 노드 처리 (한 쪽이 끝났으면 나머지 한 쪽을 모두 갖다 붙여도 )        
        pointer.next = list1 if list1 else list2
        
        return result.next
        
        
        
        

# ----- First Try -----
 
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:       
#         cur = ListNode() 
        
#         if not list1: return list2
#         if not list2: return list1
        
#         if list1.val < list2.val:
#             cur = list1
#             list1 = list1.next
#         else:
#             cur = list2 #[134]
#             list2 = list2.next #[34]
            
#         result = cur
        
#         while (list1 or list2):
#             if not list1:
#                 cur.next = list2
#                 list2 = list2.next
#             elif not list2:
#                 cur.next = list1
#                 list1 = list1.next
#             elif list1.val < list2.val: #[224] [34]
#                 cur.next = list1 #[1 / 224]
#                 list1 = list1.next # [24]
#             else:
#                 cur.next = list2
#                 list2 = list2.next
            
#             cur = cur.next
        
#         return result
