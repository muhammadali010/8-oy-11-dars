import { useRouter } from 'next/router';
import posts from '../../data/posts.json';

export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    const post = posts.find(p => p.id === id);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.content}</p>
        </div>
    );
}
