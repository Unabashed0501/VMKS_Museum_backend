import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const query = await prisma.article.update({
    where: {
      id: 3,
      writer: "oscar",
    },
    data: {
      title: "dev successful"
    }
  })
  console.log(query)
  // const result = await prisma.article.createMany({
  //   data: [
  //     {
  //       writer: "oscar",
  //       description: "test",
  //       time: "2023-08-07",
  //       title: "mutation",
  //       headline: true,
  //       content: "it's a nice day",
  //     },
  //     {
  //       writer: "dienruei",
  //       description: "hi",
  //       time: "2023-08-08",
  //       title: "query",
  //       headline: true,
  //       content: "so hot so hot so hot",
  //     },
  //   ],
  // })
  // console.log("Created users: ", result.count, result);
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })