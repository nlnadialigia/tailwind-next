import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import * as Input from '../Input'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 flex-shrink-0 text-zinc-500" />
        </Input.Prefix>
        <Input.Control />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem href="/" title="Home" icon={Home} />
        <NavItem href="/" title="Dashboard" icon={BarChart} />
        <NavItem href="/" title="Projects" icon={SquareStack} />
        <NavItem href="/" title="Tasks" icon={CheckSquare} />
        <NavItem href="/" title="Reporting" icon={Flag} />
        <NavItem href="/" title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem href="/" title="Support" icon={LifeBuoy} />
          <NavItem href="/" title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
