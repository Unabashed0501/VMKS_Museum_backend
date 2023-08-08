import { pubsub } from "../../pubsub/pubsub"

const Subscription = {
    ArticleCreated: {
        subscribe: () => pubsub.asyncIterator(['ARTICLE_CREATED']) 
    },
    ArticleDeleted: {
        subscribe: () => pubsub.asyncIterator(['ARTICLE_DELETED'])
    },
    ArticleUpdated: {
        subscribe: () => pubsub.asyncIterator(['ARTICLE_UPDATED'])
    }
}

export { Subscription }