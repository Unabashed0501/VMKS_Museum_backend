import { GraphQLScalarType, Kind } from 'graphql';

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime custom scalar type',
  async serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a Date object');
  },
  async parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a number');
  },
  async parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  ### Define Data Structure ###
  
  scalar DateTime

  input ArticleInput {
    writer: String,
    description: String,
    imageURL: String,
    time: String,
    title: String,
    headline: Boolean,
    content: String,
    userpic: String,
  }

  type Article {
    writer: String!,
    description: String!,
    imageURL: String,
    time: String,
    title: String!,
    headline: Boolean!,
    content: String!,
    userpic: String,
  }

  ### Define Resolvers ###

  type Query {
    AllArticles: Article
  }

  type Mutation {
    AddArticle(articleInput: ArticleInput!): Article
    # DeleteAnnouncement(id: Int!): Announcement
    # EditAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
    # AddTool(toolInput: ToolInput!): Tool
    # DeleteTool(id: Int!): Tool
    # EditTool(id: Int!, toolInput: ToolInput!): Tool
    # ToolUsageUpdate(id: Int!, toolUsageUpdateInput: ToolUsageUpdateInput!): Tool # update usage & remain
    # AddDisposableMaterial(disposableMaterialInput: DisposableMaterialInput!): DisposableMaterial
    # AddMachine(machineInput: MachineInput!): Machine
    # DeleteMachine(id: Int!): Machine
    # EditMachine(id: Int!, machineInput: MachineInput!): Machine
    # AddMaterial(materialInput: MaterialInput!): Material
    # DeleteMaterial(id: Int!): Material
    # EditMaterial(id: Int!, materialInput: MaterialInput!): Material
    # MaterialUsageUpdate(id: Int!, materialUsageUpdateInput: MaterialUsageUpdateInput!): Material
    # AddUserMaterial(userMaterialInput: UserMaterialInput!): UserMaterial
    # DeleteUserMaterial(id: Int!): UserMaterial
    # AddThreeDP(threeDPInput: ThreeDPInput!): ThreeDP
    # DeleteThreeDP(id: Int!): ThreeDP
    # AddUser(userInput: UserInput!) : User
    # DeleteUser(id: Int!): User
  }

  type Subscription {
    ArticleCreated: Article
    ArticleDeleted: Article
    ArticleUpdated: Article
  }
`;

export { typeDefs, DateTime }
