import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import _ from 'lodash';

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        // --Native implementation without lodash--
        // return Object.keys(this.props.posts)
        //     .map(id => {
        //         return (
        //             <li className="list-group-item" key={id}>
        //                 {this.props.posts[id].title}
        //             </li> 
        //         );
        //     });

       return _.map(this.props.posts, post => {
           return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
           );
       });
    }

    render() {
        return (
            <div>
                <h3>
                    Posts
                </h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);