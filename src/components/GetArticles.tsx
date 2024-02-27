import { useEffect, useState } from 'react';

interface Article {
    id: number;
    title: string;
    content: any;
}

async function getArticles(url: string, token: string): Promise<Article[]> {
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}

const GetArticles = () => {
    const [articles, setArticles] = useState <Article[] | null>(null);

    useEffect(() => {
        getArticles("https://yargynkin.atlassian.net/", "ATATT3xFfGF0iAGCCqE5ikIv6lBb3JDW_CUCWTEbhoMTP4TPJlUVYZ2V-76DxHLECZJ3sql2woZTXxD9DC8XN8A1wg9slBmRk9Ink_7aBAzx_ySbuZeWWDDVRGHzr_kFcjf-hXebX_3CUr2zVk2rnnSlEea21L9aaForcHq34M2HdBpoPPtanyw=87E6C781").then((data: any) => {
            if (data) {
                setArticles(data.articls)
            }
        })
    }, [])

    if (!articles) {
        return null
    }

    return (
        <div>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <div>{article.title}</div>
                        <div>{article.content}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default GetArticles;