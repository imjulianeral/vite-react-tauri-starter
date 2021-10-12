import { Nav } from './Nav'
import type { Children } from '@/types/Components'

export function Layout({ children }: Children) {
  return (
    <div className="flex column">
      <Nav />
      {children}
    </div>
  )
}
