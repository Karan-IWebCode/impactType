import BlogCardCom from '../BlogCardCom/BlogCardCom';

import './BlogPost.css'
const BlogPost = () => {
	return(
		
			<div className="section">
				<div className="container1">
					<div className="blogHead">

						<div className="blogPair">
							<h2 >Blog Posts</h2>
							<p >Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
						</div>
					</div>
          <BlogCardCom />
        </div>  
      </div>
		
	);
}
export default BlogPost;