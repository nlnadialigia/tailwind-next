'use client'

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
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {settingsTabs.map(({ value, title }) => (
          <TabItem
            key={value}
            value={value}
            title={title}
            isSelected={currentTab === value}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
