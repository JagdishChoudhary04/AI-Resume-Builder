import {PrismaClient } from "@prisma/client"
const PrismaClientSingelton = () => {
    return new PrismaClient();
}

declare const globalThis : {
    prismaGlobal: ReturnType<typeof PrismaClientSingelton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? PrismaClientSingelton();

export default prisma;

if(process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;