// ./schema/hosts/HostsInput.tsx

import {Grid, Stack, Button} from '@sanity/ui'
import {randomKey} from '@sanity/util/content'
import {AddIcon} from '@sanity/icons'
import {useCallback} from 'react'
import {ArrayOfObjectsInputProps, Reference, insert, set, setIfMissing, useClient} from 'sanity'

const DEPARTMENTS = [
  {title: 'Program', value: 'program'},
  {title: 'Artist', value: 'artist'},
]

export function RelatedInput(props: ArrayOfObjectsInputProps) {
  const {onChange, members} = props
  console.log(members)
  const client = useClient({apiVersion: `2023-04-01`})
  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      const department = event.currentTarget.value
      const query = `*[_type == "${department}" && 
        !(_id in path("drafts.**"))]._id`
      const departmentItems = (await client.fetch<Reference[]>(query, {department})) || []
      const itemRef: {_key: string; _type: string; _ref: Reference}[] = departmentItems.map(
        (itemID) => ({
          _key: randomKey(12),
          _type: 'relatedProgram',
          _ref: itemID,
        })
      )
      // how do i filter to remove the current program from the list?

      const itemFirstThree = itemRef.slice(0, 2)

      // const itemPatches = itemFirstThree.map((item) => insert([item], 'after', [-1]))
      // onChange([setIfMissing([]), ...itemPatches])
      onChange(set(itemFirstThree))
    },
    [onChange, client]
  )

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
            onClick={handleClick}
          />
        ))}
      </Grid>
    </Stack>
  )
}
