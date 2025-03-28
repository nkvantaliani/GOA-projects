import random

def gw(all_mem, leaders):

    random.shuffle(all_mem)
    random.shuffle(leaders) 

    pairs = list(zip(all_mem, leaders))

    return pairs
all_mem = [ 'data fofxadze', 'mate chikaidze', 'kote ximshiashvili', 'giga kochalidze', 'davit adeishvili', 'zuka qoridze', 'nata kvantaliani', 'gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili', 'giorgi shavadze', 'nika macharashvili', 'gobron witlauri', 'ilia dzindzibadze' , 'nikoloz chitadze' ] 

leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]

result = gw(all_mem, leaders)
for pair in result:
    print(pair)