/**
 * TODO placeholders.
 *
 * These render visibly on the live page by design. Fields in [BRACKETS] are
 * unfilled content. Nothing here should ever be auto-filled with invented copy.
 * Remove the component along with the bracket text when the real content lands.
 */

export function Todo({ children }: { children: React.ReactNode }) {
  return <span className="todo-placeholder">{children}</span>
}

export function TodoBlock({
  label = 'To write',
  children,
}: {
  label?: string
  children: React.ReactNode
}) {
  return (
    <div className="todo-block">
      <span className="todo-block-label">{label}</span>
      {children}
    </div>
  )
}

export function ImgSlot({ children }: { children: React.ReactNode }) {
  return <div className="img-slot">{children}</div>
}
