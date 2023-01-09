import { prisma } from "../src/server/db";

async function main() {
    const fisch = await prisma.indexmedia1.upsert({
        where: { },
        update: {},
        create: {
          mediaurl: 'fisch',

        },
      })}

main()
  .then(async () => {
    
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });