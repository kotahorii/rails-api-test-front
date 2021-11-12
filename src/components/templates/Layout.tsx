import { VFC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-600 text-sm font-mono">
      <main className="flex flex-1 flex-col justify-center items-center w-screen space-y-3">
        {children}
      </main>
    </div>
  )
}
