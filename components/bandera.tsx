"use client"

import Image from "next/image"

interface BanderaProps {
  codigoPais: string
  nombre: string
  tamaño?: number
  className?: string
}

export function Bandera({ codigoPais, nombre, tamaño = 48, className = "" }: BanderaProps) {
  // Códigos ISO de 2 letras para los países
  return (
    <Image
      src={`https://flagcdn.com/${codigoPais.toLowerCase()}.svg`}
      alt={`Bandera de ${nombre}`}
      width={tamaño}
      height={tamaño}
      className={`object-contain ${className}`}
      unoptimized
    />
  )
}
