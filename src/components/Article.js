import Link from 'next/link'

export default props => (
    <article>
        <Link href={props.link}>
            <a className="article__thumb">
                <img src={props.thumb} alt="article-thumb" />
            </a>
        </Link>
        {props.children}
        <Link href={props.link}>
            <a className="underline underline--link">read more</a>
        </Link>
    </article>
)
