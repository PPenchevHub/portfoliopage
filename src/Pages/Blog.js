import React from 'react'
import allBlogArticles from '../Components/allBlogArticles';
import Title from '../Components/Title';

function Blog() {
    return (
        <div>
        <div className="blog-Title">
             <Title title={'Blog'} span={'Blog'}/>
        </div>
        <div className="blogPage">{
            allBlogArticles.map((article)=>{
                return <div className="article" key={article.id}>
                    <div className="article-content">
                        <img src={article.image} alt=""/>
                        <a href={article.link} className="article-link">
                            {article.title}
                        </a>
                        <div className="date-con"></div>
                    </div>
                </div>
            })
        }
        </div>
        </div>
    )
}

export default Blog
