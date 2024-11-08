import { Select } from '../Select'
import { SelectItem } from '../Select/SelectItem'
import { EditorIcons } from './Icons'

export default function Editor() {
  return (
    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
      <Select defaultValue="normal" placeholder="">
        <SelectItem value="normal" defaultChecked text="Normal Text" />
        <SelectItem value="md" text="Markdown" />
        <SelectItem value="code" text="Code" />
      </Select>

      <EditorIcons />
    </div>
  )
}
