import React from "react"
import { IndexPost, formatDate } from "@ourworldindata/utils"
import { formatAuthors, formatUrls } from "../formatting.js"

const PostCard = ({ post }: { post: IndexPost }) => {
    return (
        <article className="post-card">
            <a href={`/${post.slug}`}>
                {post.imageUrl && (
                    <div
                        className="cover-image"
                        style={{
                            backgroundImage: `url(${formatUrls(
                                post.imageUrl
                            )})`,
                        }}
                    />
                )}
                <div className="content">
                    <div>
                        <h3>{post.title}</h3>
                        {post.excerpt && (
                            <div className="excerpt">{post.excerpt}</div>
                        )}
                    </div>
                    <div className="entry-meta">
                        <span className="authors">{`By ${formatAuthors({
                            authors: post.authors,
                        })}`}</span>{" "}
                        &mdash; <time>{formatDate(post.date)}</time>
                    </div>
                </div>
            </a>
        </article>
    )
}

export default PostCard
