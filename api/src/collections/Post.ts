import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [
        {
            name: 'title',
            type: 'text'
        },
        {
            name: 'date',
            type: 'date',
            defaultValue: () => Date.now()
        },
        {
            name: 'content',
            type: 'richText',
        }
    ]
}

export default Posts
