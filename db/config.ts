import { defineTable, defineDb, column } from 'astro:db';

const Contact = defineTable({
    columns: {
        email: column.text(),
        subject: column.text(),
        message: column.text(),
    },
});

export default defineDb({
    tables: { Contact },
});