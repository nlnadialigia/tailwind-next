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
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal Info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
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
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <Label htmlFor="firstName" title="Name" />
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  defaultValue="Nadia"
                />
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <Label
                  htmlFor="lastName"
                  title="Last name"
                  className="lg:sr-only"
                />
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
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label htmlFor="email" title="Email address" />
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </Input.Prefix>
              <Input.Control
                type="email"
                id="email"
                placeholder="Email address"
                defaultValue="nlnadialigia@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label htmlFor="photo" title="Your photo">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                {' '}
                This will be displayed on your profile.
              </span>
            </Label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label htmlFor="phone" title="Phone">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                {' '}
                Write a short introduction.
              </span>
            </Label>
            <div className="space-y-3">
              <Editor />
              <Textarea
                id="bio"
                defaultValue="I am a backend developer in Javascript, with knowledge of Python, mainly for data analysis."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label htmlFor="portfolio" title="Portfolio projects">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
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

          <div className="flex items-center justify-start gap-2 pt-5 lg:justify-end">
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
