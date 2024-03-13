import { defineTable, defineDb, column } from 'astro:db';

const Contact = defineTable({
    columns: {
        id: column.number({primaryKey: true, autoIncrement: true}),
        email: column.text(),
        subject: column.text(),
        message: column.text(),
    },
});

export default defineDb({
    tables: {
        Contact,
    },
});