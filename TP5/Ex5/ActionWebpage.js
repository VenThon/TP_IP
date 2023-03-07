var selectedRow = null;
            let header = document.getElementsByClassName("header-add")[0];
            let books = [{}];
            const getB = localStorage.getItem('books');
            const dataB = JSON.parse(getB);
            let results = [];
            let output = '';

            var loading = (value) => {
                if (value == 'true') {
                    setTimeout(() => {

                    }, 1000)
                    document.getElementsByClassName('loading')[0].style.display = 'flex'
                    document.getElementsByClassName('container')[0].style.display = 'none'
                } else {
                    document.getElementsByClassName('container')[0].style.display = 'flex';
                    document.getElementsByClassName('loading')[0].style.display = 'none';
                }
            }
            loading("true");

            fetch('https://jsonplaceholder.typicode.com/photos').then(async(res) => {
                results = await res.json();
                var title = '';
                for (result in results) {
                    output +=
                        `<div class="items">` +
                        `<img src="${results[result].url}" alt="#">` +
                        `<div class="name">Title : ${results[result].title.toString().substring(0, 10)}...</div>` +
                        `<div class="price">Id : ${results[result].id}</div>` +
                        `<div class="category">Album ID : ${results[result].albumId}</div>` +
                        `<button class="btn">` +
                        `<a href="./OnclickWebpage.html?bookid=${parseInt(result)+1}">see more</a>` +
                        `</button>` +
                        `</div>`;
                }
                document.getElementById("add_items").innerHTML += output;
                setTimeout(() => {
                    loading("false");
                }, 100)

            });
