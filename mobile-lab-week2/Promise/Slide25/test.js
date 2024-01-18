fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response=>response.json())
            .then(
                    (data)=>{
                        var htmls = data.map(
                            function(posts){
                                    return `<li> 
                                        <h2>${posts.id}</h2>
                                        <h2>${posts.title}</h2>
                                        </li>`
                        }
                        );
                        var html = htmls.join();
                        var text = document.getElementById('info').innerHTML
                            = html;            
                    }
                )
            .catch(()=>console.log('Có lỗi!'))
