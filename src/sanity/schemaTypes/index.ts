import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import post from './post'
import course from './course'
import dailyContent from './ayathadees'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,course,post,dailyContent],
}
