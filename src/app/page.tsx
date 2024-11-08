import * as Input from '@/src/components/Input'
import { Mail } from 'lucide-react'
import { getCountries } from '../api/getCountries'
import { Button } from '../components/Button'
import Editor from '../components/Form/Editor'
import * as FileInput from '../components/Form/FileInput'
import { Label } from '../components/Form/Label'
import { Select } from '../components/Form/Select'
import { SelectItem } from '../components/Form/Select/SelectItem'
import { Textarea } from '../components/Form/Textarea'
import { SettingsTabs } from '../components/SettingsTabs'
import { timeZones } from '../utils/timezones'

export default async function Home() {
  const countries = await getCountries()

  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <Label htmlFor="firstName" title="Name" />
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  defaultValue="Nadia"
                />
              </Input.Root>
              <Input.Root>
                <Input.Control
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  defaultValue="Ligia"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="email" title="Email address" />
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                type="email"
                id="email"
                placeholder="Email address"
                defaultValue="nlnadialigia@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="photo" title="Your photo">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {' '}
                This will be displayed on your profile.
              </span>
            </Label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="role" title="Role" />
            <Input.Root>
              <Input.Control
                type="text"
                id="role"
                placeholder="role"
                defaultValue="FullStack Developer"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="country" title="Country" />
            <Select placeholder="Select a country">
              {countries.map((country) => (
                <SelectItem
                  key={country.code}
                  value={country.code}
                  text={country.name}
                />
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="timezone" title="Timezone" />
            <Select placeholder="Select a timezone">
              {timeZones.map((zone) => (
                <SelectItem
                  key={zone.zoneName}
                  value={zone.zoneName}
                  text={zone.zoneName + ' ' + zone.offset}
                />
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="phone" title="Phone">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {' '}
                Write a short introduction.
              </span>
            </Label>
            <div className="space-y-3">
              <Editor />
              <Textarea
                id="bio"
                defaultValue="I am a backend developer in Javascript, with knowledge of Python, mainly for data analysis. I consider myself a generalist, as I like to know everything, but I have dedicated my efforts to mainly improving my knowledge in backend, cloud architecture and cybersecurity."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="portfolio" title="Portfolio projects">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {' '}
                Share a few snippets of your work.
              </span>
            </Label>
            <div>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
