"use client"
import ChevronDown from "@modules/common/icons/chevron-down"
import { useState } from "react"

const DropdownMenu = ({ name, items }: { name: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex justify-center">
      <button
        className="flex items-center px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors "
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{name}</span>
        <ChevronDown
          size={16}
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-48 bg-white border border-gray-400 rounded-md shadow-md py-1 mt-1"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((el, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault()
                console.log("clicked on ", el)
              }}
            >
              {el}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
