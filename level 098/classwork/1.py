def func(ob):
    for i in ob:
        for x in i:
            print(x + ": " + str(i[x]))


per = [
    {'name': 'lasha', 'age': 30},
    {'name': 'merabi', 'age': 15}
]

func(per)
function func(ob) {
    for (let i = 0; i < ob.length; i++) {
        for (let x in ob[i]) {
            console.log(x + ": " + ob[i][x]);
        }
    }
}

let per = [
    {name: 'lasha', age: 30},
    {name: 'merabi', age: 15}
];

func(per);