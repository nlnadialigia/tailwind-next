import { Select } from '../Select'
import { SelectItem } from '../Select/SelectItem'
import { EditorIcons } from './Icons'

export default function Editor() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Select defaultValue="normal" placeholder="">
        <SelectItem value="normal" defaultChecked text="Normal Text" />
        <SelectItem value="md" text="Markdown" />
        <SelectItem value="code" text="Code" />
      </Select>

      <EditorIcons />
    </div>
  )
}
