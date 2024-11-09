'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

const settingsTabs = [
  { value: 'my-details', title: 'My details' },
  { value: 'profile', title: 'Profile' },
  { value: 'password', title: 'Password' },
  { value: 'team', title: 'Team' },
  { value: 'plan', title: 'Plan' },
  { value: 'billing', title: 'Billing' },
  { value: 'email', title: 'Email' },
  { value: 'notifications', title: 'Notifications' },
  { value: 'integrations', title: 'Integrations' },
  { value: 'api', title: 'API' },
]

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {settingsTabs.map(({ value, title }) => (
              <TabItem
                key={value}
                value={value}
                title={title}
                isSelected={currentTab === value}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
