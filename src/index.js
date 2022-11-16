var form = document.querySelector('.order')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(this)
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
    })
        .then(response => response.json())
        .then((json) => {
            if (json.id === 101) {
                var info = document.querySelector('.info__container')
                info.innerText = 'Удачно Отправлено'
            }

            console.log(json)
        })
        .catch(err => console.log(err));
})