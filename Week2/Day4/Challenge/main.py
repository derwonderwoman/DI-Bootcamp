matrix = [['7','T','h','i','s','$','#','^'],['i','s','%',' ','M','a','t','r'],['i','x','?','#',' ',' ','%','!']]
text = []
flag = 0

for i in matrix:
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
    