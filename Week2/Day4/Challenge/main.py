string = "7iiTsxh%?i #sM $a #t%^r!"
ROWS = 3
COLUMNS = 8
matrix = []
new_matrix = []

for i in range(ROWS):
    row = []
    for j in range(COLUMNS):
        row.append(string[i + j * ROWS])
    new_matrix.append(row)


print(new_matrix)

# matrix = [['7','T','h','i','s','$','#','^'],['i','s','%',' ','M','a','t','r'],['i','x','?','#',' ',' ','%','!']]
text = []
flag = 0

for i in new_matrix:
    for s in i:
        symb = ord(s)
        if symb in range(65,91) or symb in range(97, 123):
            flag = 0
            text.append(s)
        else:
            flag += 1
            if flag == 1:
                text.append(" ")


message = "".join(text).strip()

print(message)
    