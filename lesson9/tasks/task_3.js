/*

Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.
    
    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было прездагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2
    
    */
    // localStorage.clear();
    async function getData(Url){
        let data  = await fetch(Url);
        return data;
    }
    
    function addLikestoLS(e){
        let likeBtn = postsContainer.querySelectorAll('.addLike');
                likeBtn.forEach(button => {
                    button.addEventListener('click', (e) => {
                    let dataId = e.target.dataset.id,
                    likes = e.target.closest('div').querySelector('.post_likes');
                    posts[dataId].addLike();
                    likes.innerText = `${posts[dataId].likes}`;
                    let stringPosts = posts.map(post => {
                        return JSON.stringify(post);
                });
                localStorage.setItem('posts', stringPosts);
            });
        })
    }

    function postCreate(data){
        posts = data.split('},');
        posts = posts.map((post, index) => {
            if(index!=posts.length-1){
                post+='}';
            } 
            post = JSON.parse(post);
            let {_id, isActive, title, about, likes, created_at} = post,
            newPost = new Post(index, _id, isActive, title, about, likes, created_at);
            newPost.render();
            return newPost;
        });
    }

   let posts= [], i=0,
   postsContainer = document.querySelector('.posts');
   
   class Post {
        constructor(id, _id, isActive, title, about, likes, created_at){
            this.id = id;
            this._id = _id;
            this.isActive = isActive;
            this.title = title;
            this.about = about;
            this.likes = likes == undefined ?0 :likes;
            this.created_at = created_at;
            this.addLike = this.addLike.bind(this);
        }
    
        render(){    
            postsContainer.innerHTML += `
                                    <div class="newPost"> 
                                        <div class="post_id">${this._id}</div>
                                        <div class="post_title"><b>${this.title}</b></div>
                                        <div class="post_about">${this.about}</div>
                                        <div class="isActive">${this.isActive}</div>
                                        <div class="post_date">${this.created_at}</div>
                                        <div class="post_likes">${this.likes}</div>
                                        <button class="addLike" data-id=${this.id}>Add Like</button>
                                    </div>
                                    <p></p>
                                `;
                            }
                            
                            addLike(){
            this.likes++;
        }
    }


    if(!localStorage.getItem('posts')){
        getData('http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2')
        .then(
            (res) => {
            return res.json();
            }
        )
        .then(
            (res) => {
                posts = res.map( (item, index) => {
                    return JSON.stringify(item);
                })
                localStorage.setItem('posts', posts);
                return localStorage.getItem('posts');
            }
        )
        .then(
            (res) =>{
                postCreate(res);
                addLikestoLS();
            }   
        )     
    } else {
        postCreate(localStorage.getItem('posts'));
        addLikestoLS();
    }




