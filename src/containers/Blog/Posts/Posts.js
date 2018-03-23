import React, {Component} from 'react'
import axios from '../../../axios'
import {Route} from 'react-router-dom'

import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'

class Posts extends Component {

    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
       // this.setState({selectedPostId: id})
       //this.props.history.push({pathname: `/${id}`})
       this.props.history.push(`/posts/${id}`)
    }

    componentDidMount(){
        console.log(this.props) 
        axios.get('/posts')
            .then(response=>{
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Patrick'
                    }
                })
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                //this.setState({error: true})
            });
    }

    render(){
        let posts = <p>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                
                return (
                    <Post
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                )
                // return (
                //     <Link  key={post.id} 
                //         to={`/${post.id}`}>
                //         <Post
                //             title={post.title} 
                //             author={post.author}
                //             clicked={() => this.postSelectedHandler(post.id)}
                //         />
                //     </Link>
                // )
            })
        }

        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
            </div>
        )

    }
}

export default Posts;