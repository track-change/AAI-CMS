import {Grid, Stack, Button} from '@sanity/ui'
import {AddIcon} from '@sanity/icons'
import {useState, useEffect} from 'react'

const DEPARTMENTS = [{title: 'Related', value: 'related'}]

export const RelatedInput = ({documentId, ...props}) => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const fetchSuggestions = async () => {
      // Replace this with your actual tag field name
      const currentTagsQuery = `*[_id == "${documentId}"]{tags}[0]`
      const currentTags = await client.fetch(currentTagsQuery)

      if (currentTags?.tags) {
        const relatedItemsQuery = `*[_type in ["program", "artist"] && count(tags[match($currentTags)]) > 0]{..., "tagMatchCount": count(tags[match($currentTags)])} | order(tagMatchCount desc)`
        const relatedItems = await client.fetch(relatedItemsQuery, {
          currentTags: currentTags.tags.join('|'),
        })

        setSuggestions(relatedItems)
      }
    }

    fetchSuggestions()
  }, [documentId])

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Grid columns={DEPARTMENTS.length} gap={1}>
        {DEPARTMENTS.map((department) => (
          <Button
            key={department.value}
            value={department.value}
            icon={AddIcon}
            text={department.title}
            mode="ghost"
          />
        ))}
      </Grid>
    </Stack>
  )
}

// Wrap the component with withDocument before exporting
