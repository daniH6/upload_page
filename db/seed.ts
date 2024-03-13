import { db, Contact } from 'astro:db';

export default async function () {
    await db.insert(Contact).values([
        { email: "", subject: '', message: '' },
    ])
}