import { prisma } from '../../prisma/client'
import { pubsub } from "../../pubsub/pubsub"
import {
    ArticleInput
} from "../types/types";

const Mutation = {
    AddArticle: async (_parents: any, args: { articleInput: ArticleInput }, context: any) => {
        const { writer, description, imageURL, time, title, headline, content, userpic } = args.articleInput;
        const date = new Date().toUTCString();
        const newArticle = await prisma.article.create({
            data: {
                writer: writer,
                description: description,
                imageURL: imageURL,
                time: time,
                title: title,
                headline: headline,
                content: content,
                userpic: userpic,
            }
        });
        // console.log(newArticle)
        pubsub.publish('ARTICLE_CREATED', { articleCreated: newArticle });
        return newArticle;
    },
}

export { Mutation }