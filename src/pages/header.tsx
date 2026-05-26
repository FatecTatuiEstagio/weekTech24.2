"use client"

import LogoCps from "../imgs/logo-branco-cps.png"
import LogoFatec from "../imgs/logoFatec.png"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#b20000] border-b border-red-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">

        {/* LOGOS */}
        <div className="flex items-center gap-6">
          <img src={LogoFatec} alt="Fatec" className="h-25 w-auto object-contain" />
          <img src={LogoCps} alt="CPS" className="h-25 w-auto object-contain" />
        </div>

      </div>
    </header>
  )
}