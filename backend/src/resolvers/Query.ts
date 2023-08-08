import { prisma } from '../../prisma/client'

const Query = {
    AllArticles: async (_parents: any, args: any, context: any) => {
        const articles = await prisma.article.findMany();
        // console.log(articles);
        return articles;
    },
}

export { Query }