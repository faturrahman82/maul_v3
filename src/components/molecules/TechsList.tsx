import { techItems } from '../../lib/data/index'

export default function TechsList() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {techItems.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="rounded-lg flex items-center gap-1 py-1.5 px-2.5">
            <Icon className="text-xl" />
            <span className="text-sm">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}
