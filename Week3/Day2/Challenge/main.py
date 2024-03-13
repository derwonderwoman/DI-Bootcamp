class Pagination():
    def __init__(self,items, pageSize = 10):
        self.pageSize = pageSize
        self.items = items
        self.current_page = 1
        self.total_pages = len(self.items)//self.pageSize + 1
        
    def getVisibleItems(self):
        start_idx = (self.current_page - 1) * self.pageSize
        stop_idx = start_idx + self.pageSize
        return self.items[start_idx:stop_idx]
    
    def prevPage(self) -> object:
        self.current_page -= 1
        return self

    def nextPage(self) -> object:
        self.current_page += 1
        return self
    
    def firstPage(self) -> object:
        self.current_page = 1
        return self
    
    def lastPage(self) -> object:
        self.current_page = self.total_pages
        return self.current_page
    
    def goToPage(self,pageNum) -> object:
        self.current_page = pageNum
        return self.current_page

                
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())
p.lastPage()
print(p.getVisibleItems())
p.goToPage(4)
print(p.getVisibleItems())




