import { useRouter } from 'next/router';
import {Layout } from '../components';
import { Content, BlogItem, getPost} from '../content/home';
const content: Content = require("../content/home.md");

const Page = () => {
  const router = useRouter();
  const item = getPost(router.query.name);
console.warn('desc', item);
  return (
    <div>
        <style>{`#__next { width: 100% }`}</style>
        <Layout>
            <h1>{router.query.name}</h1>
            <p>{item.description}</p>
            <div dangerouslySetInnerHTML={{ __html: item.body }}/>
        </Layout>
    </div>
  );
};

export default Page;